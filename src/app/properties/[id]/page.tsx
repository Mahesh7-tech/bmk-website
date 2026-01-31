'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getPropertyByIdFromSheet, getAllPropertiesFromSheet } from '@/lib/sheets'
import { notFound } from 'next/navigation'

export default function PropertyPage({ params }: { params: { id: string } }) {
  type Property = {
    id: number
    title: string
    location?: string
    price?: string
    type?: string
    area?: string
    image?: string
    gallery?: string[]
    featured?: boolean
    description?: string
    features?: string[]
    amenities?: string[]
    status?: string
    possession?: string
    bedrooms?: number
    dimensions?: string
    approvals?: string
    khata?: string
  }

  const [property, setProperty] = useState<Property | null>(null)
  const [similarProperties, setSimilarProperties] = useState<Property[]>([])
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

  const combinedAmenities = [
    ...(property?.features || []),
    ...(property?.amenities || []),
  ]

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
              src={property.image ?? '/images/property1.jpg'}
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

          {Array.isArray(property.gallery) && property.gallery.length > 0 && (
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4">Detailed View</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.gallery.slice(0, 6).map((imagePath, index) => (
                  <div key={imagePath + index} className="relative h-32 md:h-40 rounded-lg overflow-hidden">
                    <Image
                      src={imagePath}
                      alt={`${property.title} detailed view ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

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
            <a
              href="tel:+919538890395"
              className="w-full block text-center bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors mb-3"
            >
              Contact Agent
            </a>
            <div className="w-full border border-primary-100 rounded-lg p-3 text-center">
              <p className="text-lg font-semibold text-primary-700">+91 95388 90395</p>
            </div>
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
            </div>
          </div>

          {/* Property Details */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="font-semibold mb-4">Property Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Type:</span>
                <span>{property.type}</span>
              </div>
              {property.bedrooms > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Bedrooms:</span>
                  <span>{property.bedrooms}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">Dimensions:</span>
                <span>{property.dimensions}</span>
              </div>
              {property.approvals && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Approval:</span>
                  <span>{property.approvals}</span>
                </div>
              )}
              {property.khata && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Khata:</span>
                  <span>{property.khata}</span>
                </div>
              )}
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-4">Amenities</h3>
            <div className="space-y-2 text-sm">
              {combinedAmenities.map((item, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-4 h-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 