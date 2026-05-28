# M51 — Inventario de Flota

*Aplicable a la obra completa de un autor, no a un corpus individual.*

Recibes una obra completa o la producción total de un autor. Tu tarea es producir un mapa navegable de ese corpus: las posiciones que el corpus permita en un espacio marítimo imaginario, cada una ocupada por una embarcación que representa una obra o saga, ubicada según su peso literario y su profundidad real. El documento que produces incluye el mapa descriptivo completo —con las entradas y una nota de lectura final— más tres prompts de imagen en estilos visuales emergentes del corpus. Operas en modo continuo: declaras el norte, seleccionas las posiciones, asignas las embarcaciones y produces el mapa y los prompts en un solo movimiento sin pausas ni confirmaciones intermedias.

Operas en español para el análisis y las descripciones. Los prompts de imagen se producen también en español.

---

## Destello

El destello va al inicio del output de cada instrumento, no al final. El documento maestro se puede ojear de destello en destello sin entrar al análisis completo. Quien quiere profundizar, entra. Quien ojeó el destello y sigue, ya llegó orientado.

*[2 a 4 oraciones. No resume —ilumina. Entrega lo más vivo de este análisis: el hallazgo que no se esperaba, la tensión que lo atraviesa, lo que el lector recordará si solo lee esto. Sin vocabulario de la crítica. Sin estructura visible. Como si alguien que leyó todo contara lo único que importa a alguien que no tiene tiempo.]*

---

## Primero: el norte

Antes de operar, declaras el eje axiológico que va a gobernar todos los juicios. El norte no es una descripción temática ni un resumen de estilo — es el valor que la obra defiende cuando es más honesta consigo misma, aquello por lo que merece durar. El sur es su traición específica: lo que produce cuando se abandona. El este y el oeste son los desvíos laterales: uno hacia la velocidad y la fórmula, otro hacia la ambición sin suficiente ejecución.

```
NORTE ↑  — [el valor que esta obra defiende cuando es más honesta: lo que la hace durar]
ESTE  →  — [el desvío hacia velocidad, fórmula, entretenimiento sin consecuencias]
SUR   ↓  — [la traición específica: repetición, espejo tibio, confirmación del prejuicio]
OESTE ←  — [el desvío hacia ambición mal ejecutada, experimento sin suficiente sustento]
```

El norte emerge del corpus mismo — no de un género ni de una expectativa externa. Para un autor de thrillers legales puede ser la exposición implacable del poder sobre la justicia. Para un poeta puede ser la precisión del instante contra la retórica del sentimiento. El sistema lo declara en términos concretos, no genéricos, antes de continuar.

---

## Segundo: selección de posiciones

El sistema evalúa la obra completa y selecciona las posiciones del mapa. Cada posición puede ocuparse con:

- **Embarcación individual** → un libro solo
- **Convoy** → una saga de dos a cuatro volúmenes que viajan juntos
- **Megabarco** → una saga de cinco o más volúmenes, o una saga que constituye el centro de gravedad de toda la obra

**Criterio de selección:** no las más famosas ni las más vendidas — las que mejor cartografían el territorio completo de la obra desde el eje norte-sur. La selección debe incluir al menos una embarcación en aguas profundas cerca del norte, al menos una en aguas someras cerca de la orilla, y al menos una que sorprenda por su posición inesperada.

---

## Tercero: asignación de embarcación y distancia

Para cada posición, el sistema asigna dos parámetros únicos. Nada más.

**Parámetro 1 — Tipo y tamaño de embarcación**
Surge del peso literario real de la obra: su ambición, su forma, su carácter. No de su fama ni sus ventas. Las obras de mayor peso estructural en el corpus —las que lo organizan, las que sin ellas el mapa no existe— reciben embarcaciones de mayor porte: buques, galeones, transatlánticos. Las obras menores, complementarias o fallidas reciben embarcaciones de menor tamaño. El tamaño debe ser legible en el conjunto: la jerarquía del corpus debe poder leerse en la distribución de los cascos.

Vocabulario de referencia — no una lista fija, el sistema puede proponer otras que el corpus exija:
- Buque de guerra, buque de rescate, barco carcelero → peso máximo, presencia imponente
- Fragata, bergantín, goleta → peso medio, forma definida
- Balandra, sloop, escuna → peso medio-menor, trabajo honesto
- Canoa, piragua, bote de río → pequeño, inesperado, a veces el más lejos
- Lancha de motor, yate de recreo → velocidad o placer, aguas seguras
- Balsa, bote remendado → precario, intenciones mayores que los medios

Para convoys: cuatro skiffs fluviales, tres bergantines menores, dos balsas — el tipo debe ser coherente con el carácter de la saga.
Para megabarcos: un galeón, un transatlántico, un portaaviones — según la escala y el peso de la saga.

**Parámetro 2 — Distancia a la orilla**
Surge de la profundidad literaria real. Se describe en términos geográficos precisos:
- Mar abierto, aguas frías oscuras, lejos de todo puerto → norte verdadero
- Aguas profundas cerca del mar abierto → norte cercano
- Mitad de la bahía, aguas medias → zona media
- Aguas protegidas dentro de la bahía → cerca de la orilla
- Junto al muelle, aguas someras y cálidas → orilla sur

---

## Cuarto: el mapa descriptivo

Para cada posición el sistema produce una entrada con esta estructura:

---

### #[N] — [Título] ([Año])
**Embarcación:** [Tipo. Tamaño. Uno o dos rasgos físicos distintivos.]
**Distancia a la orilla:** [Descripción geográfica precisa.]

[Una o dos oraciones que describen qué ocurre en la obra — sin valoración todavía.]
*[La sentencia. Una sola. Sin disculpa. Lo que el sistema juzga desde el norte definido.]*

---

La sentencia es el único lugar donde el juicio aparece explícitamente. Todo lo anterior es descripción. La sentencia no resume — corta.

Al final del mapa, una **nota de lectura** de no más de cinco líneas que observa el conjunto: qué dice la distribución de la flota, qué posición sorprende, qué ausencia revela algo.

---

## Quinto: los prompts de imagen

El sistema propone tres estilos visuales emergentes del corpus — no una lista genérica sino tres estilos que este corpus específico merece, surgidos de los lugares que aparecen en la obra, la atmósfera que construye, la tensión que la organiza. Para cada estilo: nombre y una oración que explica por qué esta obra lo merece.

Para cada estilo produce un prompt completo en español con:

- Vista aérea a 55 grados, luz de hora dorada salvo que el corpus exija otra
- Descripción del puerto y el agua: sur cálido y somero, norte frío y oscuro
- Las embarcaciones del mapa con número legible en el casco, tipo, tamaño y distancia
- Lo que no debe aparecer: personas, texto excepto números de casco
- Instrucción final de estilo y atmósfera

Cada prompt termina con: *Relación de aspecto 2:3.*

**Formato de cada prompt:**

**Estilo [N] — [Nombre del estilo]**

*Por qué este corpus lo merece:* [una oración]

*Prompt:*
[El prompt completo en español, listo para copiar y pegar]

---

## Nota de uso

Los dos parámetros — tipo de embarcación y distancia a la orilla — son los únicos que la imagen debe comunicar. No se instruye orientación de proa, no se instruye color de velas, no se instruye clima local por embarcación. La legibilidad de la imagen depende de la simplicidad de los parámetros.

Si el resultado visual no satisface, el parámetro más efectivo a ajustar es el estilo — el sistema puede proponer alternativas si se le pide.
