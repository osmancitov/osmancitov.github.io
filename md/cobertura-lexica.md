27 de octubre de 2026

# Cobertura Léxica

Cobertura Léxica es el nombre de este procedimiento. Este texto está escrito para el lector cero: la persona o la máquina que lo lee sin haber leído nada más. Cada término tiene el significado del diccionario o el que este texto le da la primera vez que aparece.

## Qué es y para qué sirve

Es el procedimiento que elige párrafos de una obra. Los párrafos elegidos son las ganadoras. Después se tejen puentes y glosas entre ellas.

El procedimiento no usa juicio personal. Con las mismas entradas, da siempre las mismas ganadoras.

Elige párrafos y no frases, porque una frase puede no entenderse sola. Un párrafo trae el contexto que la frase necesita.

## Términos

Cada término se usa en este texto solo con el significado que aquí se le da.

- **Obra:** el texto que se trabaja.
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

## Entradas fijas

Anota estas cinco entradas antes de empezar. No las cambies durante el cálculo.

1. El molde.
2. La lista de vacías.
3. El lematizador (nombre y versión).
4. El porcentaje de la cuota (10%).
5. El divisor de N (500 palabras).

## Antes de empezar

El molde debe tener los párrafos bien formados. Una línea en blanco en medio de una frase crea un párrafo falso. Corrige el molde antes de calcular. Anota la corrección.

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
5. **Calcula la cuota** de cada tramo: el 10% de sus párrafos, redondeado al entero más cercano. El mínimo de la cuota es 1.
6. **Elige las ganadoras, tramo por tramo, en el orden de la obra.** Los términos cubiertos se acumulan en toda la obra y no se reinician al cambiar de tramo. En cada tramo, repite la cuota veces:
   1. Calcula el puntaje de cada párrafo del tramo que aún no es ganador. El puntaje es la suma de los pesos de sus términos no cubiertos, dividida entre la raíz cuadrada de su número de palabras.
   2. Elige el párrafo de mayor puntaje. Si hay empate, elige el de menor número.
   3. Marca como cubiertos los términos de ese párrafo.
7. **Ordena las ganadoras** en el orden de la obra.

## Verificación

1. Ejecuta el procedimiento con un script. Ejecútalo dos veces. Las dos listas deben ser idénticas.
2. Calcula la cobertura.
3. Calcula el porcentaje real: las palabras de las ganadoras, divididas entre las palabras de la obra.
4. Calcula la cobertura sin peso: los términos cubiertos, divididos entre todos los términos distintos de la obra. Cuenta cada término una vez.
5. Entrega la lista, las cinco entradas fijas, el N previsto, el N efectivo, la cobertura, la cobertura sin peso y el porcentaje real.
6. Compara la cobertura solo entre ejecuciones con el mismo N efectivo. Con otro N efectivo cambian los pesos y el denominador, y la comparación no vale.
7. Para comparar ejecuciones con distinto N efectivo, usa la cobertura sin peso y el porcentaje real. Ninguna de las dos depende de N.
8. Ninguna cobertura mide si la lectura es mejor. Para eso, lee las ganadoras sin saber qué variante las eligió.


## Límites conocidos

El método mide cuánto vocabulario de la obra cubren los párrafos. No mide calidad ni sentido.

El porcentaje real es mayor que el 10%. La cuota cuenta párrafos, no palabras, y los párrafos largos pesan mucho. El porcentaje real depende de la obra, y por eso se entrega.

El peso da más valor al vocabulario que aparece en muchos tramos. Da el valor máximo al vocabulario que aparece en un solo tramo. Este segundo efecto trae nombres propios y rarezas sin interés.

El puntaje divide entre la raíz cuadrada de las palabras. Esto reduce la ventaja de los párrafos largos, pero no la elimina.

Un párrafo cuyos términos ya están cubiertos tiene puntaje cero. Entra solo si la cuota lo exige.
