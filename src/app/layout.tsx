import { Inter } from 'next/font/google'
import '../assets/css/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WeParty',
  description: 'Lets party',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
