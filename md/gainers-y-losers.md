# Gainers y Losers

## Qué es y para qué sirve

Es el procedimiento que obtiene, de manera rápida, la lista de los pares que más suben y los que más bajan en **Binance**, la casa de cambio de criptomonedas. Un **par** es una pareja de activos que se cambian entre sí, como el bitcoin y el **USDT**, una moneda digital referida al dólar; el par se nombra con los símbolos de los dos juntos, como BTCUSDT. Los pares que más suben son los *gainers* y los que más bajan son los *losers*, como los llama la aplicación de Binance: son los dos extremos de una misma lista, no dos listas aparte.

La rapidez está en la fuente. La **API** de Binance, su servicio web de datos, ya trae calculada la variación de cada par en una **ventana móvil**: las horas contadas hacia atrás desde el momento de la consulta, no desde un corte fijo como la medianoche. No hay que reconstruir el intervalo ni calcular la variación: basta pedir la lista, filtrarla y ordenarla.

La **rutina** es el uso completo del procedimiento: además de la lista, compara sus pares con el **registro** y la presenta en tres zonas de esa lista: los diez primeros pares, los pares sin variación y los diez últimos. El registro es la carpeta `registro` del proyecto `osmancitov/tesoreria` en GitHub, con una subcarpeta por par, que lleva el símbolo del par como nombre.

## Cuándo

Cuando el autor pide la lista más reciente de los pares que más suben o de los que más bajan, o la rutina.

## Cómo se obtiene la lista

1. La lista completa la entrega la dirección `https://data-api.binance.vision/api/v3/ticker/24hr`, que no pide clave: es la base pública que la documentación de Binance indica para los datos de mercado. Pídela. La respuesta es un texto en formato **JSON**, datos con estructura, con un elemento por par, y cada elemento trae el campo `priceChangePercent`: la variación porcentual del precio del par en las últimas 24 horas móviles.
2. Filtra los pares por su moneda de referencia, la segunda del par, porque solo se comparan pares que miden contra lo mismo: BTCUSDT y BTCEUR no se ordenan juntos. La referencia común es USDT: conserva los símbolos que terminan en `USDT`.
3. Excluye los pares en pausa. La respuesta de 24 horas no dice el estado de cada par; lo dice `https://data-api.binance.vision/api/v3/exchangeInfo`, el catálogo de pares de Binance, en el campo `status` de cada uno. Un par en `BREAK` está en pausa prevista y, según la documentación de Binance, no genera datos de mercado mientras dura. Quita los símbolos cuyo `status` sea `BREAK`.
4. Revisa si algún par tiene un estado distinto de `TRADING` y de `BREAK`. La documentación de Binance enumera otros tres: `HALT`, detenido por una emergencia, que sigue generando datos de mercado; `CANCEL_ONLY`, donde solo se cancelan o modifican órdenes, con datos de mercado salvo las velas; y `END_OF_DAY`, que no tiene una definición oficial suficiente. Si aparece alguno, dile al autor el estado y los símbolos antes de ordenar: no se incluyen ni se excluyen en silencio.
5. Convierte `priceChangePercent` a número, sin redondearlo: llega como texto, con tres decimales, y un orden de textos no ordena cantidades.
6. Ordena los pares por esa variación, de mayor a menor: arriba quedan los *gainers* y abajo los *losers*. Si dos pares tienen la misma variación, va primero el de símbolo menor en orden alfabético.
7. Toma de cada extremo la cantidad que el encargo pida, o la lista completa si la pide entera.

La rutina sigue estos pasos:

1. Obtén la lista completa, ordenada, con los pasos anteriores hasta el 6, sin los pares en `BREAK`. La **posición** de un par es su lugar en esa lista, de 1 hacia abajo; no se reinicia en ninguna zona de la presentación.
2. Compara los símbolos de la lista con los nombres de las subcarpetas del registro y anuncia el resultado: el tamaño de la lista, es decir, cuántos pares tiene; qué pares son nuevos, los que están en la lista y no en el registro; qué pares faltan, los que están en el registro y no en la lista; o que todo sigue igual. La comparación se entrega al autor, no se añade a la página de listas.
3. Presenta los *gainers*: los diez primeros pares, de la posición 1 a la 10, cada uno con su posición y su variación con tres decimales.
4. Presenta los **neutros**: los pares cuya variación publicada es `0.000`, cada uno con su posición y su variación. Ese valor es cero con los tres decimales de la API: no prueba que el precio no se haya movido en la ventana. Si no hay ninguno, presenta el par de menor variación positiva y el par de menor variación negativa en valor absoluto, que son los vecinos del cero, cada uno con su posición y su variación con tres decimales.
5. Presenta los *losers*: los diez últimos pares, en el orden de la lista, de modo que el que más baja queda al final, cada uno con su posición y su variación con tres decimales.

Notas:

- Por qué se excluyen los pares en `BREAK`: la dirección de 24 horas también devuelve esos pares, pero con datos que no son de las últimas 24 horas. El 13 de noviembre de 2026 se comprobó con BETAUSDT, en `BREAK`: la respuesta decía -64 % y fechas de apertura y cierre del día, pero su último dato era una operación del 16 de abril de 2025. Esos pares, con porcentajes de operaciones antiguas, aparecían entre los *losers* y los *gainers* como si fueran movimientos de hoy. La documentación de Binance describe una ventana móvil de 24 horas y no explica este comportamiento. El 13 de noviembre de 2026 el catálogo solo tenía pares en `TRADING` y en `BREAK`.
- La ventana de la dirección de 24 horas es móvil: cubre las últimas 24 horas hasta el momento de la consulta. Quien pida «los de hoy» recibe esa ventana, salvo que pida otro intervalo.
- Para otra ventana la API tiene otra dirección, `https://data-api.binance.vision/api/v3/ticker`, con el tamaño en el parámetro `windowSize`, por ejemplo `1h` o `4h`; el valor por defecto es `1d`. Es una dirección distinta, no un parámetro de la de 24 horas.
- Si la dirección base `https://api.binance.com` responde que el servicio no está disponible desde la ubicación, se usa la base pública de datos de mercado, `https://data-api.binance.vision`.

