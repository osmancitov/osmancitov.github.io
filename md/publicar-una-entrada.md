# Publicar una entrada

Una **entrada** es el conjunto de tres archivos que se agrega a un repositorio para publicar una página nueva. Un **repositorio** es una carpeta que guarda los archivos de un mismo tema y el historial de sus cambios. Este texto describe la entrada común. No describe las portadas ni las páginas que presentan un repositorio.

## Los archivos

Una entrada tiene tres archivos:

- Un archivo **md**, que guarda el texto con marcas simples. Va en la carpeta `md`.
- Un archivo **html**, que es la página que se abre en un navegador. Va en la carpeta `html`.
- Una imagen guardada como archivo **jpg**, que es un formato de imagen, con calidad del 75 %, que es el ajuste de compresión que hace liviano el archivo para que la página cargue rápido. Va en la carpeta `img`.

Los archivos md y html cambian siempre juntos: si cambia el texto en uno, cambia en el otro.

La imagen conserva su proporción: no se recorta ni se estira. Su ancho y su alto se escriben en la página, para que la página no salte al cargar.

## El nombre

Los tres archivos de una entrada llevan el mismo nombre, y cada uno termina en `.md`, `.html` o `.jpg`. Ese nombre no se repite en otra entrada.

El nombre tiene tres partes, en este orden: seis cifras, el guion bajo (`_`) y el título dentro de la página.

- Las seis cifras son la fecha de la entrada: dos cifras para el año (las dos últimas), dos para el mes y dos para el día.
- El título dentro de la página se escribe con guiones (`-`) en lugar de espacios.
- Todo el nombre se escribe en minúsculas.

Por ejemplo, una entrada del 22 de octubre de 2026 con el título dentro de la página «Publicar una entrada» se llama `261022_publicar-una-entrada`, y sus archivos son `261022_publicar-una-entrada.md`, `261022_publicar-una-entrada.html` y `261022_publicar-una-entrada.jpg`.

## Los dos títulos

Una entrada tiene dos títulos:

- El **título dentro de la página** es el título que se ve arriba, en la página misma.
- El **título de la pestaña** es el texto que el navegador muestra en la pestaña de la página. Es el título dentro de la página, un punto medio (`·`) y el **nombre editorial** del repositorio. El nombre editorial es el nombre del repositorio escrito con mayúscula inicial en cada palabra, salvo en los artículos y las preposiciones, y con sus tildes, seguido de «Osmancito», el autor del sitio. Ejemplos: «Destilería Osmancito», «Taller Osmancito», «Journal Osmancito», «Capilla Osmancito» y «Sala de Máquinas Osmancito». El título de la tarjeta, en cambio, es solo el título dentro de la página, porque en la tarjeta cabe poca información.

## Lo que muestra la página

La página muestra, en este orden:

1. La fecha, escrita con el día, el nombre del mes y el año, por ejemplo «12 de octubre de 2026».
2. El título dentro de la página.
3. La imagen.
4. El texto.
5. La firma, que es el símbolo ©, el año de publicación y el nombre Osmancito. Osmancito es el autor de las entradas.
6. Un enlace a la página que lleva el nombre del repositorio, que está en su carpeta principal. El enlace dice «volver» o el nombre del repositorio.

## Cómo se ve el enlace de la página

El **sitio** es el conjunto de páginas publicadas bajo la dirección `https://osmancitov.github.io`. Cuando alguien comparte el enlace de una página, las redes sociales muestran una tarjeta con el título de la pestaña, una descripción y una imagen. Una **etiqueta og** es un dato escrito en la cabecera de la página que dice cómo se ve esa tarjeta.

Cada página lleva sus propias etiquetas og. La imagen de la tarjeta es la primera imagen de la entrada. El título de la tarjeta es el título dentro de la página, sin el nombre editorial. La descripción es un texto de 100 caracteres como máximo que resume la entrada, y es la misma en la cabecera y en la tarjeta.

## El estilo

El archivo **base.css** es el archivo de estilo que comparten todas las páginas del sitio: dice cómo se ven. La página lo enlaza y no lleva estilo propio. Si la forma de las páginas debe cambiar, se cambia en `base.css`, y no en la página.

## La plantilla

Una **plantilla** es un modelo que se copia y se completa. Lo que está dentro de la plantilla es código: se copia tal cual, y solo se cambia lo escrito entre corchetes.

```html
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>[título dentro de la página] · [Nombre editorial]</title>
<meta name="description" content="[descripción]">
<link rel="icon" href="https://osmancitov.github.io/favicon.ico">
<meta property="og:type" content="article">
<meta property="og:locale" content="es_VE">
<meta property="og:title" content="[título dentro de la página]">
<meta property="og:description" content="[descripción]">
<meta property="og:url" content="https://osmancitov.github.io/[repositorio]/html/[nombre].html">
<meta property="og:image" content="https://osmancitov.github.io/[repositorio]/img/[nombre].jpg">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="[ancho]">
<meta property="og:image:height" content="[alto]">
<meta property="og:image:alt" content="[qué muestra la imagen]">
<link rel="stylesheet" href="/css/base.css">
</head>
<body>
<main>
<p>[día] de [mes] de [año]</p>
<h1>[título dentro de la página]</h1>
<a href="../img/[nombre].jpg"><img src="../img/[nombre].jpg" alt="[qué muestra la imagen]" width="[ancho]" height="[alto]"></a>
<p>[texto]</p>
<p>© [año] Osmancito</p>
</main>
<p><a href="../[repositorio].html">[volver]</a></p>
</body>
</html>
```

## Cambios

25 de octubre de 2026: el título de la pestaña vuelve a llevar un punto medio y el nombre del repositorio, ahora en forma editorial (mayúscula inicial en cada palabra, seguido de «Osmancito»: «Destilería Osmancito», «Journal Osmancito»). El título de la tarjeta sigue siendo solo el título dentro de la página. Sustituye el cambio siguiente en lo que toca a la pestaña. A pedido de Osmancito.

25 de octubre de 2026: el título de la pestaña y el de la tarjeta dejan de llevar, después del título de la página, un punto medio y el nombre del repositorio. Ahora son solo el título dentro de la página. A pedido de Osmancito.
