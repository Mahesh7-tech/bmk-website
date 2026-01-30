'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/properties?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <section className="relative h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Luxury real estate background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Welcome to MJ Properties and Constructions
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Your trusted partner in finding the perfect property. With years of experience
            and a commitment to excellence, we help you find your dream home or investment.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-2 shadow-lg flex flex-col md:flex-row gap-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter location, property type, or keyword..."
                className="w-full px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            <button 
              className="btn btn-primary px-8 py-3 text-base"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/properties?type=Plot"
              className="text-white hover:text-primary-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Plots
            </Link>
            <Link
              href="/properties?type=Commercial"
              className="text-white hover:text-primary-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Commercial
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-4">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-600">100+</div>
              <div className="text-gray-600">Properties Listed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-600">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-600">3+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-600">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 