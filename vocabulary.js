/* Margin annotations from the supplied course-book, printed pp. 20–29.
Definitions paraphrased for practice; contextual senses are explicitly labelled. */
const MSTF_WORDS = [
  {
    "page": 20,
    "line": 1,
    "word": "surreptitious",
    "de": "heimlich",
    "en": "done secretly to avoid being noticed"
  },
  {
    "page": 20,
    "line": 3,
    "word": "bewilder somebody",
    "de": "jemanden verwirren",
    "en": "to leave someone confused and unable to understand"
  },
  {
    "page": 20,
    "line": 5,
    "word": "tangle",
    "de": "Durcheinander",
    "en": "a confused mass of things mixed together"
  },
  {
    "page": 20,
    "line": 20,
    "word": "elicit something",
    "de": "etwas hervorrufen",
    "en": "to produce a response or reaction"
  },
  {
    "page": 20,
    "line": 23,
    "word": "pitfall",
    "de": "Falle; versteckte Schwierigkeit",
    "en": "a hidden danger or problem that can cause failure"
  },
  {
    "page": 20,
    "line": 25,
    "word": "accountant",
    "de": "Buchhalter/in",
    "en": "a person whose job is to prepare or check financial records"
  },
  {
    "page": 20,
    "line": 29,
    "word": "bear (bore, borne) something",
    "de": "etwas aufweisen; hier: Spuren tragen",
    "en": "here: to show or carry visible marks"
  },
  {
    "page": 21,
    "line": 32,
    "word": "imperative",
    "de": "unbedingt notwendig",
    "en": "so necessary that it must be done"
  },
  {
    "page": 21,
    "line": 36,
    "word": "Punjabi",
    "de": "Person aus dem Punjab",
    "en": "here: a person from the Punjab region of India and Pakistan"
  },
  {
    "page": 21,
    "line": 39,
    "word": "lewd",
    "de": "anzüglich",
    "en": "offensively sexual in language or behaviour"
  },
  {
    "page": 21,
    "line": 40,
    "word": "balti house",
    "de": "Balti-Restaurant",
    "en": "a restaurant serving balti-style curry dishes"
  },
  {
    "page": 21,
    "line": 53,
    "word": "busted",
    "de": "kaputt",
    "en": "informal: broken or no longer working"
  },
  {
    "page": 21,
    "line": 60,
    "word": "pour out your account",
    "de": "sich alles von der Seele reden",
    "en": "to tell your story or feelings at length"
  },
  {
    "page": 21,
    "line": 68,
    "word": "watch somebody scrupulously",
    "de": "jemanden ganz genau beobachten",
    "en": "to observe someone with great care and attention"
  },
  {
    "page": 21,
    "line": 69,
    "word": "severe",
    "de": "streng",
    "en": "here: strict or harsh in dealing with someone"
  },
  {
    "page": 22,
    "line": 76,
    "word": "liaison",
    "de": "sexuelle Beziehung; Affäre",
    "en": "here: a secret sexual relationship"
  },
  {
    "page": 22,
    "line": 76,
    "word": "ferry somebody/something",
    "de": "jemanden/etwas hin- und herfahren",
    "en": "to transport people or things from one place to another"
  },
  {
    "page": 22,
    "line": 79,
    "word": "ride",
    "de": "hier als Slang: Geschlechtsverkehr",
    "en": "here: a slang term for sexual intercourse, used in a pun about taxi rides"
  },
  {
    "page": 22,
    "line": 94,
    "word": "dilated",
    "de": "erweitert",
    "en": "made wider or larger, especially the pupils of the eyes"
  },
  {
    "page": 22,
    "line": 94,
    "word": "be liable to something",
    "de": "für etwas anfällig sein",
    "en": "to be likely to experience something unpleasant"
  },
  {
    "page": 22,
    "line": 96,
    "word": "vigil",
    "de": "Nachtwache; wachsames Beobachten",
    "en": "a period of staying awake to watch carefully"
  },
  {
    "page": 22,
    "line": 104,
    "word": "syringe",
    "de": "Spritze",
    "en": "a device used to inject or withdraw liquid through a needle"
  },
  {
    "page": 22,
    "line": 108,
    "word": "flinch from something",
    "de": "vor etwas zurückschrecken",
    "en": "to draw back from something unpleasant or frightening"
  },
  {
    "page": 22,
    "line": 110,
    "word": "sullen",
    "de": "mürrisch; verschlossen",
    "en": "silently bad-tempered and unwilling to communicate"
  },
  {
    "page": 23,
    "line": 128,
    "word": "mutter",
    "de": "murmeln",
    "en": "to speak quietly and indistinctly"
  },
  {
    "page": 23,
    "line": 134,
    "word": "maulvi",
    "de": "islamischer Religionslehrer",
    "en": "an Islamic religious teacher"
  },
  {
    "page": 23,
    "line": 136,
    "word": "indignity",
    "de": "Demütigung",
    "en": "an experience that damages a person's dignity"
  },
  {
    "page": 23,
    "line": 139,
    "word": "rove over somebody",
    "de": "jemanden mit begehrlichen Blicken mustern",
    "en": "here: for someone's eyes to move over another person with desire"
  },
  {
    "page": 23,
    "line": 142,
    "word": "inquisitive",
    "de": "neugierig; hier: neugierig ausfragend",
    "en": "eager to ask questions about other people's affairs"
  },
  {
    "page": 23,
    "line": 144,
    "word": "devotion",
    "de": "Hingabe; hier: religiöse Andacht",
    "en": "dedication; in the plural here, acts of religious worship"
  },
  {
    "page": 23,
    "line": 154,
    "word": "mac",
    "de": "Regenmantel",
    "en": "British informal word for a raincoat"
  },
  {
    "page": 23,
    "line": 158,
    "word": "unimpeded",
    "de": "ungehindert",
    "en": "not blocked or obstructed"
  },
  {
    "page": 24,
    "line": 167,
    "word": "imminent",
    "de": "unmittelbar bevorstehend",
    "en": "about to happen very soon"
  },
  {
    "page": 24,
    "line": 168,
    "word": "crunch",
    "de": "knabbern; knuspernd kauen",
    "en": "to chew something with a crisp cracking sound"
  },
  {
    "page": 24,
    "line": 168,
    "word": "poppadum / poppadom",
    "de": "dünner knuspriger Fladen",
    "en": "a thin crisp food served with Indian meals"
  },
  {
    "page": 24,
    "line": 172,
    "word": "castigate somebody",
    "de": "jemanden scharf tadeln",
    "en": "to reprimand or criticise someone severely"
  },
  {
    "page": 24,
    "line": 172,
    "word": "insolent",
    "de": "unverschämt; respektlos",
    "en": "rudely showing a lack of respect"
  },
  {
    "page": 24,
    "line": 181,
    "word": "fastidious",
    "de": "hier: kritisch; angewidert-wählerisch",
    "en": "here: showing critical distaste or excessive concern about what is acceptable"
  },
  {
    "page": 24,
    "line": 185,
    "word": "censure",
    "de": "Missbilligung; Verurteilung",
    "en": "strong disapproval of someone's behaviour"
  },
  {
    "page": 25,
    "line": 194,
    "word": "wicked",
    "de": "böse; moralisch schlecht",
    "en": "morally bad or evil"
  },
  {
    "page": 25,
    "line": 199,
    "word": "relish something",
    "de": "etwas genießen",
    "en": "to take great pleasure in something"
  },
  {
    "page": 25,
    "line": 200,
    "word": "smother somebody/something",
    "de": "hier: vollständig bedecken",
    "en": "here: to cover something completely with another substance"
  },
  {
    "page": 25,
    "line": 209,
    "word": "implicated in something",
    "de": "in etwas verstrickt",
    "en": "involved or entangled in something regarded as wrong"
  },
  {
    "page": 25,
    "line": 211,
    "word": "burp",
    "de": "aufstoßen; rülpsen",
    "en": "to release gas noisily from the stomach through the mouth"
  },
  {
    "page": 25,
    "line": 211,
    "word": "choke",
    "de": "ersticken; sich verschlucken",
    "en": "to struggle to breathe because the throat is blocked"
  },
  {
    "page": 25,
    "line": 218,
    "word": "quell something",
    "de": "etwas unterdrücken; beruhigen",
    "en": "to bring unrest or a disturbance under control"
  },
  {
    "page": 25,
    "line": 219,
    "word": "infidel",
    "de": "Ungläubige/r; abwertende Bezeichnung",
    "en": "a disapproving label for someone outside the speaker's religion"
  },
  {
    "page": 25,
    "line": 220,
    "word": "rout somebody",
    "de": "jemanden vernichtend schlagen",
    "en": "to defeat an opponent completely"
  },
  {
    "page": 25,
    "line": 221,
    "word": "hypocrite",
    "de": "Heuchler/in",
    "en": "someone whose conduct contradicts the moral standards they claim to hold"
  },
  {
    "page": 25,
    "line": 221,
    "word": "adulterer",
    "de": "Ehebrecher/in",
    "en": "a married person who has sex with someone other than their spouse"
  },
  {
    "page": 25,
    "line": 226,
    "word": "jihad",
    "de": "hier: religiöser Krieg in Alis Rede",
    "en": "in Ali's speech: a religious war; this is a contextual gloss, not a complete definition of the term"
  },
  {
    "page": 25,
    "line": 231,
    "word": "mend something",
    "de": "etwas bessern",
    "en": "here: to improve or correct one's behaviour"
  },
  {
    "page": 25,
    "line": 235,
    "word": "usher somebody",
    "de": "jemanden geleiten",
    "en": "to guide someone towards a place or exit"
  },
  {
    "page": 26,
    "line": 254,
    "word": "dislodge something from something",
    "de": "etwas von etwas entfernen",
    "en": "to remove something from its position"
  },
  {
    "page": 26,
    "line": 261,
    "word": "usury",
    "de": "Wucher",
    "en": "lending money at excessively high interest"
  },
  {
    "page": 26,
    "line": 265,
    "word": "corruption",
    "de": "hier: moralische Verderbtheit",
    "en": "here: moral decay or dishonest conduct"
  },
  {
    "page": 27,
    "line": 275,
    "word": "superstitious",
    "de": "abergläubisch",
    "en": "guided by beliefs in supernatural signs or powers rather than reason"
  },
  {
    "page": 27,
    "line": 281,
    "word": "reproach",
    "de": "Vorwurf",
    "en": "an expression of blame or disappointment"
  },
  {
    "page": 27,
    "line": 282,
    "word": "venture something",
    "de": "etwas vorsichtig zu äußern wagen",
    "en": "here: to risk expressing a thought or criticism"
  },
  {
    "page": 27,
    "line": 283,
    "word": "grovel",
    "de": "sich unterwürfig verhalten",
    "en": "to act in an excessively submissive way to gain approval"
  },
  {
    "page": 27,
    "line": 301,
    "word": "halting",
    "de": "stockend; zögerlich",
    "en": "hesitant and interrupted rather than fluent"
  },
  {
    "page": 27,
    "line": 303,
    "word": "hearten somebody",
    "de": "jemanden ermutigen",
    "en": "to give someone courage or hope"
  },
  {
    "page": 28,
    "line": 316,
    "word": "pit",
    "de": "Grube; Loch",
    "en": "a large or deep hole"
  },
  {
    "page": 29,
    "line": 338,
    "word": "gaudy",
    "de": "kitschig; auffällig-bunt",
    "en": "showy and brightly coloured in a tasteless way"
  },
  {
    "page": 29,
    "line": 347,
    "word": "inadvertent",
    "de": "unbeabsichtigt",
    "en": "done without intention or awareness"
  },
  {
    "page": 29,
    "line": 368,
    "word": "pace",
    "de": "auf und ab gehen",
    "en": "to walk repeatedly back and forth"
  },
  {
    "page": 29,
    "line": 373,
    "word": "pant",
    "de": "keuchen",
    "en": "to breathe quickly and heavily"
  },
  {
    "page": 29,
    "line": 375,
    "word": "retaliate",
    "de": "sich wehren; Vergeltung üben",
    "en": "to respond to an attack with another attack"
  }
];

