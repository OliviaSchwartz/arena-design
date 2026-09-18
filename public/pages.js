(()=>{
 const tabs=[...document.querySelectorAll('[data-news-category]')];
 function selectNews(tab){const category=tab.dataset.newsCategory;tabs.forEach(t=>{t.setAttribute('aria-selected',String(t===tab));t.tabIndex=t===tab?0:-1;});let count=0;document.querySelectorAll('.news-story').forEach(story=>{story.hidden=category!=='All stories'&&story.dataset.category!==category;if(!story.hidden)count++;});document.querySelector('.news-empty').hidden=category!=='Member Spotlight'||count>0;document.querySelector('.news-count').textContent=count+' '+(count===1?'story':'stories');document.querySelector('#news-results').setAttribute('aria-labelledby',tab.id);}
 tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>selectNews(tab));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%tabs.length;if(e.key==='ArrowLeft')next=(i-1+tabs.length)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();tabs[next].focus();selectNews(tabs[next]);}});});
 const splash=document.querySelector('.arena-splash');splash?.addEventListener('animationend',()=>splash.remove(),{once:true});setTimeout(()=>splash?.remove(),2200);
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 if(!reduced.matches&&'IntersectionObserver'in window){
  const targets=[...document.querySelectorAll('.interior-content h1,.interior-content h2,.interior-content h3,.interior-content p,.interior-content img,.interior-content details,#join>.wrap')].filter(el=>!el.closest('.logo-window')&&(!el.closest('details')||el.tagName==='DETAILS'));
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('is-revealed');else if(!e.target.contains(document.activeElement))e.target.classList.remove('is-revealed');}),{threshold:0});
  targets.forEach(el=>el.classList.add('scroll-reveal'));setTimeout(()=>targets.forEach(el=>observer.observe(el)),1300);
  document.addEventListener('focusin',e=>e.target.closest('.scroll-reveal')?.classList.add('is-revealed'));
  reduced.addEventListener('change',e=>{if(e.matches){observer.disconnect();targets.forEach(el=>el.classList.add('is-revealed'));}});
 }
 document.querySelectorAll('[data-copy-template]').forEach(button=>button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(document.querySelector('#expense-template-text').value);button.textContent='Copied!';setTimeout(()=>button.textContent='Copy template',2000);}catch{button.textContent='Select and copy the template below';}}));
 document.querySelectorAll('form[data-arena-form]').forEach(form=>form.addEventListener('submit',async e=>{
  e.preventDefault();if(!form.reportValidity())return;const button=form.querySelector('button[type=submit]'),status=form.querySelector('.form-response');if(button.disabled)return;
  const label=button.textContent;button.disabled=true;button.textContent='Sending…';status.textContent='';status.classList.remove('error');
  const data=Object.fromEntries(new FormData(form));data.formType=form.dataset.arenaForm;
  try{const r=await fetch('https://arenatalent.com/api/'+data.formType,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});const result=await r.json();if(!r.ok||!result.ok)throw Error('Request failed');status.textContent=data.formType==='contact'?"Message sent. We'll get back to you shortly.":"Thank you. We'll be in touch shortly.";form.reset();}
  catch{status.classList.add('error');status.textContent='Something went wrong sending your message. Please try again, or email us directly at '+(data.formType==='contact'?'contact':'partnerships')+'@arenatalent.com.';}
  finally{button.disabled=false;button.textContent=label;}
 }));
})();


