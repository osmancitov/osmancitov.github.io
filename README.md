# Destilería

Un ecosistema de protocolos para leer corpus. Dieciocho instrumentos con lógica interna propia — no un framework, no una metodología uniforme. Cada instrumento opera desde una posición distinta sobre el mismo material.

---

## Qué es esto

La Destilería no es un sistema de análisis literario convencional. Es un conjunto de protocolos diseñados para que el modelo llegue al corpus sin categorías previas y encuentre el idioma del texto en lugar de importar el idioma de la crítica.

Cada instrumento define qué hace, cuándo aplicarlo, y cómo se relaciona con los demás. La selección es siempre situacional — no hay secuencia obligatoria.

---

## Instrumentos

| ID | Nombre | Registro | Función central |
|----|--------|----------|-----------------|
| M01 | Escucha | Apolíneo | Cadena secuencial sin contexto previo. El corpus se declara a sí mismo. |
| M02 | Umbral | Marco | Condición de operación. Geometría de tres fuerzas en tensión. |
| M03 | Recepción | Orientación | Ficha técnica, sinopsis, tensiones centrales. El instrumento más transferible. |
| M05 | Análisis por secciones | Granular | Joyas en tres escalas: microscópica, mesoscópica, macroscópica. |
| M06 | Inspección | Veredicto | Seis miradas estructurales. El único instrumento que juzga explícitamente. |
| M07 | Laboratorio | Sintomático | Lo que el corpus no sabe que contiene. Cuatro lentes. La semilla. |
| M08 | Etiquetado | Identidad | Cierre con identidad, no con resumen. El imán conceptual. La sentencia final. |
| M10 | Imágenes | Externo | Prompts para generación visual emergidos del corpus. |
| M11 | Narraciones | Narrativo | Índice de eventos con temperatura y peso vivo. |
| M12 | Apolo | Integrado | Análisis estructural exhaustivo. |
| M13 | Dioniso | Integrado | Análisis del pulso completo. |
| M14 | Hermes | Contextual | El suelo donde el corpus ocurrió. Condiciones que hicieron posible el texto. |
| M15 | Geógrafo | Espacial | La geografía como productora de pensamiento, no como escenario. |
| M16 | Cronista de la Pérdida | Taxonómico | Taxonomía de la extinción a múltiples escalas simultáneas. |
| M17 | Testigo del Testigo | Reflexivo | Observa al observador. La subjetividad no declarada. |
| M18 | Palimpsesto | Intersticial | El texto debajo del texto que emerge entre los análisis, no dentro de ellos. |
| M19 | Bucle | Godeliano | El corpus operado con sus propias herramientas. La proposición que el sistema no puede demostrar desde adentro. |
| M99 | Síntesis | Total | El análisis se ve a sí mismo como unidad. Declara o niega el palimpsesto. |

---

## Triángulo central

M12 (Apolo), M13 (Dioniso) y M14 (Hermes) forman el triángulo completo del análisis:

- **M12** — lo construido: arquitectura, estructura, cómo está hecho
- **M13** — lo experiencial: el pulso, lo que carga sin saberlo
- **M14** — lo contextual: el suelo, las condiciones, la posición del autor

Los tres juntos sobre el mismo corpus producen la estereoscopía completa.

---

## Instrucciones de uso

**Sobre la selección**
No hay secuencia obligatoria. M01 puede revelar qué instrumentos tienen sentido con un corpus específico — su Paso 6 produce exactamente eso. Para un corpus desconocido, M01 o M03 son entradas naturales. Para análisis estructural directo, M12. Para el pulso, M13.

**Sobre la escala**
Todos los instrumentos operan sobre cualquier escala: un párrafo, un capítulo, un libro, una obra completa. Lo que cambia es la duración y la granularidad, no el principio de operación.

**Sobre M01**
Requiere ventana de contexto vacía — sin system prompt activo. Si se ejecuta con contexto previo, la cadena se contamina. Es la única restricción técnica obligatoria del ecosistema.

**Sobre M19**
Solo opera sobre corpus que son sistemas que describen sistemas. La verificación de elegibilidad es en sí misma un resultado válido.

**Sobre M99**
Opera siempre al final. Recibe el output de cualquier combinación de instrumentos anteriores y construye la visión total — el momento en que el análisis se ve a sí mismo como unidad.

---

## Estructura del repositorio

```
/
├── README.md
├── index.md
├── manual_v13.md
├── readme.html
├── destilaciones/
|   ├── img        
|   ├── js        
|   └── stl        
└── protocolos/
    ├── M01_escucha/
    ├── M02_umbral/
    ├── M03_recepcion/
    ├── M05_analisis/
    ├── M06_inspeccion/
    ├── M07_laboratorio/
    ├── M08_etiquetado/
    ├── M10_imagenes/
    ├── M11_narraciones/
    ├── M12_apolo/
    ├── M13_dioniso/
    ├── M14_hermes/
    ├── M15_geografo/
    ├── M16_cronista/
    ├── M17_testigo/
    ├── M18_palimpsesto/
    ├── M19_bucle/
    └── M99_sintesis/
```

---

## Versión

`v13` — documento operativo activo.
