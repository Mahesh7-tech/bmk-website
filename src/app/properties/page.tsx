'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPropertiesFromSheet, getPropertyTypes, getLocations, clearPropertiesCache } from '@/lib/sheets'

export default function PropertiesPage() {
  type Property = {
    id: number
    title: string
    location?: string
    price?: string
    type?: string
    area?: string
    image?: string
    description?: string
    featured?: boolean
    features?: string[]
    amenities?: string[]
    status?: string
    possession?: string
    bedrooms?: number
  }

  const [allProperties, setAllProperties] = useState<Property[]>([])
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [priceRange, setPriceRange] = useState('')

  useEffect(() => {
    const loadProperties = async () => {
      try {
        // Clear cache to ensure fresh data
        clearPropertiesCache()
        const properties = await getAllPropertiesFromSheet()
        setAllProperties(properties)
        setFilteredProperties(properties)
        setLoading(false)
      } catch (error) {
        console.error('Error loading properties:', error)
        setLoading(false)
      }
    }
    loadProperties()
  }, [])

  useEffect(() => {
    let filtered = allProperties

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(property =>
        (property.title ?? '').toLowerCase().includes(term) ||
        (property.location ?? '').toLowerCase().includes(term) ||
        (property.description ?? '').toLowerCase().includes(term)
      )
    }

    // Filter by type
    if (selectedType) {
      filtered = filtered.filter(property => property.type === selectedType)
    }

    // Filter by location
    if (selectedLocation) {
      filtered = filtered.filter(property => property.location === selectedLocation)
    }

    // Filter by price range
    if (priceRange) {
      filtered = filtered.filter(property => {
        const price = parseInt((property.price ?? '').replace(/[^\\d]/g, '')) || 0
        switch (priceRange) {
          case 'under-50':
            return price < 5000000
          case '50-100':
            return price >= 5000000 && price < 10000000
          case '100-200':
            return price >= 10000000 && price < 20000000
          case 'over-200':
            return price >= 20000000
          default:
            return true
        }
      })
    }

    setFilteredProperties(filtered)
  }, [allProperties, searchTerm, selectedType, selectedLocation, priceRange])

  const propertyTypes = getPropertyTypes()
  const locations = getLocations()

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedType('')
    setSelectedLocation('')
    setPriceRange('')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading properties...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Properties</h1>
          <p className="text-xl text-gray-600">Find your perfect property in Bangalore</p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Search & Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search properties..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Types</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Prices</option>
                <option value="under-50">Under ₹50 Lakhs</option>
                <option value="50-100">₹50 Lakhs - ₹1 Crore</option>
                <option value="100-200">₹1 Crore - ₹2 Crores</option>
                <option value="over-200">Over ₹2 Crores</option>
              </select>
            </div>

            {/* Clear Filters */}
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="w-full bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredProperties.length} of {allProperties.length} properties
          </p>
          {searchTerm && (
            <p className="text-sm text-gray-500 mt-1">
              Search results for: "{searchTerm}"
            </p>
          )}
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 mb-4">
                  <Image
                    src={property.image ?? '/images/property1.jpg'}
                    alt={property.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${
                      property.type === 'Apartment' ? 'bg-blue-500' :
                      property.type === 'Villa' ? 'bg-green-500' :
                      property.type === 'Commercial' ? 'bg-orange-500' :
                      'bg-purple-500'
                    }`}>
                      {property.type}
                    </span>
                  </div>
                  {property.featured && (
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold text-white bg-red-500">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.location}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      {property.area}
                    </div>
                    {(property.bedrooms ?? 0) > 0 && (
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v2m8-2v2M3 7h18" />
                        </svg>
                        {property.bedrooms ?? 0} Beds
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{property.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary-600">{property.price}</span>
                    <Link 
                      href={`/properties/${property.id}`}
                      className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>
    </div>
  )
} 