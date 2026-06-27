import { useState } from 'react';

// ── Calculation functions (ported from jsOriginal.js, no DOM) ────────────────

function calcularTecnica(constante: number, espesor: number, base: number) {
  const tecnicaBasica = Math.ceil(espesor * 2 + constante);
  const masBasica = base;

  const tecnicaInter = Math.ceil(tecnicaBasica * 1.15);
  const masInter = parseFloat((masBasica / 2).toFixed(1));

  const tecnicaHomo = Math.ceil(tecnicaInter * 1.15);
  const masHomo = parseFloat((masInter / 2).toFixed(1));

  const ultraBase = Math.ceil(((espesor / 3) * 2) * 2 + constante);
  const masUltra = parseFloat((masBasica / 31.25).toFixed(1));
  const u1 = Math.ceil(ultraBase * 1.15);
  const u2 = Math.ceil(u1 * 1.15);
  const u3 = Math.ceil(u2 * 1.15);
  const u4 = Math.ceil(u3 * 1.15);
  const tecnicaUltra = Math.ceil(u4 * 1.15);

  return { tecnicaBasica, masBasica, tecnicaInter, masInter, tecnicaHomo, masHomo, tecnicaUltra, masUltra };
}

function compensarDistancia(masActual: number, di: number, df: number): number {
  return masActual / (di * di) * (df * df);
}

function calcularFactorBucky(masActual: number, factor: number): number {
  return masActual * factor;
}

// ── Types ────────────────────────────────────────────────────────────────────

type Tab = 'tecnica' | 'compensar' | 'bucky';
type Variante = 'B' | 'I' | 'H' | 'U';

interface TecnicaResult {
  tecnicaBasica: number; masBasica: number;
  tecnicaInter: number;  masInter: number;
  tecnicaHomo: number;   masHomo: number;
  tecnicaUltra: number;  masUltra: number;
}

// ── Bucky reference table ─────────────────────────────────────────────────────

const BUCKY_TABLA = [
  { ratio: '5:1',  f70: 2, f90: 3, f120: 3.5 },
  { ratio: '8:1',  f70: 4, f90: 5, f120: 6   },
  { ratio: '12:1', f70: 5, f90: 6, f120: 7   },
  { ratio: '16:1', f70: 6, f90: 8, f120: 10  },
];

// ── Tab: Técnica ─────────────────────────────────────────────────────────────

