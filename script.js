const $=(s,c=document)=>c.querySelector(s);const $$=(s,c=document)=>[...c.querySelectorAll(s)];

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.12});
$$('.reveal').forEach(el=>observer.observe(el));

const menuButton=$('[data-menu-button]');const mobileNav=$('[data-mobile-nav]');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'Open menu':'Close menu');mobileNav.classList.toggle('open',!open)});
$$('a',mobileNav).forEach(link=>link.addEventListener('click',()=>{menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open menu');mobileNav.classList.remove('open')}));

const mediumData={write:{number:'01',copy:'For the thought that needs a line, and the line that becomes a thought.'},sketch:{number:'02',copy:'Quiet geometry to help proportion find its place.'},ink:{number:'03',copy:'A smooth ground for crisp lines, fluid gestures and deliberate detail.'},paint:{number:'04',copy:'A natural-toned field for colour studies and light, expressive washes.'}};
$$('[data-medium]').forEach(button=>button.addEventListener('click',()=>{const medium=button.dataset.medium;$$('[data-medium]').forEach(item=>item.setAttribute('aria-selected',String(item===button)));$('[data-paper-demo]').dataset.medium=medium;$('[data-demo-number]').textContent=mediumData[medium].number;$('[data-demo-copy]').textContent=mediumData[medium].copy}));

const editions={waves:{image:'assets/images/waves-front.webp',alt:'Blue Waves Prime Series notebook standing against a white background',label:'Waves / Mineral blue'},geometric:{image:'assets/images/geometric.webp',alt:'Brown Geometric notebook with concentric black linework',label:'Geometric / Terracotta'}};
$$('[data-select-edition]').forEach(button=>button.addEventListener('click',()=>{const key=button.dataset.selectEdition;const image=$('[data-hero-image]');document.body.dataset.edition=key;image.style.opacity='0';setTimeout(()=>{image.src=editions[key].image;image.alt=editions[key].alt;$('[data-edition-label]').textContent=editions[key].label;image.style.opacity='1';window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})},250)}));


const tilt=$('[data-tilt]');if(matchMedia('(pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){tilt.addEventListener('pointermove',event=>{const rect=tilt.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width-.5;const y=(event.clientY-rect.top)/rect.height-.5;tilt.style.setProperty('--ry',`${x*3}deg`);tilt.style.setProperty('--rx',`${y*-3}deg`)});tilt.addEventListener('pointerleave',()=>{tilt.style.setProperty('--ry','0deg');tilt.style.setProperty('--rx','0deg')})}

$$('details').forEach(item=>item.addEventListener('toggle',()=>{if(item.open)$$('details').filter(other=>other!==item).forEach(other=>other.open=false)}));
$('[data-year]').textContent=new Date().getFullYear();
