// ---------------------------------------------------------------------------
// FOTOS DE EMMA + FRASES OCULTAS
// ---------------------------------------------------------------------------
// Cada foto es flippable: tap/click muestra la foto, otro tap/click muestra
// la `phrase` por detras. Reemplaza las frases placeholder con lo que quieras
// decirle por cada foto.
//
// Reglas del layout:
//   - Las primeras 6 fotos llenan los slots polaroid del Hero en desktop.
//   - En mobile, mitad va al carousel de arriba, mitad al de abajo.
//   - Reordenar el array reordena ambos.
// ---------------------------------------------------------------------------

import img1 from './assets/photos/PXL_20251229_221454441.jpg'
import img2 from './assets/photos/PXL_20260131_201237680.jpg'
import img3 from './assets/photos/PXL_20260217_030737770.jpg'
import img4 from './assets/photos/IMG_4806.jpg'
import img5 from './assets/photos/IMG_7041.jpg'
import img6 from './assets/photos/IMG_7399.jpg'
import img7 from './assets/photos/IMG_7677.jpg'
import img8 from './assets/photos/IMG_4863.jpg'
import img9 from './assets/photos/IMG_4745.jpg'

export type Photo = { src: string; phrase: string }

export const photos: Photo[] = [
  { src: img1, phrase: 'frase 1 — editame en src/photos.ts' },
  { src: img2, phrase: 'frase 2 — editame en src/photos.ts' },
  { src: img3, phrase: 'frase 3 — editame en src/photos.ts' },
  { src: img4, phrase: 'frase 4 — editame en src/photos.ts' },
  { src: img5, phrase: 'frase 5 — editame en src/photos.ts' },
  { src: img6, phrase: 'frase 6 — editame en src/photos.ts' },
  { src: img7, phrase: 'frase 7 — editame en src/photos.ts' },
  { src: img8, phrase: 'frase 8 — editame en src/photos.ts' },
  { src: img9, phrase: 'frase 9 — editame en src/photos.ts' },
]