function TabTecnica({ setKvp, setMas }: { setKvp: (v: number) => void; setMas: (v: number) => void }) {
  const [constante, setConstante] = useState('');
  const [espesor, setEspesor] = useState('');
  const [base, setBase] = useState('');
  const [resultado, setResultado] = useState<TecnicaResult | null>(null);
  const [varActiva, setVarActiva] = useState<Variante>('B');

  function calcular() {
    const r = calcularTecnica(
      parseFloat(constante) || 0,
      parseFloat(espesor) || 0,
      parseFloat(base) || 0,
    );
    setResultado(r);
    setVarActiva('B');
    setKvp(r.tecnicaBasica);
    setMas(r.masBasica);
  }

  function seleccionar(v: Variante, kvp: number, mas: number) {
    setVarActiva(v);
    setKvp(kvp);
    setMas(mas);
  }

  const variantes: { key: Variante; kvp: number; mas: number }[] = resultado
    ? [
        { key: 'B', kvp: resultado.tecnicaBasica, mas: resultado.masBasica },
        { key: 'I', kvp: resultado.tecnicaInter,  mas: resultado.masInter  },
        { key: 'H', kvp: resultado.tecnicaHomo,   mas: resultado.masHomo   },
        { key: 'U', kvp: resultado.tecnicaUltra,  mas: resultado.masUltra  },
      ]
    : [];

  return (
    <div>
      <div className="cc-field-group">
        <div className="cc-field">
          <label className="cc-label">Constante</label>
          <input className="cc-input" type="number" value={constante} onChange={e => setConstante(e.target.value)} placeholder="0" />
        </div>
        <div className="cc-field">
          <label className="cc-label">Espesor cm</label>
          <input className="cc-input" type="number" value={espesor} onChange={e => setEspesor(e.target.value)} placeholder="0" />
        </div>
        <div className="cc-field">
          <label className="cc-label">Base mAs</label>
          <input className="cc-input" type="number" value={base} onChange={e => setBase(e.target.value)} placeholder="0" />
        </div>
      </div>
      <button className="cc-btn" onClick={calcular}>CALCULAR</button>
      {resultado && (
        <div className="cc-variants">
          {variantes.map(v => (
            <button
              key={v.key}
              className={`cc-variant${varActiva === v.key ? ' cc-variant--active' : ''}`}
              onClick={() => seleccionar(v.key, v.kvp, v.mas)}
            >
              <span className="cc-variant-label">{v.key}</span>
              <span className="cc-variant-kvp">{v.kvp}</span>
              <span className="cc-variant-mas">{v.mas.toFixed(1)} mAs</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Tab: Compensar Distancia ──────────────────────────────────────────────────

function TabCompensar({ mas, setMas }: { mas: number; setMas: (v: number) => void }) {
  const [di, setDi] = useState('');
  const [df, setDf] = useState('');

  function compensar() {
    const resultado = compensarDistancia(mas, parseFloat(di) || 0, parseFloat(df) || 0);
    setMas(parseFloat(resultado.toFixed(1)));
  }

  return (
    <div>
      <div className="cc-current-mas">
        <span className="cc-label">mAs actual</span>
        <span className="cc-current-mas-value">{mas.toFixed(1)}</span>
      </div>
      <div className="cc-field-group">
        <div className="cc-field">
          <label className="cc-label">DI cm</label>
          <input className="cc-input" type="number" value={di} onChange={e => setDi(e.target.value)} placeholder="100" />
        </div>
        <div className="cc-field">
          <label className="cc-label">DF cm</label>
          <input className="cc-input" type="number" value={df} onChange={e => setDf(e.target.value)} placeholder="120" />
        </div>
      </div>
      <button className="cc-btn" onClick={compensar}>COMPENSAR</button>
    </div>
  );
}

// ── Tab: Factor Bucky ─────────────────────────────────────────────────────────

function TabBucky({ mas, setMas }: { mas: number; setMas: (v: number) => void }) {
  const [factor, setFactor] = useState('');

  function calcular() {
    const resultado = calcularFactorBucky(mas, parseFloat(factor) || 0);
    setMas(parseFloat(resultado.toFixed(1)));
  }

  return (
    <div>
      <div className="cc-current-mas">
        <span className="cc-label">mAs actual</span>
        <span className="cc-current-mas-value">{mas.toFixed(1)}</span>
      </div>
      <table className="cc-table">
        <thead>
          <tr>
            <th>I.Rej</th>
            <th>70 kVp</th>
            <th>90 kVp</th>
            <th>120 kVp</th>
          </tr>
        </thead>
        <tbody>
          {BUCKY_TABLA.map(row => (
            <tr key={row.ratio}>
              <td>{row.ratio}</td>
              <td>{row.f70}</td>
              <td>{row.f90}</td>
              <td>{row.f120}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cc-field-group">
        <div className="cc-field">
          <label className="cc-label">Factor Bucky</label>
          <input className="cc-input" type="number" value={factor} onChange={e => setFactor(e.target.value)} placeholder="5" />
        </div>
      </div>
      <button className="cc-btn" onClick={calcular}>CALCULAR</button>
    </div>
  );
}

// ── Root component ────────────────────────────────────────────────────────────

export default function CalculadoraCard() {
  const [kvp, setKvp] = useState<number>(0);
  const [mas, setMas] = useState<number>(0);
  const [tabActiva, setTabActiva] = useState<Tab>('tecnica');

  const tabs: { key: Tab; label: string }[] = [
    { key: 'tecnica',   label: 'TÉCNICA'   },
    { key: 'compensar', label: 'DISTANCIA' },
    { key: 'bucky',     label: 'BUCKY'     },
  ];

  const hasValues = kvp !== 0 || mas !== 0;

  return (
    <div className="cc-card">
      {/* Header: título + readout — siempre visible */}
      <div className="cc-header">
        <span className="cc-card-title">CALCULADORA</span>
        <div className="cc-readouts">
          <div className="cc-readout">
            <span className="cc-readout-label">kVp</span>
            <span className="cc-readout-value">{hasValues ? String(kvp) : '—'}</span>
          </div>
          <div className="cc-readout">
            <span className="cc-readout-label">mAs</span>
            <span className="cc-readout-value">{hasValues ? mas.toFixed(1) : '—'}</span>
          </div>
        </div>
      </div>

      {/* Body: tabs | panel */}
      <div className="cc-body">
        <nav className="cc-tabs" aria-label="Calculadora">
          {tabs.map(t => (
            <button
              key={t.key}
              className={`cc-tab${tabActiva === t.key ? ' cc-tab--active' : ''}`}
              onClick={() => setTabActiva(t.key)}
              aria-current={tabActiva === t.key ? 'page' : undefined}
            >
              {t.label}
            </button>
          ))}
        </nav>
        <div className="cc-panel">
          {tabActiva === 'tecnica'   && <TabTecnica setKvp={setKvp} setMas={setMas} />}
          {tabActiva === 'compensar' && <TabCompensar mas={mas} setMas={setMas} />}
          {tabActiva === 'bucky'     && <TabBucky mas={mas} setMas={setMas} />}
        </div>
      </div>
    </div>
  );
}
