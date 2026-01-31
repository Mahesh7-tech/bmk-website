export default function AboutPage() {
  return (
    <div className="container py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About MJ Properties and Constructions</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted partner in Bangalore's real estate market for over 5 years. 
          We specialize in residential, commercial, and agricultural properties in and around Bangalore.
        </p>
      </div>

      {/* Company Story */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, MJ Properties and Constructions has been at the forefront of Bangalore's real estate development. 
            We started with a simple mission: to help people find their perfect home in this growing city.
          </p>
          <p className="text-gray-600 mb-4">
            Over the years, we've witnessed Bangalore's transformation from a small town to a thriving city, 
            and we've been proud to be part of this journey. Our deep understanding of the local market 
            and strong relationships with developers make us your ideal partner for all real estate needs.
          </p>
          <p className="text-gray-600">
            Today, we're proud to have helped hundreds of families find their dream homes and 
            assisted numerous investors in making profitable real estate investments in Bangalore.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-8">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">80+</div>
              <div className="text-gray-600">Properties Sold</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-gray-600">Developers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose MJ Properties and Constructions?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
            <p className="text-gray-600">
              Deep knowledge of Bangalore's real estate market, neighborhoods, and property values.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Round-the-clock assistance for all your real estate queries and needs.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
            <p className="text-gray-600">
              Competitive pricing and transparent dealings with no hidden costs.
            </p>
          </div>
        </div>
      </div>

      {/* Bangalore Market Insights */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Real Estate Market Around Bangalore</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Why Invest in and around Bangalore?</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• IT Hub with major tech companies</li>
              <li>• Excellent infrastructure and connectivity</li>
              <li>• Growing job market and opportunities</li>
              <li>• Stable property appreciation rates</li>
              <li>• High rental demand from professionals</li>
              <li>• Government initiatives for development</li>
              <li>• Quality education and healthcare facilities</li>
              <li>• Pleasant climate throughout the year</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Prime Areas</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Mysore Road - High-End Market</li>
              <li>• Whitefield - IT Corridor</li>
              <li>• Kanakapura Road - Upcoming Development</li>
              <li>• Kolar Road - Industrial Investment</li>
              <li>• Nelamangala Road - Premium Residential</li>
              <li>• Electronic City - Tech Hub</li>
              <li>• Sarjapur Road - Premium Residential</li>
              <li>• Yelahanka - Upcoming Development</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Our experienced team of real estate professionals is dedicated to providing 
          you with the best service and finding the perfect property that meets your needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Property Consultants</h3>
            <p className="text-gray-600">
              Expert guidance for buying, selling, and renting properties.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Legal Experts</h3>
            <p className="text-gray-600">
              Complete legal support for all property transactions.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-600">
              Dedicated support team for all your queries and concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 