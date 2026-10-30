# Rotar Historial

Rotar Historial es el nombre de este texto. Este texto está escrito para el lector cero: la persona o la máquina que lo lee sin haber leído nada más. Toda palabra tiene el significado del diccionario o el que este texto le da la primera vez que aparece.

## Qué es y para qué sirve

Es el procedimiento que, al terminar el día, pasa lo hecho del Status al Historial: a medianoche, lo de hoy pasa a ayer. El **Status**, en castellano «el estatus», es la página de la sala de máquinas que muestra lo que la asistente está haciendo. El **Historial de tareas** es la página que guarda los trabajos terminados hasta ayer, y el **Historial social** es la página que guarda lo hecho cada día en las redes. La **sala de máquinas** es la sala del sitio que guarda el funcionamiento de la asistente. El **sitio** es el conjunto de páginas publicadas bajo la dirección `https://osmancitov.github.io`; una **sala** es cada una de sus secciones, guardada en su propio **repositorio**, que es una carpeta que guarda archivos y el historial de sus cambios. El repositorio de la sala de máquinas se llama `maquinas`. La asistente es Instinct, que trabaja por Osmancito, el autor de las páginas.

## Cuándo

A medianoche, hora de Caracas. La hora de Caracas es UTC-4: cuatro horas detrás del tiempo universal coordinado.

## Qué se mueve

1. **Cada línea del borrador del día pasa al principio del Historial de tareas** como un bloque: un título breve que nombra el trabajo, la fecha en palabras y el detalle en prosa, y el enlace «Leer» a la página del trabajo. El **borrador del día** es un comentario al final del archivo md del Historial de tareas, donde durante el día se anota cada trabajo terminado con su fecha, su título, su detalle y su enlace opcional, separados por barras verticales. Un **comentario** es un trozo del archivo que la página no muestra. Al pasar las líneas, el borrador queda vacío. Los bloques nuevos van arriba: la página ordena del más reciente al más antiguo. Si la página de un trabajo se borró, el bloque la menciona como texto, sin enlace.
2. **La sección «Sociales» pasa entera al Historial social**, bajo un encabezado con la fecha del día que cierra, del día más reciente al más antiguo.
3. **El Status se ajusta**: conserva lo que sigue corriendo, los automáticos diarios y lo pendiente de Osmancito; «Hecho hoy» y «Sociales» quedan en «Nada todavía.» y la línea de fecha y hora se reescribe.

## Los archivos

Cada página vive en dos archivos fijos, **gemelos**, que dicen lo mismo y cambian siempre juntos: un archivo **md**, el texto con marcas simples, y un archivo **html**, la página que se abre en un navegador.

- Status: `md/261013_status.md` y `html/261013_status.html`.
- Historial de tareas: `md/261013_historial.md` y `html/261013_historial.html`.
- Historial social: `md/261015_historial-social.md` y `html/261015_historial-social.html`.

El Historial de tareas abre diciendo que guarda los trabajos terminados hasta ayer, del más reciente al más antiguo.

En el html del Historial de tareas, cada bloque va dentro de una etiqueta `article` y su fecha va en un párrafo con la **clase** `fecha`. Una **etiqueta** es una marca del lenguaje de las páginas que dice dónde empieza y dónde termina cada parte, y una **clase** es el nombre que se pone a una pieza para que la hoja de estilos le dé su apariencia. El separador entre bloques y el tamaño y el color de la fecha los define `base.css`: el html no lleva un bloque `style` propio.

## Publicar

1. Antes de cambiar nada se trae del repositorio la versión más reciente, y al terminar se suben los cambios. Después se comprueban las tres páginas ya publicadas, abiertas en un navegador. La ejecución es silenciosa: se escribe a Osmancito solo si algo falla.
2. Los archivos gemelos cambian juntos. La apariencia de las páginas la da la **hoja de estilos** común del sitio, el archivo `base.css`, que define colores, letras y espacios de todas las páginas; ninguna página lleva estilos propios que la contradigan.
3. Cada **commit**, que es el registro de un cambio en el repositorio, se firma con el correo personal de Osmancito como autor y como committer, que es quien registra el cambio. Si no se puede firmar así, el trabajo se detiene y se avisa.
4. Todo texto público cumple el dominio cero: cada palabra con el significado del diccionario o definida en su primera aparición.

## Cambios

30 de octubre de 2026: la fecha de la versión anterior, 23 de octubre de 2026, que abría el archivo, pasa a esta sección porque la primera línea es solo el título. Su comprobación de las tres páginas publicadas sigue en «Publicar». A pedido de Osmancito.

© 2026 Osmancito
