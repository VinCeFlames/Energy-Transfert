/* Energy Transfert · cartographie, fiches et animations. */
const board=document.getElementById('board');
const svg=document.getElementById('links');
const dialog=document.getElementById('profile');
const nodeEls=new Map();
const positions=[
 ['57%','69px','-2deg'],
 ['25%','387px','1deg'],['46%','387px','-1deg'],['67%','387px','2deg'],['88%','387px','-1deg'],
 ['23%','759px','-2deg'],['40%','759px','1deg'],['57%','759px','-1deg'],['74%','759px','1.5deg'],['91%','759px','-1.5deg']
];
const escapeText=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const firstName=name=>String(name||"").trim().split(/\s+/)[0]||"";
let highlighted=null;
let scheduled=false;
let lastLayout='';
let animationsEnabled=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function build(){
 people.forEach((p,i)=>{
  const e=document.createElement('button');e.type='button';e.className='person';
  e.dataset.i=String(i);
  e.setAttribute('aria-label',`Ouvrir le dossier de ${p.name}`);
  e.style.setProperty('--x',positions[i][0]);
  e.style.setProperty('--y',positions[i][1]);
  e.style.setProperty('--tilt',positions[i][2]);
  const displayName=p.displayName||firstName(p.name);const pseudoHtml=p.pseudo?`<span class="pseudo-line"><span class="pseudo-label">PSEUDO</span><span class="pseudo-value">« ${escapeText(p.pseudo)} »</span></span>`:"";e.innerHTML=`<img src="${p.image}" alt="" loading="eager"><div class="card-no"><span>${i===0?'DIRECTION':i<5?'ENCADREMENT':'PERSONNEL DE TERRAIN'}</span><span>${String(i+1).padStart(2,'0')}</span></div><strong>${escapeText(displayName)}</strong>${pseudoHtml}<span class="alias">${escapeText(p.role)}</span><span class="open-link">VOIR LE DOSSIER ↗</span>`;
  e.addEventListener('click',()=>openProfile(p));
  e.addEventListener('pointerenter',()=>setHighlight(p.id));
  e.addEventListener('pointerleave',()=>setHighlight(null));
  e.addEventListener('focus',()=>setHighlight(p.id));
  e.addEventListener('blur',()=>setHighlight(null));
  board.append(e);nodeEls.set(p.id,e);
 });
 updateToggle();
 scheduleDraw();
}
function updateToggle(){
 document.body.classList.toggle('effects-off',!animationsEnabled);
 const toggle=document.getElementById('fx-toggle');
 toggle.textContent=animationsEnabled?'● EFFETS ACTIFS':'○ EFFETS EN PAUSE';
 toggle.setAttribute('aria-pressed',String(animationsEnabled));
 toggle.setAttribute('aria-label',animationsEnabled?'Désactiver les animations':'Activer les animations');
}
function setHighlight(id){
 highlighted=id;
 // Keeping SVG nodes intact avoids resetting their animation on hover/focus.
 for(const element of svg.querySelectorAll('[data-related]')){
  const related=element.dataset.related.split(' ');
  element.classList.toggle('active',Boolean(id&&related.includes(id)));
 }
}
function scheduleDraw(){
 if(scheduled)return;
 scheduled=true;
 requestAnimationFrame(()=>{scheduled=false;drawLinks()});
}
function center(el,bounds){
 const r=el.getBoundingClientRect();
 return {x:r.left-bounds.left+r.width/2,top:r.top-bounds.top,bottom:r.bottom-bounds.top};
}
function drawLinks(){
 if(nodeEls.size!==people.length)return;
 const bounds=board.getBoundingClientRect();
 const boss=center(nodeEls.get('ET-001'),bounds);
 const heads=people.slice(1,5).map(p=>center(nodeEls.get(p.id),bounds));
 const team=people.slice(5).map(p=>center(nodeEls.get(p.id),bounds));
 const mobile=window.matchMedia('(max-width:1180px)').matches;
 const layoutKey=[Math.round(bounds.width),Math.round(bounds.height),mobile, ...people.map(p=>{
  const r=nodeEls.get(p.id).getBoundingClientRect();
  return `${Math.round(r.left)}:${Math.round(r.top)}:${Math.round(r.height)}`
 })].join('|');
 if(layoutKey===lastLayout)return;
 lastLayout=layoutKey;
 const elements=[];
 const F=n=>Number(n.toFixed(2));
 let index=0;
 const safeIds=ids=>ids.join(' ');
 function path(d,ids=[]){
  const associated=safeIds(ids);
  const active=Boolean(highlighted&&ids.includes(highlighted));
  elements.push(`<path class="cord${active?' active':''}" data-related="${associated}" d="${d}"/>`);
  // Animated signal follows the exact same d path as the stationary red thread.
  elements.push(`<path class="cord-energy${active?' active':''}" data-related="${associated}" d="${d}" style="--wire-speed:${(5.1+(index%3)*.95).toFixed(1)}s;animation-delay:-${((index%4)*1.15).toFixed(2)}s"/>`);
  index++;
 }
 function tack(x,y){
  const cx=F(x),cy=F(y);
  elements.push(`<circle class="tack-halo" cx="${cx}" cy="${cy}" r="8"/>`);
  elements.push(`<circle class="tack" cx="${cx}" cy="${cy}" r="4"/>`);
 }
 if(mobile){
  // One single hierarchy spine. Branches run from the spine toward each card.
  // The spine is intentionally behind the headings and never implies an individual manager.
  const spine=F(bounds.width/2);
  const pairs=[[heads[0],heads[1]],[heads[2],heads[3]],
               [team[0],team[1]],[team[2],team[3]]];
  const ys=pairs.map(pair=>F(Math.min(pair[0].top,pair[1].top)-23));
  const bottom=F(team[4].top+5);
  const startY=F(boss.bottom-4);
  const everyone=people.map(p=>p.id);
  path(`M ${spine} ${startY} L ${spine} ${bottom}`,everyone);
  pairs.forEach((pair,row)=>{
   const railY=ys[row];
   pair.forEach((node,j)=>{
    const personIndex=row<2?1+row*2+j:5+(row-2)*2+j;
    const id=people[personIndex].id;
    // From the central junction to the fixed pin directly above that portrait.
    path(`M ${spine} ${railY} L ${F(node.x)} ${railY} L ${F(node.x)} ${F(node.top+5)}`,[id]);
    tack(node.x,node.top+5);
   });
  });
  tack(boss.x,startY);
  tack(team[4].x,bottom);
 }else{
  // Desktop: direction -> four heads, then their shared level -> five field staff.
  // No individual supervisor assignments are implied by the shared horizontal rail.
  heads.forEach((h,i)=>{
   const y1=F(boss.bottom-4),y2=F(h.top+6);
   path(`M ${F(boss.x)} ${y1} C ${F(boss.x)} ${F(y1+100)}, ${F(h.x)} ${F(y2-95)}, ${F(h.x)} ${y2}`,[people[0].id,people[i+1].id]);
   tack(h.x,y2);
  });
  tack(boss.x,boss.bottom-4);
  const railY=724;
  const xs=team.map(t=>t.x);
  path(`M ${F(Math.min(...xs))} ${railY} L ${F(Math.max(...xs))} ${railY}`,people.slice(5).map(p=>p.id));
  heads.forEach((h,i)=>{
   const y=F(h.bottom-4);
   path(`M ${F(h.x)} ${y} L ${F(h.x)} ${railY}`,[people[i+1].id]);
   tack(h.x,y);
  });
  team.forEach((t,i)=>{
   const pinY=F(t.top+5);
   path(`M ${F(t.x)} ${railY} L ${F(t.x)} ${pinY}`,[people[i+5].id]);
   tack(t.x,pinY);
  });
 }
 svg.innerHTML=elements.join('');
}
function openProfile(p){
 const $=id=>document.getElementById(id);
 $('profile-photo').src=p.image;
 $('profile-photo').alt=`${p.photoStatus} — ${p.name}`;
 $('profile-id').textContent=`DOSSIER ${p.id} · PROFIL À COMPLÉTER`;
 $('profile-name').textContent=p.displayName||firstName(p.name);
 $('profile-alias').hidden=!p.pseudo;
 $('profile-alias').innerHTML=p.pseudo?`<span class="pseudo-label">PSEUDO</span><span class="profile-pseudo">« ${escapeText(p.pseudo)} »</span>`:'';
 $('profile-role').textContent=p.role;
 $('profile-level').textContent=p.level;
 $('profile-description').textContent=p.description;
 $('profile-qualities').innerHTML=p.qualities.map(t=>`<li>${escapeText(t)}</li>`).join('');
 $('profile-faults').innerHTML=p.faults.map(t=>`<li>${escapeText(t)}</li>`).join('');
 $('profile-quote').textContent=p.quote;
 $('profile-quote').hidden=!p.quote;
 dialog.showModal();
}
document.getElementById('close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.getElementById('fx-toggle').addEventListener('click',()=>{animationsEnabled=!animationsEnabled;updateToggle()});
window.addEventListener('resize',scheduleDraw,{passive:true});
window.addEventListener('orientationchange',scheduleDraw,{passive:true});
build();
if('ResizeObserver' in window){
 const ro=new ResizeObserver(scheduleDraw);
 ro.observe(board);
 nodeEls.forEach(el=>ro.observe(el));
}
