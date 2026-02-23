import React from 'react'

export default function notFound() {
  return (
    <div className="text-center py-20">
      <span className="text-6xl font-bold text-red-500">404</span>
      <h1 className="text-4xl font-bold text-gray-800">Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">The page you are looking for does not exist.</p>
    </div>
  )
}
