# Cobertura Léxica

Cobertura Léxica es el nombre de este procedimiento. Este texto está escrito para el lector cero: la persona o la máquina que lo lee sin haber leído nada más. Cada término tiene el significado que aquí se le da.

## Para qué sirve

Este procedimiento elige el 10% de las palabras de una obra, en frases completas. Estas frases son las ganadoras. Después se tejen puentes y glosas entre ellas.

El procedimiento no usa juicio personal. Con las mismas entradas, da siempre las mismas ganadoras.

## Términos

- **Obra:** el texto que se trabaja.
- **Frase:** un segmento de la obra. No se corta nunca. Tiene un número.
- **Molde:** la obra partida en frases numeradas.
- **Palabra:** una secuencia de letras entre dos separadores.
- **Término:** una palabra en minúsculas, reducida a su raíz con el lematizador fijo. Se excluyen las palabras de la lista de vacías.
- **Lista de vacías:** una lista fija de artículos, preposiciones, pronombres y conjunciones.
- **Tramo:** un grupo de frases consecutivas de tamaño parecido.
- **Peso de un término:** el número de tramos distintos donde aparece.
- **Cubierto:** un término que ya está en una frase ganadora.
- **Cuota:** el 10% de las palabras de un tramo.
- **Cobertura:** el peso de los términos cubiertos, dividido entre el peso de todos los términos.

## Entradas fijas

Anota estas cuatro entradas antes de empezar. No las cambies durante el cálculo.

1. El molde.
2. La lista de vacías.
3. El lematizador (nombre y versión).
4. El porcentaje (10%).

## Pasos

1. **Calcula N.** N es el número de palabras de la obra dividido entre 500, redondeado al entero más cercano. El mínimo de N es 2.
2. **Forma los tramos.** El tamaño objetivo es el total de palabras entre N. Recorre el molde en orden. Suma frases al tramo actual hasta alcanzar o pasar el tamaño objetivo. La frase que cruza el límite se queda en ese tramo. Empieza un tramo nuevo.
3. **Extrae los términos** de cada frase. Cuenta cada término una sola vez por frase.
4. **Calcula el peso** de cada término.
5. **Calcula la cuota** de cada tramo.
6. **Elige las ganadoras, tramo por tramo, en el orden de la obra.** En cada tramo:
   1. Calcula el puntaje de cada frase: la suma de los pesos de sus términos no cubiertos, dividida entre la raíz cuadrada de su número de palabras.
   2. Elige la frase de mayor puntaje. Si hay empate, elige la de menor número.
   3. Marca sus términos como cubiertos. Los cubiertos se acumulan en toda la obra.
   4. Suma las palabras de la frase al total de ganadoras del tramo.
   5. Repite desde 6.1 hasta que ese total alcance o pase la cuota. La última frase entra entera.
7. **Ordena las ganadoras** en el orden de la obra.

## Verificación

1. Ejecuta el procedimiento con un script. Ejecútalo dos veces. Las dos listas deben ser idénticas.
2. Calcula la cobertura.
3. Entrega la lista, las cuatro entradas fijas y la cobertura.
4. Para comparar variantes (otro N, otro porcentaje), compara su cobertura.

## Límite conocido

El método mide cuánto vocabulario de la obra cubren las frases. No mide calidad ni sentido.

Los tramos garantizan que cada parte de la obra tenga voz. El peso por tramos favorece el vocabulario que recorre toda la obra.
