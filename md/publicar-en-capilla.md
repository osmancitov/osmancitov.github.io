23 de octubre de 2026

# Publicar en Capilla

Publicar en Capilla es el nombre de este procedimiento. Este texto está escrito para el lector cero: la persona o la máquina que lo lee sin haber leído nada más. Toda palabra tiene el significado del diccionario o el que este texto le da la primera vez que aparece.

## Qué es y para qué sirve

Es el procedimiento que publica cada mañana la lectura del día en la Capilla. La **Capilla** es la sala del sitio dedicada a la oración. El **sitio** es el conjunto de páginas publicadas bajo la dirección `https://osmancitov.github.io`; una **sala** es cada una de sus secciones, guardada en su propio **repositorio**, que es una carpeta que guarda archivos y el historial de sus cambios. El repositorio de la Capilla se llama `capilla`.

El trabajo empieza a las 04:30, hora de Caracas, para que la lectura esté servida a las 05:00. La hora de Caracas es UTC-4: cuatro horas detrás del tiempo universal coordinado.

## La fuente

Las lecturas se toman de la página que la Conferencia de los Obispos Católicos de los Estados Unidos publica cada día en castellano. Su dirección se arma con la fecha: `https://bible.usccb.org/es/bible/lecturas/`, seguida del mes, el día y el año con dos cifras cada uno, y terminada en `.cfm`. La del 23 de octubre de 2026 es `https://bible.usccb.org/es/bible/lecturas/102326.cfm`. Las celebraciones del día se comprueban en la página del calendario de esa misma fuente: `https://bible.usccb.org/es/readings/calendar`.

## La entrada

La **entrada** es la pieza que se publica cada día. Lleva sus partes en este orden:

1. **La fecha legible**, sola en la primera línea: «23 de octubre de 2026».
2. **El saludo de apertura**: «¡Buenos días!», en cursiva.
3. **El título**, tomado de la enseñanza del día.
4. **La antífona**: una cita breve de la Biblia, elegida de las lecturas del día y con su fuente verificada, que abre la entrada. Las antífonas se numeran en corrido, desde el 1, a lo largo de los días: el número va solo, en negrita, sobre la cita. La cita va en un **bloque de cita**, que en el texto plano son las líneas que empiezan con el signo `>`, y debajo solo su referencia con un enlace a la fuente: «Lucas 12,56. Fuente». Sin traducción, sin editorial y sin repetir el nombre del libro.
5. **El texto del día**: 75 palabras de prosa lírica, en presente de subjuntivo, primera persona del plural, sin encabezados ni introducción. Captura la enseñanza central del día integrando todas las lecturas, sin jerga religiosa.
6. **Los dos dibujos del texto del día**: uno literal, que muestra la escena que el texto dice, y uno encarnado, que hace visible su idea. Cada dibujo lleva debajo su nota de **lo sembrado**: los detalles puestos a propósito en la imagen, para el lector que mira despacio. La nota va justo debajo de su imagen, sin encabezado, y nombra solo lo que se sembró con intención: si un perro o un gato son ambientación, no se les arruina la fiesta a quien quiera verles un significado.
7. **El saludo del día**: «¡Feliz viernes 23 de octubre!», con el día de la semana, en negrita y cursiva, seguido de 😊🙋‍♂.
8. **Las memorias del día**. Una **memoria** es la celebración de un santo, y la **memoria opcional** es la que ese día puede celebrarse o no. Una fiesta del día, como la de una virgen o un santo de celebración obligatoria, lleva su propio texto del mismo modo y saluda «¡Feliz día de …!». Se cubren, además, todas las memorias opcionales del día, cada una con: su encabezado con el nombre y el título del santo («San Juan de Capistrano, presbítero»), el enlace «Lecturas de la memoria» a sus lecturas, su propio texto de 75 palabras con la misma voz del texto del día, su dibujo con su nota de lo sembrado y el saludo «¡Feliz memoria de san…!». Las memorias opcionales saludan con «feliz memoria de», no con «feliz día de».
9. **La firma**: «© 2026 Osmancito», el símbolo ©, el año de publicación y el nombre del autor. Osmancito es el autor de las entradas.

## Los dibujos

Los dibujos se hacen con el procedimiento de ilustración de la casa, el **Pintor de Imágenes**, que convierte un texto en el pedido de pintura para una inteligencia artificial que genera imágenes. Quien publica elige de la lista del procedimiento el pintor que mejor se parezca al ambiente del texto. El encargo de cada dibujo pide la proporción cinco a ocho, escrita 5:8, es decir, vertical: ocho partes de alto por cinco de ancho. La proporción se escribe en el texto del pedido de pintura, y la inteligencia artificial la respeta en su entrega. El Pintor entrega los pedidos de pintura y los dibujos se generan con el motor de imágenes interno de la plataforma de la asistente. El dibujo se publica tal como lo entrega la inteligencia artificial, sin recortar ni redimensionar, comprimido como JPG con calidad del 75 %, que es el ajuste de compresión que hace liviano el archivo. En la página, cada dibujo enlaza a su propio archivo, para abrirlo a tamaño completo con un clic, y su ancho y su alto se escriben en la página, para que no salte al cargar.

## Los archivos

Cada entrada tiene su archivo **md**, que guarda el texto con marcas simples, en la carpeta `md`; su archivo **html**, la página que se abre en un navegador, en la carpeta `html`; y sus imágenes **jpg**, un formato de imagen, en la carpeta `img`. El md y el html son **gemelos**: dicen lo mismo y cambian siempre juntos.

Los nombres llevan la fecha de la entrada en seis cifras: dos para el año (las dos últimas), dos para el mes y dos para el día. El 23 de octubre de 2026 es `261023`. La entrada se llama `261023_leer-tiempo`: la fecha, un guion bajo y el título corto en minúsculas con guiones. Cada imagen se llama con la fecha, el título de la entrada y el título propio de la imagen, unidos con guiones bajos: `261023_leer-tiempo_la-nube-del-poniente.jpg`.

La página html lleva sus **etiquetas og**, que son los datos de la cabecera que dicen cómo se ve la tarjeta cuando alguien comparte el enlace: su título, su descripción y su imagen. La apariencia la da la **hoja de estilos** común del sitio, el archivo `base.css`, que define colores, letras y espacios de todas las páginas; ninguna página lleva estilos propios que la contradigan.

## Publicar

1. La entrada nueva se anota arriba del todo en la lista del **README**, el texto que presenta el repositorio, y en la página de la sala, `capilla.html`, que lo refleja. Las listas van de lo más nuevo a lo más viejo.
2. Se publica directo, sin esperar confirmación.
3. Cada **commit**, que es el registro de un cambio en el repositorio, se firma con el correo personal de Osmancito como autor y como committer, que es quien registra el cambio. Si no se puede firmar así, el trabajo se detiene y se avisa.
4. Todo texto público cumple el dominio cero: cada palabra con el significado del diccionario o definida en su primera aparición.

© 2026 Osmancito
