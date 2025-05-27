import { DM_Mono } from 'next/font/google';
import "./globals.css";
import NavBar from '@/components/NavBar';

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono'
})

export const metadata = {
  title: 'Gallery',
  description: 'Photogrphy of Midwest Birds by Drew'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang='en' className={dmMono.className}>
          <body className="flex flex-col min-h-screen">
            <header className="flex justify-center mt-4">
              <NavBar />
            </header>
            <main className='flex-grow max-w-6xl mx-auto w-full'>{children}</main>
            <footer className='flex justify-center text-xs text-gray-500 mb-4'>
              © {new Date().getFullYear()} Drew Sawicki. All rights reserved.
            </footer>
          </body>
      </html>
  )
} 
