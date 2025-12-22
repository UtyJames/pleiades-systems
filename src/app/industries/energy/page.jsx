'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft,
  Zap,
  Battery,
  Wind,
  Droplets,
  Factory,
  Activity,
  Shield,
  BarChart3,
  CloudLightning,
  Building,
  Users
} from 'lucide-react'

const EnergyPage = () => {
  const solutions = [
    {
      title: 'Intelligent Infrastructure Monitoring',
      description: 'AI-powered monitoring solutions for pipelines, power plants, transmission networks, refineries, and offshore facilities.',
      icon: Activity,
      color: 'from-amber-500 to-yellow-500',
      features: [
        'Real-time infrastructure monitoring',
        'Predictive maintenance systems',
        'Anomaly detection algorithms',
        'Failure prevention analytics',
        'Performance optimization'
      ]
    },
    {
      title: 'Grid Security & Resilience',
      description: 'Advanced security systems for electrical grids and energy distribution networks.',
      icon: Shield,
      color: 'from-emerald-500 to-teal-500',
      features: [
        'Grid cybersecurity protection',
        'Physical security monitoring',
        'Resilience planning',
        'Threat detection systems',
        'Incident response coordination'
      ]
    },
    {
      title: 'Renewable Energy Optimization',
      description: 'Intelligence systems for solar, wind, and hydro power generation optimization.',
      icon: Wind,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Solar farm performance analytics',
        'Wind turbine optimization',
        'Energy production forecasting',
        'Maintenance scheduling',
        'Grid integration intelligence'
      ]
    },
    {
      title: 'Pipeline & Distribution Security',
      description: 'Comprehensive protection for oil, gas, and product pipelines.',
      icon: Droplets,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Pipeline leak detection',
        'Third-party interference monitoring',
        'Corrosion monitoring systems',
        'Pressure anomaly detection',
        'Security patrol optimization'
      ]
    },
    {
      title: 'Energy Trading & Market Intelligence',
      description: 'Advanced analytics for energy markets, trading, and price optimization.',
      icon: BarChart3,
      color: 'from-purple-500 to-violet-500',
      features: [
        'Market price forecasting',
        'Trading pattern analysis',
        'Supply chain optimization',
        'Risk assessment models',
        'Compliance monitoring'
      ]
    },
    {
      title: 'Critical Facility Protection',
      description: 'Security systems for power plants, substations, and energy facilities.',
      icon: Factory,
      color: 'from-red-500 to-orange-500',
      features: [
        'Perimeter security systems',
        'Access control management',
        'Surveillance integration',
        'Emergency response coordination',
        'Asset protection'
      ]
    }
  ]

  const clients = [
    {
      name: 'Energy Producers',
      icon: Zap,
      description: 'Power generation optimization'
    },
    {
      name: 'Utilities & Grid Operators',
      icon: CloudLightning,
      description: 'Grid security and management'
    },
    {
      name: 'Oil & Gas Companies',
      icon: Droplets,
      description: 'Pipeline and facility security'
    },
    {
      name: 'Government & Regulators',
      icon: Building,
      description: 'Energy infrastructure oversight'
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
        <div className="absolute inset-0 bg-amber-900 z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                Energy Solutions
              </span>
              <h1 className="font-michroma text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Energy Industry Solutions
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Pleiades Systems delivers advanced, intelligence-driven solutions designed to secure, 
                modernize, and optimize critical energy infrastructure.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Operating at the intersection of energy, security, and advanced technology, we support 
                energy producers, utilities, regulators, and governments in addressing operational risk, 
                infrastructure vulnerability, and performance inefficiencies across the energy value chain.
              </p>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1515344905723-babc01aac23d?w=600&auto=format&fit=crop&q=60"
                alt="Modern energy control center with grid monitoring displays"
                fill="true"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section - Asymmetric Layout */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-michroma text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
                Core Capabilities
              </h2>
              <p className="text-lg text-[#6E7A86] max-w-3xl mx-auto leading-relaxed">
                Comprehensive energy intelligence and security solutions for modern infrastructure
              </p>
            </div>

            {/* Asymmetric Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Large Card with Image - Spans 2 columns */}
              <div className="lg:col-span-2 relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group">
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=60"
                      alt="Renewable energy wind turbines"
                      fill="true"
                      className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${solutions[0].color} rounded-xl flex items-center justify-center`}>
                        <Activity className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-michroma text-xl font-semibold text-[#0B1C2D]">
                        {solutions[0].title}
                      </h3>
                    </div>
                    <p className="text-[#6E7A86] mb-4">{solutions[0].description}</p>
                    <div className="space-y-2">
                      {solutions[0].features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical Card */}
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className={`relative h-12 bg-gradient-to-r ${solutions[1].color}`}>
                  <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <Shield className={`w-6 h-6 ${solutions[1].color.replace('from-', 'text-').split(' ')[0]}`} />
                  </div>
                </div>
                <div className="pt-10 p-6">
                  <h3 className="font-michroma text-lg font-semibold text-[#0B1C2D] mb-3">
                    {solutions[1].title}
                  </h3>
                  <p className="text-[#6E7A86] text-sm mb-4">
                    {solutions[1].description}
                  </p>
                  <div className="space-y-2">
                    {solutions[1].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1 h-1 bg-[#6E7A86] rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Three Column Cards */}
              {solutions.slice(2, 5).map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div
                    key={index}
                    className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
                  >
                    <div className={`relative h-12 bg-gradient-to-r ${solution.color}`}>
                      <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${solution.color.replace('from-', 'text-').split(' ')[0]}`} />
                      </div>
                    </div>
                    <div className="pt-10 p-6">
                      <h3 className="font-michroma text-lg font-semibold text-[#0B1C2D] mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-[#6E7A86] text-sm mb-3">
                        {solution.description}
                      </p>
                      <div className="space-y-1">
                        {solution.features.slice(0, 3).map((feature, idx) => (
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

              {/* Last Card - Full Width */}
              <div className="lg:col-span-3 relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className={`relative h-12 bg-gradient-to-r ${solutions[5].color}`}>
                  <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <Factory className={`w-6 h-6 ${solutions[5].color.replace('from-', 'text-').split(' ')[0]}`} />
                  </div>
                </div>
                <div className="pt-10 p-6 md:flex md:gap-8">
                  <div className="md:flex-1">
                    <h3 className="font-michroma text-xl font-semibold text-[#0B1C2D] mb-3">
                      {solutions[5].title}
                    </h3>
                    <p className="text-[#6E7A86] mb-4">
                      {solutions[5].description}
                    </p>
                  </div>
                  <div className="md:flex-1 grid grid-cols-2 gap-2">
                    {solutions[5].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-[#6E7A86] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-amber-900 to-yellow-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-michroma text-3xl md:text-4xl font-bold text-white mb-6">
                Serving Energy Leaders
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                Trusted by leading energy organizations and government regulators worldwide
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

            {/* Benefits Section */}
            <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-michroma text-2xl font-semibold text-white">
                      Infrastructure Protection
                    </h3>
                  </div>
                  <p className="text-white/90 mb-6">
                    Our systems provide real-time visibility, anomaly detection, and predictive maintenance 
                    to prevent failures, optimize performance, and secure critical energy infrastructure 
                    against physical and cyber threats.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-white/90">Prevent infrastructure failures</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-white/90">Optimize energy performance</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-white/90">Secure against cyber threats</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                      <div className="text-white/80 text-sm">Uptime Guarantee</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">50%</div>
                      <div className="text-white/80 text-sm">Faster Threat Detection</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">30%</div>
                      <div className="text-white/80 text-sm">Maintenance Cost Reduction</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">24/7</div>
                      <div className="text-white/80 text-sm">Security Monitoring</div>
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
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-8 lg:p-12 border border-amber-100">
              <h3 className="font-michroma text-2xl md:text-3xl font-bold text-amber-900 mb-6">
                Secure Your Energy Infrastructure
              </h3>
              <p className="text-lg text-amber-800 mb-8 max-w-2xl mx-auto">
                Discover how our intelligence-driven energy solutions can protect, optimize, and 
                modernize your critical infrastructure for the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="font-michroma bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-3.5 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:-translate-y-1">
                  Request Energy Assessment
                </button>
                <button className="font-michroma border-2 border-amber-600 text-amber-600 px-8 py-3.5 rounded-full text-lg font-medium hover:bg-amber-600 hover:text-white transition-all duration-300">
                  Download Solutions Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnergyPage