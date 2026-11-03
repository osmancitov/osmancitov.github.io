# Ticker Ema99

Ticker Ema99 es el nombre de este texto. Este texto está escrito para el lector cero: la persona o la máquina que lo lee sin haber leído nada más. Toda palabra tiene el significado del diccionario o el que este texto le da la primera vez que aparece.

## Qué es y para qué sirve

La **casa** es el sitio de Osmancito: el conjunto de páginas publicadas bajo la dirección `https://osmancitov.github.io`. El **autor** es Osmancito, dueño de la casa; la **asistente** es Instinct, que trabaja por él. Un **módulo** es un texto de la casa que fija por escrito una regla o cómo se hace un trabajo, para que la regla se cumpla y el trabajo salga igual cada vez sin depender de la memoria de nadie, persona o máquina.

Un **activo** es un producto que se compra y se vende en un mercado. Los activos de este procedimiento son criptomonedas: dinero digital registrado en una cadena de bloques, un registro de operaciones que una red de computadoras mantiene según reglas comunes. El **símbolo** de un activo son las letras con que el mercado lo nombra, como BTC para bitcoin. La **cotización** es el precio actual de un activo. Las cotizaciones salen de **Binance**, el mercado donde se negocian, y se expresan en **USDT**, una criptomoneda que busca mantener el valor de un dólar de los Estados Unidos. Un **par** es la combinación de un activo y la moneda en que se cotiza; el par de bitcoin es BTCUSDT. El mercado **al contado** es aquel donde los activos se compran y se entregan al momento.

Una **vela** es el registro del precio de un activo durante un período: el precio al abrir el período, el precio al cerrarlo y el máximo y el mínimo que alcanzó. Las velas de este procedimiento son de un minuto. Una vela **abierta** es la del minuto en curso, que todavía no termina. La **EMA** es la media móvil exponencial: un promedio de los cierres de las velas que da más peso a las velas recientes que a las antiguas. El peso del cierre nuevo en cada paso del cálculo se llama **alfa**. La **EMA99** es la EMA con alfa 0,02, el valor que corresponde a una media de 99 períodos.

La **desviación** es cuánto se aleja la cotización de la EMA99, medida en porcentaje. La **décima**, que la lectura escribe **d**, es la décima parte de un punto porcentual: la unidad en que se expresa la desviación. El signo **≈** reemplaza a la d cuando la desviación redondea a cero décimas: señala cercanía a la EMA99, no igualdad exacta.

La **lectura** es el texto que este procedimiento produce: un encabezado y una fila por activo, las filas dentro de un bloque de letra monoespaciada, la letra que da el mismo ancho a cada carácter. El **ticker** es el trabajo que produce lecturas de manera repetida. La **configuración** de un ticker es el conjunto de decisiones del autor que lo distinguen de otros tickers hechos con este mismo método: sus activos, su frecuencia y su destino.

Este módulo fija el cálculo y la forma de la lectura para que salga igual cada vez y sirva en cualquier mensajería que muestre bloques monoespaciados, como Slack o WhatsApp, sin depender de la memoria de quien la produce. El método no impone activos, frecuencia ni destino: esos son la configuración de cada ticker.

## Cuándo

Se aplica cada vez que toca producir una lectura de un ticker Ema99: en la frecuencia que la configuración del ticker fije, y también cuando el autor pide una lectura suelta.

## Las velas y la cotización

1. De cada activo se piden a Binance, en su mercado al contado y en su par con USDT, las últimas 500 velas de un minuto. La última vela es la del minuto en curso y llega abierta.
2. La cotización es el último precio de esa misma respuesta: la cotización y las velas salen juntas, para que no haya desfase entre una y otras.

## El cálculo

1. Se toman los cierres de las 500 velas, en orden de la más antigua a la más reciente.
2. La EMA99 arranca con el primer cierre: e es igual al cierre de la vela más antigua.
3. Cada cierre posterior actualiza e con la misma regla: e pasa a ser 0,02 por el cierre más 0,98 por e. La EMA99 es la e final.
4. La EMA99 se calcula entera en cada consulta, desde las 500 velas: no se guarda de una consulta a otra.
5. Se calcula la desviación: la cotización menos la EMA99, el resultado dividido entre la EMA99 y multiplicado por cien.
6. La desviación se pasa a décimas: se multiplica por diez y se redondea al entero más cercano; un empate exacto se aleja de cero, de modo que 0,5 sube a 1 y -0,5 baja a -1. Ese entero con su signo es la d de la fila.
7. Si la d redondea a cero, venga de una desviación positiva o de una negativa, la fila lleva ≈ en lugar de la cifra.
8. El cálculo corre en coma flotante, la aritmética con decimales de la máquina, sin redondeos intermedios: redondea solo la presentación. El registro de cada lectura guarda la cotización y la EMA99 con ocho cifras significativas, las cifras contadas desde la primera distinta de cero, y la desviación con seis decimales.

