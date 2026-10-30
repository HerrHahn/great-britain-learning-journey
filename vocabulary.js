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
 const chapter={id,title:'Vocabulary lab · My Son the Fanatic',theme:'MY SON THE FANATIC · VOCABULARY',hours:1,lessons:'Revision',question:'Can you turn the margin annotations into precise language of your own?',product:'Vocabulary practice & 30-word final quiz',intro:`Practise all ${MSTF_WORDS.length} margin annotations in manageable rounds before the exam workshop.`,source:'Margin annotations, printed book pp. 20–29. Meanings refer to the story; quiz sentences are newly written practice examples.',materials:[{label:'Original story and annotations · pp. 20–33',url:'kureishi-reading.pdf'}],toolkit:[['Context first','A familiar word can have a special meaning here: bear, ride, corruption.'],['Form matters','surreptitious → surreptitiously; halting → haltingly; inadvertent → inadvertently.'],['Use with care','Report a character’s judgement as that character’s judgement.']],phrases:'Parvez feels bewildered because… / Ali’s censure reveals… / The narrator presents…',teaching:'Zusätzliche Wiederholung vor dem Crashcourse: 10 Min. Wortschatz, 15 Min. ausgewählte Quizrunden, 10 Min. Kontext, Abschlussquiz mit 30 zufälligen Vokabeln. Alle Seitenrunden stehen für eigenständige Wiederholung bereit; keine zusätzliche Verschiebung des Klausurtermins.',stages:[
 {tab:'Explore',title:'From the margin to your vocabulary',text:`10 min. These ${MSTF_WORDS.length} entries come from the margins of pp. 20–29. Choose a page, recall each meaning before reading it, then collect three words you want to practise. The full bank stays available here.`,fields:[['targets','My three target words','Word | meaning in this story | page and line']],html:`<div class="reading-card"><h3>How to practise</h3><p>Explore → choose a page quiz → check words in context → finish with a random 30-word quiz. Complete more rounds whenever you need them. Quiz answers and your writing are saved with your portfolio.</p><p>For “infidel” and “jihad”, distinguish Ali’s language from neutral description. The contextual gloss is not a general definition of Islam. Some entries explain adult slang in the story.</p></div>${bank}`},
 {tab:'Meanings',title:'Choose the meaning that fits',text:'15 min for selected rounds; continue independently. Each page is a separate round. Every margin entry is tested once. Open a round, answer all its questions, then check and retry. A closed round is not automatically completed.',fields:[],html:'<p class="source">The answer positions vary. Use the Explore tab or the original margin to review a word after checking.</p>'},
 {tab:'Context',title:'Use context, not just a translation',text:'10 min. Choose the word or explanation that fits each newly written example. Pay attention to word form, collocation and the particular meaning in this story.',fields:[],html:''},
 {tab:'Final quiz',title:'Your vocabulary challenge',text:'Finish with 30 randomly selected vocabulary items. Each correct answer earns half a point: 15 points maximum. Your draw and answers stay saved until you start another round.',fields:[],html:'<div id="vocabulary-final"></div>'}
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

const MSTF_FINAL_GAPS = [
  {
    "answer": "surreptitious",
    "gap": "She took a ___ look at the letter, hoping nobody would notice."
  },
  {
    "answer": "bewilder",
    "gap": "The contradictory clues could ___ even an experienced detective."
  },
  {
    "answer": "tangle",
    "gap": "The cables lay in a confused ___ on the floor."
  },
  {
    "answer": "elicit",
    "gap": "The interviewer hoped to ___ an honest response."
  },
  {
    "answer": "pitfall",
    "gap": "One common ___ in an essay is to retell the plot instead of analysing it."
  },
  {
    "answer": "accountant",
    "gap": "An ___ checks a company's financial records."
  },
  {
    "answer": "bear",
    "gap": "Old walls may ___ visible marks of earlier damage."
  },
  {
    "answer": "imperative",
    "gap": "With the deadline approaching, it was ___ to act immediately."
  },
  {
    "answer": "Punjabi",
    "gap": "A person from the Punjab region may be called a ___."
  },
  {
    "answer": "lewd",
    "gap": "The passengers made ___ jokes containing offensive sexual remarks."
  },
  {
    "answer": "balti house",
    "gap": "They went to a ___, a restaurant specialising in balti-style curries."
  },
  {
    "answer": "busted",
    "gap": "The old radio was ___ and would no longer work."
  },
  {
    "answer": "pour out your account",
    "gap": "If you tell your whole story at length, you ___ of what happened."
  },
  {
    "answer": "watch somebody scrupulously",
    "gap": "To observe a person with great care and attention is to ___."
  },
  {
    "answer": "severe",
    "gap": "The strict teacher gave the class a ___ warning."
  },
  {
    "answer": "liaison",
    "gap": "The two adults were having a secret sexual ___."
  },
  {
    "answer": "ferry",
    "gap": "Taxi drivers ___ passengers from place to place."
  },
  {
    "answer": "ride",
    "gap": "The taxi dialogue plays on the word ___: a journey and, in slang, sexual intercourse."
  },
  {
    "answer": "dilated",
    "gap": "The pupils of his eyes were ___, wider than usual."
  },
  {
    "answer": "be liable to",
    "gap": "People with this condition may ___ sudden headaches."
  },
  {
    "answer": "vigil",
    "gap": "The family kept a ___, staying awake beside the patient all night."
  },
  {
    "answer": "syringe",
    "gap": "The nurse used a ___ to give the injection."
  },
  {
    "answer": "flinch",
    "gap": "She refused to ___ from the difficult task."
  },
  {
    "answer": "sullen",
    "gap": "He remained ___, silently angry and unwilling to talk."
  },
  {
    "answer": "mutter",
    "gap": "Speak clearly; do not ___ under your breath."
  },
  {
    "answer": "maulvi",
    "gap": "The boy sought religious instruction from a ___, an Islamic teacher."
  },
  {
    "answer": "indignity",
    "gap": "Being publicly humiliated was an ___ he found hard to forget."
  },
  {
    "answer": "rove",
    "gap": "His eyes began to ___ over the stranger, moving from one feature to another."
  },
  {
    "answer": "inquisitive",
    "gap": "The ___ neighbour kept asking personal questions."
  },
  {
    "answer": "devotion",
    "gap": "Her daily prayers showed her religious ___."
  },
  {
    "answer": "mac",
    "gap": "It looked like rain, so he put on his ___, a raincoat."
  },
  {
    "answer": "unimpeded",
    "gap": "With the road clear, traffic could pass ___."
  },
  {
    "answer": "imminent",
    "gap": "The dark clouds suggested that a storm was ___."
  },
  {
    "answer": "crunch",
    "gap": "You can hear people ___ when they chew very crisp food."
  },
  {
    "answer": "poppadum / poppadom",
    "gap": "She served a thin, crisp ___ alongside the curry."
  },
  {
    "answer": "castigate",
    "gap": "The critic began to ___ the officials, reprimanding them severely."
  },
  {
    "answer": "insolent",
    "gap": "The pupil's rude, disrespectful reply was ___."
  },
  {
    "answer": "fastidious",
    "gap": "His ___ expression suggested critical distaste for what was offered."
  },
  {
    "answer": "censure",
    "gap": "The committee expressed strong ___ of his dishonest behaviour."
  },
  {
    "answer": "wicked",
    "gap": "In the tale, the villain's actions are described as morally ___."
  },
  {
    "answer": "relish",
    "gap": "I ___ the chance to read quietly; it gives me great pleasure."
  },
  {
    "answer": "smother",
    "gap": "To cover the chips completely, ___ them in sauce."
  },
  {
    "answer": "implicated",
    "gap": "Several officials were ___ in the scandal."
  },
  {
    "answer": "burp",
    "gap": "Drinking fizzy drinks quickly can make you ___."
  },
  {
    "answer": "choke",
    "gap": "A piece of food blocking your throat can make you ___."
  },
  {
    "answer": "quell",
    "gap": "The speaker tried to ___ the unrest and restore calm."
  },
  {
    "answer": "infidel",
    "gap": "The speaker used the disapproving religious label ___ for an outsider."
  },
  {
    "answer": "rout",
    "gap": "The stronger army hoped to ___ its opponents, defeating them completely."
  },
  {
    "answer": "hypocrite",
    "gap": "A person who preaches honesty but repeatedly lies is a ___."
  },
  {
    "answer": "adulterer",
    "gap": "A married person who has sex with someone other than their spouse is an ___."
  },
  {
    "answer": "jihad",
    "gap": "In Ali's speech, ___ refers to religious war; the word has broader meanings outside this passage."
  },
  {
    "answer": "mend",
    "gap": "He promised to ___ his ways and behave better."
  },
  {
    "answer": "usher",
    "gap": "The attendant will ___ the visitors towards the exit."
  },
  {
    "answer": "dislodge",
    "gap": "A strong gust could ___ the tile from its position."
  },
  {
    "answer": "usury",
    "gap": "Lending money at excessively high interest is called ___."
  },
  {
    "answer": "corruption",
    "gap": "Here, the accusation concerns moral ___ rather than a damaged computer file."
  },
  {
    "answer": "superstitious",
    "gap": "Believing that a broken mirror brings bad luck is ___."
  },
  {
    "answer": "reproach",
    "gap": "His voice carried a note of ___, expressing blame and disappointment."
  },
  {
    "answer": "venture",
    "gap": "Although nervous, she decided to ___ an opinion."
  },
  {
    "answer": "grovel",
    "gap": "You can apologise sincerely without having to ___ for approval."
  },
  {
    "answer": "halting",
    "gap": "His speech was ___, full of pauses and hesitation."
  },
  {
    "answer": "hearten",
    "gap": "A message of support can ___ someone who feels discouraged."
  },
  {
    "answer": "pit",
    "gap": "They dug a deep ___ in the ground."
  },
  {
    "answer": "gaudy",
    "gap": "The room's clashing bright colours made it look ___."
  },
  {
    "answer": "inadvertent",
    "gap": "The mistake was ___; nobody had intended to make it."
  },
  {
    "answer": "pace",
    "gap": "An anxious person may ___ back and forth across a room."
  },
  {
    "answer": "pant",
    "gap": "After running uphill, you may ___ and struggle to catch your breath."
  },
  {
    "answer": "retaliate",
    "gap": "Instead of deciding to ___ after the attack, she chose not to hit back."
  }
];

/* Local-only random vocabulary assessment. Persist the draw, not just the score. */
const VocabularyFinal=(()=>{
 const id='fanatic-vocabulary';
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const normal=s=>String(s).normalize('NFKC').toLowerCase().trim().replace(/\s+/g,' ').replace(/[.!?]+$/,'').trim();
 function shuffle(xs){const a=[...xs];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
 function create(){return {version:1,items:shuffle(MSTF_WORDS.map((_,i)=>i)).slice(0,30).map((word,i)=>({word,type:['mc','text','gap'][i%3],options:i%3===0?shuffle([word,...shuffle(MSTF_WORDS.map((_,j)=>j).filter(j=>j!==word)).slice(0,3)]):[]})),answers:Array(30).fill(''),checked:false};}
 function validate(q){
  const fail=()=>{throw new Error('Ungültiges Vokabel-Abschlussquiz.');};
  if(!q||q.version!==1||typeof q.checked!=='boolean'||!Array.isArray(q.items)||q.items.length!==30||!Array.isArray(q.answers)||q.answers.length!==30)fail();
  const seen=new Set();
  const items=q.items.map((x,i)=>{if(!x||!Number.isInteger(x.word)||x.word<0||x.word>=MSTF_WORDS.length||seen.has(x.word)||x.type!==['mc','text','gap'][i%3]||!Array.isArray(x.options))fail();seen.add(x.word);
   if(x.type==='mc'?(x.options.length!==4||new Set(x.options).size!==4||!x.options.includes(x.word)||x.options.some(v=>!Number.isInteger(v)||v<0||v>=MSTF_WORDS.length)):x.options.length!==0)fail();
   const a=q.answers[i];if(typeof a!=='string'||a.length>200||(x.type==='mc'&&a!==''&&!x.options.some(v=>String(v)===a)))fail();
   return {word:x.word,type:x.type,options:[...x.options]};
  });return {version:1,items,answers:[...q.answers],checked:q.checked};
 }
 function accepted(item){const row=MSTF_FINAL_GAPS[item.word];const answers=row.answer.split(' / ');if(item.type==='text'){const word=MSTF_WORDS[item.word].word;answers.push(word,word.replace(/\([^)]*\)/g,'').replace(/somebody\/something|somebody|something/g,''));}return answers;}
 function correct(q,i){const item=q.items[i],a=q.answers[i];return item.type==='mc'?a!==''&&a===String(item.word):accepted(item).some(v=>normal(v)===normal(a));}
 function score(q){return q.items.reduce((n,_,i)=>n+(correct(q,i)?0.5:0),0);}
 function report(q){return `${score(q).toLocaleString('de-DE')} / 15 Punkte · ${score(q)*2} / 30 richtig`;}
 function exportBlocks(q){return [{label:'Final vocabulary quiz · 30 random words',text:q.checked?report(q):'Noch nicht ausgewertet'},...q.items.map((x,i)=>({label:`${i+1}. ${MSTF_WORDS[x.word].word} · ${x.type}`,text:`Answer: ${x.type==='mc'?(q.answers[i]===''?'—':MSTF_WORDS[Number(q.answers[i])].en):q.answers[i]||'—'}${q.checked?'\n'+(correct(q,i)?'0.5 / 0.5':'0 / 0.5')+' · Solution: '+(x.type==='mc'?MSTF_WORDS[x.word].en:MSTF_FINAL_GAPS[x.word].answer):''}`}))];}
 function mount(){const data=work.chapters[id];if(!data.finalQuiz){data.finalQuiz=create();save();}
  const host=document.querySelector('#vocabulary-final');if(!host)return;
  function draw(){const q=data.finalQuiz;
   host.innerHTML=`<section class="reading-quiz" aria-labelledby="vocabulary-final-title"><h3 id="vocabulary-final-title">30 words · 15 points</h3><p>10 multiple choice questions, 10 typed answers and 10 gap sentences. Use the vocabulary from the margins. For typed answers, give the headword or phrase (without “somebody/something”); for gaps, give only the missing word or phrase. Capitalisation, extra spaces and final punctuation do not affect your score. Spelling counts.</p><p>Each correct answer earns 0.5 points. Empty or incorrect answers earn 0 points. After marking, use “Try the same words again” or start a new random round.</p><p class="quiz-status" role="status" tabindex="-1" id="vocabulary-final-result">${q.checked?'<strong>'+report(q)+'</strong> · Übungsergebnis, keine Schulnote.':'Your current round is saved with your portfolio.'}</p>${q.items.map((x,i)=>{
    const w=MSTF_WORDS[x.word],g=MSTF_FINAL_GAPS[x.word],prompt=x.type==='mc'?`What does “${w.word}” mean in this story?`:x.type==='text'?`Give the English margin word: ${w.de} (${g.answer[0]}…).`:`Complete the sentence: ${g.gap}`;
    return `<fieldset><legend>${i+1}. ${esc(prompt)} <small>· ${x.type==='mc'?'Multiple choice':x.type==='text'?'Type the word':'Gap sentence'} · 0.5 points</small></legend>${x.type==='mc'?x.options.map(j=>`<label class="quiz-option"><input type="radio" name="final-${i}" data-final-answer="${i}" value="${j}" ${q.answers[i]===String(j)?'checked':''} ${q.checked?'disabled':''}>${esc(MSTF_WORDS[j].en)}</label>`).join(''):`${x.type==='gap'?`<p class="source">Meaning: ${esc(w.en)}</p>`:''}<label for="final-answer-${i}">Your answer</label><input type="text" id="final-answer-${i}" data-final-answer="${i}" maxlength="200" autocomplete="off" autocapitalize="none" spellcheck="false" value="${esc(q.answers[i])}" ${q.checked?'readonly':''} style="width:100%;box-sizing:border-box;min-height:48px;font:inherit;padding:12px;border:1px solid #9ebdcc;border-radius:10px">`}${q.checked?`<p class="quiz-explanation ${correct(q,i)?'correct':'retry'}"><b>${correct(q,i)?'Correct · 0.5 points':'0 points'}</b> · Answer: ${esc(x.type==='mc'?w.en:g.answer)}<br>${esc(w.word)} — ${esc(w.de)} · p. ${w.page}, l. ${w.line}</p>`:''}</fieldset>`;
   }).join('')}<div class="actions">${q.checked?'<button class="primary" data-final-retry>Try the same words again</button>':'<button class="primary" data-final-mark>Finish & show points</button>'}<button class="quiet" data-final-new>New random round · replace this round</button></div></section>`;
   host.querySelectorAll('[data-final-answer]').forEach(input=>input.addEventListener(input.type==='radio'?'change':'input',()=>{if(q.checked)return;q.answers[+input.dataset.finalAnswer]=input.value;save();}));
   function focusResult(){const status=host.querySelector('#vocabulary-final-result');status.focus();status.scrollIntoView({behavior:'smooth',block:'center'});}
   host.querySelector('[data-final-mark]')?.addEventListener('click',()=>{q.checked=true;save();draw();focusResult();});
   host.querySelector('[data-final-retry]')?.addEventListener('click',()=>{q.answers=Array(30).fill('');q.checked=false;save();draw();focusResult();});
   host.querySelector('[data-final-new]').onclick=()=>{data.finalQuiz=create();save();draw();focusResult();};
  }draw();
 }
 return {create,validate,correct,score,exportBlocks,mount};
})();
