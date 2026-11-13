# Gainers y Losers

## Qué es y para qué sirve

Es el procedimiento que obtiene, de manera rápida, la lista de los pares que más suben y los que más bajan en **Binance**, la casa de cambio de criptomonedas. Un **par** es una pareja de activos que se cambian entre sí, como el bitcoin y el **USDT**, una moneda digital referida al dólar; el par se nombra con los símbolos de los dos juntos, como BTCUSDT. Los pares que más suben son los *gainers* y los que más bajan son los *losers*, como los llama la aplicación de Binance: son los dos extremos de una misma lista, no dos listas aparte.

La rapidez está en la fuente. La **API** de Binance, su servicio web de datos, ya trae calculada la variación de cada par en una **ventana móvil**: las horas contadas hacia atrás desde el momento de la consulta, no desde un corte fijo como la medianoche. No hay que reconstruir el intervalo ni calcular la variación: basta pedir la lista, filtrarla y ordenarla.

## Cuándo

Cuando el autor pide la lista más reciente de los pares que más suben o de los que más bajan.

## Cómo se obtiene la lista

1. La lista completa la entrega la dirección `https://data-api.binance.vision/api/v3/ticker/24hr`, que no pide clave: es la base pública que la documentación de Binance indica para los datos de mercado. Pídela. La respuesta es un texto en formato **JSON**, datos con estructura, con un elemento por par, y cada elemento trae el campo `priceChangePercent`: la variación porcentual del precio del par en las últimas 24 horas móviles.
2. Filtra los pares por su moneda de referencia, la segunda del par, porque solo se comparan pares que miden contra lo mismo: BTCUSDT y BTCEUR no se ordenan juntos. La referencia común es USDT: conserva los símbolos que terminan en `USDT`.
3. Convierte `priceChangePercent` a número: llega como texto, y un orden de textos no ordena cantidades.
4. Ordena los pares por esa variación, de mayor a menor: arriba quedan los *gainers* y abajo los *losers*.
5. Toma de cada extremo la cantidad que el encargo pida, o la lista completa si la pide entera.

Notas:

- La ventana de la dirección de 24 horas es móvil: cubre las últimas 24 horas hasta el momento de la consulta. Quien pida «los de hoy» recibe esa ventana, salvo que pida otro intervalo.
- Para otra ventana la API tiene otra dirección, `https://data-api.binance.vision/api/v3/ticker`, con el tamaño en el parámetro `windowSize`, por ejemplo `1h` o `4h`; el valor por defecto es `1d`. Es una dirección distinta, no un parámetro de la de 24 horas.
- Si la dirección base `https://api.binance.com` responde que el servicio no está disponible desde la ubicación, se usa la base pública de datos de mercado, `https://data-api.binance.vision`.

Fuente: la [documentación oficial de la API de Binance Spot](https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md), que describe las dos direcciones y sus campos.

## Revisión antes de entregar

Antes de entregar la lista se comprueba, con la respuesta de la API a la vista:

1. **Ventana móvil.** La variación es la que la fuente ya calculó para la ventana móvil; no se reconstruyó desde un corte fijo.
2. **Misma referencia.** Todos los pares de la lista llevan la misma moneda de referencia.
3. **Orden numérico.** La lista está ordenada por la variación convertida a número, de mayor a menor, con los *gainers* arriba y los *losers* abajo.
4. **Intervalo declarado.** La entrega dice qué intervalo representa la lista: la ventana móvil de 24 horas o la que se haya pedido.

© 2026 Osmancito
