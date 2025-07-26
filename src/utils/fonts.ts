// src/utils/fonts.ts
import {
  Poppins,
  Roboto,
  // SairaCondensed,
  // BebasNeue,
  // PixelifySans,
} from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
});

// export const sairaCondensed = Saira_Condensed({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-saira-condensed",
// });

// export const bebasNeue = Bebas_Neue({
//   subsets: ["latin"],
//   weight: ["400"], // Bebas Neue solo tiene un peso
//   variable: "--font-bebas-neue",
// });

// export const pixelifySans = Pixelify_Sans({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-pixelify-sans",
// });
