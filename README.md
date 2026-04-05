# Destilería Osmancito

**v3.9 · 2026**

Un sistema de análisis literario profundo operado mediante prompt de lenguaje natural. El corpus entra. Un paquete de análisis completo sale.

---

## Qué es

Destilería Osmancito es un prompt maestro para modelos de lenguaje que transforma cualquier corpus literario en un análisis estructurado de cuatro módulos. No resume. No reseña. Destila: extrae la esencia funcional, inspecciona la arquitectura, analiza el sedimento y firma la topología conceptual del texto.

El sistema opera siempre en español, independientemente del idioma del corpus de entrada.

---

## Cómo funciona

El prompt se entrega al modelo como instrucción de sistema. El usuario entrega un corpus —archivo adjunto, título y autor, o ZIP descomprimido de epub— y el sistema ejecuta el protocolo completo sin pausas, sin confirmaciones intermedias, sin preguntas.

El producto es un documento estructurado con jerarquía de títulos fija, clases semánticas predefinidas y cuatro prompts de imagen generados en cada análisis.

### Los cuatro módulos

**Módulo Alambique — Destilación**
Destilado maestro del corpus (300–500 palabras de prosa literaria autónoma), análisis por barricas (extracto + fracciones nobles por capítulo), cartografía del conjunto y nota de cata sensorial con taxonomía de bebidas.

**Módulo Control de Calidad — Inspección**
Clasificación del corpus como arquetipo de nave (galeón, carabela, submarino, barco fantasma, etc.), inspección en seis estratos (casco y quilla, corrientes, arquitectura, aguas profundas, el capitán y su sombra, registro de origen), veredicto de zarpe y nota naval.

**Módulo Laboratorio — Análisis de Sedimento**
Ausencias (lo que el corpus rodea sin nombrar), síntomas (inconsistencias de tono y argumento), cifras (patrones de recurrencia anómala), cuatro lentes de lectura (literal, alegórico, moral, profundo) y compuesto base: el núcleo irreducible del corpus en una sola proposición.

**Módulo Etiquetado — Topología y Firma**
Fallas de cierre clasificadas por tipo (abierta, cerrada, abandonada, performativa, asimétrica) con identificación de la falla raíz, núcleo de curvatura, red conceptual estimada y estrategia de grandeza.

---

## Estructura del repositorio

```
destileria-osmancito/
│
├── maestro.md            # El prompt maestro completo
├── maestro.css           # Hoja de estilos única para todos los productos
├── README.md             # Este archivo
├── README.html           # Versión HTML del README
└── Destilaciones/
    ├── img /             # Imágenes
    └── 00n.html          # Lotes procesados
```

---

## Cómo instalar

