# Radiografía de variación

## Qué es y para qué sirve

Es el procedimiento que dibuja la radiografía de variación de un **activo**, un bien que se compra y se vende en un mercado, como una criptomoneda o una participación en una empresa. La **radiografía de variación** es una gráfica de los días de un activo: cuánto subió y cuánto bajó en total y cuántos días pasó de cada lado, para ver de un vistazo cómo se ha comportado en su historia y compararlo con otros con la misma medida.

Cada radiografía lleva el nombre del activo: la de SPCX se titula «SPCX variación diaria».

## Cuándo

Cuando el autor pide la radiografía de un activo.

## Los datos

1. Los precios del activo viven en los **registros**: la carpeta `registros/velas-24h/stock/` del repositorio `osmancitov/hugo`, con una subcarpeta por activo y un archivo por mes. El **código** del activo es su nombre corto en los registros, como SPCX. Cada día trae una **vela**: los cuatro precios del día (apertura, máximo, mínimo y cierre) y el **volumen**, la cantidad negociada ese día.
2. El **precio del día** es el promedio de los cuatro precios de su vela.
3. La **ventana** es el período de días que cubre la radiografía. La **variación diaria** es el cambio del precio del día frente al día anterior, en por ciento: el precio de hoy dividido entre el de ayer, menos uno, por cien. El primer día de la ventana no tiene día anterior y cuenta variación cero por convención.
4. Un **día verde** es un día con variación mayor que cero y un **día rojo**, uno con variación menor que cero. Un día con variación cero no es verde ni rojo.
5. El **v/p** de un día es su volumen dividido entre su precio del día.

## El dibujo

1. Cada día dibuja un rectángulo vertical desde el cero hasta su variación: verde hacia arriba, rojo hacia abajo. Cada día cuenta entero, con su variación completa.
2. Una línea azul une las variaciones en orden de días, en tramos de un día al siguiente. El tramo de cada día lleva el v/p del día al que llega. El grosor crece en línea recta entre el v/p mínimo y el máximo de la ventana, de 0.7 a 12: `0.7 + (v/p − mínimo) ÷ (máximo − mínimo) × 11.3`, y el resultado se multiplica por 0.72.
3. La línea horizontal del cero se destaca sobre la cuadrícula, en gris azulado (`#8b93a1`) y más gruesa que las demás líneas.
4. La cuadrícula lleva una línea vertical tenue (`#212835`) por cada día, una línea media (`#313b50`) en el día 15 de cada mes y una línea fuerte (`#3d4759`) en el día 1. Las fechas se escriben solo en esos días, con el día y el mes: «01 Jul», «15 Jul». La cuadrícula horizontal lleva una línea tenue cada dos puntos porcentuales, y el eje vertical se rotula «Variación diaria» con las mismas marcas de dos en dos, con el signo de por ciento.
5. Los colores son fijos: fondo oscuro azulado (`#131722`), línea azul (`#5a92d6`) al 90 % de opacidad, rectángulos verde (`#25855c`) y rojo (`#b73d40`) al 50 % de opacidad, textos en gris claro (`#c9ccd3`).
6. El título es «ACTIVO variación diaria», con el código del activo, y el subtítulo es «Grosor = volumen/precio · N días», con N la cantidad de variaciones de la ventana. La imagen mide 1516 × 758 **píxeles**, los puntos de color que la forman.

## Las cuentas

1. El **área verde** es la suma de las variaciones de los días verdes. El **área roja** es la magnitud de la suma de las variaciones de los días rojos: las variaciones de esos días son negativas y su suma también, y el área roja es esa suma sin el signo. Las dos áreas son cantidades positivas y toda cuenta se hace con ellas; el signo menos solo aparece al presentar el área roja, porque baja. La unidad de las áreas es el **%d**: puntos porcentuales por día, que equivale al área de los rectángulos de un color.
2. Una **razón** es el resultado de dividir una cantidad entre otra. La **razón de variación** es el área verde dividida entre el área roja; la **razón de días** es la cantidad de días verdes dividida entre la de días rojos.
3. Cada cuenta se hace con las cifras completas. Las áreas se muestran redondeadas a enteros y las razones, a dos decimales.

## La leyenda

La leyenda va arriba a la derecha y lleva seis filas:

1. Las tres primeras filas son muestras de la línea azul en sus grosores mínimo, mediano y máximo, con el valor redondeado y «v/p»: «mín 61 v/p», «med 852 v/p», «máx 6.779 v/p». El valor de «med» es la **mediana** de los v/p de la ventana: el que queda en el medio al ordenarlos.
2. Un rectángulo verde con el área verde y los días verdes: «+127 %d / 62 d».
3. Un rectángulo rojo con el área roja y los días rojos, con el signo menos de la presentación: «−143 %d / 79 d».
4. La **bandera**: un rectángulo partido por la diagonal que une su esquina inferior izquierda con la superior derecha; el triángulo de arriba a la izquierda es verde y el de abajo a la derecha es rojo. Su texto lleva la razón de variación y la razón de días, separadas por una barra: «0.89 / 0.78». La bandera es la relación entre el verde y el rojo de la ventana.

Cada muestra de la leyenda lleva el color y la opacidad de lo que muestra.

## Cómo se leen las razones

Una razón de 1 dice que los dos lados pesan lo mismo: el activo acumuló lo mismo en subidas que en bajadas, o tuvo tantos días verdes como rojos. Una razón de 0.89 en la variación dice que por cada punto que el activo acumuló en bajadas acumuló 0.89 en subidas; una de 0.78 en los días dice que por cada cien días rojos hubo setenta y ocho verdes.

Las razones describen la ventana medida: son la huella histórica del activo. No dicen lo que el activo hará después.

## Revisión antes de entregar

Antes de entregar la radiografía se comprueba, con los datos y la imagen a la vista:

1. **Datos contados.** La cantidad de velas y la de variaciones cuadran: N velas dan N−1 variaciones.
2. **Suma cerrada.** El área verde menos el área roja iguala la suma de todas las variaciones, con su signo: en la radiografía de SPCX, 127.12 − 142.58 = −15.46.
3. **Cero por convención.** El primer día de la ventana cuenta variación cero y no entra en las cuentas de días verdes ni rojos.
4. **Razones recomputadas.** Las razones salen de las cifras completas, sin redondeos previos, y se muestran con dos decimales.
5. **Bandera en su lugar.** La bandera es la última fila de la leyenda, verde arriba a la izquierda y rojo abajo a la derecha.
6. **Diseño intacto.** Solo cambian los datos: colores, opacidades, cuadrícula, títulos y leyenda siguen este módulo.
7. **Sin promesas.** La entrega no presenta las razones como probabilidad de lo que vendrá.
8. **Imagen vista.** Se mira la imagen final, no solo el cálculo: la línea se distingue del relleno, el cero se destaca y la leyenda se lee completa.

© 2026 Osmancito
