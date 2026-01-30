'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-white/95 backdrop-blur-md'
    }`}>
        <div className="container">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative bg-white p-1.5 rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:to-primary-900 transition-all duration-300`}>
                  MJ Properties
                </span>
                <span className="text-[10px] text-gray-600 font-medium tracking-wider">
                  & CONSTRUCTIONS
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              <Link 
                href="/" 
                className="px-3 py-1.5 text-gray-700 hover:text-primary-600 font-medium text-sm relative group transition-colors duration-300"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/properties" 
                className="px-3 py-1.5 text-gray-700 hover:text-primary-600 font-medium text-sm relative group transition-colors duration-300"
              >
                Properties
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/about" 
                className="px-3 py-1.5 text-gray-700 hover:text-primary-600 font-medium text-sm relative group transition-colors duration-300"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/contact" 
                className="px-3 py-1.5 text-gray-700 hover:text-primary-600 font-medium text-sm relative group transition-colors duration-300"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-2 pt-2 pb-4 space-y-1 border-t border-gray-200 mt-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/properties"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              >
                Properties
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
    </nav>
  )
}