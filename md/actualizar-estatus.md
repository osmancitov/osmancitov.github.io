23 de octubre de 2026

# Actualizar Estatus

Actualizar Estatus es el nombre de este procedimiento. Este texto está escrito para el lector cero: la persona o la máquina que lo lee sin haber leído nada más. Toda palabra tiene el significado del diccionario o el que este texto le da la primera vez que aparece.

## Qué es y para qué sirve

Es el procedimiento que mantiene al día el Status. El **Status**, en castellano «el estatus», es la página de la sala de máquinas que muestra lo que la asistente está haciendo. La **sala de máquinas** es la sala del sitio que guarda el funcionamiento de la asistente. El **sitio** es el conjunto de páginas publicadas bajo la dirección `https://osmancitov.github.io`; una **sala** es cada una de sus secciones, guardada en su propio **repositorio**, que es una carpeta que guarda archivos y el historial de sus cambios. El repositorio de la sala de máquinas se llama `maquinas`. La asistente es Instinct, que trabaja por Osmancito, el autor de las páginas.

## Cuándo

No es una tarea con horario. Se ejecuta cuando algo cambia durante el día: empieza, avanza o termina un trabajo, cambia lo que está pendiente de Osmancito, o hay actividad en los frentes sociales. También cada vez que él pide «actualiza el estatus».

## La página

El Status vive en dos archivos fijos: `md/cgbabd_status.md`, el texto con marcas simples, y `html/cgbabd_status.html`, la página que se abre en un navegador. Son gemelos: dicen lo mismo y cambian siempre juntos.

Lleva sus partes en este orden:

1. **El título**: «Estado actual».
2. **La firma**: «© 2026 Osmancito», el símbolo ©, el año de publicación y el nombre del autor.
3. **La fecha y la hora**, por ejemplo «23 de octubre de 2026, 01:13 UTC-4.». UTC-4 es la hora de Caracas: cuatro horas detrás del tiempo universal coordinado. Se escribe así, sin «Caracas» ni «Actualizado:».
4. **«Corriendo ahora»**: cada trabajo en marcha, con sus aciertos, lo que falta y el tiempo transcurrido.
5. **«Automáticos diarios»**: los trabajos que se ejecutan solos cada día, con su hora. La página dice el estado verdadero: quitar un automático de la lista significa que dejó de ejecutarse de verdad.
6. **«Hecho hoy»**: lo terminado hoy. Cada trabajo terminado se anota aquí como una viñeta y, a la vez, como una línea del **borrador del día**: un comentario al final del archivo md del Historial de tareas, que es la página que guarda los trabajos terminados hasta ayer. Un **comentario** es un trozo del archivo que la página no muestra. Cada línea del borrador guarda la fecha, el título, el detalle y el enlace opcional del trabajo, separados por barras verticales: `fecha | título | detalle | enlace`.
7. **«Sociales»**: la actividad del día en los frentes sociales: un renglón directo y corto por frente, unas 500 palabras en total.
8. **«Pendiente de Osmancito»**: lo que le toca a él. Si no hay nada, dice «Ninguno».
9. **La línea de contadores**, al pie. Los **contadores** son las cifras que cuentan la actividad del día.

## Los contadores

Una sola línea al pie, sin rótulos ni dos puntos, con las cifras del día, en este orden:

- 💬 los mensajes enviados por la asistente hoy.
- 🎙️ las palabras de voz transcritas hoy.
- ✉️ los correos que la asistente le envió hoy.
- 🎖️ las medallas escritas dentro de los mensajes de Osmancito hoy.

Solo cuentan las medallas 🎖 dentro de sus mensajes; las reacciones no cuentan. La línea se ve así: «💬 210 · 🎙️ 5.987 · ✉️ 5 · 🎖️ 10». Toda actualización del Status actualiza también los contadores.

## Publicar

En el Status y en los Historiales nunca se menciona la búsqueda de trabajo ni de clientes.

1. Los dos archivos gemelos cambian juntos. La apariencia de la página la da la **hoja de estilos** común del sitio, el archivo `base.css`, que define colores, letras y espacios de todas las páginas; ninguna página lleva estilos propios que la contradigan.
2. Cada **commit**, que es el registro de un cambio en el repositorio, se firma con el correo personal de Osmancito como autor y como committer, que es quien registra el cambio. Si no se puede firmar así, el trabajo se detiene y se avisa.
3. Todo texto público cumple el dominio cero: cada palabra con el significado del diccionario o definida en su primera aparición.

© 2026 Osmancito
