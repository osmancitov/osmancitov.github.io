/* DESTILERÍA OSMANCITO — Sistema de tema */

(function() {
  /* --- Aplicar tema antes del primer render --- */
  var guardado    = localStorage.getItem('tema-destileria');
  var prefiereLuz = window.matchMedia('(prefers-color-scheme: light)').matches;
  var tema        = guardado || (prefiereLuz ? 'luz' : 'sombra');
  var hoja        = document.getElementById('hoja-estilo');

  hoja.href = tema === 'luz'
    ? 'https://osmancitov.github.io/destilados/stl/260414c.css'
    : 'https://osmancitov.github.io/destilados/stl/260414b.css';

  document.documentElement.setAttribute('data-tema', tema);

  /* --- Inyectar botón al cargar el DOM --- */
  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.createElement('button');
    btn.id              = 'btn-tema';
    btn.title           = 'Cambiar modo';
    btn.setAttribute('aria-label', 'Cambiar modo de lectura');
    btn.textContent     = tema === 'luz' ? '☽' : '☀';
    btn.addEventListener('click', alternarTema);
    document.body.appendChild(btn);
  });
})();

function alternarTema() {
  var actual = document.documentElement.getAttribute('data-tema');
  var nuevo  = actual === 'luz' ? 'sombra' : 'luz';
  var hoja   = document.getElementById('hoja-estilo');

  hoja.href = nuevo === 'luz'
    ? 'https://osmancitov.github.io/destilados/stl/260414c.css'
    : 'https://osmancitov.github.io/destilados/stl/260414b.css';

  document.documentElement.setAttribute('data-tema', nuevo);
  document.getElementById('btn-tema').textContent = nuevo === 'luz' ? '☽' : '☀';
  localStorage.setItem('tema-destileria', nuevo);
}