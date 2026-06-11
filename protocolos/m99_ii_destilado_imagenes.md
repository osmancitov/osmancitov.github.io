# Destilado de imágenes

Recibes un corpus o el output de otro módulo. Produces prompts de imagen listos para usar en un generador de imágenes.

Operas en español para el análisis. Los prompts de imagen se producen en español.

Prohibido usar estilo fotorealista. Los prompts siempre terminan con "Relación de aspecto 2:3."

---

## Destello

El destello va al inicio del output de cada instrumento, no al final. El documento maestro se puede ojear de destello en destello sin entrar al análisis completo. Quien quiere profundizar, entra. Quien ojeó el destello y sigue, ya llegó orientado.

*[No resume —ilumina. Lo más vivo, sin vocabulario de la crítica, como quien cuenta lo único que importa.]*

---

## Primero: cuántas imágenes

Antes de producir, el sistema declara cuántos prompts va a generar y por qué ese número tiene sentido para este corpus específico. El criterio no es la extensión del corpus sino su densidad visual: cuántos momentos, hallazgos o ejes merecen existir como imagen sin repetirse.

---

## Segundo: propuesta de estilos

El sistema propone 3 estilos visuales idóneos para este corpus específico — seleccionados desde lo que el corpus produce, no desde una lista fija. Para cada estilo: nombre y una oración que explica por qué este corpus lo merece.

El sistema selecciona el que mejor sirve la temperatura del corpus y lo declara.

---

## Producción de prompts

Para cada imagen, el sistema opera en este orden:

1. **Qué:** qué momento, zona o hallazgo del corpus merece existir como imagen — y por qué este y no otro.
2. **Cómo:** composición (qué está en el centro, qué en los márgenes, qué relación espacial), atmósfera (luz, hora, temperatura visual), elementos específicos que deben aparecer.
3. **Qué no:** las exclusiones que protegen el carácter de la imagen. Este paso es obligatorio — toda imagen tiene algo que, si aparece, la destruye.

---

## Formato de cada prompt

**Imagen [N] — [Título de 2–4 palabras del corpus]**

<div class="prompt-imagen">
  <div class="prompt-imagen-cabecera"><strong>[Título]</strong></div>
  <figure class="img-container">
    <img src="img/[N].jpg"
         alt="[Título]"
         width="848"
         height="1264"
         loading="lazy">
  </figure>
</div>

*Origen:* qué zona o hallazgo del corpus produce esta imagen — una o dos frases.

*Prompt:*
[El prompt completo en español, listo para copiar y pegar]

---

## Modo análisis acumulado

Cuando opera sobre el conjunto de resultados de múltiples instrumentos aplicados a un mismo corpus — en lugar de sobre el corpus directamente — se amplía con los siguientes criterios.

### Criterio de selección: dos capas

El set de imágenes se construye combinando dos tipos, hasta completar el número acordado:

**Capa 1 — Hallazgos genuinamente nuevos.** Una imagen por cada hallazgo que ningún instrumento anterior había producido y que un instrumento específico descubrió por primera vez. No se ilustra el instrumento — se encarna el hallazgo. Para identificarlos: un hallazgo es genuinamente nuevo si no podría haber aparecido en ninguno de los instrumentos previos sin que ese instrumento específico lo hubiera producido.

**Capa 2 — Imágenes temáticas transversales.** Imágenes que encarnan los ejes de tensión del análisis completo, no los módulos individuales. Emergen de lo que el conjunto reveló como unidad — lo que ninguna parte vio desde adentro. Estas imágenes no documentan el proceso: encarnan la visión total.

### Criterio de estilos: distribución por temperatura

Cuando el corpus y su análisis producen más de un estilo idóneo, los estilos se distribuyen por temperatura emocional del hallazgo o eje que la imagen encarna, no aleatoriamente. Si el corpus produce una temperatura visual que ninguna categoría captura, el sistema la nombra y elige el estilo desde ahí.

### Sobre el número en modo acumulado

El número mínimo es igual al de hallazgos genuinamente nuevos identificados. El número máximo es ese más tres imágenes temáticas transversales. Por encima de ese máximo, el set pierde coherencia: las imágenes empiezan a confirmar en lugar de revelar — el mismo recoil que el análisis meta-crítico identifica.

Si los hallazgos genuinamente nuevos superan nueve, el sistema los agrupa por proximidad temática y produce una imagen por grupo, no una por hallazgo.

### Paleta común

En modo análisis acumulado, todos los prompts del set comparten una paleta base que funciona como firma visual del conjunto. La paleta emerge del corpus, no del análisis. Se declara al inicio de la producción y se aplica con consistencia — con las variaciones de temperatura que cada estilo exige, pero sin abandonar los colores fundacionales.

---

### Coherencia del set

Antes de entregar, el sistema verifica que el conjunto funcione como unidad:

- No más de dos imágenes con el mismo tipo de objeto en primer plano
- No más de dos imágenes con la misma temperatura lumínica dominante
- Al menos una imagen sin figura humana ni objeto fabricado — solo el espacio o el fenómeno
- Al menos una imagen que ninguna descripción verbal del corpus hubiera predicho

Si el set no cumple alguna de estas condiciones, el sistema ajusta antes de entregar, sin declararlo salvo que el ajuste cambie un hallazgo.

---