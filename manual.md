# Manual de operaciones — Destilería v13

Este documento describe cada instrumento del ecosistema: qué hace, cuándo aplicarlo, y cómo se relaciona con los demás. Es un documento operativo — para usarlo antes de trabajar con un corpus, no después.

---

## M01 — Escucha (Cadena Secuencial)

**Qué hace**
Opera como cadena de pasos independientes, cada uno en una llamada separada al modelo sin acceso al siguiente hasta completar el actual. El vocabulario bloqueado crece con cada paso, obligando al modelo a encontrar el idioma del corpus en lugar de importar el idioma de la crítica. Llega al corpus sin categorías previas y sin saber qué va a encontrar.

**Cuándo aplicarlo**
Cuando se quiere que el corpus se declare a sí mismo antes de que cualquier instrumento opere sobre él. Cuando el objetivo es escuchar antes de analizar. Requiere ventana de contexto vacía — sin system prompt activo — para funcionar con integridad. Si se ejecuta con contexto previo, la cadena se contamina.

**Relación con los demás**
Es el instrumento de entrada más puro del ecosistema. Lo que produce — la naturaleza del corpus, sus zonas vivas, lo que carga sin saberlo — puede informar la selección de todos los instrumentos siguientes. M2 no debe precederlo en la misma sesión.

---

## M02 — Umbral

**Qué hace**
Define cómo opera el sistema en cualquier sesión donde esté activo. Establece la entrada sin categorías previas, la geometría de tres fuerzas en tensión (lo construido, lo experiencial, lo contextual), el diagnóstico como mapa vivo de profundidades, el menú emergente, y las tres operaciones fundamentales: lectura, síntesis, silencio.

**Cuándo aplicarlo**
En toda sesión de análisis donde no se ejecute M1 primero. Es la condición de operación del sistema — no un instrumento de análisis sino el marco desde el cual los demás operan.

**Relación con los demás**
Precede a todos los instrumentos excepto M1, que requiere ventana vacía. Cuando M2 está activo, el sistema ya sabe cómo entrar al corpus, diagnosticar y proponer operaciones. Los instrumentos M3 a M17 son operaciones específicas que el sistema puede ejecutar desde dentro de ese marco.

---

## M03 — Recepción

**Qué hace**
Recibe el corpus en dos tiempos. Primero como objeto físico en el mundo — su peso, su superficie, lo que comunica antes de la primera página — produciendo prompts de imagen que encarnan esa presencia material y la atmósfera del corpus. Luego como texto: ficha técnica, sinopsis, mapa de hechos según el tipo de corpus, y las tensiones que lo mueven en silencio — no los temas declarados, sino los que trabaja sin nombrarlos.

**Cuándo aplicarlo**
Como entrada a cualquier análisis. La dimensión de objeto es plena cuando el corpus tiene materialidad significativa; para corpus digitales produce reconstrucción imaginativa, no recepción real. La orientación textual es siempre aplicable: cuando alguien necesita saber qué tiene enfrente antes de operar.

**Relación con los demás**
El instrumento más transferible del ecosistema. Puede preceder a cualquier otro sin competir con ninguno. Complementa a M02 como entrada operativa — donde M02 establece el marco y el diagnóstico de profundidad, M03 orienta con datos concretos: qué ocurre, quién es quién, cuáles son las tensiones centrales.

---

## M05 — Análisis por secciones

**Qué hace**
Entra al corpus sección por sección. Para cada una extrae el núcleo — qué ocurre que importa para el todo — y busca activamente los fragmentos que sobreviven solos en tres escalas: microscópica (el mecanismo dentro de la frase), mesoscópica (el fragmento citable verbatim), macroscópica (el gesto que solo existe como totalidad). Al final cartografía el corpus y produce una descripción sensorial.

**Cuándo aplicarlo**
Cuando se necesita trabajar un corpus largo con granularidad por capítulo. Cuando el objetivo es encontrar los fragmentos que alguien repetiría años después. Cuando se quiere una descripción sensorial del corpus como experiencia total.

**Relación con los demás**
Es el instrumento de mayor densidad operativa. Las joyas en tres escalas son una gramática de la densidad que ningún otro instrumento produce con esa precisión. Puede seguir a M4 como análisis profundo después de la orientación, o ejecutarse solo sobre un corpus ya conocido.

---

## M06 — Inspección

