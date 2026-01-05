'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  Shield,
  Lock,
  FileCheck,
  UserCheck,
  Gavel,
  Landmark
} from 'lucide-react'
import heroImage from '../../assets/hero-bg.jpg'

const GovernancePage = () => {
  const principles = [
    {
      title: 'Human-in-the-Loop Authority',
      description: 'Lethal decision authority remains strictly with human operators, ensuring accountability and moral responsibility.',
      icon: UserCheck
    },
    {
      title: 'National Data Sovereignty',
      description: 'Strict adherence to national data sovereignty and control protocols to protect sensitive state information.',
      icon: Landmark
    },
    {
      title: 'Secure Authorization',
      description: 'Robust enforcement of rules of engagement and secure authorization chains for all system actions.',
      icon: Lock
    },
    {
      title: 'Doctrine Compliance',
      description: 'Full compliance with established military doctrine, legal frameworks, and command structures.',
      icon: FileCheck
    }
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

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0B1C2D] text-white">
        <div className="absolute inset-0 z-0 opacity-20">
           <Image
            src={heroImage}
            alt="Governance Background"
            fill
            className="object-cover"
            priority
            placeholder="blur"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-8">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-100">Ethical Framework</span>
          </div>
          <h1 className="font-michroma text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            Governance, Control & Authorization
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Defence systems are developed, deployed, and operated only under authorized 
            government and military frameworks.
          </p>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {principles.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0B1C2D] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#0B1C2D] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-michroma text-xl font-bold text-[#0B1C2D] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#6E7A86] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Authorization Statement */}
      <section className="py-20 text-center">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-[#0B1C2D] rounded-3xl p-10 lg:p-16 relative overflow-hidden">
               {/* Decorative elements */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
               
               <div className="relative z-10">
                 <Gavel className="w-16 h-16 text-white/20 mx-auto mb-6" />
                 <h2 className="font-michroma text-2xl md:text-3xl font-bold text-white mb-6">
                    Responsible Development
                 </h2>
                 <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                   "Defence-aligned systems are developed only with authorization."
                 </p>
               </div>
            </div>
         </div>
      </section>

    </div>
  )
}

export default GovernancePage
