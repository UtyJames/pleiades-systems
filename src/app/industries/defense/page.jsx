'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft,
  Shield,
  Target,
  Radar,
  Satellite,
  Cpu,
  Users,
  Map,
  Globe,
  Network,
  Eye,
  Lock,
  Building
} from 'lucide-react'

const DefensePage = () => {
  const capabilities = [
    {
      title: 'Combat Systems Development & Integration',
      description: 'We design and integrate modern combat systems built for adaptability and interoperability.',
      icon: Shield,
      color: 'from-[#0B1C2D] to-blue-600',
      features: [
        'Ground combat system architectures',
        'Weapon system intelligence integration',
        'Battlefield command and control',
        'Interoperability frameworks',
        'System-of-systems engineering'
      ]
    },
    {
      title: 'Unmanned Systems & Robotics',
      description: 'Advanced unmanned aerial, ground, and maritime systems for ISR and tactical operations.',
      icon: Radar,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'ISR drone platforms',
        'Autonomous ground vehicles',
        'Swarm intelligence systems',
        'Persistent surveillance',
        'Remote operation capabilities'
      ]
    },
    {
      title: 'Intelligence Superiority Systems',
      description: 'Advanced intelligence collection, processing, and dissemination systems.',
      icon: Eye,
      color: 'from-emerald-500 to-teal-500',
      features: [
        'Multi-source intelligence fusion',
        'Real-time threat assessment',
        'Predictive intelligence',
        'SIGINT and ELINT systems',
        'Imagery intelligence processing'
      ]
    },
    {
      title: 'Cyber Defense & Electronic Warfare',
      description: 'Comprehensive cyber defense and electronic warfare capabilities.',
      icon: Lock,
      color: 'from-amber-500 to-yellow-500',
      features: [
        'Cyber attack detection',
        'Electronic countermeasures',
        'Network defense systems',
        'Cyber-physical security',
        'EW spectrum management'
      ]
    },
    {
      title: 'Command & Control Systems',
      description: 'Integrated command, control, and communications (C3) systems.',
      icon: Network,
      color: 'from-purple-500 to-violet-500',
      features: [
        'Tactical C2 systems',
        'Strategic command centers',
        'Secure communications',
        'Situational awareness',
        'Decision support tools'
      ]
    },
    {
      title: 'Training & Simulation',
      description: 'Advanced training systems and combat simulation platforms.',
      icon: Target,
      color: 'from-rose-500 to-pink-500',
      features: [
        'Virtual reality training',
        'Combat simulation',
        'Mission rehearsal',
        'Collective training',
        'After-action review'
      ]
    }
  ]

  const clients = [
    {
      name: 'Armed Forces',
      icon: Shield,
      description: 'Combat and tactical systems'
    },
    {
      name: 'Defense Ministries',
      icon: Building,
      description: 'Strategic defense planning'
    },
    {
      name: 'Intelligence Agencies',
      icon: Eye,
      description: 'Intelligence and surveillance'
    },
    {
      name: 'National Security Institutions',
      icon: Globe,
      description: 'National security infrastructure'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#6E7A86] hover:text-[#0B1C2D] transition-colors duration-200 group"
        >
          <div className="w-8 h-8 bg-[#0B1C2D]/10 rounded-full flex items-center justify-center group-hover:bg-[#0B1C2D]/20 transition-colors duration-200">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="font-medium">Back to Industries</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B1C2D] z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                National Security
              </span>
              <h1 className="font-michroma text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Defence Capabilities Overview
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Advanced Systems for National Security, Intelligence Superiority & Future Warfare
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                We are a defence technology and systems company delivering intelligence-driven, mission-critical 
                solutions for modern and future battlefields. Our capabilities support armed forces, defence 
                ministries, intelligence agencies, and national security institutions operating across complex 
                and contested environments.
              </p>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1731579883889-5bd974f1d520?q=80&w=1525&auto=format&fit=crop"
                alt="Military command center with surveillance systems"
                fill="true"
                className="object-cover h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section - Split Layout */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-michroma text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
                Core Defence Capabilities
              </h2>
              <p className="text-lg text-[#6E7A86] max-w-3xl mx-auto leading-relaxed">
                Comprehensive defense technology solutions engineered for modern and future warfare
              </p>
            </div>

            {/* Two-Column Layout with Featured Cards */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {capabilities.slice(0, 2).map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
                  >
                    <div className={`relative h-12 bg-gradient-to-r ${capability.color}`}>
                      <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${capability.color.replace('from-', 'text-').split(' ')[0]}`} />
                      </div>
                    </div>
                    <div className="pt-10 p-6">
                      <h3 className="font-michroma text-xl font-semibold text-[#0B1C2D] mb-3">
                        {capability.title}
                      </h3>
                      <p className="text-[#6E7A86] mb-4">
                        {capability.description}
                      </p>
                      <div className="space-y-2">
                        {capability.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[#6E7A86] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Grid Layout for Remaining Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.slice(2).map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
                  >
                    <div className={`relative h-12 bg-gradient-to-r ${capability.color}`}>
                      <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${capability.color.replace('from-', 'text-').split(' ')[0]}`} />
                      </div>
                    </div>
                    <div className="pt-10 p-6">
                      <h3 className="font-michroma text-lg font-semibold text-[#0B1C2D] mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-[#6E7A86] text-sm mb-3">
                        {capability.description}
                      </p>
                      <div className="space-y-1">
                        {capability.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-1 h-1 bg-[#6E7A86] rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            <span className="text-xs text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0B1C2D] to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-michroma text-3xl md:text-4xl font-bold text-white mb-6">
                Who We Serve
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                Trusted by defense and national security organizations worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clients.map((client, index) => {
                const ClientIcon = client.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 border border-white/20"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ClientIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-michroma text-lg font-semibold text-white mb-2">
                      {client.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {client.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Focus Section */}
            <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-michroma text-2xl font-semibold text-white">
                      Our Strategic Focus
                    </h3>
                  </div>
                  <p className="text-white/90 mb-6">
                    Our focus is on operational advantage, decision superiority, and sovereign defence 
                    capability development across complex and contested environments.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-white/90">Operational advantage through technology</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-white/90">Decision superiority in contested environments</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-white/90">Sovereign defence capability development</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">100%</div>
                      <div className="text-white/80 text-sm">Mission Critical Systems</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">24/7</div>
                      <div className="text-white/80 text-sm">Operational Support</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Secure</div>
                      <div className="text-white/80 text-sm">Classified Systems</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Global</div>
                      <div className="text-white/80 text-sm">Deployment Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-[#0B1C2D]/5 to-blue-500/5 rounded-3xl p-8 lg:p-12">
              <h3 className="font-michroma text-2xl md:text-3xl font-bold text-[#0B1C2D] mb-6">
                Enhance National Security Capabilities
              </h3>
              <p className="text-lg text-[#6E7A86] mb-8 max-w-2xl mx-auto">
                Discover how our advanced defense systems can provide operational advantage and decision 
                superiority for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="font-michroma bg-gradient-to-r from-[#0B1C2D] to-blue-600 text-white px-8 py-3.5 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1">
                  Request Defense Briefing
                </button>
                <button className="font-michroma border-2 border-[#0B1C2D] text-[#0B1C2D] px-8 py-3.5 rounded-full text-lg font-medium hover:bg-[#0B1C2D] hover:text-white transition-all duration-300">
                  Download Capabilities Deck
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DefensePage