Fuente: la [documentación oficial de la API de Binance Spot](https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md), que describe las dos direcciones y sus campos.

## Formato de la publicación

La [entrada del 13 de noviembre de 2026](https://osmancitov.github.io/tesoreria/html/261113_gainers-y-losers.html), con sus recortes de texto, es la referencia del formato: imagen de apertura, presentación breve, proporciones y las tres listas. Las explicaciones del método permanecen en este módulo; la página no las repite ni añade advertencias que el autor retiró.

Las **proporciones** son el porcentaje de pares que suben, quedan neutros o bajan dentro de la lista completa. Se calculan sobre la misma consulta que produce las listas, después del filtro: la cantidad de cada grupo dividida por el total, multiplicada por cien. Se muestran junto a los recuentos, con dos decimales. No se calculan sobre los diez primeros ni sobre los diez últimos.

Una actualización de la página se hace cuando el autor la pida y declara la fecha y la hora de la consulta usada. El formato no activa una ejecución automática ni una frecuencia de actualización.

## Revisión antes de entregar

Antes de entregar la lista se comprueba, con la respuesta de la API a la vista:

1. **Ventana móvil.** La variación es la que la fuente ya calculó para la ventana móvil; no se reconstruyó desde un corte fijo.
2. **Misma referencia.** Todos los pares de la lista llevan la misma moneda de referencia.
3. **Sin pares en `BREAK`.** Ningún par de la lista está en `BREAK` en el catálogo de pares, y si algún par tenía otro estado, el autor lo supo antes de ordenar.
4. **Orden numérico.** La lista está ordenada por la variación convertida a número sin redondear, de mayor a menor, con los *gainers* arriba y los *losers* abajo.
5. **Intervalo declarado.** La entrega dice qué intervalo representa la lista: la ventana móvil de 24 horas o la que se haya pedido.
6. **Comparación anunciada.** Si se entregó la rutina, la entrega dice el tamaño de la lista y los pares nuevos y faltantes frente al registro, o que todo sigue igual.
7. **Posiciones de la lista completa.** Si se entregó la rutina, cada par lleva su posición en la lista completa y su variación con tres decimales, sin reiniciar la cuenta, y los empates siguen el orden alfabético del símbolo.
8. **Neutros presentes.** Si se entregó la rutina, aparecen todos los pares con variación publicada `0.000`, o los dos vecinos del cero si no hay ninguno, sin afirmar que el precio no se movió.
9. **Proporciones de la misma consulta.** Los recuentos de los tres grupos suman el total de pares filtrados, y cada porcentaje usa ese total como denominador. Las proporciones y las listas salen de la misma consulta.
10. **Formato breve.** Si se publica, la página sigue la entrada de referencia, sin reponer los bloques retirados ni activar actualizaciones automáticas. Los archivos md y html dicen lo mismo.

## Cambios

13 de noviembre de 2026: la publicación depurada queda como referencia de formato. Se añaden las proporciones de los tres grupos sobre la misma consulta, junto a sus recuentos, sin activar una ejecución automática. La sección por capitalización sigue fuera del procedimiento hasta resolver su cálculo y sus fuentes. A pedido de Osmancito.

13 de noviembre de 2026: la rutina ordena por la variación que entrega la API sin redondearla y presenta cada variación con sus tres decimales. Los neutros son los pares con variación publicada `0.000`, que es cero con esa precisión y no prueba que el precio no se haya movido. Cambian los pasos 5 del procedimiento y 3 a 5 de la rutina, y los puntos 4, 7 y 8 de «Revisión antes de entregar». A pedido de Osmancito.

13 de noviembre de 2026: el módulo gana la rutina de gainers y losers: la lista completa sin pares en `BREAK`, la comparación con el registro de `osmancitov/tesoreria`, y la presentación en tres zonas (diez *gainers*, neutros, diez *losers*) con la posición de cada par en la lista completa. El desempate de pares con igual variación es el orden alfabético del símbolo. Cambian «Qué es y para qué sirve», «Cuándo», el paso 6, y ganan la sección de la rutina y tres puntos de «Revisión antes de entregar». A pedido de Osmancito.

13 de noviembre de 2026: el procedimiento excluye solo los pares en `BREAK`, no todo lo que no sea `TRADING`: la documentación de Binance dice que solo `BREAK` deja de generar datos de mercado, y no hay base para descartar por inútiles los demás estados. Gana el paso 4, que manda avisar al autor si aparece otro estado; cambian el paso 3, la nota sobre los pares en `BREAK` y el punto 3 de «Revisión antes de entregar». A pedido de Osmancito.

13 de noviembre de 2026: el procedimiento excluye los pares en `BREAK` al consultar la lista de 24 horas: la cruza con el catálogo de pares (`exchangeInfo`) y conserva solo los `TRADING`, porque esos pares devuelven operaciones antiguas bajo fechas recientes. Gana el paso 3, la nota sobre los pares en `BREAK` y el punto 3 de «Revisión antes de entregar». A pedido de Osmancito.

© 2026 Osmancito
