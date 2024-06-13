import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Providers from '@/Providers/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Micbol Stores',
  description: 'Comfy stores',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html data-theme='light' lang='en'>
      <body className={`${inter.className}  bg-black`}>
        <Providers>
          <Navbar />
          <main className='bg-black'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
