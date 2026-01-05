'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#6E7A86] hover:text-[#0B1C2D] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-4xl font-bold text-[#0B1C2D] mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Content coming soon. This page will provide contact information and a form.
        </p>
      </div>
    </div>
  )
}

export default ContactPage
