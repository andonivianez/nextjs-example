import '../styles/globals.css'
import {Space_Grotesk} from '@next/font/google'
import { Navigation } from './components/Navigation.jsx'

const font = Space_Grotesk(
  {
    weight: ['400', '700'],
    preload: false
  }
)

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first app with next 13</title>
      </head>
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
