(()=>{
 const deadline=Date.parse('2026-10-02T23:59:00-04:00');
 const countdown=document.querySelector('[data-countdown]');
 function update(){const remaining=deadline-Date.now();if(remaining<=0){countdown.textContent='Applications for the Fall cohort are closed.';document.querySelectorAll('[data-apply]').forEach(a=>{a.removeAttribute('href');a.setAttribute('aria-disabled','true');a.textContent='Applications closed';});return;}const days=Math.ceil(remaining/86400000);countdown.textContent=days===1?'Less than 1 day left to apply':days+' days left to apply';}update();setInterval(update,60000);
 const sticky=document.querySelector('.sticky-apply'),hero=document.querySelector('#hero');const sync=()=>{sticky.hidden=hero.getBoundingClientRect().bottom>0||Date.now()>=deadline;};addEventListener('scroll',sync,{passive:true});addEventListener('resize',sync);sync();
 if(!matchMedia('(prefers-reduced-motion:reduce)').matches&&'IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.target.classList.toggle('visible',e.isIntersecting||e.target.contains(document.activeElement))),{threshold:0.04});document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('ready');observer.observe(el)});document.addEventListener('focusin',e=>e.target.closest('.reveal')?.classList.add('visible'));}
})();
