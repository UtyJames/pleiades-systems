'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  Radar, 
  Cpu, 
  Shield, 
  BarChart3, 
  Network, 
  ShieldCheck,
  ArrowLeft,
  Building,
  Car,
  Truck,
  TrafficCone,
  AlertTriangle,
  Users
} from 'lucide-react'

const AutomobilePage = () => {
  const solutions = [
    {
      title: 'Intelligent Vehicle Awareness & Sensing',
      description: 'Fusion of multiple sensors (camera, radar, LiDAR, thermal) for real-time detection of obstacles, pedestrians, and objects.',
      features: [
        'Multi-sensor fusion (camera, radar, LiDAR, thermal)',
        'Real-time obstacle and pedestrian detection',
        'Low visibility and adverse condition perception',
        'Autonomous decision support systems',
        'Collision avoidance technology'
      ],
      icon: Radar,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI-Powered Autonomy & Driver Assistance',
      description: 'Advanced Driver Assistance Systems (ADAS) with lane detection, traffic sign recognition, and driver behavior analysis.',
      features: [
        'Lane detection and keeping',
        'Traffic sign and signal recognition',
        'Road condition analysis',
        'Driver fatigue and distraction monitoring',
        'Adaptive cruise control'
      ],
      icon: Cpu,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Vehicle Security & Anti-Tampering',
      description: 'Comprehensive security systems protecting against theft, tampering, and cyber-physical intrusions.',
      features: [
        'Theft and intrusion detection',
        'CAN-bus monitoring systems',
        'Secure ECU protection',
        'Tamper-evident hardware',
        'Real-time security alerts'
      ],
      icon: Shield,
      color: 'from-amber-500 to-yellow-500'
    },
    {
      title: 'Predictive Analytics & Fleet Intelligence',
      description: 'Real-time fleet monitoring and analytics for predictive maintenance and operational optimization.',
      features: [
        'Real-time fleet monitoring',
        'Predictive maintenance alerts',
        'Driver behavior analysis',
        'Fuel efficiency optimization',
        'Route optimization'
      ],
      icon: BarChart3,
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Smart & Connected Mobility Systems',
      description: 'Secure telematics platforms for V2V, V2I communication and urban mobility intelligence.',
      features: [
        'Vehicle-to-Vehicle (V2V) communication',
        'Vehicle-to-Infrastructure (V2I) systems',
        'Urban traffic management',
        'Smart city integration',
        'Secure data platforms'
      ],
      icon: Network,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Defense-Grade Automotive Engineering',
      description: 'Rugged, reliable systems engineered for demanding and hazardous operating environments.',
      features: [
        'Ruggedized system architecture',
        'Hazardous environment operation',
        'Secure and scalable designs',
        'Long-lifecycle support',
        'Military-grade reliability'
      ],
      icon: ShieldCheck,
      color: 'from-rose-500 to-pink-500'
    }
  ]

  const clients = [
    {
      name: 'Government & Security Programs',
      icon: Building,
      description: 'Critical vehicle protection and intelligence systems'
    },
    {
      name: 'Automobile OEMs',
      icon: Car,
      description: 'Advanced safety and autonomy integration'
    },
    {
      name: 'Fleet Operators',
      icon: Truck,
      description: 'Fleet intelligence and operational optimization'
    },
    {
      name: 'Smart Mobility & Transport Authorities',
      icon: TrafficCone,
      description: 'Urban mobility and traffic management systems'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
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
        <div className="absolute inset-0 bg-[#0B1C2D]  z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                Automotive Solutions
              </span>
              <h1 className="font-michroma text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Automobile Industry
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                We supply cutting-edge, intelligence-driven technologies for the contemporary automotive industry. 
                By utilizing AI, sensor fusion, and defense-grade engineering principles, our solutions improve 
                vehicle safety, security, situational awareness, and operational efficiency.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Our systems are intended for government initiatives, fleet managers, automakers, and smart mobility 
                developers looking for dependable, future-ready vehicle intelligence.
              </p>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=1170&auto=format&fit=crop"
                alt="Advanced automotive sensor systems integration"
                fill="true"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section with Image */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-michroma text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
                Automotive Technology Solutions
              </h2>
              <p className="text-lg text-[#6E7A86] max-w-3xl mx-auto leading-relaxed">
                Comprehensive intelligence systems designed for the future of automotive safety and efficiency
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {/* Large Featured Card with Image */}
              <div className="lg:col-span-2 lg:row-span-2 relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group">
                <div className="relative h-[400px] lg:h-full">
                  <img
                    src="https://images.unsplash.com/photo-1673099873446-f05ed818c9b5?q=80&w=1170&auto=format&fit=crop"
                    alt="Autonomous vehicle sensor technology"
                    fil="true"
                    className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-[#0B1C2D]/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Radar className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-michroma text-2xl font-semibold text-white">
                        {solutions[0].title}
                      </h3>
                    </div>
                    <p className="text-white/90 mb-4">{solutions[0].description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {solutions[0].features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span className="text-sm text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Smaller Cards */}
              {solutions.slice(1, 5).map((solution, index) => {
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
            </div>

            {/* Last Solution Card - Full Width */}
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className={`relative h-12 bg-gradient-to-r ${solutions[5].color}`}>
                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <ShieldCheck className={`w-6 h-6 ${solutions[5].color.replace('from-', 'text-').split(' ')[0]}`} />
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
      </section>

      {/* Client Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-michroma text-3xl md:text-4xl font-bold text-white mb-6">
                The People We Serve
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                Our automotive solutions are trusted by industry leaders and government programs worldwide
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

            {/* Driver Analysis Section */}
            <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-michroma text-2xl font-semibold text-white">
                      Driver Behavior Analysis
                    </h3>
                  </div>
                  <p className="text-white/90 mb-6">
                    Advanced AI systems for monitoring and analyzing driver fatigue, distraction, and behavior patterns 
                    to ensure safety-critical performance in diverse settings.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-white/90">Real-time fatigue detection</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-white/90">Distraction monitoring systems</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-white/90">Behavior pattern analysis</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">95%</div>
                      <div className="text-white/80 text-sm">Fatigue Detection Accuracy</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                      <div className="text-white/80 text-sm">System Reliability</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">50ms</div>
                      <div className="text-white/80 text-sm">Response Time</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">24/7</div>
                      <div className="text-white/80 text-sm">Continuous Monitoring</div>
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
            <div className="bg-gradient-to-r from-[#0B1C2D]/5 to-[#6E7A86]/5 rounded-3xl p-8 lg:p-12">
              <h3 className="font-michroma text-2xl md:text-3xl font-bold text-[#0B1C2D] mb-6">
                Ready to Transform Your Automotive Operations?
              </h3>
              <p className="text-lg text-[#6E7A86] mb-8 max-w-2xl mx-auto">
                Discover how our defense-grade automotive intelligence systems can enhance safety, 
                security, and efficiency for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="font-michroma bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] text-white px-8 py-3.5 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-[#6E7A86]/25 transition-all duration-300 hover:-translate-y-1">
                  Request Automotive Demo
                </button>
                <button className="font-michroma border-2 border-[#0B1C2D] text-[#0B1C2D] px-8 py-3.5 rounded-full text-lg font-medium hover:bg-[#0B1C2D] hover:text-white transition-all duration-300">
                  Download Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AutomobilePage