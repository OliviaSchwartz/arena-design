(()=>{
 const viewport=document.querySelector('#member-carousel');if(!viewport)return;
 const cards=[...viewport.children],track=document.createElement('div');track.className='member-track';track.append(...cards);viewport.append(track);
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');let busy=false;
 const visible=()=>innerWidth<=600?1:innerWidth<=850?2:3;
 const update=()=>[...track.children].forEach((card,i)=>{card.inert=i>=visible();card.setAttribute('aria-hidden',String(i>=visible()));});
 function move(direction){
  if(busy)return;busy=true;
  const step=track.firstElementChild.getBoundingClientRect().width+20;
  track.style.transition='none';
  if(direction<0){track.prepend(track.lastElementChild);track.style.transform=`translateX(-${step}px)`;}
  const finish=()=>{if(direction>0)track.append(track.firstElementChild);track.style.transition='none';track.style.transform='none';busy=false;update();};
  if(reduced.matches){finish();return;}
  track.getBoundingClientRect();
  track.style.transition='transform 350ms ease';track.style.transform=direction>0?`translateX(-${step}px)`:'translateX(0)';
  setTimeout(finish,370);
 }
 document.querySelector('[data-member-prev]').addEventListener('click',()=>move(-1));
 document.querySelector('[data-member-next]').addEventListener('click',()=>move(1));
 let touchStart=null;
 viewport.addEventListener('touchstart',e=>{touchStart={x:e.touches[0].clientX,y:e.touches[0].clientY}},{passive:true});
 viewport.addEventListener('touchend',e=>{if(!touchStart)return;const dx=e.changedTouches[0].clientX-touchStart.x,dy=e.changedTouches[0].clientY-touchStart.y;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy))move(dx<0?1:-1);touchStart=null;},{passive:true});
 addEventListener('resize',()=>{if(!busy)update()});update();
})();