**Qué hace**
Examina el corpus desde seis miradas estructurales — la estructura que aguanta el peso, las fuerzas externas, la arquitectura interna, la ética profunda, el autor y su sombra, el origen y la carga real versus la declarada — y emite un veredicto. Produce también la partitura: el corpus descrito como música con una obra real y escuchable.

**Cuándo aplicarlo**
Cuando la pregunta central es si el corpus aguanta lo que promete. Cuando se quiere un diagnóstico estructural con veredicto explícito. Cuando importa caracterizar al autor como presencia que emerge del texto, no solo como nombre.

**Relación con los demás**
Es el único instrumento del ecosistema que juzga explícitamente. Todos los demás entregan y esperan. M6 cierra con veredicto. Puede ejecutarse solo o después de M4 y M5 cuando ya hay suficiente conocimiento del corpus para que el veredicto sea preciso.

---

## M07 — Laboratorio

**Qué hace**
Busca lo que el corpus no sabe que contiene: ausencias (lo que rodea sin nombrar), síntomas (inconsistencias que el autor no controla), patrones no declarados (recurrencias anómalas). Aplica cuatro lentes sobre el mismo texto: literal, alegórico, moral, profundo. Produce la semilla: el núcleo más irreducible del corpus en una proposición.

**Cuándo aplicarlo**
Cuando el objetivo es leer lo que el corpus no sabe que dice. Cuando se sospecha que hay patrones de tono o recurrencias no declaradas. Cuando se necesita el núcleo irreducible — no el tema, lo que quedaría si todo lo demás se quemara.

**Relación con los demás**
Es el instrumento más cercano a M1 en filosofía — ambos buscan lo que el corpus carga sin saberlo. La diferencia: M1 llega sin categorías y deja que el corpus se declare. M7 llega con categorías precisas (ausencias, síntomas, los cuatro lentes) y las aplica. Puede seguir a M5 como profundización sobre lo que el análisis por secciones dejó visible.

---

## M08 — Etiquetado

**Qué hace**
Cierra el análisis con identidad, no con resumen. Produce el inventario de preguntas que el corpus activa sin resolver, clasificadas por tipo, con la falla raíz señalada. El imán conceptual con su tipo de curvatura. La topología de ideas. El truco que hace que no se olvide. La sentencia final. El palimpsesto si existe.

**Cuándo aplicarlo**
Al final de un ciclo de análisis, cuando ya se conoce bien el corpus. Cuando la pregunta es qué es este corpus — no qué dice. Cuando se quiere el concepto que curva todo lo demás y el mecanismo por el que produce o no inagotabilidad.

**Relación con los demás**
Es el instrumento de cierre por excelencia. Puede ejecutarse solo sobre un corpus bien conocido, o al final de una secuencia que incluya M4, M5 y M7. El palimpsesto que produce aquí es provisional — solo M9 puede declararlo o negarlo con autoridad total.

---

## M10 — Imágenes

**Qué hace**
Recibe un corpus o el output de otro instrumento. Propone cuántas imágenes tienen sentido y por qué. Propone estilos visuales idóneos para este corpus específico con justificación. Produce prompts en inglés con composición, atmósfera y elementos decididos desde el corpus. Cada prompt termina: *Pictorial style, not photorealistic. Aspect ratio 2:3.*

**Cuándo aplicarlo**
Cuando se quiere acompañar el análisis con imágenes que emerjan del corpus. Puede ejecutarse sobre el corpus directamente o sobre el output de cualquier otro instrumento.

**Relación con los demás**
Es el único instrumento que produce para afuera del ecosistema — sus outputs van a un generador de imágenes externo. Puede ejecutarse en cualquier momento del proceso.

---

## M11 — Narraciones

**Qué hace**
Busca lo que ocurre en el corpus — no lo que se argumenta ni lo que se describe. Lo que pasa. Produce un índice completo de eventos con su intensidad de peso vivo del 1 al 5, el giro si existe, y un diagnóstico final de qué es este corpus desde sus narraciones.

**Cuándo aplicarlo**
Cuando se quiere saber si el corpus tiene temperatura narrativa y dónde. Cuando importa identificar los momentos que quedarían en la memoria de un lector diez años después. Útil sobre corpus que mezclan argumento y narración — para separar las temperaturas.

**Relación con los demás**
Complementa a M5, que busca joyas. M11 busca eventos — lo que pasa, no lo que vale. Pueden ejecutarse juntos sobre el mismo corpus para ver qué relación hay entre los fragmentos que sobreviven solos y los momentos donde algo ocurre.

---

## M12 — Apolo

