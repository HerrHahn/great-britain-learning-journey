(() => {
  'use strict';
  const endpoint = 'https://11bg-writing-feedback.hahny0815.workers.dev/britain/suggestions';
  const draftKey = 'gb-suggestion-draft-v1';
  const launch = document.createElement('button');
  launch.className = 'suggestion-launch'; launch.type = 'button'; launch.textContent = '✎ Verbesserungsvorschlag';
  launch.setAttribute('aria-haspopup','dialog'); launch.setAttribute('aria-controls','suggestion-dialog');
  launch.lang = 'de';
  const dialog = document.createElement('dialog'); dialog.id = 'suggestion-dialog'; dialog.lang = 'de';
  dialog.setAttribute('aria-labelledby','suggestion-heading');
  dialog.innerHTML = `<form id="suggestion-form"><div class="suggestion-heading"><h2 id="suggestion-heading">Deine Idee für die Website</h2><button type="button" class="suggestion-close" aria-label="Vorschlagsfeld schließen">×</button></div>
    <p>Was können wir verständlicher, hilfreicher oder einfacher machen?</p>
    <p class="suggestion-context"></p>
    <label for="suggestion-text">Dein Verbesserungsvorschlag</label><textarea id="suggestion-text" rows="5" minlength="5" maxlength="2000" required placeholder="Zum Beispiel: Bei dieser Aufgabe fehlt mir …"></textarea>
    <small id="suggestion-count">0 / 2.000 Zeichen</small>
    <p class="suggestion-privacy">Mit „Vorschlag senden“ übermittelst du den Text, die angezeigte Seite und den Zeitpunkt an die geschützte Sammlung deiner Lehrkraft bei Cloudflare. Bitte keine Namen oder persönlichen Daten eintragen. Keine KI-Auswertung.</p>
    <button type="submit" class="suggestion-send">Vorschlag senden</button><p class="suggestion-status" role="status" aria-live="polite"></p>
    <a class="suggestion-teacher" href="suggestions-teacher.html" target="_blank" rel="noopener">Für die Lehrkraft: Sammlung herunterladen ↗</a></form>`;
  document.body.append(launch,dialog);
  const form = dialog.querySelector('form'), text = dialog.querySelector('textarea');
  const status = dialog.querySelector('.suggestion-status'), send = dialog.querySelector('.suggestion-send');
  let context = '', attemptId = crypto.randomUUID(), busy = false;
  function pageLabel() {
    if (location.pathname.endsWith('sources.html')) return 'Quellen & Lesehinweise';
    if (location.pathname.endsWith('suggestions-teacher.html')) return 'Lehrkraft: Vorschlagssammlung';
    if (document.querySelector('#teacher') && !document.querySelector('#teacher').hidden) return 'Lehrkraftansicht';
    if (document.querySelector('#lesson')?.hidden) return 'Lernübersicht';
    const title = document.querySelector('#chapter-title')?.textContent?.trim().replace(/\s+/g,' ');
    const step = document.querySelector('#content h2')?.textContent?.trim();
    return ((title || 'Lernübersicht') + (step ? ' · '+step : '')).slice(0,160);
  }
  function saveDraft() {
    try { localStorage.setItem(draftKey,JSON.stringify({text:text.value,page:context,attemptId})); } catch {}
    dialog.querySelector('#suggestion-count').textContent = `${text.value.length} / 2.000 Zeichen`;
  }
  launch.addEventListener('click', () => {
    if (!busy) {
      context = pageLabel();
      try { const draft = JSON.parse(localStorage.getItem(draftKey)); if (draft && typeof draft.text === 'string' && draft.text.trim()) { text.value=draft.text.slice(0,2000); context=typeof draft.page==='string'?draft.page.slice(0,160):context; attemptId=/^[a-f0-9-]{36}$/i.test(draft.attemptId)?draft.attemptId:crypto.randomUUID(); } } catch {}
      dialog.querySelector('.suggestion-context').textContent = 'Bezug: '+context;
      status.textContent=''; saveDraft();
    }
    dialog.showModal(); text.focus();
  });
  dialog.querySelector('.suggestion-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{ launch.focus(); });
  text.addEventListener('input',()=>{attemptId=crypto.randomUUID();saveDraft();});
  form.addEventListener('submit',async event=>{
    event.preventDefault(); if(busy) return;
    if(text.value.trim().length<5) {status.textContent='Bitte mindestens fünf Zeichen schreiben.';text.focus();return;}
    busy=true; send.disabled=true; text.readOnly=true; status.textContent='Wird gesendet …'; saveDraft();
    try {
      const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:text.value,page:context,attemptId}),signal:AbortSignal.timeout(20000)});
      const result=await response.json();
      if(!response.ok || result.saved!==true) throw Error(result.error || 'Der Vorschlag konnte nicht gespeichert werden.');
      text.value='';attemptId=crypto.randomUUID();saveDraft();
      status.textContent='Danke! Dein Vorschlag wurde in der Sammlung deiner Lehrkraft gespeichert.';
    } catch(error) { status.textContent=error.name==='TimeoutError'?'Noch keine Bestätigung. Bitte erneut senden; derselbe Vorschlag wird nicht doppelt gespeichert.':(error.message==='Failed to fetch'?'Keine Verbindung. Dein Entwurf bleibt erhalten. Bitte erneut versuchen.':error.message); }
    finally {busy=false;send.disabled=false;text.readOnly=false;}
  });
  // The launcher remains reachable when the book reader is open in the top layer.
  const followDialogs=()=>{const active=[...document.querySelectorAll('dialog[open]')].filter(d=>d!==dialog).at(-1); const parent=active||document.body;if(launch.parentElement!==parent)parent.append(launch);};
  new MutationObserver(followDialogs).observe(document.body,{subtree:true,attributes:true,attributeFilter:['open']});
})();
