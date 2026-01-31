'use client'

import React, { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send email using our API
      const emailData = {
        to_email: 'mahemahesh1603@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        subject: `Property Inquiry: ${formData.subject}`,
        message: formData.message
      }

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch with MJ Properties and Constructions. We're here to help you find your perfect property 
          in Bangalore and surrounding areas.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
          <p className="text-gray-600">
            MJ Properties and Constructions<br />
            12th cross, near hopeform<br />
            Whitefield, Bengaluru<br />
            Karnataka - 560066
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600">
            <span className="block text-2xl font-semibold text-gray-900">+91 95388 90395</span>
            Primary number
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600">
            maheshs8147@gmail.com
          </p>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="input"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">Select a subject</option>
                <option value="property-inquiry">Property Inquiry</option>
                <option value="property-valuation">Property Valuation</option>
                <option value="rental-inquiry">Rental Inquiry</option>
                <option value="general-inquiry">General Inquiry</option>
                <option value="complaint">Complaint</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="input"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full btn btn-primary py-3"
            >
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                ✅ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                ❌ Failed to send message. Please try again or contact us directly.
              </div>
            )}
          </form>
        </div>

        {/* Office Location */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Our Office Location</h2>
          <div className="bg-gray-100 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">MJ Properties and Constructions</h3>
            <div className="space-y-2 text-gray-600">
              <p>📍 12th cross, near hopeform</p>
              <p>🏢 Whitefield, Bengaluru</p>
              <p>📞 +91 95388 90395</p>
              <p>📧 maheshs8147@gmail.com</p>
            </div>
          </div>

        </div>
      </div>

      {/* Additional Contact Information */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Other Ways to Reach Us</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-600">+91 95388 90395</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">Facebook</h3>
            <p className="text-gray-600">@mjpropertiesandconstructions</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">Instagram</h3>
            <p className="text-gray-600">@mjpropertiesandconstructions</p>
          </div>
        </div>
      </div>
    </div>
  )
} 