**Qué hace**
Lee el corpus como arquitectura. Mide, cartografía e identifica las fuerzas que lo sostienen o lo quiebran. Produce ficha técnica, mapa de hechos, resumen por sección, cartografía, las seis miradas estructurales, el imán y la topología de ideas, el truco.

**Cuándo aplicarlo**
Cuando se quiere un análisis estructural exhaustivo en un solo documento. Cuando importa ver el corpus como construcción — cómo está hecho y si aguanta.

**Relación con los demás**
Es una versión integrada de M4, M6 y parte de M8 en un solo instrumento. Si ya se ejecutaron esos tres por separado, M12 es redundante. Si se quiere todo el análisis estructural en una sola operación, M12 es más eficiente.

---

## M13 — Dioniso

**Qué hace**
Lee el corpus como acontecimiento. Escucha lo que está vivo, lo que carga sin saberlo, lo que se mueve debajo de lo que el texto cree estar diciendo. Es el instrumento de mayor alcance dionisíaco del ecosistema — incluye zonas vivas, ausencias, síntomas, patrones, semilla, preguntas, falla raíz, sentencia final, palimpsesto y pregunta generativa.

**Cuándo aplicarlo**
Cuando se quiere un análisis completo del pulso del corpus en un solo documento. Cuando importa lo que el corpus hace más que lo que dice.

**Relación con los demás**
Es una versión integrada de M7, M8 y parte de M11 en un solo instrumento. Complementa a M12 — los dos juntos sobre el mismo corpus producen la estereoscopía completa: lo construido y lo experiencial desde sus instrumentos más completos.

---

## M14 — Hermes

**Qué hace**
Lee el suelo donde el corpus ocurrió. Las condiciones que hicieron posible el texto tal como existe: geografía intelectual, condiciones históricas, condiciones materiales de producción, posición del autor en el campo de fuerzas. Al final entrega una señal específica a M12 y a M13 sobre lo que el contexto hace a la arquitectura y al pulso.

**Cuándo aplicarlo**
Cuando el corpus no puede entenderse sin el mundo donde ocurrió. Cuando la posición del autor, el momento histórico o el lugar de escritura operan visiblemente sobre el texto. Cuando se quiere ver lo que ni la arquitectura ni el pulso pueden explicarse solos.

**Relación con los demás**
Diseñado para operar junto a M12 y M13 — los tres forman el triángulo completo: lo construido, lo experiencial, lo contextual. Puede ejecutarse antes o después de los otros dos, pero su sección final — lo que Hermes entrega a M12 y M13 — es más precisa si ya se conocen los outputs de esos instrumentos.

---

## M15 — Geógrafo

**Qué hace**
Entra al corpus como si fuera un mapa, no un argumento. Registra cada lugar que aparece como productor de pensamiento — no como escenario. Traza la arquitectura espacial del corpus: dónde ocurre el pensamiento más lúcido, dónde se vuelve oblicuo o defensivo, qué produce pensar desde el centro versus el margen.

**Cuándo aplicarlo**
Cuando el corpus piensa desde lugares distintos y esos lugares modifican visiblemente el pensamiento. Cuando el autor escribe desde el desplazamiento, el exilio o el retorno. Cuando la geografía no es decorado sino condición.

**Relación con los demás**
Comparte territorio con M14 — ambos leen el contexto externo. La diferencia: M14 lee las condiciones en conjunto. M15 se concentra exclusivamente en la geografía como productora de pensamiento. Pueden ejecutarse juntos o por separado según lo que el corpus exija.

---

## M16 — Cronista de la Pérdida

**Qué hace**
Cuenta cuántas veces algo desaparece en el corpus y de qué tipo es cada desaparición. Produce una taxonomía de la extinción a múltiples escalas simultáneas — biológica, cultural, intelectual, personal — y mapea su distribución. Encuentra la conclusión que el corpus no quería producir.

**Cuándo aplicarlo**
Cuando algo desaparece en el corpus de forma recurrente. Cuando el corpus lamenta sin nombrar lo que lamenta. Cuando la pérdida opera a más de una escala simultáneamente y esas escalas parecen seguir el mismo ritmo.

**Relación con los demás**
Complementa a M7, que busca ausencias estructurales. M16 busca desapariciones como eventos registrables — lo que se fue, cuándo, cómo. Pueden ejecutarse juntos sobre el mismo corpus para ver qué relación hay entre lo que el corpus calla y lo que el corpus pierde.

---

