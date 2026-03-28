# Destilería
*Entra la materia prima. Sale el destilado puro.*

---

## Qué es

Destilería es un sistema de lectura profunda que opera dentro de Claude. Toma cualquier corpus — un libro, un guión, una obra completa — y lo somete a calor y tiempo hasta que revela lo que no podía decir solo.

No es un resumidor ni un buscador. Es una planta de extracción que produce fracciones nobles.

**Misión principal:** entrar a un corpus, extraer lo mejor, entender qué tipo de objeto es, y salir con cuatro imágenes que lo encapsulen. Todo en una sola sesión.

---

## Arquitectura

```
CORPUS
  ↓
RECEPCIÓN DE MATERIA PRIMA
  · Registro de entrada (palabras, riqueza léxica, primera y más frecuente palabra de contenido)
  · Sinopsis y figuras clave
  · Materias primas dominantes
  · Prompt de portada
  ↓
TALLER PRINCIPAL — cuatro módulos en secuencia
  │
  ├── MÓDULO ALAMBIQUE — DESTILACIÓN
  │     Destilado maestro · Barricas (extractos + fracciones nobles por capítulo)
  │     Cartografía · Nota de cata · Prompt de imagen A
  │
  ├── MÓDULO CONTROL DE CALIDAD — INSPECCIÓN
  │     Seis estratos · Clasificación de nave · Veredicto de zarpe
  │     Nota naval · Prompt de imagen B
  │
  ├── MÓDULO LABORATORIO — ANÁLISIS DE SEDIMENTO
  │     Ausencias · Síntomas · Cifras
  │     Cuatro lentes de lectura · El compuesto base · Prompt de imagen C
  │
  └── MÓDULO ETIQUETADO — TOPOLOGÍA Y FIRMA
        Fallas de cierre · Núcleo de curvatura
        Red conceptual · Estrategia de grandeza · Prompt de imagen D
```

---

## El personal

| Módulo | Operario | Registro |
|---|---|---|
| Recepción de Materia Prima | El Recepcionista | Seco, protocolar, pesa sin opinar |
| Alambique | El Maestro Destilador | Paciente, sensorial, reposado |
| Control de Calidad | El Inspector | Seco, profesional, directo |
| Laboratorio | El Químico | Quieto, concentrado, no sorprendido |
| Etiquetado | El Maestro de Bodega | Preciso, definitivo, sella y libera |

---

## Cómo funciona

**Recepción de Materia Prima** — recibe el corpus. Produce el registro de entrada, sinopsis, figuras clave, materias primas dominantes y el prompt de portada. Protocolo de Ingesta ZIP disponible para epubs descomprimidos.

**Módulo Alambique — Destilación** — destilado maestro, barricas (extractos y fracciones nobles por capítulo), cartografía, nota de cata. El corazón del sistema. Produce las fracciones nobles: fragmentos que sobreviven solos, que alguien repetiría años después.

**Módulo Control de Calidad — Inspección** — seis estratos de análisis estructural, clasificación de nave, veredicto de zarpe, nota naval. Determina qué tipo de objeto es el corpus y si vale el viaje.

**Módulo Laboratorio — Análisis de Sedimento** — ausencias, síntomas, cifras, y cuatro lentes de lectura (lo que dice, muestra, exige y guarda). El compuesto base: el núcleo de sentido más irreducible del corpus.

**Módulo Etiquetado — Topología y Firma** — las fallas de cierre (predictores de inagotabilidad), el núcleo de curvatura semántica, y la estimación de la red conceptual. La estrategia de grandeza en una línea.

---

## Los cuatro prompts de imagen

Cada módulo produce un prompt en español para generador de imágenes externo. Los cuatro prompts son la sorpresa que espera al final del proceso — cada uno construido desde las cualidades únicas de este corpus en esta etapa. No hay dos prompts iguales entre corpus distintos.

| Prompt | Qué genera |
|---|---|
| **Portada** | Atmósfera del corpus — imagen que puede preceder todo el paquete |
| **Imagen A** | El mundo donde vive la bebida elegida — escena construida desde la fusión de la bebida y el corpus |
| **Imagen B** | El arquetipo de nave específico en el estado que revela el veredicto |
| **Imagen C** | El hallazgo del Laboratorio hecho visible — derivado de las ausencias, síntomas y cifras concretas |
| **Imagen D** | La etiqueta química del corpus — su firma topológica como objeto único listo para despacho |

---

## Archivos del sistema

```
destileria/
├── system-prompt.md              — instrucciones de arranque
├── protocolo-umbral.md           — recepción de materia prima, registro, portada
├── protocolo-destileria.md       — taller principal (los cuatro módulos)
└── README.md                     — este archivo
```

---

## Cómo instalar

**1.** Crear proyecto nuevo en Claude. Nombre: *Destilería*.

**2.** Subir los cuatro archivos: `system-prompt.md`, `protocolo-umbral.md`, `protocolo-destileria.md`, `README.md`.

**3.** En el recuadro de instrucciones del proyecto, escribir exactamente:
> *Lee el archivo system-prompt.md*

**4.** Verificar: abrir conversación nueva y escribir **Hola**. El sistema debe responder:
> *Soy la Destilería. Entra la materia prima. Sale el destilado puro.*

---

## Para usar el sistema

Entregar el corpus de cualquiera de estas formas:
- Adjuntar el archivo (epub, pdf, txt)
- Escribir título y autor
- Adjuntar ZIP con epub descomprimido
- Subir el epub descomprimido al proyecto previamente

El sistema ejecuta la Recepción de Materia Prima + los cuatro módulos del taller en secuencia, sin pedir confirmaciones intermedias.

---

## Vocabulario central

| Término | Definición |
|---|---|
| **Corpus** | La materia prima. Todo lo que entra a la Destilería |
| **Fracción noble** | Lo que sobrevive la destilación. El fragmento que alguien repetiría años después |
| **Extracto** | La esencia funcional de una barrica |
| **Barrica** | Unidad por capítulo: extracto + fracciones nobles |
| **Destilado maestro** | El epítome del corpus. Texto autónomo que encarna el libro sin resumirlo |
| **Nota de cata** | Descripción sensorial del corpus como bebida |
| **Falla de cierre** | Tensión que persiste sin resolverse. Las fallas abiertas predicen inagotabilidad |
| **Núcleo de curvatura** | El concepto de mayor gravitación semántica |
| **Compuesto base** | El núcleo de sentido más irreducible del corpus |
| **Etiqueta química** | El conjunto de variables topológicas que identifican el corpus como objeto |

---

## Conocimiento operativo integrado

Los descubrimientos empíricos de versiones anteriores están integrados en el Módulo Etiquetado como conocimiento operativo:

- **Las fallas abiertas predicen inagotabilidad** (13/13 corpus confirmados) → integrado en la sección Fallas de Cierre
- **La grandeza es integración, no acumulación** (redes small-world en corpus canónicos) → integrado en la sección Red Conceptual

---

*Destilería · Entra la materia prima. Sale el destilado puro.*
*Cuatro módulos. Cuatro imágenes. Cada corpus, una sorpresa.*
