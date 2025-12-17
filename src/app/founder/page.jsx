'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import founderImage from "../../assets/founder.png"


export default function FounderPage() {
  const researchFocus = [
    "Autonomous and semi-autonomous unmanned aerial systems for ISR operations",
    "AI-driven anomaly detection, behavioural analysis, and threat classification",
    "Multi-sensor fusion frameworks combining visual, thermal, RF, acoustic, and environmental inputs",
    "Counter-IED and insurgency detection research using signal, pattern-of-life, and data-driven methodologies",
    "Secure, sovereign defence intelligence databases and analytics pipelines"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1C2D] to-[#1a2c3d]">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#6E7A86] hover:text-white transition-colors duration-200 group"
        >
          <div className="w-8 h-8 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors duration-200">
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
          </div>
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
              Leadership
            </span>
            <h1 className="font-michroma text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet the Founder
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Founder Image & Title */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-8 border border-white/10">
                  {/* Replace with your actual image */}
                  <Image
                    src={founderImage} // Update with your actual path
                    alt="Ramsey Matthew, Founder & Chief Systems Architect"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/80 via-transparent to-transparent"></div>
                </div>
                
                <div className="text-center lg:text-left">
                  <h2 className="font-michroma text-2xl font-bold text-white mb-2">
                    RAMSEY MATTHEW
                  </h2>
                  <p className="text-[#6E7A86] font-medium">
                    Founder & Chief Systems Architect
                  </p>
                  
                  {/* Contact Info */}
                  <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <h3 className="font-michroma text-lg font-semibold text-white mb-4">
                      Contact
                    </h3>
                    <a 
                      href="mailto:ramsey@pleiadesystems.com"
                      className="inline-flex items-center gap-2 text-[#CBD5E0] hover:text-white transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      ramsey@pleiadesystems.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Bio */}
            <div className="lg:col-span-2">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-lg text-[#CBD5E0] leading-relaxed mb-6">
                  Ramsey Matthew is a defence technology architect and advanced systems innovator 
                  focused on the design of intelligence-centric security systems for modern and 
                  asymmetric threat environments.
                </p>
                
                <p className="text-lg text-[#CBD5E0] leading-relaxed">
                  His work centres on the architecture and integration of autonomous platforms, 
                  artificial intelligence, multi-sensor intelligence, and defence-grade data 
                  infrastructure. He specialises in developing end-to-end systems that transform 
                  raw sensor data into actionable intelligence—supporting surveillance, 
                  reconnaissance, threat detection, and strategic decision-making across complex 
                  operational theatres.
                </p>
              </div>

              {/* Technical Philosophy */}
              <div className="mb-12">
                <h3 className="font-michroma text-2xl font-semibold text-white mb-6">
                  Technical Philosophy
                </h3>
                <p className="text-[#CBD5E0] leading-relaxed mb-6">
                  Ramsey's technical philosophy is grounded in the conviction that contemporary 
                  defence superiority is no longer defined by platforms alone, but by the quality, 
                  speed, and sovereignty of intelligence.
                </p>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="font-michroma text-lg font-semibold text-white mb-4">
                    Research & Development Focus
                  </h4>
                  <ul className="space-y-3">
                    {researchFocus.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-[#6E7A86] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[#CBD5E0]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Company Vision */}
              <div className="mb-12">
                <h3 className="font-michroma text-2xl font-semibold text-white mb-6">
                  Company Vision
                </h3>
                <p className="text-[#CBD5E0] leading-relaxed mb-6">
                  As the founder of Pleiades Systems, Ramsey established the company as a defence 
                  research and advanced development organisation, structured to pursue military-grade 
                  research, rapid prototyping, and scalable system validation. The company operates 
                  with a long-term mandate: to contribute to national security through indigenous 
                  capability development, modular system design, and future-ready architectures.
                </p>
                
                <p className="text-[#CBD5E0] leading-relaxed">
                  His approach is defined by systems engineering discipline and strategic 
                  foresight—prioritising interoperability, resilience, redundancy, and scalability. 
                  Each solution is designed to evolve from tactical deployment to strategic national 
                  infrastructure, ensuring relevance in both current and future security landscapes.
                </p>
              </div>

              {/* Vision Statement */}
              <div className="relative">
                {/* Divider */}
                <div className="flex items-center justify-center mb-12">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#6E7A86] to-transparent"></div>
                  <span className="mx-4 text-[#6E7A86] text-sm">Founder's Vision</span>
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#6E7A86] to-transparent"></div>
                </div>

                {/* Quote */}
                <div className="relative bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86]/20 rounded-2xl p-8 lg:p-12 border border-white/10">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>
                  
                  <blockquote className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                      "The future of defence belongs to nations that command their 
                      intelligence—technologically, strategically, and independently."
                    </p>
                    <footer className="text-[#CBD5E0] font-medium">
                      — Ramsey Matthew
                    </footer>
                  </blockquote>
                </div>

                {/* Final Statement */}
                <div className="mt-12 text-center">
                  <p className="text-lg text-[#CBD5E0] max-w-3xl mx-auto leading-relaxed">
                    Vision-driven and future-oriented, Ramsey's work is aimed at building integrated 
                    national security ecosystems in which autonomous platforms, artificial intelligence, 
                    and secure data systems function as a unified force multiplier. His long-term 
                    objective is to enable defence institutions to move from reactive security 
                    postures toward predictive, intelligence-led defence operations.
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="mt-16 pt-8 border-t border-white/10 flex justify-between">
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 text-[#6E7A86] hover:text-white transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to About
                </Link>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-[#6E7A86]/25 transition-all duration-300"
                >
                  Contact Ramsey
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}