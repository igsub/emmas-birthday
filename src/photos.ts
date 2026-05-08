// ---------------------------------------------------------------------------
// EMMA'S PHOTOS + HIDDEN PHRASES
// ---------------------------------------------------------------------------
// Each photo is flippable: tap/click shows the photo, another tap/click
// reveals the phrase on the back.
//
// Layout rules:
//   - First 6 photos fill the polaroid slots in the Hero on desktop.
//   - On mobile, half goes to the top carousel, half to the bottom one.
//   - Reordering this array reorders both.
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
import img10 from './assets/photos/20250508_150249.jpg'
import img11 from './assets/photos/20250620_122246.jpg'
import img12 from './assets/photos/b08a7b89-e3c0-4cac-8d48-d02f77858770.jpg'
import img13 from './assets/photos/IMG_6943.jpg'
import img14 from './assets/photos/IMG_7321.jpg'
import img15 from './assets/photos/PXL_20251122_134258028.jpg'
import img16 from './assets/photos/PXL_20251220_225607372.jpg'
import img17 from './assets/photos/PXL_20260101_164310472.jpg'
import img18 from './assets/photos/PXL_20260129_204640230.MP.jpg'
import img19 from './assets/photos/PXL_20260215_000637485.jpg'
import img20 from './assets/photos/PXL_20260215_202829304.jpg'

export type Photo = { src: string; phrase: string }

export const photos: Photo[] = [
  { src: img1, phrase: 'Mon cœur' },
  { src: img2, phrase: 'Little strawberry' },
  { src: img3, phrase: 'Not everyone looks this good at 30' },
  { src: img4, phrase: 'How many lives you lived already?' },
  { src: img5, phrase: 'You are amazing' },
  { src: img6, phrase: 'The best is yet to come' },
  { src: img7, phrase: 'Mon amour' },
  { src: img8, phrase: 'You are beautiful' },
  { src: img9, phrase: 'Your hair ARE so long!' },
  { src: img10, phrase: 'You are more than enough' },
  { src: img11, phrase: 'Que paaaso?' },
  { src: img12, phrase: "Little huggy hug" },
  { src: img13, phrase: "Time to dress the wrong way" },
  { src: img14, phrase: 'How many countries did you travel to?' },
  { src: img15, phrase: "Even the bad days have their sunsets" },
  { src: img16, phrase: 'You are strong' },
  { src: img17, phrase: 'The best place to live is within you.' },
  { src: img18, phrase: 'You are your best friend.' },
  { src: img19, phrase: 'You are a warrior' },
  { src: img20, phrase: "How many sunsets have you seen already?" },
]
