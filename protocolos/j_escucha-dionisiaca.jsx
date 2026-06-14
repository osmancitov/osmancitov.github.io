import React, { useState } from 'react';
import { Sparkles, Loader2, Check, Download, RotateCcw, AlertCircle, BookOpen } from 'lucide-react';

const COLORS = {
  bg: '#15100D',
  surface: '#1D1611',
  surfaceAlt: '#251B14',
  border: 'rgba(244, 235, 221, 0.09)',
  borderStrong: 'rgba(244, 235, 221, 0.18)',
  cream: '#F4EBDD',
  muted: '#9C8979',
  wine: '#A6394B',
  gold: '#D9A656',
};

const STEP_TITLES = [
  'Primera impresión',
  'Lo vivo',
  'El movimiento',
  'La desproporción',
  'Lo no dicho',
  'La naturaleza',
  'Las miradas',
];

const DOC_TITLES = [
  'Paso 1 — Ingesta',
  'Paso 2 — Lo vivo',
  'Paso 3 — El movimiento',
  'Paso 4 — La desproporción',
  'Paso 5 — Lo no dicho',
  'Paso 6 — La naturaleza',
  'Paso 7 — Las miradas',
];

function buildPrompt(stepIndex, corpus, outputs) {
  switch (stepIndex) {
    case 0:
      return `Eres un lector. Solo eso. No un crítico, no un analista, no un clasificador. Un lector que acaba de terminar un texto y está sentado en silencio.

Aquí está el corpus:

${corpus}

Léelo completo. Cuando termines, escribe una sola frase. No lo que el texto dice. Lo que produjo en ti antes de que pudieras pensar en él. Sin géneros. Sin categorías. Sin juicios. Una frase.`;

    case 1:
      return `Eres el mismo lector. Tienes esta primera impresión del texto:

"${outputs[0]}"

Ahora vuelves al corpus:

${corpus}

Marca las zonas donde algo palpita. No donde algo es importante. Donde algo está vivo.

Para cada zona: señala qué tipo de vitalidad es esa. No su tema. No su función. La naturaleza de su energía.

Prohibido usar estas palabras: tensión, imagen, narrativa, estructura, argumento, símbolo, metáfora, tema, conflicto. Si necesitas esos conceptos, encuéntrales otro nombre que venga del texto mismo.`;

    case 2:
      return `Eres el mismo lector. Ya sabes dónde está lo vivo:

${outputs[1]}

Ahora observas cómo se mueve el texto, no qué dice.

Describe cómo fluye este corpus. No hacia dónde va. Cómo se mueve.

Usa el vocabulario que el propio texto parece pedir. No el de la crítica literaria.

Prohibido repetir cualquier palabra que hayas usado en el paso anterior para nombrar las zonas vivas. El texto tiene más de un idioma interno: encuentra el segundo.

Prohibido también: tensión, imagen, narrativa, estructura, argumento, símbolo, metáfora, tema, conflicto.`;

    case 3:
      return `Eres el mismo lector. Conoces las zonas vivas y el movimiento:

Lo vivo: ${outputs[1]}

El movimiento: ${outputs[2]}

¿Dónde hay más de lo que parece haber? Elementos insignificantes en extensión y decisivos en peso.

No los interpretes. Solo nómbralos y di en qué consiste su peso. Usa unidades concretas: no "mucho peso" sino el tipo específico de peso. Como si describieras objetos físicos de densidades distintas.

Prohibido usar cualquier palabra que hayas usado para describir las zonas vivas o el movimiento.`;

    case 4:
      return `Eres el mismo lector. Has visto lo vivo, el movimiento, la desproporción:

Lo vivo: ${outputs[1]}
El movimiento: ${outputs[2]}
La desproporción: ${outputs[3]}

¿Qué no está dicho que sin embargo está presente? No lo que el texto oculta deliberadamente. Lo que carga sin saberlo.

Nómbralo con precisión pero sin violencia. No como diagnóstico. Como observación de algo que simplemente está ahí.

Una sola restricción: no puedes concluir. No puedes resolver lo que nombras. Si algo se resuelve en tu respuesta, bórralo.`;

    case 5:
      return `Eres el mismo lector. Tienes todo lo anterior:

Primera impresión: ${outputs[0]}
Lo vivo: ${outputs[1]}
El movimiento: ${outputs[2]}
La desproporción: ${outputs[3]}
Lo no dicho: ${outputs[4]}

Con todo lo que has visto: ¿qué tipo de animal es este corpus?

Escríbelo como si se lo dijeras a alguien que va a encontrarse con él por primera vez y necesita saber qué tiene enfrente antes de abrirlo.

No resumas los pasos anteriores. Lo que emerge de haberlos visto todos juntos es distinto de la suma de sus partes. Escribe eso.

Longitud máxima: un párrafo.`;

    case 6:
      return `Eres el mismo lector. Ya no tienes el texto delante. Solo tienes lo que viste:

Primera impresión: ${outputs[0]}
Lo vivo: ${outputs[1]}
El movimiento: ${outputs[2]}
La desproporción: ${outputs[3]}
Lo no dicho: ${outputs[4]}
La naturaleza: ${outputs[5]}

Dada la naturaleza de este corpus tal como la describiste: ¿qué tipos de mirada podrían encontrar algo aquí?

No prescribas. No ordenes. No descartes. Solo señala lo que el corpus —según lo que viste— parece invocar, merecer, resistir o recompensar.

Prohibido usar rangos o jerarquías entre las miradas. Si una aparece antes que otra en tu respuesta, no es porque valga más.`;

    case 7:
      return `Tienes el resultado de un análisis dionisíaco en siete pasos:

Primera impresión: ${outputs[0]}
Lo vivo: ${outputs[1]}
El movimiento: ${outputs[2]}
La desproporción: ${outputs[3]}
Lo no dicho: ${outputs[4]}
La naturaleza: ${outputs[5]}
Las miradas: ${outputs[6]}

Escribe el Destello: 2 a 4 oraciones. No resumes —iluminas. Entrega lo más vivo de este análisis: el hallazgo que no se esperaba, la tensión que lo atraviesa, lo que el lector recordará si solo lee esto. Sin vocabulario de la crítica. Sin estructura visible. Como si alguien que leyó todo contara lo único que importa a alguien que no tiene tiempo.`;

    default:
      return '';
  }
}

