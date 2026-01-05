'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft,
  Target,
  Cpu,
  Globe,
  Shield,
  Zap,
  Radio,
  Eye,
  Crosshair,
  Server
} from 'lucide-react'
import samsonImage from '../../../assets/16.jpg'

const SamsonPage = () => {
  const coreFunctions = [
    {
      title: 'Multi-domain intelligence fusion',
      description: 'HUMINT, SIGINT, GEOINT, IMINT, OSINT fusion for total battlespace awareness.',
      icon: Eye,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Real-time battlespace awareness',
      description: 'Instantaneous understanding of friendly and hostile force dispositions.',
      icon: Globe,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Target detection & tracking',
      description: 'AI-assisted classification and tracking of multiple targets simultaneously.',
      icon: Crosshair,
      color: 'from-red-500 to-rose-500'
    },
    {
      title: 'Mission planning & monitoring',
      description: 'Dynamic execution monitoring and autonomous re-tasking capabilities.',
      icon: Target,
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Cross-unit coordination',
      description: 'Seamless synchronization across land, air, and maritime assets.',
      icon: Radio,
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'AI-assisted decision support',
      description: 'Predictive analytics and engagement recommendations for commanders.',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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

      {/* Full Width Hero Image with Title on Top */}
      <section className="relative w-full h-[60vh] min-h-[500px]">
        <Image
          src={samsonImage}
          alt="SAMSON Platform"
          fill
          className="object-cover"
          priority
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-[#0B1C2D]/70"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 animate-fade-in-up">
              FLAGSHIP COMBAT PLATFORM
            </span>
            <h1 className="font-michroma text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
              SAMSON Platform
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              Advanced, Software-Defined & Autonomous Warfare Capabilities
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-michroma text-2xl md:text-3xl font-bold text-[#0B1C2D] mb-8">
              Decision Superiority & Multi-Domain Dominance
            </h2>
            <p className="text-lg text-[#6E7A86] leading-relaxed mb-6">
              Pleiades Systems develops advanced defence systems focused on decision superiority,
              autonomous operations, and multi-domain dominance. Our capabilities span air, land, 
              maritime, cyber, and information environments, integrating intelligence, automation, 
              and weaponized platforms into coherent operational systems.
            </p>
            <div className="bg-[#0B1C2D] text-white p-8 rounded-2xl shadow-xl">
              <p className="text-xl font-medium italic mb-6">
                "SAMSON is a unified combat and mission orchestration system where..."
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="font-bold text-blue-400 mb-2">Intelligence</div>
                  <div className="text-sm">Is the Weapon</div>
                </div>
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="font-bold text-emerald-400 mb-2">Coordination</div>
                  <div className="text-sm">Is the Force Multiplier</div>
                </div>
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="font-bold text-purple-400 mb-2">Software</div>
                  <div className="text-sm">Defines the Battlespace</div>
                </div>
              </div>
            </div>
          </div>

          {/* What SAMSON Is - Split Feature */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="relative h-[400px] bg-gradient-to-tr from-[#0B1C2D] to-blue-900 rounded-3xl overflow-hidden shadow-2xl p-8 flex flex-col justify-center text-white">
                <Shield className="w-16 h-16 text-blue-400 mb-6 absolute top-8 right-8 alpha-20" />
                <h3 className="font-michroma text-2xl font-bold mb-6 relative z-10">
                  Unified Operational Framework
                </h3>
                <ul className="space-y-4 relative z-10">
                  {[
                    'Multi-source intelligence fusion',
                    'Autonomous and semi-autonomous platforms',
                    'Command, control, and fire coordination',
                    'Human decision authority'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="w-2.5 h-2.5 bg-blue-400 rounded-full" />
                      </div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                  <p className="text-white/80 italic">
                    Replaces fragmented systems with decision-centric warfare architecture.
                  </p>
                </div>
                
                {/* Abstract decorative circles */}
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-michroma text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
                What SAMSON Is
              </h2>
              <p className="text-lg text-[#6E7A86] leading-relaxed mb-6">
                SAMSON integrates sensors, shooters, command systems, and autonomous platforms into a
                unified operational framework. It serves as a comprehensive combat and mission orchestration 
                system designed for the modern battlefield.
              </p>
              <p className="text-lg text-[#6E7A86] leading-relaxed mb-8">
                By shifting to a software-defined architecture, SAMSON enables faster adoption of new 
                technologies, seamless interoperability between legacy and future systems, and a 
                significant tactical advantage through superior speed and coordination.
              </p>
              <button className="bg-gradient-to-r from-[#0B1C2D] to-blue-700 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                Explore Technical Specifications
              </button>
            </div>
          </div>

          {/* Core Combat Functions */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-michroma text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
                Core Combat Functions
              </h2>
              <p className="text-lg text-[#6E7A86] max-w-2xl mx-auto">
                Enabling faster, more precise, and more coordinated operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFunctions.map((func, index) => {
                const Icon = func.icon
                return (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className={`w-14 h-14 bg-gradient-to-r ${func.color} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-michroma text-lg font-bold text-[#0B1C2D] mb-3">
                      {func.title}
                    </h3>
                    <p className="text-[#6E7A86]">
                      {func.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </section>
      
      {/* Footer / CTA */}
      <section className="bg-[#0B1C2D] py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-michroma text-3xl font-bold mb-6">Secure Your Operational Advantage</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Contact our defence specialists to discuss how SAMSON can be integrated into your existing defence architecture.
          </p>
          <Link href="/contact">
            <button className="bg-white text-[#0B1C2D] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Contact Defence Division
            </button>
          </Link>
        </div>
      </section>

    </div>
  )
}

export default SamsonPage
