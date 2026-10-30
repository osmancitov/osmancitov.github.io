# Cobertura Léxica

Cobertura Léxica es el nombre de este texto. Este texto está escrito para el lector cero: la persona o la máquina que lo lee sin haber leído nada más. Toda palabra tiene el significado del diccionario o el que este texto le da la primera vez que aparece.

## Qué es y para qué sirve

Es el procedimiento que elige párrafos de una obra. Los párrafos elegidos son las ganadoras. Después, el protocolo Destilar una obra teje entre ellas puentes y glosas: textos propios que cuentan lo que pasa entre dos ganadoras y que acompañan al lector. Destilar una obra los define por completo. Un **módulo** es un texto de la casa que fija por escrito una regla o cómo se hace un trabajo, para que la regla se cumpla y el trabajo salga igual cada vez sin depender de la memoria de nadie, persona o máquina. Un archivo **md** es un texto con marcas simples.

La selección no usa juicio personal. Con las mismas entradas, da siempre las mismas ganadoras. La revisión previa de la fuente requiere juicio y cotejo; se hace antes de fijar esas entradas.

Elige párrafos y no frases, porque una frase puede no entenderse sola. Un párrafo suele conservar más contexto que una frase.

Es el método de selección aprobado para **Destilar una obra** (`destilar-una-obra.md`). Es el descendiente directo del método anterior y lo sustituye desde el 27 de octubre de 2026. La aprobación permite usarlo; no demuestra que encuentre mejores pasajes.

## Términos

Cada término se usa en este texto solo con el significado que aquí se le da.

- **Obra:** el texto que se trabaja.
- **EPUB:** un formato de libro digital que guarda el texto en archivos HTML.
- **HTML:** el lenguaje con que se escriben las páginas; marca cada párrafo con una etiqueta.
- **Markdown:** un formato de texto con marcas simples, como el signo `>` para una cita o los asteriscos para la cursiva.
- **Párrafo:** el texto entre dos líneas en blanco. Es la unidad de este procedimiento. No se corta nunca. Tiene un número, desde 1, en el orden de la obra.
- **Molde:** la obra partida en párrafos numerados. No incluye títulos.
- **Palabra:** una secuencia de letras entre dos separadores. Una palabra puede tener un apóstrofo en medio, como «don't».
- **Lista de vacías:** una lista fija de artículos, preposiciones, pronombres y conjunciones.
- **Lematizador:** un programa fijo que reduce cada palabra a su raíz.
- **Término:** una palabra en minúsculas, reducida a su raíz con el lematizador. Una palabra de una sola letra no es un término. Una palabra de la lista de vacías no es un término.
- **Tramo:** un grupo de párrafos consecutivos que suman un número de palabras parecido.
- **N previsto:** el número de tramos que el paso 1 calcula.
- **N efectivo:** el número de tramos que el paso 2 forma de verdad. Puede ser menor que el N previsto.
- **Peso de un término:** el valor del término. El paso 4 lo calcula.
- **Cubierto:** un término que ya está en un párrafo ganador.
- **Cuota:** el número de párrafos que un tramo debe aportar.
- **Puntaje:** el valor de un párrafo. El paso 6 lo calcula.
- **Ganadora:** un párrafo elegido para citarse.
- **Cobertura:** el peso de los términos cubiertos, dividido entre el peso de todos los términos.

## Cuándo

Cuando Destilar una obra pide seleccionar los párrafos de una unidad, o cuando se encarga solo esa selección.

## Entradas fijas

Anota estas cinco entradas antes de empezar. No las cambies durante el cálculo.

1. El molde.
2. La lista de vacías.
3. El lematizador (nombre y versión).
4. El porcentaje de la cuota (10%).
5. El divisor de N (500 palabras).

## Antes de empezar

Verifica la fuente antes de fijar el molde y antes de cualquier cálculo. Esta revisión puede requerir juicio y cotejo; no forma parte de la selección determinista.

