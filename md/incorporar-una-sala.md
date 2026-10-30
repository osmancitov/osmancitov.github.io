# Incorporar una sala

Incorporar una sala es el nombre de este texto. Este texto está escrito para el lector cero: la persona o la máquina que lo lee sin haber leído nada más. Toda palabra tiene el significado del diccionario o el que este texto le da la primera vez que aparece.

## Qué es y para qué sirve

Es el procedimiento que suma una sala nueva a la casa, desde el repositorio vacío hasta que las otras salas la nombran. La **casa**, o **sitio**, es el conjunto de páginas publicadas bajo la dirección `https://osmancitov.github.io`. Una **sala** es cada una de sus secciones, guardada en su propio **repositorio**, que es una carpeta que guarda archivos y el historial de sus cambios. El **autor** es Osmancito, dueño de la casa, y la **asistente** es Instinct, que trabaja por él.

Los términos de la sala se llaman así en este texto:

- El **nombre editorial** de la sala es su nombre escrito con mayúscula inicial en cada palabra, salvo en los artículos y las preposiciones, y con sus tildes. Ejemplo: «Tesorería».
- El **nombre del repositorio** es ese nombre en minúsculas y sin tildes. Ejemplo: `tesoreria`. En el resto del texto se escribe `<repo>`.
- La **puerta** es la imagen de la sala: el archivo `img/<repo>.jpg`.
- La **portada** es la página `index.html`, la que se abre al entrar a la dirección de la sala. Lleva solo la puerta, y la puerta lleva a la página de la sala.
- La **página de la sala** es el archivo `<repo>.html`. Repite el texto del README.
- El **README** es el texto que presenta el repositorio. Va en el archivo `README.md`.
- La **fila de navegación** es la primera línea de cada README: los nombres de todas las salas, unidos por puntos medios, cada uno con un enlace al README de su sala. La sala del README que se lee va en negrita y sin enlace.
- Una **entrada** es el conjunto de tres archivos que describe el documento Publicar una entrada: un archivo **md**, que guarda el texto con marcas simples; un archivo **html**, que es la página que se abre en un navegador; y un archivo **jpg**, que es una imagen.

Hasta hoy esta forma vivía en las salas ya hechas y en la memoria de la asistente, no en un texto. Este procedimiento la escribe una vez. Se tomó de las salas Social y Sala de máquinas y de la página principal de la casa, leídas el 28 de octubre de 2026.

## Cuándo

Cuando el autor pide una sala nueva y su repositorio ya existe. El nombre de la sala lo decide el autor; la asistente no lo inventa. Cada pedido incorpora una sala.

## Qué se abre antes

Se abren completos los documentos vigentes que este procedimiento necesita: el Dominio Cero, Publicar una entrada y el Pintor de Imágenes. Publicar una entrada describe la entrada común y no describe las portadas ni las páginas de la sala; este procedimiento cubre esa parte.

## Los pasos

