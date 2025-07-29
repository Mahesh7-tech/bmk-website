'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function AdminLink() {
  const [showAdmin, setShowAdmin] = useState(false)
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Simple password protection (you can change this password)
  const ADMIN_PASSWORD = 'bmkadmin123'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt with password:', password)
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setShowAdmin(false)
      console.log('Login successful')
    } else {
      alert('Incorrect password')
      console.log('Login failed')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setPassword('')
    console.log('Logged out')
  }

  console.log('AdminLink component rendered, isAuthenticated:', isAuthenticated, 'showAdmin:', showAdmin)

  if (isAuthenticated) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-300">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-medium text-gray-700">Admin Panel</span>
            <button
              onClick={handleLogout}
              className="text-xs text-red-600 hover:text-red-800"
            >
              Logout
            </button>
          </div>
          <div className="space-y-2">
            <Link
              href="/admin"
              className="block w-full text-center bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/add-property"
              className="block w-full text-center bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700 transition-colors"
            >
              Add Property
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!showAdmin ? (
        <button
          onClick={() => {
            console.log('Admin button clicked')
            setShowAdmin(true)
          }}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors text-sm font-medium"
          style={{ minWidth: '80px' }}
        >
          Admin
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-300 w-64">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Admin Login</h3>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setShowAdmin(false)}
                className="flex-1 bg-gray-300 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
          <p className="text-xs text-gray-500 mt-2">Password: bmkadmin123</p>
        </div>
      )}
    </div>
  )
} 