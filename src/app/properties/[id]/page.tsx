'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getPropertyByIdFromSheet, getAllPropertiesFromSheet } from '@/lib/sheets'
import { notFound } from 'next/navigation'

export default function PropertyPage({ params }: { params: { id: string } }) {
  const [property, setProperty] = useState(null)
  const [similarProperties, setSimilarProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProperty = async () => {
      try {
        const propertyData = await getPropertyByIdFromSheet(params.id)
        if (!propertyData) {
          notFound()
        }
        setProperty(propertyData)
        
        // Load similar properties
        const allProperties = await getAllPropertiesFromSheet()
        const similar = allProperties
          .filter(p => p.type === propertyData.type && p.id !== propertyData.id)
          .slice(0, 3)
        setSimilarProperties(similar)
        
        setLoading(false)
      } catch (error) {
        console.error('Error loading property:', error)
        setLoading(false)
      }
    }
    
    loadProperty()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading property details...</p>
        </div>
      </div>
    )
  }

  if (!property) {
    notFound()
  }

  return (
    <div className="container py-16">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
          <li>/</li>
          <li><Link href="/properties" className="hover:text-primary-600">Properties</Link></li>
          <li>/</li>
          <li className="text-gray-900">{property.title}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Property Image */}
          <div className="relative h-96 mb-8">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="rounded-lg object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                property.type === 'Apartment' ? 'bg-blue-500' :
                property.type === 'Villa' ? 'bg-green-500' :
                property.type === 'Commercial' ? 'bg-orange-500' :
                'bg-purple-500'
              }`}>
                {property.type}
              </span>
            </div>
            {property.featured && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-sm font-semibold text-white bg-red-500">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Property Details */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
            <p className="text-xl text-gray-600 mb-6 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {property.location}
            </p>
            <p className="text-gray-600 mb-6">{property.description}</p>
          </div>

          {/* Property Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-4">Property Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span>{property.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Area:</span>
                  <span>{property.area}</span>
                </div>
                {property.bedrooms > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bedrooms:</span>
                    <span>{property.bedrooms}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Bathrooms:</span>
                  <span>{property.bathrooms}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dimensions:</span>
                  <span>{property.dimensions}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-4">Features</h3>
              <div className="space-y-2 text-sm">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="font-semibold mb-4">Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          {/* Similar Properties */}
          {similarProperties.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-4">Similar Properties</h3>
              <div className="space-y-4">
                {similarProperties.map((similarProperty) => (
                  <Link key={similarProperty.id} href={`/properties/${similarProperty.id}`} className="block hover:bg-gray-50 p-3 rounded-md transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-16 h-16">
                        <Image
                          src={similarProperty.image}
                          alt={similarProperty.title}
                          fill
                          className="rounded object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{similarProperty.title}</h4>
                        <p className="text-gray-600 text-xs">{similarProperty.location}</p>
                        <p className="text-primary-600 text-sm font-semibold">{similarProperty.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Price Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="font-semibold mb-4">Price</h3>
            <div className="text-3xl font-bold text-primary-600 mb-4">{property.price}</div>
            <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors mb-3">
              Contact Agent
            </button>
            <button className="w-full border border-primary-600 text-primary-600 py-3 rounded-lg hover:bg-primary-50 transition-colors">
              Schedule Visit
            </button>
          </div>

          {/* Property Status */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="font-semibold mb-4">Property Status</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-medium">{property.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Possession:</span>
                <span className="font-medium">{property.possession}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Furnishing:</span>
                <span className="font-medium">{property.furnishing}</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@bmkbuilders.com</span>
              </div>
              <div className="flex items-start">
                <svg className="w-4 h-4 text-gray-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>07 12th cross, near jayanna circle, Rajarajeshwari Nagara, Bengaluru, Karnataka 560098</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 