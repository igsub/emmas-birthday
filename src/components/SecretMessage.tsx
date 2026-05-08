import { useState, type FormEvent } from 'react'

// ---------------------------------------------------------------------------
// CAMBIAR: contraseña que Emma debe ingresar
// ---------------------------------------------------------------------------
const PASSWORD = 'emma'

// ---------------------------------------------------------------------------
// CAMBIAR: el mensaje real para Emma. Acepta multiples parrafos.
// (Nota: el texto vive en el HTML, asi que con devtools se puede leer.
//  Para un cumpleanos esta bien — el password es ceremonia, no seguridad.)
// ---------------------------------------------------------------------------
const SECRET_MESSAGE = `Emma,

Este es el mensaje placeholder. Reemplazalo con lo que quieras decirle.

Podes escribir tantos parrafos como quieras — los saltos de linea se respetan.

Con todo mi carino,
N.`

export default function SecretMessage() {
  const [input, setInput] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (input.trim().toLowerCase() === PASSWORD.toLowerCase()) {
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-rose-100 via-amber-50 to-rose-50 px-4 py-20 flex items-center justify-center">
      <div className="relative w-full max-w-2xl">
        <h2
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-center text-4xl md:text-5xl font-semibold text-rose-950 mb-10"
        >
          Un mensaje para vos
        </h2>

        <div className="relative rounded-3xl bg-white/70 backdrop-blur-sm shadow-xl ring-1 ring-rose-100 p-8 md:p-12 min-h-[20rem]">
          <article
            className={`whitespace-pre-line text-rose-950 leading-relaxed text-base md:text-lg transition-all duration-700 ease-out ${
              unlocked
                ? 'opacity-100'
                : 'blur-md select-none pointer-events-none opacity-90'
            }`}
            aria-hidden={!unlocked}
          >
            {SECRET_MESSAGE}
          </article>

          {!unlocked && (
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm rounded-2xl bg-rose-950/90 backdrop-blur p-6 shadow-2xl text-white"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-rose-200/70 mb-2">
                  Solo Emma
                </p>
                <label htmlFor="pw" className="block text-base md:text-lg mb-4">
                  Ingresá la contraseña para leer
                </label>
                <input
                  id="pw"
                  type="password"
                  autoComplete="off"
                  autoFocus
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value)
                    if (error) setError(false)
                  }}
                  className="w-full rounded-lg border border-rose-200/30 bg-rose-950/50 px-4 py-2 text-white placeholder-rose-200/40 outline-none focus:border-rose-200 transition"
                  placeholder="contraseña"
                />
                <button
                  type="submit"
                  className="mt-4 w-full rounded-lg bg-rose-100 text-rose-950 font-semibold py-2 hover:bg-white transition"
                >
                  Revelar mensaje
                </button>
                <p
                  className={`mt-3 text-sm text-rose-200 transition-opacity ${
                    error ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-live="polite"
                >
                  No es esa, probá de nuevo.
                </p>
              </form>
            </div>
          )}
        </div>

        {unlocked && (
          <p className="mt-8 text-center text-rose-900/70 italic text-sm md:text-base">
            Te quiero, Emma. Feliz cumpleaños.
          </p>
        )}
      </div>
    </section>
  )
}