## M17 — Testigo del Testigo

**Qué hace**
Observa al observador. Registra qué selecciona sistemáticamente, qué omite sistemáticamente, cuándo la distancia analítica se quiebra y aparece el hombre detrás del método. Encuentra los instantes más vivos del texto — identificados no por su belleza sino por su involuntariedad.

**Cuándo aplicarlo**
Cuando el corpus tiene un observador identificable que analiza, registra o narra desde una posición. Cuando hay tensión entre el método declarado y lo que el texto realmente hace. Cuando la subjetividad no declarada opera visiblemente sobre el material.

**Relación con los demás**
Complementa a M13 — Dioniso busca lo que el corpus carga sin saberlo; M17 busca lo que el observador dentro del corpus carga sin saberlo. Son miradas distintas sobre la involuntariedad. Pueden ejecutarse juntos cuando el corpus tiene un observador fuerte.

---

## M18 — Palimpsesto

**Qué hace**
Busca lo que ningún instrumento buscaba. El texto debajo del texto que emerge en el espacio entre todos los análisis — no dentro de ninguno sino entre ellos. Si existe, se nombra. Si no existe, se declara sin disculpa. La ausencia tiene el mismo valor que el hallazgo.

**Cuándo aplicarlo**
Solo cuando el análisis está completo o sustancialmente avanzado. No en medio del proceso — cuando ya se han agotado las miradas disponibles.

**Relación con los demás**
Requiere el output de cualquier combinación de instrumentos anteriores. No compite con ninguno — opera después de todos.

---

## M19 — Bucle

**Qué hace**
Aplica los mecanismos del corpus al corpus mismo. No lee desde afuera ni desde adentro: opera el corpus con sus propias herramientas. Primero verifica elegibilidad —el corpus debe construir mecanismos operativos y pertenecer a la clase de objetos que esos mecanismos describen. Luego inventaría los mecanismos con precisión. Luego los aplica uno a uno al corpus y registra cuatro resultados posibles: iluminación, tensión, destrucción o silencio. Cierra con la proposición godeliana del corpus — la afirmación que el sistema puede señalar pero no demostrar desde adentro de sus propias reglas — si existe.

**Cuándo aplicarlo**
Solo sobre corpus que son sistemas que describen sistemas: textos que construyen herramientas, reglas o modelos con suficiente precisión como para ser operados, y que pertenecen a la misma clase de objetos que sus mecanismos describen. Un libro sobre sistemas formales, un manual sobre lectura, un tratado sobre el poder, una metodología que se aplica a metodologías. Sobre corpus que no cumplen ambas condiciones de elegibilidad, el instrumento no opera — y esa verificación es en sí misma un resultado válido.

**Relación con los demás**
No compite con ningún otro instrumento — opera en un registro que ninguno alcanza. Donde M7 busca lo que el corpus no sabe que contiene y M17 observa al observador, M19 pregunta qué le sucede al corpus cuando sus propias reglas se vuelven sobre él. Puede ejecutarse solo, o después de M5 y M7 cuando el corpus ya es conocido en profundidad — en ese caso la aplicación es más precisa porque el inventario de mecanismos puede construirse con mayor rigor. La proposición godeliana que produce puede alimentar a M9 como material para la síntesis final.


---

## M99 — Síntesis

**Qué hace**
Recibe el análisis completo — de una o varias sesiones — y construye la visión total. No es un cierre: es el momento en que el análisis se ve a sí mismo como unidad. Solo aquí se declara o niega el palimpsesto con autoridad total.

**Cuándo aplicarlo**
Siempre al final de un análisis fragmentado en varias sesiones. Cuando se tienen múltiples análisis parciales y se necesita ver el todo. Cuando la pregunta es si algo emerge en el espacio entre todos los instrumentos que ninguno pudo ver desde adentro.

**Relación con los demás**
Recibe el output de cualquier combinación de instrumentos anteriores. No compite con ninguno — los integra. Es el único instrumento que tiene autoridad para declarar o negar el palimpsesto de forma definitiva.

---

## Notas de uso

**Sobre la selección de instrumentos**
No existe una secuencia obligatoria. Cada corpus exige su propia combinación. M1 puede revelar qué instrumentos tienen sentido con ese corpus específico — su Paso 6 produce exactamente eso.

**Sobre la escala**
Todos los instrumentos operan sobre cualquier escala: un párrafo, un capítulo, un libro, una obra completa. Lo que cambia es la duración y la granularidad, no el principio de operación.

---