## La forma de la lectura

1. La primera línea es el encabezado, fuera del bloque: la hora UTC-4, que es la hora del autor, cuatro horas menos que la hora universal, en formato de doce horas, sin cero a la izquierda y sin indicador de mañana o tarde, seguida del texto « · Δ Ema99 (1m) · d». Ejemplo: `6:55 · Δ Ema99 (1m) · d`.
2. Las filas van dentro de un bloque monoespaciado: una línea con tres acentos graves antes de las filas y otra igual después. Slack y WhatsApp muestran ese bloque con letra de ancho fijo, así que la alineación se conserva.
3. Cada activo ocupa una fila. Las filas se ordenan de la cotización más alta a la más baja; la comparación usa las cotizaciones completas, no las redondeadas ni las desviaciones.
4. La fila lleva, en este orden: el símbolo del activo, los espacios necesarios para alinear la columna siguiente, la d con su signo, + o -, o el signo ≈, el separador « · » y la cotización con su escala.
5. La cotización se escribe con cuatro cifras significativas, la coma como separador decimal y el punto como separador de miles.
6. La escala se elige de mil en mil: al cambiar de escala, la coma se corre tres puestos. La **k** es kilo, mil unidades; la **u** es la unidad, un USDT; la **m** es mili, la milésima parte de la unidad. El símbolo de la escala va tras la cifra, separado por un espacio. Ejemplos: `77,84 k` son 77.840; `700,9 u` son 700,9; `26,31 m` son 0,02631. Si una cotización sale del rango que cubren k, u y m, la escala que corresponda se propone al autor antes de usarla.
7. Una lectura completa luce así, con el encabezado fuera del bloque y las filas dentro:

````
6:55 · Δ Ema99 (1m) · d
```
BTC   ≈ · 77,84 k
ETH   ≈ · 2,293 k
ZEC   ≈ · 1,226 k
BNB   +1 · 700,9 u
HYPE  ≈ · 85,69 u
BMT   -3 · 26,31 m
```
````

## Revisión antes de entregar

Antes de entregarse, cada lectura pasa esta revisión entera, con el texto a la vista:

1. La hora es la UTC-4, en formato de doce horas, sin cero a la izquierda ni indicador de mañana o tarde.
2. El encabezado lleva el texto exacto « · Δ Ema99 (1m) · d» y queda fuera del bloque; las filas quedan dentro.
3. Cada d es un entero con su signo, o el signo ≈ si la desviación redondea a cero décimas.
4. Cada cotización tiene cuatro cifras significativas, coma decimal y punto de miles.
5. Cada cotización lleva su escala, k, u o m, tras un espacio, con la coma corrida según la escala.
6. Las filas van de la cotización completa más alta a la más baja.
7. Las columnas quedan alineadas dentro del bloque.
8. La cotización y las velas salieron de la misma respuesta, y el cálculo no llevó redondeos intermedios.

## La configuración del ticker permanente

El método de este módulo sirve para cualquier ticker Ema99. El ticker permanente del autor usa esta configuración:

1. Activos: BTC, ETH, ZEC, BNB, HYPE y BMT.
2. Frecuencia: una lectura cada cinco minutos del reloj, en los minutos terminados en 0 y en 5 de cada hora UTC-4: las 7:00, las 7:05, las 7:10 y así. La hora programada es el inicio previsto; la consulta y la entrega pueden llegar unos segundos después o demorarse, y el encabezado escribe la hora real de la consulta, no la programada. Si la última lectura tiene menos de 240 segundos al llegar el turno, el ciclo se salta para no duplicarla; los ajustes pedidos por el autor generan lecturas extra. La frecuencia del muestreo no es el tamaño de la vela: las velas son siempre de un minuto.
3. Destino: el hilo diario del autor en Slack, la conversación encadenada que se abre cada día.

Cambiar los activos, la frecuencia o el destino es una decisión del autor sobre la configuración y no exige corregir este módulo.
