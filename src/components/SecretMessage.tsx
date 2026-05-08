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
    <section className="relative min-h-screen px-4 py-20 flex items-center justify-center">
      <div className="relative w-full max-w-2xl">
        <p className="text-center text-[0.7rem] sm:text-xs uppercase tracking-[0.45em] text-rosa-700/80 mb-3">
          Solo para vos
        </p>
        <h2 className="font-display italic text-center text-5xl md:text-6xl font-semibold text-rosa-950 mb-12">
          un mensaje
        </h2>

        <div className="relative rounded-3xl bg-white/75 backdrop-blur-sm shadow-xl ring-1 ring-rosa-200/60 p-8 md:p-12 min-h-[22rem]">
          <article
            className={`whitespace-pre-line text-rosa-950 leading-[1.7] text-base md:text-lg transition-all duration-700 ease-out ${
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
                className="w-full max-w-sm rounded-2xl bg-rosa-950/92 backdrop-blur p-6 shadow-2xl text-white"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-rosa-200/70 mb-2">
                  contraseña
                </p>
                <label htmlFor="pw" className="block text-base md:text-lg mb-4 font-medium">
                  Ingresá la palabra para leer el mensaje
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
                  className="w-full rounded-lg border border-rosa-200/30 bg-rosa-950/50 px-4 py-2 text-white placeholder-rosa-200/40 outline-none focus:border-rosa-200 transition"
                  placeholder="..."
                />
                <button
                  type="submit"
                  className="mt-4 w-full rounded-lg bg-rosa-100 text-rosa-950 font-semibold py-2 hover:bg-white transition"
                >
                  Revelar
                </button>
                <p
                  className={`mt-3 text-sm text-rosa-200 transition-opacity ${
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
          <p className="font-script mt-10 text-center text-rosa-800 text-4xl md:text-5xl">
            te quiero, Emma
          </p>
        )}
      </div>
    </section>
  )
}