1. Se comprueba el estado del repositorio: qué archivos tiene y si la dirección `https://osmancitov.github.io/<repo>/` abre. Un repositorio recién creado trae a veces un README de una línea, y se reemplaza.
2. Se escribe el README, con este orden: la fila de navegación con todas las salas y la nueva en negrita y sin enlace; el título con el nombre editorial; el texto que define la sala; y la sección «Entradas».
3. Se escribe el texto que define la sala. Dice qué significa el nombre de la sala y de dónde viene, con su fuente, y qué guarda la sala. Cada palabra cumple el Dominio Cero.
4. Se escribe una descripción de la sala de 100 caracteres como máximo. Es la misma en las etiquetas og de la portada y de la página de la sala.
5. Se pinta la puerta con el Pintor de Imágenes. Las puertas de las salas comparten una paleta oscura y cálida, y cada puerta tiene su propio pintor de la lista del Pintor, sin repetir el de otra sala. Mide 1280 píxeles de ancho por 640 de alto, es un archivo **jpg**, un formato de imagen, con calidad del 80 %, que es el ajuste de compresión que hace liviano el archivo, y lleva en una esquina inferior la etiqueta que el Pintor describe. Si la inteligencia artificial que genera la imagen no entrega la proporción de 2 a 1, se ajusta hasta ella conservando la composición: se elige qué parte de la imagen se quita de modo que no se corte ningún elemento ni la etiqueta, y se comprueba mirando la imagen final. Las puertas son ayudas de navegación y por eso son la excepción a lo que el Pintor fija para las demás imágenes, que es no recortarlas ni redimensionarlas y comprimirlas al 75 %: para la puerta manda este paso.
6. Se crean las tres carpetas: `md`, `html` e `img`. La puerta va en `img` con el nombre `<repo>.jpg`.
7. Se escribe la página de la sala, `<repo>.html`, y la portada, `index.html`. Se copian de una sala existente, y se cambian el nombre, la descripción, las direcciones y el texto alternativo de la imagen. Ambas llevan las **etiquetas og**, que son los datos de la cabecera de la página que dicen cómo se ve la tarjeta cuando alguien comparte el enlace; llevan también el enlace a `/css/base.css` y el icono `https://osmancitov.github.io/favicon.ico`. El título de la pestaña es el nombre editorial y «Osmancito». La imagen de la tarjeta es la puerta, con su ancho y su alto escritos. La página de la sala sigue el orden: la puerta, que enlaza al repositorio en GitHub; el título; el texto que define la sala; la lista de entradas, de la más nueva a la más vieja, con enlace a su html; y el enlace «volver» a la página principal. La portada lleva solo la puerta, enlazada a la página de la sala.
8. Se registra la sala en la casa. Se añade su nombre, con enlace, al final de la fila de navegación de cada README de las otras salas y del repositorio principal. En el repositorio principal, `osmancitov.github.io`, se añade además: su línea en la sección «Las salas» del README y en la página `lobby.html`; su puerta, al final de la portada `index.html`; y su nombre en la descripción de la casa de las etiquetas og de `index.html` y de `lobby.html`.
9. Se activa **GitHub Pages**, que es el servicio de GitHub que publica las páginas del repositorio como sitio web. Se publican desde la rama `main`, que es la línea principal del historial del repositorio, y su carpeta raíz. Se pone la dirección de la sala como sitio web en el panel «About» del repositorio. La imagen de la puerta se pone como imagen de vista previa en los ajustes del repositorio.
10. Se publica la primera entrada de la sala siguiendo Publicar una entrada. Se anota arriba del todo en la lista del README y en la página de la sala.
11. Se registra cada **commit**, que es el registro de un cambio en el repositorio, con la identidad de Osmancito como autor y como **committer**, que es quien registra el cambio. Esa identidad es el nombre y el correo personal que ya llevan los commits anteriores del repositorio, o, si el repositorio no tiene historial, los del repositorio principal `osmancitov.github.io`; el texto no escribe el correo, porque las páginas públicas no lo muestran. Antes del primer commit se comprueba la configuración de git. Si no se puede registrar esa identidad, el trabajo se detiene y se avisa. Tras cada envío de cambios a GitHub se comprueba en GitHub que autor y committer son esa identidad.

## Revisión antes de entregar

Antes de entregar, la sala pasa esta revisión entera, con las páginas abiertas:

1. **Dominio cero.** Cada palabra de los textos nuevos tiene el significado del diccionario o una definición en su primera aparición.
2. **README y página gemelos.** El texto de la página de la sala dice lo mismo que el README.
3. **Cada dirección abre.** La portada, la página de la sala, la puerta y cada entrada abren en la dirección publicada.
4. **La puerta.** Se mira la imagen final: tiene la proporción 2 a 1, la composición se conserva y la etiqueta se lee entera.
5. **La navegación.** Cada README, el del repositorio principal incluido, nombra la sala nueva con un enlace que abre.
6. **Las listas de la casa.** La sección «Las salas», `lobby.html` y la portada del repositorio principal incluyen la sala.
7. **La primera entrada.** Pasó la revisión de Publicar una entrada.
8. **Los commits.** Cada commit nuevo muestra en GitHub la identidad del autor, como autor y como committer.

La revisión dice qué encontró y qué se corrigió.

## Lo que este módulo no hace

1. No decide el nombre de la sala: eso lo decide el autor.
2. No cambia las demás salas más allá de su fila de navegación y de las listas del repositorio principal.
3. No fija una regla para el contenido de las entradas de la sala: cada sala puede tener su propio procedimiento de publicación.
4. No convierte dudas en reglas: lo que quede por decidir se anota como pregunta para el autor.

## Cambios

30 de octubre de 2026: el paso 5 dice que la puerta es la excepción a la regla de imágenes del Pintor de Imágenes, que ahora la recoge, en lugar de decir que el Pintor la deja fuera. A pedido de Osmancito.

© 2026 Osmancito
