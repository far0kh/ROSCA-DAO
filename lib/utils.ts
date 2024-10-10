import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import localFont from 'next/font/local'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

export const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const gilroyBold = localFont({
  src: [
    {
      path: '../app/fonts/gilroy_bold.ttf',
      weight: '700'
    }
  ],
})