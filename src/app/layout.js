import './globals.css'
import localFont from 'next/font/local'
import { Providers } from './providers'
const myFont = localFont({ src: './fonts/Roboto-Regular.ttf' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={myFont.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
