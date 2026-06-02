/* Destilería Osmancito — 260415b.js */
/* Controles: tema claro/oscuro, progreso de lectura, TOC activo */

(function () {
  'use strict';

  /* ── Barra de progreso ─────────────────────────────────── */
  function initProgreso() {
    var barra = document.createElement('div');
    barra.id = 'barra-progreso';
    document.body.prepend(barra);

    function actualizar() {
      var scroll = window.scrollY || document.documentElement.scrollTop;
      var alto = document.documentElement.scrollHeight - window.innerHeight;
      var pct = alto > 0 ? (scroll / alto) * 100 : 0;
      barra.style.width = pct.toFixed(2) + '%';
    }

    window.addEventListener('scroll', actualizar, { passive: true });
    actualizar();
  }

  /* ── Botones flotantes ─────────────────────────────────── */
  function initBotones() {
    var contenedor = document.createElement('div');
    contenedor.id = 'barra-flotante';

    /* Tema */
    var btnTema = document.createElement('button');
    btnTema.className = 'btn-flotante';
    btnTema.textContent = 'Modo claro';
    var modoClaro = false;

    btnTema.addEventListener('click', function () {
      modoClaro = !modoClaro;
      document.body.classList.toggle('modo-claro', modoClaro);
      btnTema.textContent = modoClaro ? 'Modo oscuro' : 'Modo claro';
      try { localStorage.setItem('do-tema', modoClaro ? 'claro' : 'oscuro'); } catch(e) {}
    });

    /* Recuperar preferencia */
    try {
      if (localStorage.getItem('do-tema') === 'claro') {
        modoClaro = true;
        document.body.classList.add('modo-claro');
        btnTema.textContent = 'Modo oscuro';
      }
    } catch(e) {}

    /* Subir */
    var btnSubir = document.createElement('button');
    btnSubir.className = 'btn-flotante';
    btnSubir.textContent = '↑ Inicio';
    btnSubir.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    contenedor.appendChild(btnTema);
    contenedor.appendChild(btnSubir);
    document.body.appendChild(contenedor);
  }

  /* ── TOC: marcar sección activa ────────────────────────── */
  function initTOCActivo() {
    var secciones = document.querySelectorAll('[id]');
    var enlaces = document.querySelectorAll('#toc a[href^="#"]');
    if (!enlaces.length) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          enlaces.forEach(function(a) {
            a.style.color = '';
          });
          var activo = document.querySelector('#toc a[href="#' + id + '"]');
          if (activo) activo.style.color = 'var(--oro-claro, #e8c98a)';
        }
      });
    }, { rootMargin: '-10% 0px -80% 0px' });

    secciones.forEach(function(s) { observer.observe(s); });
  }

  /* ── Inicialización ────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initProgreso();
      initBotones();
      initTOCActivo();
    });
  } else {
    initProgreso();
    initBotones();
    initTOCActivo();
  }

})();