1. Si la fuente es un EPUB, revisa sus HTML originales. No des por hecho que cada etiqueta de párrafo coincide con un párrafo de la obra, ni que la conversión a Markdown conserva esos límites.
2. Busca cortes dentro de frases, texto suelto entre bloques y marcas de formato rotas. Son señales para revisar, no órdenes de unir párrafos automáticamente. Comprueba también que no se hayan unido párrafos distintos.
3. Coteja los límites dudosos, con el contexto anterior y posterior, con una edición fiable e independiente del archivo que revisas. Comparar una conversión con el mismo original defectuoso no basta. Si no puedes resolver un límite, deja la duda registrada y no empieces el cálculo con ese molde.
4. Corrige solo lo que el cotejo respalde. Conserva las palabras y su orden; repara los límites y las marcas de formato sin reescribir el texto. Anota la ubicación, el antes y el después y la fuente de cotejo.
5. Vuelve a comprobar el texto y su presentación: que no falten ni sobren palabras, que los párrafos coincidan con los límites comprobados y que las cursivas no se conviertan en listas u otros bloques. Solo entonces numera los párrafos y fija el molde.

Una prueba acertada no valida toda la obra. Registra qué parte revisaste y qué dudas quedan. Esta fase reduce el riesgo de fallas de origen y de conversión; no garantiza detectarlas todas.

## Pasos

1. **Calcula el N previsto.** El N previsto es el número de palabras de la obra, dividido entre 500, redondeado al entero más cercano. Si el resultado queda justo en la mitad, redondea al entero par. El mínimo es 2.
2. **Forma los tramos.** Numera los cortes de 1 a N previsto menos 1.
   1. Suma las palabras de los párrafos en orden. Anota la suma acumulada después de cada párrafo.
   2. El objetivo del corte k es k veces el total de palabras, dividido entre el N previsto.
   3. Corta el tramo k después del párrafo cuya suma acumulada esté más cerca de su objetivo. Si dos párrafos están a la misma distancia, elige el de menor número.
   4. Si un corte cae en un párrafo que ya tiene corte, o en el último párrafo, no lo uses.
   5. Cada tramo tiene al menos un párrafo. El último tramo recibe los párrafos que quedan.
   6. Cuenta los tramos formados. Ese número es el N efectivo.
3. **Extrae los términos** de cada párrafo. Cuenta cada término una sola vez por párrafo.
4. **Calcula el peso** de cada término.
   1. Cuenta en cuántos tramos distintos aparece el término.
   2. Si aparece en un solo tramo, su peso es el N efectivo.
   3. Si aparece en dos o más tramos, su peso es ese número de tramos.
   4. Nunca uses el N previsto en el cálculo del peso.
5. **Calcula la cuota** de cada tramo: el 10% de sus párrafos, redondeado al entero más cercano. Si el resultado queda justo en la mitad, redondea al entero par. El mínimo de la cuota es 1.
6. **Elige las ganadoras, tramo por tramo, en el orden de la obra.** Los términos cubiertos se acumulan en toda la obra y no se reinician al cambiar de tramo. En cada tramo, repite la cuota veces:
   1. Calcula el puntaje de cada párrafo del tramo que aún no es ganador. El puntaje es la suma de los pesos de sus términos no cubiertos, dividida entre la raíz cuadrada de su número de palabras.
   2. Elige el párrafo de mayor puntaje. Si hay empate, elige el de menor número.
   3. Marca como cubiertos los términos de ese párrafo.
7. **Ordena las ganadoras** en el orden de la obra.

## Verificación

### Comprobación de la ejecución

Comprueba dos cosas distintas: que el programa cumpla las reglas de este texto y que repita el resultado con las mismas entradas. Repetirlo solo comprueba consistencia; no basta para demostrar que esté bien implementado.