**1.** Crear proyecto nuevo en [`Claude`](https://claude.ai/). Nombre: *Destilería Osmancito*.

**2.** En el recuadro de instrucciones del proyecto, pegar el contenido de [`maestro.md`](https://cdn.jsdelivr.net/gh/osmancitov/osmancitov.github.io@main/maestro.md)


---

## Archivos HTML producidos

Cada análisis completo puede exportarse como archivo `.html` que enlaza externamente a `maestro.css`. Los HTML producidos no contienen estilos embebidos ni estilos inline. Modificar el CSS actualiza todos los documentos existentes sin reescribir ninguno.

### Convención de nombre

```
Destilería Osmancito — [Título] — [Autor].html
```

### Estructura del HTML

Cabecera de documento → índice TOC (generado automáticamente por script) → cinco secciones `<section class="modulo">` → pie de página.

Cada sección tiene un ID fijo: `#recepcion`, `#alambique`, `#inspeccion`, `#laboratorio`, `#etiquetado`.

---

## Clases semánticas del CSS

El sistema define un vocabulario de clases exactas que el CSS debe reconocer. Las principales:

### Estructura general
- `.cabecera-documento` — cabecera del documento
- `.modulo` + `.recepcion` / `.alambique` / `.inspeccion` / `.laboratorio` / `.etiquetado`
- `.modulo-cabecera` — cabecera interior de cada módulo
- `.bitacora` — líneas de voz del operario
- `.pie-documento`

### Recepción
- `.ficha-recepcion`, `.ficha-seccion-titulo`, `.ficha-campo`
- `.ficha-campo-nombre`, `.ficha-campo-valor`, `.ficha-campo-valor.destacado`

### Alambique
- `.destilado-maestro`, `.barrica`, `.barrica-numero`, `.barrica-subtitulo`
- `.extracto`, `.fraccion-noble`, `.fraccion-anzuelo`
- `.cartografia`, `.cartografia-seccion`, `.cartografia-seccion-titulo`
- `.nota-de-cata`, `.campo-cata`, `.campo-cata-nombre`, `.campo-cata-valor`

### Inspección
- `.clasificacion-nave`, `.nave-arquetipo`, `.nave-registro`
- `.estrato`, `.estrato-numero`
- `.veredicto` + `.zarpe-autorizado` / `.zarpe-advertencias` / `.zarpe-parcial` / `.embargo` / `.hundimiento`
- `.veredicto-categoria`, `.veredicto-justificacion`, `.nota-naval`

### Laboratorio
- `.laboratorio-seccion`, `.lente`, `.lente-numero`
- `.compuesto-base`, `.compuesto-base-etiqueta`, `.compuesto-base-texto`

### Etiquetado
- `.fallas-cierre`, `.falla` + `.abierta` / `.cerrada` / `.abandonada` / `.raiz`
- `.falla-pregunta`, `.falla-tipo`, `.apertura-total`
- `.nucleo-curvatura`, `.red-conceptual`, `.campo-nombre`, `.campo-valor`
- `.estrategia-grandeza-texto`

### Prompts de imagen
- `.prompt-imagen` + `.prompt-imagen-alambique` / `.prompt-imagen-inspeccion` / `.prompt-imagen-laboratorio` / `.prompt-imagen-etiquetado`
- `.prompt-imagen-cabecera`, `.prompt-cuerpo`

---

## Vocabulario del sistema

| Término | Definición |
|---|---|
| Corpus | La materia prima. Todo lo que entra. |
| Fracción noble | El fragmento que sobrevive solo. Lo que alguien repetiría años después. |
| Extracto | La esencia funcional de una barrica. |
| Barrica | Unidad por capítulo: extracto + fracciones nobles. |
| Destilado maestro | El epítome del corpus. Texto autónomo que encarna el libro sin resumirlo. |
| Nota de cata | El corpus descrito como si fuera una bebida. |
| Falla de cierre | Pregunta que el corpus activa y no resuelve. |
| Núcleo de curvatura | El concepto que transforma el significado de todo lo que lo rodea. |
| Compuesto base | El núcleo de sentido más irreducible del corpus. |
| Rendimiento de destilación | Relación entre volumen del corpus y volumen del producto, expresada en grados. |

---

## Modos de entrada

El sistema acepta tres modos de entrega del corpus:

**Modo 1 — Archivo adjunto** (epub, pdf, txt): el corpus llega adjunto. El sistema registra y procede.

**Modo 2 — Título y autor**: sin archivo. El sistema trabaja desde su conocimiento del corpus.

**Modo 3 — ZIP plano** (epub descomprimido): activa el Protocolo ZIP. El sistema lee `toc.ncx`, clasifica los archivos, ejecuta manifiesto internamente, incluye lo narrativo y paratextual relevante, excluye lo legal, los separadores y el aparato accesorio, resuelve las ambigüedades por criterio de densidad narrativa, sin consultar.

---

## Rendimiento de destilación

El rendimiento expresa la relación entre el volumen del corpus y el volumen del producto generado. Se calcula como el complemento del porcentaje de palabras usadas y se expresa en grados de pureza.

Un corpus de 80.000 palabras destilado en un producto de 6.400 palabras (8% del original) produce un destilado de **92°**. Cuanto más alto el grado, más severa la compresión, más noble el resultado.

---

## Fallas de cierre y predicción de inagotabilidad

Las fallas abiertas son el predictor más robusto de inagotabilidad de un corpus. Un texto con alta proporción de fallas genuinamente abiertas seguirá produciendo lecturas nuevas en cada relectura.

Confirmado en 13/13 corpus analizados: todos los textos clasificados como inagotables tienen mayoría de fallas abiertas.

---

*Destilería Osmancito · Entra la materia prima. Sale el destilado puro.*
*Cuatro módulos. Cuatro imágenes. Cada corpus, una sorpresa.*
