import { useState } from 'react'

type Props = {
  src: string
  phrase: string
  className?: string
}

export default function FlipPhoto({ src, phrase, className = '' }: Props) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={flipped ? 'Mostrar foto' : 'Mostrar mensaje'}
      className={`relative cursor-pointer [perspective:1000px] focus:outline-none focus-visible:ring-4 focus-visible:ring-rosa-300/60 rounded-sm ${className}`}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-out [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-sm shadow-xl ring-[6px] ring-white overflow-hidden">
          <img
            src={src}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-sm shadow-xl ring-[6px] ring-white bg-rosa-50 flex items-center justify-center p-3 md:p-4">
          <p className="font-display italic text-rosa-950 text-center text-sm md:text-base leading-snug">
            {phrase}
          </p>
        </div>
      </div>
    </button>
  )
}
