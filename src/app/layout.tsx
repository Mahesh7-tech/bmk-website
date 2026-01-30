import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AdminLink from '@/components/AdminLink'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MJ Properties and Constructions | Find Your Dream Home in Bangalore',
  description: 'Discover your perfect property with MJ Properties and Constructions. Browse through a wide range of residential and commercial properties in Bangalore.',
  keywords: 'real estate, property, homes for sale, Bangalore, MJ Properties, apartments, villas, commercial properties',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <AdminLink />
      </body>
    </html>
  )
} 