# Diseño orgánico y modular

## Qué es y para qué sirve

Diseño orgánico y modular fija criterios para construir programas que compartan lo común y conserven solo las diferencias necesarias. Combina reconocer lo reutilizable antes de programar con revisar y reorganizar lo que el crecimiento permita descubrir después.

Una **implementación** es una solución concreta escrita en código, las instrucciones que ejecuta un programa. La **modularidad** es la organización del programa en piezas con responsabilidades definidas que pueden usarse desde distintos lugares. El **diseño orgánico** es la evolución de esa organización a partir del trabajo concreto y de su revisión.

## Cuándo

Antes de comenzar un trabajo de programación, durante su desarrollo y al revisar el resultado. Se aplica tanto a programas nuevos como a cambios en programas existentes.

## Criterio rector

Buscar el menor número de implementaciones que cumpla los objetivos. El costo adicional debe corresponder a una diferencia real y necesaria, no a repetir lo común.

Una implementación compartida es preferible cuando resuelve bien los casos. Si dos resuelven mejor los objetivos que una, corresponde mantener dos. La unidad es un medio para reducir trabajo repetido y mantenimiento, no un fin que justifique forzar casos distintos dentro de una misma solución.

## 1. Combinar previsión y descubrimiento

Reconocer y compartir lo reutilizable cuando ya resulta claro. A la vez, permitir que el trabajo concreto revele relaciones que no podían conocerse de antemano.

La buena estructura puede surgir de la multiplicidad y del desorden, mediante su revisión y reorganización. La perfección no es un requisito para colocar la primera piedra. Tampoco se busca producir desorden deliberadamente: se acepta que el crecimiento puede preceder a la comprensión de la estructura adecuada.

## 2. Revisar lo que el crecimiento haya multiplicado

La construcción y la revisión posterior son partes del mismo trabajo. Después de incorporar casos, revisar qué reglas, comportamientos y responsabilidades aparecen en más de un lugar.

La revisión debe distinguir:

- Lo común que puede tener una implementación compartida.
- Las diferencias reales que los objetivos exigen conservar.
- Las divergencias accidentales introducidas por el orden de desarrollo, las copias o las soluciones locales.

El resultado esperado es una mejor organización del sistema, no solo fragmentos más cortos o nombres nuevos para la misma duplicación.

## 3. Compartir la lógica, no solo su apariencia

Cuando varios casos obedecen a una misma regla, esa regla debe tener un lugar común de mantenimiento. Extraer una envoltura no resuelve la duplicación si cada caso conserva otra implementación del mismo comportamiento.

Una diferencia de valores no implica una diferencia de mecanismo. Cambiar un activo, una escala o una duración no basta para justificar otro sistema de graficación. Primero corresponde comprobar si el mecanismo común puede resolverlo con esos valores.

## 4. Expresar solo la desviación necesaria

La base compartida conoce el comportamiento común y sus valores por defecto, los que se usan cuando el caso no indica otro valor. Cada caso aporta únicamente lo que lo particulariza y necesita ser distinto.

En este criterio, los datos de un caso también son su particularidad respecto de lo común. No es necesario imponer una separación conceptual entre datos y configuración: importa que lo común no tenga que volver a declararse para cada caso.

Si un aspecto no se desvía del comportamiento común, no requiere configuración repetida, código adicional ni una copia más que mantener. Una mejora común debe llegar a sus casos a través de la pieza compartida, sin retoques equivalentes uno por uno.

## 5. Justificar las diferencias por los objetivos

Que dos implementaciones sean distintas no demuestra que deban seguir siéndolo. Es necesario identificar qué objetivo exige la diferencia.

Del mismo modo, que dos fragmentos se parezcan no demuestra que deban fusionarse. La decisión depende de la responsabilidad y del comportamiento que comparten, no solo de su semejanza textual.

Si una unificación introduce excepciones que dificultan cumplir los objetivos, corresponde revisar su alcance. Conservar dos soluciones puede ser mejor que sostener una pieza compartida que no responda bien a sus casos. El criterio sigue siendo el menor número adecuado, no la unidad a cualquier costo.

## 6. Reorganizar sin perder lo que funciona

Mejorar la estructura mediante cambios pequeños y comprobables. La **refactorización** es reorganizar el código conservando su comportamiento previsto. Las correcciones o los cambios de funcionamiento que formen parte del encargo se distinguen de esa reorganización.

Verificar tanto los casos particulares como el paso efectivo por la lógica común. Las pruebas deben ayudar a detectar que reaparezca una duplicación o que un caso deje de heredar una regla compartida.

Cuando el resultado sea visual, comprobar también su presentación real: una prueba de estructura o de cálculo no sustituye la inspección de la gráfica o de la interfaz.

## 7. Comunicar el estado sin frases de trámite

Los nombres y mensajes de los programas siguen el criterio de comunicación corta y clara del [Núcleo](nucleo.md#comunicación-corta-y-clara). Cada mensaje expresa la acción, el estado o el resultado que importa en ese momento, sin repetir el nombre completo del proceso cuando el contexto ya lo identifica.

La revisión distingue entre trabajo en curso, trabajo terminado y un problema que requiere atención. Acortar un mensaje no debe ocultar errores, cambios importantes ni decisiones pendientes. Los casos que comparten un mecanismo de mensajes mantienen este criterio común, sin añadir copias de la lógica para cambiar sus palabras.

## Caso ilustrativo: un graficador común

El graficador reúne la lógica compartida de trazado, escala, velocidad, orientación, reajuste y controles, en la medida en que responde al mismo comportamiento.

Cada caso entrega solo sus particularidades necesarias: la serie que muestra, sus rótulos, sus bandas o un valor que deba apartarse del predeterminado. No repite el sistema completo ni declara de nuevo lo que ya coincide con la base común.

Si aparece una diferencia de representación, primero se determina si es un parámetro del mismo mecanismo o una responsabilidad realmente distinta. Solo esa diferencia justificada añade lógica propia. El ejemplo expresa un criterio de diseño, no una afirmación sobre el estado actual de una implementación.

## Revisión antes de entregar

La revisión se prepara antes de programar y se completa con el resultado a la vista.

- ¿Qué objetivos debe cumplir el cambio y qué comportamiento debe conservar?
- ¿Qué parte ya existe y puede aprovecharse sin volver a implementarla?
- ¿Qué particularidad es real y necesaria? ¿Qué diferencia es solo accidental?
- ¿El caso nuevo aporta únicamente lo que cambia y hereda lo demás?
- ¿Quedó una regla común duplicada detrás de nombres o formas de acceso distintos?
- ¿La solución elegida usa el menor número de implementaciones que cumple bien los objetivos?
- ¿Los nombres y mensajes comunican el estado y el resultado sin repeticiones ni pérdida de información necesaria?
- ¿Las pruebas y, cuando corresponde, la inspección visual comprueban el resultado?

La revisión posterior completa lo que la previsión inicial no podía resolver. Diseñar es también volver sobre lo construido y hacer común lo que el crecimiento permitió reconocer.

## Su propio examen

Este documento reúne el criterio común una sola vez y desarrolla sus consecuencias por temas. El caso del graficador muestra cómo aplicarlo sin imponer una implementación concreta. La revisión permite contrastar lo construido con esos criterios. El texto no incorpora una programación periódica de revisiones ni repite reglas de otros trabajos.

## Cambios

21 de noviembre de 2026: se incorpora el criterio de comunicación corta y clara del Núcleo al diseño y la revisión de mensajes, sin cambiar responsabilidades ni mecanismos. A pedido de Osmancito.
