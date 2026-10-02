(()=>{
 const sticky=document.querySelector('.sticky-apply'),hero=document.querySelector('#hero');const sync=()=>{sticky.hidden=hero.getBoundingClientRect().bottom>0;};addEventListener('scroll',sync,{passive:true});addEventListener('resize',sync);sync();
 if(!matchMedia('(prefers-reduced-motion:reduce)').matches&&'IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.target.classList.toggle('visible',e.isIntersecting||e.target.contains(document.activeElement))),{threshold:0.04});document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('ready');observer.observe(el)});document.addEventListener('focusin',e=>e.target.closest('.reveal')?.classList.add('visible'));}
})();
