import { useState, type FormEvent } from 'react'

// ---------------------------------------------------------------------------
// EDIT: password Emma needs to enter
// ---------------------------------------------------------------------------
const PASSWORD = 'herisson'
const PASSWORD_HINT = 'my recent (animal) nickname in French'

// ---------------------------------------------------------------------------
// Game steps shown after the password unlocks. Each step shows `text` and
// advances when the user clicks `buttonLabel`. After the last step, the
// final letter renders.
// ---------------------------------------------------------------------------
type GameStep = { text: string; buttonLabel: string }

const STEPS: GameStep[] = [
  {
    text: 'This is something i wrote for you:',
    buttonLabel: 'Continue',
  },
  {
    text: 'Hola Emma.',
    buttonLabel: 'WTF is happening with this guy?',
  },
  {
    text: "it's a joke :D",
    buttonLabel: "I don't like it",
  },
  {
    text: 'here goes the real text:',
    buttonLabel: "Ok, I'm ready",
  },
]

// ---------------------------------------------------------------------------
// EDIT: the actual letter shown after the game finishes. Multiple paragraphs
// supported via blank lines (whitespace-pre-line preserves them).
// ---------------------------------------------------------------------------
const FINAL_MESSAGE = `I'm at the computer right now and watching you over my shoulder while you meditate. "I love her" is the first thing that comes to my mind. I won't ever have enough words to tell you how amazing you are, how incredible you are, and how much I love you. Anyways, I'm going to keep on doing it.

It's been a year that we are together and I keep on discovering the beauty that is inside of you. It is never ending. I see it in the way you care about your family and your friends. You are always there. How you see the good in the people who are close to you and how you encourage everyone to be their best version. Calling them every day, giving advice, asking for advice (that shows everyone how much you care about them and how important are for you their words). And you would think: "It is normal". Well, it is not. You take the time to do it and if you don't have the time, you do it while you keep on going with your day. That is remarkable, that is beautiful to see and it shows who you are. 

I feel how supportive you are. 
I see how aware you are about your wellbeing and how you fight every day to be in peace with yourself. 
I see all the changes you made in only one year. 
You inspire me. 
You make want to be a better person every day. 
I admire you.

For this year to come I wish for you to see how much of a beautiful human being you are, the way everyone around you sees it.
I wish you keep on inspiring others the way you do it. 
I wish for you to love yourself as much as I love you. 
I wish that your smile keeps bringing light to this world. 
I wish your laugh keeps spreading through every room you walk into.

I took the liberty, but I know I'm not the one who should be making wishes today. That's you.

What are yours?

Whatever they are, I know you'll make them come true.`

export default function SecretMessage() {
  const [input, setInput] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState(false)
  const [gameStep, setGameStep] = useState(0)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (input.trim().toLowerCase() === PASSWORD.toLowerCase()) {
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  const onFinalStep = unlocked && gameStep >= STEPS.length

  return (
    <section className="relative min-h-screen px-4 py-20 flex items-center justify-center">
      <div className="relative w-full max-w-2xl">
        <p className="text-center text-[0.7rem] sm:text-xs uppercase tracking-[0.45em] text-rosa-700/80 mb-3">
          Just for you
        </p>
        <h2 className="font-display italic text-center text-5xl md:text-6xl font-semibold text-rosa-950 mb-12">
          a message
        </h2>

        <div className="relative rounded-3xl bg-white/75 backdrop-blur-sm shadow-xl ring-1 ring-rosa-200/60 p-8 md:p-12 min-h-[22rem]">
          {!unlocked && (
            <div className="flex items-center justify-center min-h-[18rem]">
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm rounded-2xl bg-rosa-950/92 backdrop-blur p-6 shadow-2xl text-white"
              >
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-rosa-200/70 mb-2">
                    password
                  </p>
                  <label htmlFor="pw" className="block text-base md:text-lg mb-1 font-medium">
                    Enter the word to read the message
                  </label>
                  <p className="text-xs italic text-rosa-200/60 mb-4">
                    hint: {PASSWORD_HINT}
                  </p>
                  <input
                    id="pw"
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
                    Reveal
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
          )}

          {unlocked && !onFinalStep && (
            <div
              key={gameStep}
              className="animate-fade-up flex flex-col items-center justify-center gap-8 min-h-[18rem]"
            >
              <p className="font-display italic text-2xl md:text-3xl text-rosa-950 text-center max-w-md leading-snug">
                {STEPS[gameStep].text}
              </p>
              <button
                type="button"
                onClick={() => setGameStep((s) => s + 1)}
                className="rounded-full bg-rosa-950 text-white px-6 py-3 text-sm md:text-base font-medium hover:bg-rosa-900 transition"
              >
                {STEPS[gameStep].buttonLabel}
              </button>
            </div>
          )}

          {onFinalStep && (
            <article
              key="final"
              className="animate-fade-up whitespace-pre-line text-rosa-950 leading-[1.7] text-base md:text-lg"
            >
              {FINAL_MESSAGE}
            </article>
          )}
        </div>

        {onFinalStep && (
          <p className="font-script mt-10 text-center text-rosa-800 text-4xl md:text-5xl animate-fade-up">
            I love you
          </p>
        )}
      </div>
    </section>
  )
}
