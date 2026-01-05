'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Users, Target, Shield, Globe } from 'lucide-react'
import founderImage from '../../assets/founder.png'

const AboutPage = () => {
  const researchFocus = [
    "Autonomous and semi-autonomous unmanned aerial systems for ISR operations",
    "AI-driven anomaly detection, behavioural analysis, and threat classification",
    "Multi-sensor fusion frameworks combining visual, thermal, RF, acoustic, and environmental inputs",
    "Counter-IED and insurgency detection research using signal, pattern-of-life, and data-driven methodologies",
    "Secure, sovereign defence intelligence databases and analytics pipelines"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#6E7A86] hover:text-[#0B1C2D] transition-colors duration-200 group"
        >
          <div className="w-8 h-8 bg-[#0B1C2D]/10 rounded-full flex items-center justify-center group-hover:bg-[#0B1C2D]/20 transition-colors duration-200">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Hero / Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-800 rounded-full text-sm font-medium mb-8">
            Our Mission
          </span>
          <h1 className="font-michroma text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C2D] mb-8 leading-tight">
            Pleiades Systems exists to help institutions operate with clarity, foresight, and control in complex environments.
          </h1>
          <p className="text-xl text-[#6E7A86] leading-relaxed">
            We are engineers, system architects, and intelligence technologists building the next layer of
            national capability — responsibly and lawfully.
          </p>
        </div>
      </section>

      {/* Founder / Leadership Section (Adapted from founder.jsx) */}
      <section className="bg-[#0B1C2D] py-20 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
              Leadership
            </span>
            <h2 className="font-michroma text-3xl md:text-4xl font-bold text-white mb-6">
              Meet the Founder
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Founder Image & Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-8 border border-white/10 shadow-2xl">
                  <Image
                    src={founderImage}
                    alt="Ramsey Matthew, Founder & Chief Systems Architect"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/60 via-transparent to-transparent"></div>
                </div>
                
                <div className="text-center lg:text-left">
                  <h2 className="font-michroma text-2xl font-bold text-white mb-2">
                    RAMSEY MATTHEW
                  </h2>
                  <p className="text-[#98A2B3] font-medium">
                    Founder & Chief Systems Architect
                  </p>
                  
                  <div className="mt-6 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <h3 className="font-michroma text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                      Contact
                    </h3>
                    <a 
                      href="mailto:ramsey@pleiadesystems.com"
                      className="inline-flex items-center gap-2 text-[#CBD5E0] hover:text-white transition-colors duration-200 text-sm"
                    >
                      <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      ramsey@pleiadesystems.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Content */}
            <div className="lg:col-span-2 space-y-12">
               {/* Bio */}
              <div>
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

               {/* Philosophy */}
              <div>
                <h3 className="font-michroma text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                   <Target className="w-6 h-6 text-blue-400" />
                   Technical Philosophy
                </h3>
                <p className="text-[#CBD5E0] leading-relaxed mb-6">
                  Ramsey's technical philosophy is grounded in the conviction that contemporary 
                  defence superiority is no longer defined by platforms alone, but by the quality, 
                  speed, and sovereignty of intelligence.
                </p>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
                  <h4 className="font-michroma text-lg font-semibold text-white mb-4">
                    Research & Development Focus
                  </h4>
                  <ul className="space-y-3">
                    {researchFocus.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        <span className="text-[#CBD5E0]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

               {/* Vision */}
              <div>
                <h3 className="font-michroma text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                   <Globe className="w-6 h-6 text-emerald-400" />
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
              
              {/* Quote Block */}
              <div className="relative bg-gradient-to-br from-blue-900/30 to-[#0B1C2D] rounded-2xl p-8 lg:p-10 border border-white/10 shadow-lg">
                  <blockquote className="text-center relative z-10">
                    <p className="text-xl md:text-2xl font-bold text-white mb-6 italic leading-relaxed">
                      "The future of defence belongs to nations that command their 
                      intelligence—technologically, strategically, and independently."
                    </p>
                    <footer className="text-blue-200 font-medium">
                      — Ramsey Matthew
                    </footer>
                  </blockquote>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Values / Conclusion */}
      <section className="py-20 bg-gray-50">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
              <h2 className="font-michroma text-2xl font-bold text-[#0B1C2D] mb-8">
                Building Integrated National Security Ecosystems
              </h2>
              <p className="text-lg text-[#6E7A86] leading-relaxed">
                 Vision-driven and future-oriented, our work aims to function as a unified force multiplier. 
                 The long-term objective is to enable defence institutions to move from reactive security 
                 postures toward predictive, intelligence-led defence operations.
              </p>
           </div>
      </section>

    </div>
  )
}

export default AboutPage