(() => {
 const id='fanatic-vocabulary';
 const e=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const pages=[...new Set(MSTF_WORDS.map(w=>w.page))];
 const bank=pages.map(page=>`<details class="reading-card vocabulary-bank"><summary><b>Page ${page}</b> · ${MSTF_WORDS.filter(w=>w.page===page).length} ${MSTF_WORDS.filter(w=>w.page===page).length===1?'annotation':'annotations'}</summary><dl>${MSTF_WORDS.filter(w=>w.page===page).map(w=>`<dt><b>${e(w.word)}</b> <small>p. ${w.page}, l. ${w.line}</small></dt><dd>${e(w.en)}<br><span lang="de">${e(w.de)}</span></dd>`).join('')}</dl><a href="book-${page}.jpg" target="_blank" rel="noopener">Check the original margin ↗</a></details>`).join('');
 const chapter={id,title:'Vocabulary lab · My Son the Fanatic',theme:'MY SON THE FANATIC · VOCABULARY',hours:1,lessons:'Revision',question:'Can you turn the margin annotations into precise language of your own?',product:'Vocabulary quizzes & short writing',intro:`Practise all ${MSTF_WORDS.length} margin annotations in manageable rounds before the exam workshop.`,source:'Margin annotations, printed book pp. 20–29. Meanings refer to the story; quiz sentences are newly written practice examples.',materials:[{label:'Original story and annotations · pp. 20–33',url:'kureishi-reading.pdf'}],toolkit:[['Context first','A familiar word can have a special meaning here: bear, ride, corruption.'],['Form matters','surreptitious → surreptitiously; halting → haltingly; inadvertent → inadvertently.'],['Use with care','Report a character’s judgement as that character’s judgement.']],phrases:'Parvez feels bewildered because… / Ali’s censure reveals… / The narrator presents…',teaching:'Zusätzliche Wiederholung vor dem Crashcourse: 10 Min. Wortschatz, 15 Min. ausgewählte Quizrunden, 10 Min. Kontext, 10 Min. Transfer. Alle Seitenrunden stehen für eigenständige Wiederholung bereit; keine zusätzliche Verschiebung des Klausurtermins.',stages:[
 {tab:'Explore',title:'From the margin to your vocabulary',text:`10 min. These ${MSTF_WORDS.length} entries come from the margins of pp. 20–29. Choose a page, recall each meaning before reading it, then collect three words you want to practise. The full bank stays available here.`,fields:[['targets','My three target words','Word | meaning in this story | page and line']],html:`<div class="reading-card"><h3>How to practise</h3><p>Explore → choose a page quiz → check words in context → use them in your own sentences. Complete more rounds whenever you need them. Quiz answers and your writing are saved with your portfolio.</p><p>For “infidel” and “jihad”, distinguish Ali’s language from neutral description. The contextual gloss is not a general definition of Islam. Some entries explain adult slang in the story.</p></div>${bank}`},
 {tab:'Meanings',title:'Choose the meaning that fits',text:'15 min for selected rounds; continue independently. Each page is a separate round. Every margin entry is tested once. Open a round, answer all its questions, then check and retry. A closed round is not automatically completed.',fields:[],html:'<p class="source">The answer positions vary. Use the Explore tab or the original margin to review a word after checking.</p>'},
 {tab:'Context',title:'Use context, not just a translation',text:'10 min. Choose the word or explanation that fits each newly written example. Pay attention to word form, collocation and the particular meaning in this story.',fields:[],html:''},
 {tab:'Apply',title:'Make the vocabulary your own',text:'10 min. Write three accurate sentences about the story using at least four margin words in total. Then explain one contextual meaning. Underline the chosen words in your notebook or list them below.',fields:[['sentences','Three sentences about the story','1. Parvez…\n2. Ali…\n3. The narrator…'],['word-check','My vocabulary check','Chosen words | correct form | why the meaning fits'],['context-note','A meaning that depends on context','Explain why bear, ride, fastidious or corruption needs a contextual meaning here.']],checks:['I can explain my chosen words without simply copying a translation.','My word forms and meanings fit my sentences.','I distinguish characters’ judgements from my own analysis.'],html:'<details class="scaffold"><summary>Self-check and writing support</summary><p>Check meaning, grammar and evidence. For example: “Parvez is bewildered by Ali’s changed behaviour.” Here, bewildered describes his confusion; it does not prove that his suspicions are correct.</p></details><div class="reading-card"><h3>Optional writing extension · with AI feedback</h3><p>Use four of your target words in the existing 200–250-word comparison of Ali’s and Parvez’s attempts to persuade each other. The optional AI feedback remains in that writing task and requires your class code and consent. No vocabulary quiz answers are sent to AI.</p><button type="button" class="quiet" data-vocab-go="fanatic-language">Open comparison writing + optional AI feedback ↗</button></div>'}
 ]};
 COURSE.splice(COURSE.findIndex(c=>c.id==='crashcourse'),0,chapter);
 const quizzes=pages.map(page=>({id:`vocab-page-${page}`,stage:1,title:`Margin vocabulary · page ${page}`,vocabulary:true,collapsible:true,items:MSTF_WORDS.filter(w=>w.page===page).map(w=>{
   const i=MSTF_WORDS.indexOf(w),options=[w.en,...[7,19,31].map(n=>MSTF_WORDS[(i+n)%MSTF_WORDS.length].en)];
   const answer=i%4; [options[0],options[answer]]=[options[answer],options[0]];
   return {id:'word-'+i,type:'mc',prompt:`What does “${w.word}” mean here?`,options,answer,explanation:`${w.word}: ${w.de}. See p. ${w.page}, l. ${w.line}.`};
 })}));
 const context=[
 ['Parvez searches without wanting to be noticed. He acts …',['surreptitiously','imperatively','inadvertently'],0,'surreptitious'],
 ['The walls “bore” marks. Which meaning of bear fits?',['to reveal or carry marks','to give birth','to put up with pain'],0,'bear (bore, borne) something'],
 ['Choose the adjective: Ali’s exams will happen very soon; they are …',['inquisitive','imminent','unimpeded'],1,'imminent'],
 ['A question that produces an unexpected reply … that reply.',['quells','dislodges','elicits'],2,'elicit something'],
 ['Which phrase describes a silent, bad-tempered manner?',['a gaudy manner','a sullen manner','a dilated manner'],1,'sullen'],
 ['The criticism of a person’s behaviour expresses …',['a syringe','a mac','censure'],2,'censure'],
 ['Which meaning of corruption fits Ali’s idea of threatened purity?',['moral decay','a damaged computer file','a traffic delay'],0,'corruption'],
 ['A person who preaches a moral rule but breaks it may be called a …',['hypocrite','Punjabi','accountant'],0,'hypocrite'],
 ['Bettina touches Parvez’s shoulder without intending to provoke Ali. She does so …',['wickedly','inadvertently','severely'],1,'inadvertent'],
 ['Parvez struggles to express his philosophy fluently. He speaks …',['unimpeded','gaudily','haltingly'],2,'halting'],
 ['Choose the accurate collocation: to … one’s ways means to improve one’s behaviour.',['mend','ferry','pant'],0,'mend something'],
 ['Ali does not hit back in the final scene. He does not …',['relish','retaliate','usher'],1,'retaliate']
 ];
 for(let n=0;n<2;n++)quizzes.push({id:`vocab-context-${n}`,stage:2,title:`Context challenge · ${n+1}`,vocabulary:true,items:context.slice(n*6,n*6+6).map(([prompt,options,answer,word],i)=>{const w=MSTF_WORDS.find(x=>x.word===word);return {id:`context-${n}-${i}`,type:'mc',prompt,options,answer,explanation:`${w.word}: ${w.en}. ${w.de} (p. ${w.page}, l. ${w.line}).`};})});
 READING_QUIZZES[id]=quizzes;
 PLENARY[id]={title:'Our vocabulary toolkit',focus:'Difficult words | contextual meanings | accurate example sentences',pitfall:'Do not replace analysis with loaded labels: infidel is a character’s term, not a neutral judgement.',variants:[{name:'Word experts',minutes:'5 min',steps:'Pairs explain one difficult word without translating it. The class supplies a story example and checks the original margin.'},{name:'Repair the sentence',minutes:'5 min',steps:'Collect three volunteer example sentences. Check meaning and word form together, then record a corrected version with a page reference.'},{name:'Exit-ticket collection',minutes:'5 min',steps:'Each learner shares one word, one English definition and one original sentence. Agree on five useful examples and one contextual warning.'}]};
 document.addEventListener('click',event=>{const button=event.target.closest?.('[data-vocab-go]');if(button){openChapter(button.dataset.vocabGo);work.step=3;save();render();}});
})();
