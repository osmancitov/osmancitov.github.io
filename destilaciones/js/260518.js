/* Destilería Osmancito — 260518.js */
/* Sistema Lightbox */

function abrirLightbox(elementoImg) {
    const lightbox = document.getElementById('lightbox');
    const imgLightbox = document.getElementById('imagen-lightbox');
    
    // Pasa la ruta y el texto alternativo de la imagen original al lightbox
    imgLightbox.src = elementoImg.src;
    imgLightbox.alt = elementoImg.alt;
    
    // Muestra el diálogo en modo nativo flotante
    lightbox.showModal();
}

function cerrarLightbox(evento) {
    const lightbox = document.getElementById('lightbox');
    
    // Cierra el lightbox solo si se hace tap en el fondo oscuro o en el botón 'X'
    if (evento.target === lightbox || evento.target.classList.contains('cerrar-lightbox')) {
        lightbox.close();
    }
}