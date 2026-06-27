import { useState, useEffect, useRef, useCallback } from 'react';
import Fuse from 'fuse.js';

interface EnfoqueEntry {
  titulo: string;
  region: string;
  subregion: string;
  regionNombre: string;
  subregionNombre: string;
  slug: string;
  alias: string[];
  href: string;
}

export default function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<EnfoqueEntry[]>([]);
  const [fuse, setFuse] = useState<Fuse<EnfoqueEntry> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch('/search-index.json')
      .then(r => r.json())
      .then((data: EnfoqueEntry[]) => {
        setFuse(new Fuse(data, {
          keys: [
            { name: 'titulo', weight: 3 },
            { name: 'alias', weight: 2 },
            { name: 'subregionNombre', weight: 1 },
          ],
          threshold: 0.4,
        }));
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!fuse || !query.trim()) {
      setResults([]);
      return;
    }
    setResults(fuse.search(query.trim()).slice(0, 8).map(r => r.item));
  }, [query, fuse]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setResults([]);
  }, []);

  return (
    <>
      <button
        className="search-trigger-btn"
        aria-label="Buscar"
        onClick={() => setOpen(true)}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <circle cx="7.5" cy="7.5" r="5" />
          <line x1="11.3" y1="11.3" x2="16" y2="16" />
        </svg>
      </button>

      {open && (
        <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Buscar">
          <div className="search-box">
            <div className="search-header">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <circle cx="7.5" cy="7.5" r="5" />
                <line x1="11.3" y1="11.3" x2="16" y2="16" />
              </svg>
              <input
                ref={inputRef}
                className="search-input"
                type="search"
                placeholder="Buscar proyecciones..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                autoComplete="off"
                spellCheck={false}
              />
              <button className="search-close-btn" onClick={close} aria-label="Cerrar búsqueda">
                ESC
              </button>
            </div>
            <div className="search-results-list">
              {results.map(r => (
                <a key={r.href} href={r.href} className="search-result" onClick={close}>
                  <span className="result-title">{r.titulo.toUpperCase()}</span>
                  <span className="result-meta">{r.subregionNombre} — {r.regionNombre}</span>
                </a>
              ))}
              {results.length === 0 && query.trim() && (
                <p className="search-empty">Sin resultados para &ldquo;{query}&rdquo;</p>
              )}
            </div>
          </div>
          <button className="search-backdrop" onClick={close} aria-label="Cerrar" />
        </div>
      )}
    </>
  );
}
