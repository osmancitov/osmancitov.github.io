# Destilería

Un ecosistema de protocolos para leer corpora. Diecinueve instrumentos con lógica interna propia — no un framework, no una metodología uniforme. Cada instrumento opera desde una posición distinta sobre el mismo material.

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
| M03 | Objeto | Material | El corpus como cosa física antes de la primera página. |
| M04 | Recepción | Orientación | Ficha técnica, sinopsis, tensiones centrales. El instrumento más transferible. |
| M05 | Análisis por secciones | Granular | Joyas en tres escalas: microscópica, mesoscópica, macroscópica. |
| M06 | Inspección | Veredicto | Seis miradas estructurales. El único instrumento que juzga explícitamente. |
| M07 | Laboratorio | Sintomático | Lo que el corpus no sabe que contiene. Cuatro lentes. La semilla. |
| M08 | Etiquetado | Identidad | Cierre con identidad, no con resumen. El imán conceptual. La sentencia final. |
| M09 | Síntesis | Total | El análisis se ve a sí mismo como unidad. Declara o niega el palimpsesto. |
| M10 | Imágenes | Externo | Prompts para generación visual emergidos del corpus. |
| M11 | Narraciones | Narrativo | Índice de eventos con temperatura y peso vivo. |
| M12 | Apolo | Integrado | Análisis estructural exhaustivo. Versión integrada de M4, M6 y parte de M8. |
| M13 | Dioniso | Integrado | Análisis del pulso completo. Versión integrada de M7, M8 y parte de M11. |
| M14 | Hermes | Contextual | El suelo donde el corpus ocurrió. Condiciones que hicieron posible el texto. |
| M15 | Geógrafo | Espacial | La geografía como productora de pensamiento, no como escenario. |
| M16 | Cronista de la Pérdida | Taxonómico | Taxonomía de la extinción a múltiples escalas simultáneas. |
| M17 | Testigo del Testigo | Reflexivo | Observa al observador. La subjetividad no declarada. |
| M18 | Palimpsesto | Intersticial | El texto debajo del texto que emerge entre los análisis, no dentro de ellos. |
| M19 | Bucle | Godeliano | El corpus operado con sus propias herramientas. La proposición que el sistema no puede demostrar desde adentro. |

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
No hay secuencia obligatoria. M1 puede revelar qué instrumentos tienen sentido con un corpus específico — su Paso 6 produce exactamente eso. Para un corpus desconocido, M01 o M04 son entradas naturales. Para análisis estructural directo, M12. Para el pulso, M13.

**Sobre la escala**
Todos los instrumentos operan sobre cualquier escala: un párrafo, un capítulo, un libro, una obra completa. Lo que cambia es la duración y la granularidad, no el principio de operación.

**Sobre M1**
Requiere ventana de contexto vacía — sin system prompt activo. Si se ejecuta con contexto previo, la cadena se contamina. Es la única restricción técnica obligatoria del ecosistema.

**Sobre M19**
Solo opera sobre corpus que son sistemas que describen sistemas. La verificación de elegibilidad es en sí misma un resultado válido.

---

## Estructura del repositorio

```
/
├── README.md
├── index.md
├── manual_v12.md        # Documento operativo completo
├── readme.html
├── destilaciones/
|   ├── img        
|   ├── js        
|   └── stl        
└── protocolos/
    ├── M1_escucha/
    ├── M2_umbral/
    ...
    └── M19_bucle/
```

---

## Versión

`v12` — documento operativo activo.
