9 de octubre de 2026

# La memoria de la casa

Esta entrada reúne los valores, los principios y las convenciones del sitio. Sirve para ponerse al tanto sin recordar las conversaciones que lo levantaron. Si se pierde el hilo, se empieza aquí.

## Lo primero es lo que se viene a leer

El foco es el corpus, no el aparataje: la obra que estamos leyendo, no las herramientas usadas para trabajarla. Quien viene por Macbeth quiere Macbeth.

En Destilería, y sobre todo en Bodega, se sirve el destilado: la bebida lista para consumir. La explicación de las máquinas, las pruebas y los detalles técnicos pertenece al Taller, a los Protocolos o a otros repositorios de trabajo. No debe atravesarse entre el lector y la obra.

El estilo actual de la casa tiene que plantarse al lado del antiguo sin titubear. La vitrina de Bodega 2603 queda como vitrina al pasado: referencia de museo, para tomar en cuenta o superar, no como molde que debamos repetir. Las nuevas bodegas siguen el estilo actual.

## Qué guarda cada sala

Esta casa es un conjunto de textos, inspirado en Unix: archivos que se pueden abrir, copiar y llevar a otra parte. Las carpetas forman un árbol; cada sala puede tener sus propios cuartos.

- **Lobby**: la entrada y la memoria del sitio entero.
- **Destilería**: los textos destilados. Sus bodegas guardan lo listo para leer; los Protocolos reúnen los instrumentos de trabajo.
- **Taller**: cuadernos de estudio, pruebas, preguntas y herramientas. Aquí sí cabe explicar cómo se hizo algo.
- **Journal**: lo vivido, pensado y conversado durante los días, contado en prosa.
- **Capilla**: las lecturas para la oración y el recogimiento. El contenido devocional vive aquí, no en el Journal.

Cada sala tiene su propio repositorio. El del Lobby se llama `osmancitov.github.io`; los otros, `destileria`, `taller`, `journal` y `capilla`. Cada sala empieza explicando su nombre y qué guarda. Un cuarto bien dibujado se entiende solo.

## Para quien llega de cero

Se escribe para quien no sabe nada del trabajo previo y no tiene tiempo. Si necesita recordar una conversación para entender la página, falta explicar algo o sobra algo.

Español llano, directo al consumidor final. Primero lo que hay para él: qué puede leer y qué le aporta. Mejor pecar de simple que hacerle sentir que llegó tarde a una conversación de especialistas.

Se cuenta la línea recta hacia lo que funcionó. Los intentos fallidos no se convierten en una crónica obligatoria. Las cifras se redondean; las tablas largas y los detalles de taller solo aparecen donde ayudan a entender el asunto.

La casa no se firma en cada rincón. Cada cosa debe enseñar algo o hacer sentir algo; si no, sobra.

## La muda y la parlanchina

Cada sala tiene dos portadas:

- **La muda**, `index.html`: solo la imagen, sin títulos ni explicaciones. Un clic abre la parlanchina. La muda del Lobby reúne las imágenes de todas las salas; cada una abre la parlanchina correspondiente.
- **La parlanchina**, la página con el nombre de la sala: `lobby.html`, `destileria.html`, `taller.html`, `journal.html` o `capilla.html`. Cuenta qué es la sala y muestra sus entradas. Su imagen lleva a la página principal del repositorio.

La parlanchina refleja la introducción y la lista del README. El README es el índice dentro del repositorio; arriba lleva los enlaces a los README de las cinco salas, con la sala actual destacada.

## Leer sin bajar de la página

Cuando una entrada tiene HTML, su título en la parlanchina enlaza directamente a ese HTML. No se ofrece allí una segunda opción llamada "HTML" ni se añade un enlace al Markdown. Si la entrada todavía no tiene HTML, el título lleva al visor de GitHub, no al texto crudo.

El Markdown se conserva como archivo sencillo y portable; el HTML permite leerlo en el navegador y compartirlo con su título, descripción e imagen. Mismo texto, dos formas de abrirlo. Al corregir una entrada, se mantienen ambas al día.

Las bodegas tienen su propia vitrina. Desde `destileria.html` se entra directamente al `index.html` de la bodega, sin pasar por su README en GitHub.

Los regresos evitan repetir pasos:

- Al pie de cada parlanchina, **volver** lleva a la muda del Lobby.
- Al pie de una entrada, el regreso lleva a la parlanchina de su sala. En las lecturas de la Capilla dice **Capilla**.
- Al pie de la vitrina de una bodega, **volver** lleva a `destileria.html`, no a la muda de Destilería. Desde un destilado se regresa a su vitrina.

## Cada archivo en su cuarto

La raíz queda corta: README y las dos portadas. Las entradas van en `md/`, sus versiones para el navegador en `html/` y las imágenes en `img/`. Las bodegas conservan sus carpetas propias.

Las listas muestran lo más nuevo primero. Cada entrada nueva se añade al README y a la parlanchina; se enlaza al HTML cuando esté listo.

Los nombres de las entradas llevan fecha abreviada y dos o tres palabras separadas por guiones. El código cambia los números por letras: a es 0, b es 1, hasta j, que es 9. Así, 26-10-09 se vuelve `cgbaaj`. La fecha legible va al comienzo del texto. Las imágenes usan el mismo criterio, sin números de tanda como `1-` o `2-`.

## Tenga la bondad de ser liviano

Texto plano, fondo oscuro, pocas imágenes y el mínimo código necesario. Una página también ocupa tiempo y atención. Se quita lo que no hace falta.

El fondo actual es `#0d1117`, con texto claro y enlaces azules. Las páginas usan los datos de vista previa de Open Graph para compartir título, descripción e imagen; no llevan etiquetas de Twitter. El icono de la casa se comparte desde el Lobby.

Cada sala tiene una pintura de entrada y su propio pintor: De Chirico en el Lobby, Zurbarán en Destilería, Wright of Derby en Taller, Rembrandt en Journal y Georges de La Tour en Capilla. Las imágenes mantienen el formato de la casa: 1280 por 640, margen de seguridad y JPG al 80 %. Sus nombres son los de las salas, sin prefijos de generación.

## Mantener esta memoria

Cuando cambie una regla de la casa, se corrige esta entrada y su HTML. Se deja la regla vigente, no una pila de instrucciones contradictorias. Si cambian las salas o los caminos, también se actualizan sus índices y enlaces.

Esta página guarda cómo es la casa y cómo cuidarla. Los trabajos en curso y los asuntos privados no pertenecen aquí.