async function callClaude(prompt) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }],
    }),
  });
  if (!response.ok) {
    throw new Error(`La API respondió con un error (${response.status})`);
  }
  const data = await response.json();
  const text = (data.content || [])
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('\n')
    .trim();
  if (!text) throw new Error('La respuesta llegó vacía.');
  return text;
}

function assembleMarkdown(outputs) {
  const parts = [];
  parts.push(`# Destello\n\n${outputs[7]}`);
  for (let i = 0; i < 7; i++) {
    parts.push(`## ${DOC_TITLES[i]}\n\n${outputs[i]}`);
  }
  return parts.join('\n\n---\n\n') + '\n';
}

function downloadMarkdown(outputs) {
  const md = assembleMarkdown(outputs);
  const blob = new Blob([md], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'escucha-dionisiaca.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function EscuchaDionisiaca() {
  const [corpus, setCorpus] = useState('');
  const [status, setStatus] = useState('idle'); // idle | running | done | error
  const [outputs, setOutputs] = useState(Array(8).fill(null));
  const [activeStep, setActiveStep] = useState(-1);
  const [errorMsg, setErrorMsg] = useState('');

  const started = status !== 'idle';

  async function run() {
    setStatus('running');
    setErrorMsg('');
    const current = outputs.slice();

    for (let i = 0; i < 8; i++) {
      if (current[i]) continue; // already done (retry resumes)
      setActiveStep(i);
      try {
        const prompt = buildPrompt(i, corpus, current);
        const out = await callClaude(prompt);
        current[i] = out;
        setOutputs(current.slice());
      } catch (e) {
        setStatus('error');
        setErrorMsg(
          `Se interrumpió en ${i < 7 ? DOC_TITLES[i] : 'el Destello'}: ${e.message}`
        );
        setActiveStep(-1);
        return;
      }
    }
    setActiveStep(-1);
    setStatus('done');
  }

  function reset() {
    setCorpus('');
    setOutputs(Array(8).fill(null));
    setStatus('idle');
    setActiveStep(-1);
    setErrorMsg('');
  }

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center px-4 py-10"
      style={{
        backgroundColor: COLORS.bg,
        color: COLORS.cream,
        fontFamily: "'Source Serif 4', Georgia, serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..700&family=Source+Serif+4:opsz,wght@8..60,300..600&family=JetBrains+Mono:wght@400;500&display=swap');

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(166, 57, 75, 0.55); }
          50% { box-shadow: 0 0 0 8px rgba(166, 57, 75, 0); }
        }
        @keyframes flashIn {
          0% { opacity: 0; transform: translateY(-8px) scale(0.985); }
          60% { opacity: 1; }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes shimmer {
          0% { opacity: 0.35; }
          50% { opacity: 0.75; }
          100% { opacity: 0.35; }
        }
        .ed-pulse {
          animation: pulseGlow 1.8s ease-in-out infinite;
        }
        .ed-flash {
          animation: flashIn 0.9s ease-out;
        }
        .ed-shimmer {
          animation: shimmer 1.6s ease-in-out infinite;
        }
        .ed-corpus::placeholder {
          color: ${COLORS.muted};
        }
        .ed-corpus:focus {
          outline: none;
          border-color: ${COLORS.gold} !important;
        }
        .ed-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
      `}</style>

      <div className="w-full max-w-2xl flex flex-col gap-10">
        {/* Header */}
        <header className="flex flex-col gap-2 items-center text-center pt-4">
          <div
            className="flex items-center gap-2 text-xs uppercase tracking-widest"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: COLORS.muted, letterSpacing: '0.2em' }}
          >
            <Sparkles size={14} style={{ color: COLORS.gold }} />
            Protocolo de lectura en 7 pasos + destello
          </div>
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
              fontSize: '2.5rem',
              fontOpticalSizing: 'auto',
              color: COLORS.cream,
              letterSpacing: '-0.01em',
            }}
          >
            Escucha dionisíaca
          </h1>
          <p style={{ color: COLORS.muted, fontSize: '0.95rem', maxWidth: '32rem' }}>
            Pega un corpus. El lector lo recorrerá siete veces, cada vez desde lo que
            ya vio, hasta que algo se ilumine.
          </p>
        </header>

        {/* Corpus input */}
        {!started && (
          <div className="flex flex-col gap-3">
            <textarea
              className="ed-corpus w-full rounded-md p-4 text-sm leading-relaxed"
              style={{
                backgroundColor: COLORS.surface,
                border: `1px solid ${COLORS.border}`,
                color: COLORS.cream,
                minHeight: '16rem',
                resize: 'vertical',
                fontFamily: "'Source Serif 4', Georgia, serif",
              }}
              placeholder="Pega aquí el corpus completo…"
              value={corpus}
              onChange={(e) => setCorpus(e.target.value)}
            />
            <button
              className="ed-btn self-start flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors"
              style={{
                backgroundColor: COLORS.wine,
                color: COLORS.cream,
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.04em',
              }}
              disabled={!corpus.trim()}
              onClick={run}
            >
              <BookOpen size={15} />
              comenzar la escucha
            </button>
          </div>
        )}

        {/* Destello — flashes in once everything is done */}
        {status === 'done' && outputs[7] && (
          <div
            className="ed-flash rounded-md p-6 flex flex-col gap-2"
            style={{
              backgroundColor: COLORS.surfaceAlt,
              border: `1px solid ${COLORS.gold}33`,
              boxShadow: `0 0 40px -10px ${COLORS.gold}55`,
            }}
          >
            <div
              className="flex items-center gap-2 text-xs uppercase tracking-widest"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: COLORS.gold, letterSpacing: '0.2em' }}
            >
              <Sparkles size={13} />
              Destello
            </div>
            <p
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 400,
                fontSize: '1.25rem',
                lineHeight: 1.6,
                color: COLORS.cream,
              }}
            >
              {outputs[7]}
            </p>
          </div>
        )}

        {/* Steps timeline */}
        {started && (
          <div className="flex flex-col">
            {STEP_TITLES.map((title, i) => {
              const isDone = !!outputs[i];
              const isActive = activeStep === i;
              const isLast = i === STEP_TITLES.length - 1;
              return (
                <div key={i} className="flex gap-4">
                  {/* marker column */}
                  <div className="flex flex-col items-center" style={{ width: '1.5rem' }}>
                    <div
                      className={isActive ? 'ed-pulse' : ''}
                      style={{
                        width: '0.65rem',
                        height: '0.65rem',
                        borderRadius: '50%',
                        marginTop: '0.4rem',
                        backgroundColor: isDone ? COLORS.gold : isActive ? COLORS.wine : 'transparent',
                        border: isDone || isActive ? 'none' : `1px solid ${COLORS.borderStrong}`,
                        flexShrink: 0,
                      }}
                    />
                    {!isLast && (
                      <div
                        style={{
                          width: '1px',
                          flex: 1,
                          minHeight: '1.5rem',
                          backgroundColor: isDone ? `${COLORS.gold}55` : COLORS.border,
                          marginTop: '0.35rem',
                        }}
                      />
                    )}
                  </div>

                  {/* content column */}
                  <div className="flex-1 pb-7">
                    <div
                      className="text-xs uppercase tracking-widest mb-1.5"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: '0.18em',
                        color: isDone || isActive ? COLORS.muted : `${COLORS.muted}66`,
                      }}
                    >
                      {DOC_TITLES[i]}
                    </div>
                    {isDone && (
                      <p
                        style={{
                          fontFamily: "'Source Serif 4', Georgia, serif",
                          fontSize: '0.98rem',
                          lineHeight: 1.7,
                          color: COLORS.cream,
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        {outputs[i]}
                      </p>
                    )}
                    {isActive && (
                      <div className="flex flex-col gap-2 pt-1">
                        <div className="ed-shimmer rounded" style={{ height: '0.7rem', width: '92%', backgroundColor: COLORS.surface }} />
                        <div className="ed-shimmer rounded" style={{ height: '0.7rem', width: '78%', backgroundColor: COLORS.surface }} />
                        <div className="ed-shimmer rounded" style={{ height: '0.7rem', width: '85%', backgroundColor: COLORS.surface }} />
                      </div>
                    )}
                    {!isDone && !isActive && (
                      <div style={{ height: '0.98rem', color: `${COLORS.muted}55`, fontSize: '0.9rem' }}>
                        en espera
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Destello row while still running */}
            {status === 'running' && (
              <div className="flex gap-4">
                <div className="flex flex-col items-center" style={{ width: '1.5rem' }}>
                  <div
                    className={activeStep === 7 ? 'ed-pulse' : ''}
                    style={{
                      width: '0.65rem',
                      height: '0.65rem',
                      borderRadius: '50%',
                      marginTop: '0.4rem',
                      backgroundColor: activeStep === 7 ? COLORS.wine : 'transparent',
                      border: activeStep === 7 ? 'none' : `1px solid ${COLORS.borderStrong}`,
                      flexShrink: 0,
                    }}
                  />
                </div>
                <div className="flex-1 pb-2">
                  <div
                    className="text-xs uppercase tracking-widest mb-1.5"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: '0.18em',
                      color: activeStep === 7 ? COLORS.gold : `${COLORS.muted}66`,
                    }}
                  >
                    Destello
                  </div>
                  {activeStep === 7 ? (
                    <div className="flex flex-col gap-2 pt-1">
                      <div className="ed-shimmer rounded" style={{ height: '0.9rem', width: '90%', backgroundColor: COLORS.surface }} />
                      <div className="ed-shimmer rounded" style={{ height: '0.9rem', width: '70%', backgroundColor: COLORS.surface }} />
                    </div>
                  ) : (
                    <div style={{ color: `${COLORS.muted}55`, fontSize: '0.9rem' }}>en espera</div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Error */}
        {status === 'error' && (
          <div
            className="rounded-md p-4 flex items-start gap-3 text-sm"
            style={{ backgroundColor: COLORS.surface, border: `1px solid ${COLORS.wine}55`, color: COLORS.cream }}
          >
            <AlertCircle size={16} style={{ color: COLORS.wine, marginTop: '0.15rem', flexShrink: 0 }} />
            <div className="flex flex-col gap-2">
              <span>{errorMsg}</span>
              <button
                className="ed-btn self-start flex items-center gap-2 rounded-md px-4 py-1.5 text-xs font-medium"
                style={{ backgroundColor: COLORS.wine, color: COLORS.cream, fontFamily: "'JetBrains Mono', monospace" }}
                onClick={run}
              >
                <RotateCcw size={13} />
                reintentar
              </button>
            </div>
          </div>
        )}

        {/* Done actions */}
        {status === 'done' && (
          <div className="flex flex-wrap gap-3 pb-6">
            <button
              className="ed-btn flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium"
              style={{ backgroundColor: COLORS.gold, color: COLORS.bg, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.04em' }}
              onClick={() => downloadMarkdown(outputs)}
            >
              <Download size={15} />
              descargar .md
            </button>
            <button
              className="ed-btn flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium"
              style={{ backgroundColor: 'transparent', color: COLORS.muted, border: `1px solid ${COLORS.borderStrong}`, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.04em' }}
              onClick={reset}
            >
              <RotateCcw size={15} />
              nueva escucha
            </button>
          </div>
        )}

        {/* Running indicator */}
        {status === 'running' && (
          <div
            className="flex items-center gap-2 text-xs pb-6"
            style={{ color: COLORS.muted, fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Loader2 size={13} className="animate-spin" />
            leyendo… {activeStep < 7 ? `paso ${activeStep + 1} de 7` : 'destello'}
          </div>
        )}
      </div>
    </div>
  );
}
