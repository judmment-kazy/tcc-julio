import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <script src="https://kit.fontawesome.com/cd773e3565.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}