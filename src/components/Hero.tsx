import { photos } from '../photos'

const layouts = [
  'top-[6%]   left-[5%]   w-32 md:w-44 lg:w-52 -rotate-6',
  'top-[10%]  right-[6%]  w-28 md:w-40 lg:w-48  rotate-3',
  'bottom-[20%] left-[8%] w-36 md:w-48 lg:w-56  rotate-2',
  'bottom-[8%] right-[5%] w-32 md:w-44 lg:w-52 -rotate-3',
  'top-[42%]  left-[1%]   w-24 md:w-36 lg:w-44  rotate-6',
  'top-[46%]  right-[1%]  w-24 md:w-36 lg:w-44 -rotate-2',
]

export default function Hero() {
  const desktopPhotos = photos.slice(0, layouts.length)

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50 to-rose-100 flex items-center justify-center px-4 py-16">
      <div className="absolute inset-0 hidden md:block pointer-events-none" aria-hidden="true">
        {desktopPhotos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={`absolute ${layouts[i]} rounded-sm shadow-2xl ring-[6px] ring-white object-cover aspect-[4/5]`}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-rose-700/70 mb-5 md:mb-7">
          Para vos, Emma
        </p>
        <h1
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.95] text-rose-950"
        >
          Feliz
          <br />
          cumpleaños
        </h1>
        <p className="mt-7 md:mt-10 text-base md:text-lg text-rose-900/70 italic max-w-xl mx-auto px-4">
          Un día entero para vos. Y más abajo, un mensaje que es solo tuyo.
        </p>
      </div>

      {photos.length > 0 && (
        <div className="absolute bottom-6 left-0 right-0 md:hidden">
          <div className="flex gap-3 overflow-x-auto px-4 snap-x snap-mandatory pb-2">
            {photos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-36 w-28 flex-shrink-0 rounded-sm shadow-lg ring-4 ring-white object-cover snap-center"
              />
            ))}
          </div>
        </div>
      )}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-rose-700/50 text-xs tracking-widest uppercase hidden md:flex flex-col items-center gap-1 animate-bounce">
        <span>scroll</span>
        <span aria-hidden="true">↓</span>
      </div>
    </section>
  )
}
