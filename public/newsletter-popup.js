(()=>{
 // Pause newsletter acquisition through the Oct 2 application deadline (Eastern time).
 if(Date.now()<Date.parse('2026-10-03T00:00:00-04:00'))return;
 const popup=document.querySelector('.newsletter-popup');if(!popup)return;
 const read=k=>{try{return sessionStorage.getItem(k)}catch{return null}},write=k=>{try{sessionStorage.setItem(k,'1')}catch{}};
 let shown=!!read('arena-newsletter-shown'),previousFocus;
 const application=()=>!!read('arena-application-flow')||/\/(signup|apply|application)(\/|$)/i.test(location.pathname);
 document.addEventListener('click',e=>{const a=e.target.closest('a');if(a&&a.href.startsWith('https://apply.arenatalent.com')){write('arena-application-flow');if(popup.open)popup.close();}},true);
 document.querySelectorAll('.newsletter-signup').forEach(f=>f.addEventListener('submit',()=>write('arena-newsletter-shown')));
 const show=()=>{if(shown||read('arena-newsletter-shown')||application()||document.hidden||document.querySelector('dialog[open]')||document.activeElement?.matches('input,textarea,select'))return;shown=true;write('arena-newsletter-shown');previousFocus=document.activeElement;popup.showModal();popup.querySelector('.newsletter-popup-close').focus();};
 popup.querySelector('.newsletter-popup-close').addEventListener('click',()=>popup.close());
 popup.addEventListener('close',()=>previousFocus?.focus());
 popup.addEventListener('click',e=>{if(e.target===popup){const b=popup.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)popup.close();}});
 const mobile=matchMedia('(hover:none), (pointer:coarse)');const ready=Date.now()+8000;
 document.addEventListener('mouseout',e=>{if(!mobile.matches&&Date.now()>ready&&!e.relatedTarget&&e.clientY<=0)show();});
 window.addEventListener('scroll',()=>{if(mobile.matches&&Date.now()>ready){const distance=document.documentElement.scrollHeight-innerHeight;if(distance>0&&scrollY/distance>=.6)show();}},{passive:true});
 setTimeout(()=>{if(mobile.matches)show();},45000);
})();
