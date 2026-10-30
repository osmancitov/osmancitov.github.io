# Publicar en Journal

Publicar en Journal es el nombre de este texto. Este texto está escrito para el lector cero: la persona o la máquina que lo lee sin haber leído nada más. Toda palabra tiene el significado del diccionario o el que este texto le da la primera vez que aparece.

## Qué es y para qué sirve

Es el procedimiento que publica cada noche la entrada del día en el Journal. El **Journal** es la sala del sitio que guarda los días. El **sitio**, también llamado la **casa**, es el conjunto de páginas publicadas bajo la dirección `https://osmancitov.github.io`; una **sala** es cada una de sus secciones, guardada en su propio **repositorio**, que es una carpeta que guarda archivos y el historial de sus cambios. El repositorio del Journal se llama `journal`. El **README** es el texto que presenta un repositorio.

## Cuándo

La entrada se arma al final del día, hacia las 23:00 UTC-4 (cuatro horas detrás del tiempo universal coordinado), y se escribe en **goteo lento**: destilada despacio, dejando que el día escurra, sin trabajo programado durante el día. Si una pieza se escribió antes ese mismo día, se funde en la entrada única del día. La hora de Caracas es UTC-4: cuatro horas detrás del tiempo universal coordinado. Se publica directo, sin esperar confirmación. En un día flojo se publica una entrada mínima y digna: la cadena no se rompe. Una entrada atrasada se fecha en el día vivido.

## La historieta lírica

La entrada es una **historieta lírica**: el día vivido, narrado, no reportado, escrito a partir del recuento del día. Que el incauto que la lea tenga la impresión de que la vida es bonita e interesante.

- **Vísceras, no canopes**: se escribe lo que aguanta el tiempo, sin números, versiones, nombres de aplicaciones ni marcas, y sin cantidades.
- **Sin materia devocional**: lecturas, rosario y santos son tema exclusivo de la Capilla, la sala del sitio dedicada a la oración.
- **Sin habla de amigos**: lo dicho en confianza no se cita en la entrada publicada.
- La prosa nombra a la asistente como «la asistente». La asistente es Instinct, que escribe la entrada por Osmancito, el autor. La descripción del Journal en su README y en la página de la sala nombra solo a Osmancito.
- «Ficha» es la palabra del Journal para la unidad de consumo de un motor de lenguaje, la que en inglés se llama token.
- La entrada lleva dentro una línea de ánimo: cómo cerró el ánimo del día.

## La estructura de la entrada

1. **La fecha legible**, sola en la primera línea: «22 de octubre de 2026».
2. **El título**: cuatro sustantivos descriptivos, sin artículos, como «Dibujos, tramos, raya y prueba».
3. **El dibujo**, justo tras el título: uno solo por entrada, hecho con el procedimiento de ilustración de la casa, el **Pintor de Imágenes**, que convierte un texto en el pedido de pintura para una inteligencia artificial que genera imágenes. El pintor del Journal es Rembrandt, por su claroscuro. El dibujo se publica tal como lo entrega la inteligencia artificial, sin recortar ni redimensionar, comprimido como JPG con calidad del 75 %, que es el ajuste de compresión que hace liviano el archivo; enlaza a su propio archivo para abrirlo a tamaño completo con un clic, y su ancho y su alto se escriben en la página.
4. **La historieta**.
5. **La firma**: «© 2026 Osmancito», el símbolo ©, el año de publicación y el nombre del autor. Cierra la historieta.
6. **La raya**: una línea horizontal que separa la historieta firmada de las rúbricas.
7. **Las tres rúbricas fijas de cierre**. Una **rúbrica** es una línea con nombre propio que cierra la entrada: «Parte del día», «Lectura en curso» y «En la copa». En la copa se lee «una bebida de X»: una frase en positivo, sin negativas. «Lectura en curso» nombra la obra que el autor está leyendo: su lectura personal se hace desde las páginas de la **Destilería**, la sala del sitio que destila libros y le sirve de visor y lector de textos, de modo que la lectura coincide con la obra editada o publicada allí ese día, según el historial de su repositorio. Si el día tuvo varias obras, la rúbrica las nombra a todas, cada una con su título y su autor. La obra se comprueba en los archivos cambiados y en las fuentes del día, no solo en los mensajes de los cambios registrados; los arreglos de la casa —estilos, índices, presentaciones— y los renombres de archivos no son obra. Que un día no registre cambios no prueba que no hubiera lectura: se busca en las fuentes del día si la lectura siguió de los días vecinos antes de declarar el hueco. La rúbrica no se copia de la entrada anterior; si el día no tuvo obra en la Destilería, o el historial no la deja resolver, se consulta antes de escribirla y no se inventa.