1. Contrasta el programa con los pasos del procedimiento: cortes, N previsto y efectivo, términos, pesos, cuotas, puntajes, acumulación de términos cubiertos, desempates y orden final.
2. Ejecuta el procedimiento con un script, un programa que hace el cálculo. Ejecútalo dos veces con las mismas cinco entradas. Las dos listas deben ser idénticas.
3. Calcula la cobertura.
4. Calcula el porcentaje real: las palabras de las ganadoras, divididas entre las palabras de la obra.
5. Calcula la cobertura sin peso: los términos cubiertos, divididos entre todos los términos distintos de la obra. Cuenta cada término una vez.
6. Entrega la lista, las cinco entradas fijas, el N previsto, el N efectivo, la cobertura, la cobertura sin peso y el porcentaje real.
7. Compara la cobertura solo entre ejecuciones con el mismo N efectivo. Con otro N efectivo cambian los pesos y el denominador, y la comparación no vale.
8. Para comparar ejecuciones con distinto N efectivo, usa la cobertura sin peso y el porcentaje real. Ninguna de las dos depende de N.

### Comprobación del valor literario

Ninguna cobertura mide si la lectura es mejor ni si encuentra pasajes que valga la pena detenerse a leer y guardar. Para juzgarlo, lee las ganadoras sin saber qué variante las eligió. Antes de comparar variantes, acuerda cuáles se comparan, un presupuesto comparable y qué se juzgará en la lectura. No saques conclusiones de superioridad sin esa comparación.

## Límites conocidos

El método mide cuánto vocabulario de la obra cubren los párrafos. No mide calidad ni sentido.

El porcentaje real puede ser distinto del 10%. La cuota cuenta párrafos, no palabras, y los párrafos largos pesan mucho. El porcentaje real depende de la obra, y por eso se entrega.

El peso da más valor al vocabulario que aparece en muchos tramos. Da el valor máximo al vocabulario que aparece en un solo tramo. Este segundo efecto trae nombres propios y rarezas sin interés.

El puntaje divide entre la raíz cuadrada de las palabras. Esto reduce la ventaja de los párrafos largos, pero no la elimina.

Un párrafo cuyos términos ya están cubiertos tiene puntaje cero. Entra solo si la cuota lo exige.

## Estado de las pruebas

El 27 de octubre de 2026 se cotejó un pasaje de Babette, en *White Noise*, del escritor estadounidense Don DeLillo, con un [extracto de una edición independiente](https://penguinrandomhousehighereducation.com/book/?isbn=9780143129554). El cotejo permitió reparar un párrafo dividido y sus cursivas. Esa comprobación no valida el resto de la obra ni todo el tramo de los capítulos 1–7. Tampoco valida el programa de selección ni demuestra superioridad literaria.

La prueba de selección queda pendiente. Antes de ejecutarla se verifica la fuente del alcance elegido y se fijan las cinco entradas.

## Cambios

30 de octubre de 2026: se define EPUB, HTML y Markdown, que el texto usaba sin explicar, y se dice qué son los puentes y las glosas con remisión a Destilar una obra. La declaración del lector cero pasa a ser la fija de todos los módulos y se añade «Cuándo». La fecha de la versión anterior, 27 de octubre de 2026, que abría el archivo, pasa a esta sección porque la primera línea es solo el título. A pedido de Osmancito.

27 de octubre de 2026: se unifican la revisión de fuente, la selección y la comprobación. Se distingue cumplir las reglas de repetir el resultado, y ambas cosas de juzgar el valor literario mediante lectura ciega. Se instala Cobertura Léxica como método aprobado en lugar de su método predecesor, sin cambiar la fórmula ni ejecutar la prueba. Los errores que aparezcan se revisarán y corregirán. A pedido de Osmancito.

27 de octubre de 2026: las referencias al método predecesor pasan a Cobertura Léxica, su descendiente directo, sin atribuirle resultados de cálculos anteriores. A pedido de Osmancito.

30 de octubre de 2026: define «módulo» y «md» y nombra a Destilar una obra como protocolo, porque el texto los usaba sin explicarlos. A pedido de Osmancito.
