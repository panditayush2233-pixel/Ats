const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
window.addEventListener('load',()=>setTimeout(()=>document.querySelector('.loader').classList.add('hide'),1200));

const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{
  entries.forEach((entry,i)=>{if(entry.isIntersecting){setTimeout(()=>entry.target.classList.add('visible'),i*70);observer.unobserve(entry.target)}});
},{threshold:.12});
reveals.forEach(el=>observer.observe(el));

const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

function sendMail(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const message=document.getElementById('message').value.trim();
  const subject=encodeURIComponent('Portfolio project enquiry from '+name);
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href=`mailto:shaadzshn@gmail.com?subject=${subject}&body=${body}`;
}

/* EASY EDIT MODE:
   Change the text in index.html.
   Replace assets/profile.png with another portrait using the same filename.
   Change colors/spacing/animations in style.css.
   Change the email in index.html + sendMail() above.
*/

// ===== Scroll-driven face-forward effect =====
const hero=document.querySelector('.hero'), portrait=document.querySelector('.portrait-bg');
const shades=document.querySelector('.sunglasses'), hand=document.querySelector('.gesture-hand');
function cinematicScroll(){
 if(!hero||!portrait)return;
 const rect=hero.getBoundingClientRect(), max=Math.max(1,hero.offsetHeight-innerHeight);
 const p=Math.min(1,Math.max(0,-rect.top/max));
 portrait.style.transform=`translate3d(${-p*1.5}% ,${-p*3}%,0) scale(${1+p*.23})`;
 const sp=Math.min(1,Math.max(0,(p-.12)/.42));
 shades.style.opacity=sp;
 shades.style.transform=`translate(-50%,calc(-50% + ${18-sp*18}px)) scale(${.78+sp*.25}) rotate(${-3+sp*3}deg)`;
 const hp=Math.min(1,Math.max(0,(p-.28)/.48));
 hand.style.opacity=hp;
 hand.style.transform=`translate(-50%,${30-hp*30}%) rotate(${-8+hp*8}deg) scale(${.75+hp*.25})`;
 hero.classList.toggle('scrolled',p>.05);
}
addEventListener('scroll',cinematicScroll,{passive:true}); addEventListener('resize',cinematicScroll); cinematicScroll();
