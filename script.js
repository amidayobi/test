
(function(){
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('backdrop');
  const openBtn = document.getElementById('menu-button');
  const closeBtn = document.getElementById('close-button');
  if(!drawer || !backdrop || !openBtn || !closeBtn) return;

  let lastFocused;

  const getFocusable = () => drawer.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');

  function openDrawer(){
    lastFocused = document.activeElement;
    drawer.classList.remove('hidden');
    requestAnimationFrame(()=>{
      drawer.classList.remove('-translate-x-[100%]');
      drawer.classList.add('translate-x-0');
    });
    backdrop.classList.remove('hidden');
    openBtn.setAttribute('aria-expanded','true');
    // Focus first focusable element
    const f = getFocusable();
    if(f.length) f[0].focus();
    document.addEventListener('keydown', onKeydown);
  }

  function closeDrawer(){
    drawer.classList.add('-translate-x-[100%]');
    drawer.classList.remove('translate-x-0');
    backdrop.classList.add('hidden');
    openBtn.setAttribute('aria-expanded','false');
    setTimeout(()=>{drawer.classList.add('hidden');}, 200);
    document.removeEventListener('keydown', onKeydown);
    if(lastFocused) lastFocused.focus();
  }

  function onKeydown(e){
    if(e.key === 'Escape'){ e.preventDefault(); closeDrawer(); return; }
    if(e.key === 'Tab'){
      const f = getFocusable();
      if(!f.length) return;
      const first = f[0];
      const last = f[f.length-1];
      if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    }
  }

  openBtn.addEventListener('click', ()=>{
    const expanded = openBtn.getAttribute('aria-expanded') === 'true';
    if(expanded) closeDrawer(); else openDrawer();
  });
  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
})();