## Los archivos

Cada entrada tiene su archivo **md**, que guarda el texto con marcas simples, en la carpeta `md`; su archivo **html**, la página que se abre en un navegador, en la carpeta `html`; y su imagen **jpg**, un formato de imagen, en la carpeta `img`. El md y el html son **gemelos**: dicen lo mismo y cambian siempre juntos.

Los nombres llevan la fecha de la entrada en seis cifras: dos para el año (las dos últimas), dos para el mes y dos para el día. El 22 de octubre de 2026 es `261022`. La entrada es un solo nombre para sus tres archivos: la fecha, un guion bajo y el título corto en minúsculas con guiones, cada archivo con su terminación: `261022_dibujos-tramos-raya.md`, `261022_dibujos-tramos-raya.html` y `261022_dibujos-tramos-raya.jpg`. La entrada lleva una sola imagen. Si alguna entrada llevara imágenes adicionales, cada una añadiría su propio título: la fecha, el título de la entrada y el título de la imagen, unidos con guiones bajos, y la fecha sería la misma de la entrada para todas sus imágenes.

La página html lleva sus **etiquetas og**, que son los datos de la cabecera que dicen cómo se ve la tarjeta cuando alguien comparte el enlace: su título, su descripción y su imagen. La imagen de la tarjeta es la primera imagen de la entrada. La apariencia la da la **hoja de estilos** común del sitio, el archivo `base.css`, que define colores, letras y espacios de todas las páginas; ninguna página lleva estilos propios que la contradigan.

## Revisión antes de entregar

Antes de publicar, se comprueba con la entrada a la vista:

1. **Fecha y título.** La fecha es la del día vivido y el título son cuatro sustantivos descriptivos, sin artículos.
2. **Dibujo.** Hay un solo dibujo, hecho con el pintor del Journal, sin recortar ni redimensionar, con enlace a su archivo y su ancho y su alto escritos en la página.
3. **Historieta.** Narra el día, sin números, versiones, aplicaciones, marcas ni cantidades; no lleva materia devocional ni habla de amigos; nombra a la asistente como «la asistente»; usa «ficha» para el token y lleva su línea de ánimo.
4. **Estilo.** Elementos de Estilo se aplica con una excepción de género: la prosa lírica que este texto pide manda sobre cualquier consejo que la contradiga, y los demás consejos siguen valiendo.
5. **Cierre.** La firma cierra la historieta, la raya la separa de las tres rúbricas y las tres rúbricas están.
6. **Lectura en curso.** La obra se comprobó en los archivos cambiados y en las fuentes del día, no solo en los mensajes de los cambios, y no se copió de la entrada anterior.
7. **Archivos.** El md y el html dicen lo mismo, los nombres llevan la fecha en seis cifras, la página lleva sus etiquetas og y la hoja de estilos común, y la lista del README y la de `journal.html` llevan la entrada arriba.
8. **Dominio Cero.** Cada palabra del texto tiene el significado del diccionario o una definición en su primera aparición.
9. **Página publicada.** Después de subir los cambios, la dirección de la entrada abre y muestra la entrada completa, con su imagen.

## Publicar

1. La entrada nueva se anota arriba del todo en la lista del README, y en la página de la sala, `journal.html`, que lo refleja. Las listas van de lo más nuevo a lo más viejo.
2. Se publica directo, sin esperar confirmación.
3. Cada **commit**, que es el registro de un cambio en el repositorio, se firma con el correo personal de Osmancito como autor y como committer, que es quien registra el cambio. Si no se puede firmar así, el trabajo se detiene y se avisa.
4. Todo texto público cumple el dominio cero: cada palabra con el significado del diccionario o definida en su primera aparición.

## Cambios

30 de octubre de 2026: se añade «Revisión antes de entregar», que reúne los controles que estaban repartidos en el texto y comprueba la página ya publicada, y se dice cómo se aplica Elementos de Estilo a la historieta lírica. La fecha de la versión anterior, 23 de octubre de 2026, que abría el archivo, pasa a esta sección porque la primera línea es solo el título. A pedido de Osmancito.

30 de octubre de 2026: define «casa» y «README» donde aparecen por primera vez y reemplaza «este módulo» por «este texto». A pedido de Osmancito.

30 de octubre de 2026: la hora se nombra solo con UTC-4, sin «hora de Caracas», como prefiere Osmancito. A pedido de Osmancito.

© 2026 Osmancito
