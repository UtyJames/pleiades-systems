'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  Cpu,
  Shield,
  Radio,
  Crosshair,
  Map,
  Zap,
  Eye,
  Server,
  Activity,
  Globe
} from 'lucide-react'

// Image imports
// Image imports
import heroImage from '../../../assets/2.jpg'
import droneImage from '../../../assets/6.jpg'
import isrImage from '../../../assets/3.jpg'
import cyberImage from '../../../assets/1.jpg'

const DefenseInnovationPage = () => {
  const innovations = [
    {
      title: 'Autonomous Combat',
      icon: Crosshair,
      items: [
        'Target acquisition and tracking',
        'Navigation under contested conditions',
        'Coordinated multi-platform engagement',
        'Human-authorized lethal decision chains'
      ]
    },
    {
      title: 'ISR Systems',
      icon: Eye,
      items: [
        'Persistent ground, air, and maritime ISR',
        'Sensor fusion (Radar, EO/IR, RF)',
        'Long-endurance surveillance',
        'Real-time ISR tasking and retasking'
      ]
    },
    {
      title: 'Guidance & Kinetic',
      icon: Zap,
      items: [
        'Rocket engine propulsion research',
        'Precision guidance & control',
        'Autonomous trajectory correction',
        'Secure command-to-guidance interfaces'
      ]
    },
    {
      title: 'Communications',
      icon: Radio,
      items: [
        'Resilient data links',
        'Spectrum awareness',
        'Anti-jamming capability',
        'Secure command and control'
      ]
    },
    {
      title: 'Counter-Insurgency',
      icon: Shield,
      items: [
        'Anomaly and threat detection',
        'IED detection intelligence',
        'Insurgent network analysis',
        'Predictive threat modeling'
      ]
    },
    {
      title: 'Geospatial',
      icon: Map,
      items: [
        'Infrastructure protection',
        'Pipeline surveillance',
        'Multispectral change detection',
        'Satellite & aerial fusion'
      ]
    }
  ]

  const techStack = [
    'Artificial intelligence and machine learning',
    'Large-scale data and sensor fusion architectures',
    'Geospatial intelligence engines',
    'Secure cloud, edge, and tactical compute',
    'Autonomous systems software',
    'Encrypted and resilient communications'
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
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#0B1C2D]/5 rounded-full text-[#0B1C2D] text-sm font-medium mb-6">
                Next-Generation Warfare
              </span>
              <h1 className="font-michroma text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1C2D] mb-6 tracking-tight">
                Defense Innovation & Technologies
              </h1>
              <p className="text-xl text-[#6E7A86] max-w-xl font-light leading-relaxed mb-8">
                All systems are designed for national-scale deployment, battlefield resilience, and sovereign control.
              </p>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={heroImage}
                alt="Advanced Defense Technology"
                fill
                className="object-cover"
                priority
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovations.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0B1C2D] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#0B1C2D] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-michroma text-xl font-bold text-[#0B1C2D] mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.items.map((subItem, i) => (
                      <li key={i} className="flex items-start text-sm text-[#6E7A86]">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Deep Dive Sections - Alternating */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Unmanned Systems */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-xl group">
              <Image
                src={droneImage}
                alt="Unmanned Combat Systems"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="font-michroma text-xl mb-2">Autonomous Platforms</div>
                <div className="text-sm opacity-80">Air & Ground Dominance</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-michroma text-3xl font-bold text-[#0B1C2D] mb-6">
                Autonomous & Unmanned Combat Systems
              </h2>
              <p className="text-[#6E7A86] text-lg mb-8 leading-relaxed">
                We develop advanced unmanned aerial and ground systems designed for contested environments.
                From loitering munitions to fiber-optic controlled drones resistant to electronic warfare,
                our platforms ensure operational continuity where traditional systems fail.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <Cpu className="w-6 h-6 text-blue-600" />
                  <span className="font-medium text-[#0B1C2D]">Swarm-capable coordination architectures</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <Activity className="w-6 h-6 text-blue-600" />
                  <span className="font-medium text-[#0B1C2D]">Fiber-optic control for EW resistance</span>
                </div>
              </div>
            </div>
          </div>

          {/* ISR & Counter-Insurgency */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-michroma text-3xl font-bold text-[#0B1C2D] mb-6">
                Counter-Insurgency & Asymmetric Warfare
              </h2>
              <p className="text-[#6E7A86] text-lg mb-8 leading-relaxed">
                Modern conflicts require granular intelligence. Our technology specializes in anomaly threat detection,
                IED route clearance, and insurgent network analysis—providing predictive modeling that saves lives
                and secures territories.
              </p>
               <ul className="space-y-3 mb-8">
                {[
                  'Urban and rural insurgent network analysis',
                  'Population and terrain behavior analysis',
                  'Predictive threat modeling',
                  'IED detection and route clearance'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-[#0B1C2D]">
                    <Shield className="w-5 h-5 text-emerald-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
             <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl group">
               <Image
                src={isrImage}
                alt="Counter Insurgency Technology"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-8 text-white">
                <div className="font-michroma text-xl mb-2">Asymmetric Warfare</div>
                <div className="text-sm opacity-80">Predictive Threat Modeling</div>
              </div>
            </div>
          </div>
          
           {/* Cyber & Comms */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-xl group">
              <Image
                src={cyberImage}
                alt="Secure Communications"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-8 text-white">
                <div className="font-michroma text-xl mb-2">Secure Comms</div>
                <div className="text-sm opacity-80">Resilient Data Links</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-michroma text-3xl font-bold text-[#0B1C2D] mb-6">
                Secure Communications & Electronic Systems
              </h2>
              <p className="text-[#6E7A86] text-lg mb-8 leading-relaxed">
                Communication is the backbone of command. We deliver encrypted tactical and strategic communications
                with anti-jamming capabilities, ensuring resilient data links even in the most contested electronic environments.
              </p>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-100 rounded-xl text-center hover:bg-gray-50 transition-colors">
                    <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-sm font-bold text-[#0B1C2D]">Spectrum Awareness</div>
                  </div>
                  <div className="p-4 border border-gray-100 rounded-xl text-center hover:bg-gray-50 transition-colors">
                    <Server className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-sm font-bold text-[#0B1C2D]">Secure C2</div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-[#0B1C2D] py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-michroma text-3xl font-bold mb-12">Foundational Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {techStack.map((tech, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300">
                <div className="font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Innovations List */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-michroma text-2xl font-bold text-[#0B1C2D] mb-8 text-center">Additional Strategic Innovations</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                  'Autonomous combat system coordination',
                  'Cyber and information warfare analytics',
                  'Psychological and influence environment analysis',
                  'Strategic war-gaming and simulation platforms',
                  'Near-space and high-altitude ISR research'
                ].map((item, i) => (
                  <div key={i} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                     <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                     <span className="text-gray-700">{item}</span>
                  </div>
                ))}
            </div>
          </div>
      </section>

    </div>
  )
}

export default DefenseInnovationPage
