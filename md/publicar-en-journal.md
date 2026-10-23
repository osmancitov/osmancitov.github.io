23 de octubre de 2026

# Publicar en Journal

Publicar en Journal es el nombre de este procedimiento. Este texto está escrito para el lector cero: la persona o la máquina que lo lee sin haber leído nada más. Toda palabra tiene el significado del diccionario o el que este texto le da la primera vez que aparece.

## Qué es y para qué sirve

Es el procedimiento que publica cada noche la entrada del día en el Journal. El **Journal** es la sala del sitio que guarda los días. El **sitio** es el conjunto de páginas publicadas bajo la dirección `https://osmancitov.github.io`; una **sala** es cada una de sus secciones, guardada en su propio **repositorio**, que es una carpeta que guarda archivos y el historial de sus cambios. El repositorio del Journal se llama `journal`.

## Cuándo

La entrada se va destilando durante el día, en goteo lento, es decir, poco a poco, y se arma al final, hacia las 23:00, hora de Caracas. La hora de Caracas es UTC-4: cuatro horas detrás del tiempo universal coordinado. Se publica directo, sin esperar confirmación. Una pieza escrita antes ese mismo día se funde en la entrada única del día. En un día flojo se publica una entrada mínima y digna: la cadena no se rompe. Una entrada atrasada se fecha en el día vivido.

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
5. **La firma**: «© 2026 Osmancito», el símbolo ©, el año de publicación y el nombre del autor.
6. **Las tres rúbricas fijas de cierre**. Una **rúbrica** es una línea con nombre propio que cierra la entrada: «Parte del día», «Lectura en curso» y «En la copa». En la copa se lee «una bebida de X»: una frase en positivo, sin negativas.

## Los archivos

Cada entrada tiene su archivo **md**, que guarda el texto con marcas simples, en la carpeta `md`; su archivo **html**, la página que se abre en un navegador, en la carpeta `html`; y su imagen **jpg**, un formato de imagen, en la carpeta `img`. El md y el html son **gemelos**: dicen lo mismo y cambian siempre juntos.

Los nombres llevan la fecha de la entrada en seis cifras: dos para el año (las dos últimas), dos para el mes y dos para el día. El 22 de octubre de 2026 es `261022`. Los tres archivos de la entrada llevan el mismo nombre: la fecha, un guion bajo y el título corto en minúsculas con guiones, cada uno con su terminación: `261022_dibujos-tramos-raya.md`, `261022_dibujos-tramos-raya.html` y `261022_dibujos-tramos-raya.jpg`.

La página html lleva sus **etiquetas og**, que son los datos de la cabecera que dicen cómo se ve la tarjeta cuando alguien comparte el enlace: su título, su descripción y su imagen. La apariencia la da la **hoja de estilos** común del sitio, el archivo `base.css`, que define colores, letras y espacios de todas las páginas; ninguna página lleva estilos propios que la contradigan.

## Publicar

1. La entrada nueva se anota arriba del todo en la lista del **README**, el texto que presenta el repositorio, y en la página de la sala, `journal.html`, que lo refleja. Las listas van de lo más nuevo a lo más viejo.
2. Se publica directo, sin esperar confirmación.
3. Cada **commit**, que es el registro de un cambio en el repositorio, se firma con el correo personal de Osmancito como autor y como committer, que es quien registra el cambio. Si no se puede firmar así, el trabajo se detiene y se avisa.
4. Todo texto público cumple el dominio cero: cada palabra con el significado del diccionario o definida en su primera aparición.

© 2026 Osmancito
