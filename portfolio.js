/* Portable work files and PDF generation; no student-data network requests. */
(function(root){
  const TYPE='britain-learning-portfolio', VERSION=1, MAX_TEXT=100000;
  function blank(course){return {markings:{},readingNotes:{},profile:{name:'',group:''},active:'overview',step:0,chapters:Object.fromEntries(course.map(c=>[c.id,{answers:{},notes:'',checks:[false,false,false],feedback:'',quiz:{},plenary:{variant:0,claims:'',evidence:'',dissent:'',takeaway:''},ai:{}}]))};}
  function text(value,label,max=MAX_TEXT){if(typeof value!=='string'||value.length>max)throw new Error('Ungültiges Textfeld: '+label);return value;}
  function validate(file,course){
    if(!file||file.type!==TYPE||file.version!==VERSION||!file.work)throw new Error('Diese Datei ist kein unterstützter Britain-Arbeitsstand. Bitte eine .britain.json-Datei auswählen; PDFs lassen sich nicht als Arbeitsstand laden.');
    const raw=file.work,out=blank(course);
    if(!raw.profile||!raw.chapters||typeof raw.chapters!=='object'||Array.isArray(raw.chapters))throw new Error('Die Projektdatei ist unvollständig.');
    out.profile={name:text(raw.profile.name,'Name',200),group:text(raw.profile.group,'Klasse',100)};
    if(raw.active!=='overview'&&!course.some(c=>c.id===raw.active))throw new Error('Unbekanntes Kapitel.');
    if(!Number.isInteger(raw.step)||raw.step<0||raw.step>3)throw new Error('Ungültiger Lernschritt.');
    out.active=raw.active;out.step=raw.step;
    for(const id of Object.keys(raw.chapters))if(!course.some(c=>c.id===id))throw new Error('Unbekanntes Kapitel in der Datei.');
    for(const c of course){
      const src=raw.chapters[c.id];if(!src||!src.answers||typeof src.answers!=='object'||Array.isArray(src.answers))throw new Error('Kapitel fehlt oder ist beschädigt: '+c.title);
      const dst=out.chapters[c.id],keys=c.stages.flatMap(s=>s.fields.map(f=>f[0]));
      for(const key of Object.keys(src.answers)){if(!keys.includes(key))throw new Error('Unbekanntes Antwortfeld in '+c.title);dst.answers[key]=text(src.answers[key],key);}
      dst.notes=text(src.notes,'Notizen');dst.feedback=text(src.feedback,'Feedback');
      if(!Array.isArray(src.checks)||src.checks.length!==3||src.checks.some(v=>typeof v!=='boolean'))throw new Error('Ungültige Checkliste.');
      dst.checks=[...src.checks];
      if(src.plenary!==undefined){
        if(!src.plenary||!Number.isInteger(src.plenary.variant)||src.plenary.variant<0||src.plenary.variant>2)throw new Error('Ungültige Plenumsvariante.');
        dst.plenary.variant=src.plenary.variant;for(const k of ['claims','evidence','dissent','takeaway'])dst.plenary[k]=text(src.plenary[k],k);
      }
      if(src.quiz!==undefined){
        if(!src.quiz||typeof src.quiz!=='object'||Array.isArray(src.quiz))throw new Error('Ungültige Quizdaten.');
        for(const [id,q] of Object.entries(src.quiz)){
          const spec=(READING_QUIZZES[c.id]||[]).find(x=>x.id===id);
          if(!spec||!q||typeof q.checked!=='boolean'||!Array.isArray(q.answers)||q.answers.length!==spec.items.length||(q.checked&&q.answers.some(v=>v===null))||q.answers.some((v,i)=>v!==null&&(!Number.isInteger(v)||v<0||v>=spec.items[i].options.length)))throw new Error('Ungültige Quizantwort.');
          dst.quiz[id]={answers:[...q.answers],checked:q.checked};
        }
      }
      if(src.ai!==undefined){
        if(!src.ai||typeof src.ai!=='object'||Array.isArray(src.ai))throw new Error('Ungültige KI-Rückmeldung.');
        for(const [key,v] of Object.entries(src.ai)){if(!keys.includes(key)||!v)throw new Error('Unbekannte KI-Aufgabe.');dst.ai[key]={draft:text(v.draft,'KI-Entwurf',16000),feedback:text(v.feedback,'KI-Rückmeldung',20000),date:text(v.date,'Datum',100)};}
      }
    }
    const limits={orwell:[8,19],kureishi:[20,33],smith:[34,57],transfer:[58,65]};
    function validPage(key){const parts=key.split(':');return parts.length===2&&limits[parts[0]]&&Number.isInteger(+parts[1])&&+parts[1]>=limits[parts[0]][0]&&+parts[1]<=limits[parts[0]][1];}
    if(raw.markings!==undefined){if(!raw.markings||typeof raw.markings!=='object'||Array.isArray(raw.markings))throw new Error('Ungültige Markierungen.');for(const [key,list] of Object.entries(raw.markings)){if(!validPage(key)||!Array.isArray(list)||list.length>200)throw new Error('Ungültige markierte Buchseite.');out.markings[key]=list.map(m=>{if(!m||!['yellow','blue','pink'].includes(m.color)||['x','y','w','h'].some(k=>typeof m[k]!=='number'||!Number.isFinite(m[k])||m[k]<0||m[k]>1)||m.x+m.w>1.001||m.y+m.h>1.001)throw new Error('Beschädigte Markierung.');return {x:m.x,y:m.y,w:m.w,h:m.h,color:m.color};});}}
    if(raw.readingNotes!==undefined){if(!raw.readingNotes||typeof raw.readingNotes!=='object'||Array.isArray(raw.readingNotes))throw new Error('Ungültige Seitennotizen.');for(const [key,value] of Object.entries(raw.readingNotes)){if(!validPage(key))throw new Error('Unbekannte Buchseite.');out.readingNotes[key]=text(value,'Seitennotiz',10000);}}
    return out;
  }
  function wrap(work){return {type:TYPE,version:VERSION,savedAt:new Date().toISOString(),work};}
  function exportSections(work,course,scope){
    const selected=scope==='all'?course:course.filter(c=>c.id===scope);
    if(scope.startsWith('plenary:')){const c=course.find(x=>x.id===scope.slice(8));if(!c)throw new Error('Unbekanntes Kapitel.');const p=work.chapters[c.id].plenary;return [{title:c.title,meta:'Shared class record',blocks:[{label:'Agreed conclusions',text:p.claims},{label:'Evidence and references',text:p.evidence},{label:'Alternative readings and open questions',text:p.dissent},{label:'Our takeaway and next step',text:p.takeaway}]}];}
    return selected.map(c=>({title:c.title,meta:`Lessons ${c.lessons} · ${c.product}`,blocks:[...c.stages.flatMap(s=>s.fields.map(f=>({label:f[1],text:work.chapters[c.id].answers[f[0]]||'—'}))),...Object.entries(work.chapters[c.id].quiz||{}).map(([id,q])=>{const spec=(READING_QUIZZES[c.id]||[]).find(x=>x.id===id);return {label:spec.title,text:q.checked?`${q.answers.filter((a,i)=>a===spec.items[i].answer).length} / ${spec.items.length} correct (practice)`:'Not checked yet'};}),...['claims','evidence','dissent','takeaway'].map((k,i)=>({label:['Shared conclusions','Shared evidence','Dissent / open questions','Class takeaway'][i],text:work.chapters[c.id].plenary?.[k]||'—'})),...Object.entries(work.chapters[c.id].ai||{}).map(([k,v])=>({label:'AI practice feedback · '+k,text:(v.draft!==work.chapters[c.id].answers[k]?'Earlier draft — text has since changed.\n':'')+v.feedback})),{label:'Pocket notes',text:work.chapters[c.id].notes||'—'},{label:'Self-check',text:c.stages[3].checks.map((t,i)=>`${work.chapters[c.id].checks[i]?'[x]':'[ ]'} ${t}`).join('\n')},{label:'Feedback',text:work.chapters[c.id].feedback||'—'}]}));
  }
  function makePdf(jsPDF,work,course,scope,fontBase64){
    const doc=new jsPDF({unit:'mm',format:'a4',compress:true});
    doc.addFileToVFS('NotoSans.ttf',fontBase64);doc.addFont('NotoSans.ttf','NotoSans','normal');doc.setFont('NotoSans');doc.setProperties({title:'Great Britain — Learning portfolio',subject:'English Q3 · Year 13 LK',author:scope.startsWith('plenary:')?'Class record':work.profile.name||'Learner'});
    const width=166,bottom=272;let y=25;
    function newPage(){doc.addPage();y=24;}
    function lineBlock(content,size=11,color=[40,59,68],gap=5.8){
      doc.setFontSize(size);doc.setTextColor(...color);
      const clean=String(content).replace(/→/g,' -> ').replace(/←/g,' <- ').replace(/↔/g,' <-> ').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g,'');
      const lines=doc.splitTextToSize(clean||'—',width);
      for(const line of lines){if(y+gap>bottom)newPage();doc.text(line,22,y);y+=gap;}
      y+=3;
    }
    lineBlock('GREAT BRITAIN',12,[23,98,143],7);lineBlock('Past, present & belonging',24,[23,60,85],11);
    lineBlock('Learning portfolio · English Q3 · Year 13 LK',11,[85,104,116],6);
    if(!scope.startsWith('plenary:'))lineBlock(`Name: ${work.profile.name||'—'}    Class: ${work.profile.group||'—'}`,11);
    else lineBlock('Shared class record · no personal answers',11);
    lineBlock(`Exported: ${new Date().toLocaleString('de-DE')}`,9,[85,104,116],5);
    lineBlock('This PDF is a reading copy. Keep your .britain.json file to continue editing.',9,[85,104,116],5);
    const sections=exportSections(work,course,scope);
    sections.forEach((section,index)=>{if(index>0)newPage();else y+=5;
      lineBlock(section.title,19,[23,60,85],9);lineBlock(section.meta,9,[85,104,116],5);
      for(const b of section.blocks){if(y+22>bottom)newPage();lineBlock(b.label,12,[23,98,143],6.5);lineBlock(b.text);y+=3;}
    });
    if(scope==='all'&&Object.keys(work.readingNotes||{}).length){newPage();lineBlock('Reading notes',19,[23,60,85],9);for(const [key,note] of Object.entries(work.readingNotes)){if(!note.trim())continue;lineBlock(key.replace(':',' · Book page '),12,[23,98,143],7);lineBlock(note);}lineBlock('Page highlights are saved in the .britain.json file. Export marked pages separately in the reader.',9,[85,104,116],5);}
    const total=doc.getNumberOfPages();for(let n=1;n<=total;n++){doc.setPage(n);doc.setDrawColor(209,219,224);doc.line(22,281,188,281);doc.setFontSize(9);doc.setTextColor(99,119,130);doc.text('GREAT BRITAIN · Past, present & belonging',22,288);doc.text(`${n} / ${total}`,188,288,{align:'right'});}
    return doc;
  }
  root.Portfolio={blank,validate,wrap,exportSections,makePdf,TYPE,VERSION};
})(typeof window==='undefined'?globalThis:window);
