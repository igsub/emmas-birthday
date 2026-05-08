// ---------------------------------------------------------------------------
// FOTOS DE EMMA
// ---------------------------------------------------------------------------
// Para agregar/sacar/reordenar fotos:
//   1. Drop nuevas en src/assets/photos/ (ya hay 9 importadas abajo)
//   2. Importalas y agregalas/sacalas/reordenalas en `photos`
//   3. Vite optimiza y bundlea automaticamente
//
// El layout: las primeras 6 ocupan los slots polaroid del Hero en desktop.
// El strip mobile muestra TODAS. Si queres que una foto especifica salga en
// desktop, ponela en las primeras 6 posiciones.
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

export const photos: string[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9]
