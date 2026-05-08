import { useState, type FormEvent } from 'react'

// ---------------------------------------------------------------------------
// EDIT: password to unlock the video. Comparison is case-insensitive and
// trimmed, so "John Lennon" and "JOHN LENNON " also match.
// ---------------------------------------------------------------------------
const PASSWORD = 'imagine'
const PASSWORD_HINT = 'Most famous song of John Lennon'

// Path is resolved from /public at the deploy root — Vite serves it as-is
// without going through the asset pipeline (good for big media files).
const VIDEO_SRC = '/surprise.mp4'

export default function VideoMessage() {
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
        <h2 className="font-display italic text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-rosa-950 mb-12 leading-tight">
          I'm sorry but I had to&hellip;
        </h2>

        <div className="relative rounded-3xl bg-white/75 backdrop-blur-sm shadow-xl ring-1 ring-rosa-200/60 p-4 md:p-6">
          {unlocked ? (
            <video
              src={VIDEO_SRC}
              controls
              preload="metadata"
              playsInline
              className="block w-full max-w-xs sm:max-w-sm mx-auto h-auto rounded-2xl bg-black"
            />
          ) : (
            <>
              <div
                className="aspect-[9/16] max-w-xs sm:max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-rosa-200 via-rosa-300 to-rosa-400 flex items-center justify-center blur-md select-none pointer-events-none"
                aria-hidden="true"
              >
                <span className="font-display italic text-rosa-950 text-3xl md:text-4xl">
                  a video
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-sm rounded-2xl bg-rosa-950/92 backdrop-blur p-6 shadow-2xl text-white"
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-rosa-200/70 mb-2">
                    password
                  </p>
                  <label htmlFor="vw" className="block text-base md:text-lg mb-1 font-medium">
                    Enter the password to play
                  </label>
                  <p className="text-xs italic text-rosa-200/60 mb-4">
                    hint: {PASSWORD_HINT.toLowerCase()}
                  </p>
                  <input
                    id="vw"
                    type="password"
                    autoComplete="off"
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
                    Play
                  </button>
                  <p
                    className={`mt-3 text-sm text-rosa-200 transition-opacity ${
                      error ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-live="polite"
                  >
                    Not that one. Try again.
                  </p>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
