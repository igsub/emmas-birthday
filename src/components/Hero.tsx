import { photos } from '../photos'
import FlipPhoto from './FlipPhoto'

const layouts = [
  'top-[6%]    left-[4%]   w-32 md:w-44 lg:w-52 -rotate-6',
  'top-[10%]   right-[5%]  w-28 md:w-40 lg:w-48  rotate-3',
  'bottom-[18%] left-[7%]  w-36 md:w-48 lg:w-56  rotate-2',
  'bottom-[8%] right-[4%]  w-32 md:w-44 lg:w-52 -rotate-3',
  'top-[42%]   left-[1%]   w-24 md:w-36 lg:w-44  rotate-6',
  'top-[46%]   right-[1%]  w-24 md:w-36 lg:w-44 -rotate-2',
]

export default function Hero() {
  const desktopPhotos = photos.slice(0, layouts.length)
  const half = Math.ceil(photos.length / 2)
  const mobileTop = photos.slice(0, half)
  const mobileBottom = photos.slice(half)

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col px-4 py-8 md:py-16">
      <div className="absolute inset-0 hidden md:block z-0">
        {desktopPhotos.map((p, i) => (
          <FlipPhoto
            key={`d-${i}`}
            src={p.src}
            phrase={p.phrase}
            className={`absolute ${layouts[i]} aspect-[4/5]`}
          />
        ))}
      </div>

      {mobileTop.length > 0 && (
        <div className="md:hidden -mx-4 px-4">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
            {mobileTop.map((p, i) => (
              <FlipPhoto
                key={`mt-${i}`}
                src={p.src}
                phrase={p.phrase}
                className="h-44 w-36 flex-shrink-0 snap-center"
              />
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          <p className="font-sans text-[0.7rem] sm:text-xs uppercase tracking-[0.45em] text-rosa-700/80 mb-6 md:mb-8">
            For you, Emma
          </p>

          <h1 className="text-rosa-950 leading-[0.95]">
            <span className="font-display italic block text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-semibold tracking-tight">
              Happy
            </span>
            <span className="font-script block text-[6rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] leading-[0.85] text-rosa-800 -mt-3 md:-mt-8 -rotate-1">
              birthday
            </span>
          </h1>

          <p className="mt-8 md:mt-14 text-base md:text-lg text-rosa-900/70 italic max-w-xl mx-auto px-4">
            And further down, a message that's only for you.
          </p>
          <p className="md:hidden mt-3 text-xs text-rosa-700/60">
            (tap the photos for a surprise)
          </p>
        </div>
      </div>

      {mobileBottom.length > 0 && (
        <div className="md:hidden -mx-4 px-4">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
            {mobileBottom.map((p, i) => (
              <FlipPhoto
                key={`mb-${i}`}
                src={p.src}
                phrase={p.phrase}
                className="h-44 w-36 flex-shrink-0 snap-center"
              />
            ))}
          </div>
        </div>
      )}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-rosa-700/50 text-[0.65rem] tracking-[0.3em] uppercase hidden md:flex flex-col items-center gap-1 animate-bounce">
        <span>scroll</span>
        <span aria-hidden="true">↓</span>
      </div>
    </section>
  )
}
