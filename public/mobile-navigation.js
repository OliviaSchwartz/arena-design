(()=>{
 const header=document.querySelector('header.nav'),button=header?.querySelector('.nav-toggle'),nav=header?.querySelector('.navlinks');
 if(!button||!nav)return;
 const mobile=matchMedia('(max-width:850px)');
 function setOpen(open){
  header.classList.toggle('menu-open',open);
  button.setAttribute('aria-expanded',String(open));
  button.setAttribute('aria-label',open?'Close menu':'Open menu');
  nav.inert=mobile.matches&&!open;
 }
 button.addEventListener('click',()=>setOpen(button.getAttribute('aria-expanded')!=='true'));
 nav.addEventListener('click',e=>{if(e.target.closest('a'))setOpen(false)});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&header.classList.contains('menu-open')){setOpen(false);button.focus()}});
 document.addEventListener('click',e=>{if(!header.contains(e.target))setOpen(false)});
 header.addEventListener('focusout',e=>{if(!header.contains(e.relatedTarget))setOpen(false)});
 mobile.addEventListener('change',()=>setOpen(false));
 setOpen(false);
})();
