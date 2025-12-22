'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft,
  Heart,
  Stethoscope,
  Activity,
  Shield,
  Users,
  Brain,
  BarChart3,
  AlertTriangle,
  Building,
  Eye,
  FileText,
  Network
} from 'lucide-react'

const HealthPage = () => {
  const solutions = [
    {
      title: 'Health Data Collection & Intelligence Architecture',
      description: 'End-to-end health data collection frameworks that unify information across clinical, operational, and population-level domains.',
      icon: Activity,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Secure patient and clinical data collection',
        'Hospital and laboratory data integration',
        'Standardized data pipelines',
        'Real-time data ingestion',
        'Interoperability frameworks'
      ]
    },
    {
      title: 'Advanced Health Data Analysis & Decision Support',
      description: 'AI-driven models to transform healthcare data into actionable insight for evidence-based decision-making.',
      icon: Brain,
      color: 'from-purple-500 to-violet-500',
      features: [
        'Population health analytics',
        'Predictive modeling for outbreaks',
        'Clinical performance analytics',
        'Resource demand forecasting',
        'Policy and planning intelligence'
      ]
    },
    {
      title: 'Disease Surveillance & Early Warning Systems',
      description: 'National disease surveillance systems to detect, track, and respond to health threats before escalation.',
      icon: AlertTriangle,
      color: 'from-red-500 to-orange-500',
      features: [
        'Infectious disease monitoring',
        'Epidemic early detection',
        'Environmental data integration',
        'Secure reporting systems',
        'Multi-agency coordination'
      ]
    },
    {
      title: 'Hospital Operations & Infrastructure Intelligence',
      description: 'Operational optimization solutions that improve reliability and resilience of healthcare facilities.',
      icon: Building,
      color: 'from-emerald-500 to-teal-500',
      features: [
        'Real-time infrastructure monitoring',
        'Predictive maintenance for medical devices',
        'Patient flow optimization',
        'Capacity management analytics',
        'Executive management dashboards'
      ]
    },
    {
      title: 'Health Security & Data Protection',
      description: 'Security architectures specifically designed for healthcare environments and sensitive patient data.',
      icon: Shield,
      color: 'from-amber-500 to-yellow-500',
      features: [
        'Healthcare cybersecurity frameworks',
        'Electronic health record protection',
        'Secure access control systems',
        'Identity management solutions',
        'Continuity of care planning'
      ]
    },
    {
      title: 'Emergency Response & Public Health Preparedness',
      description: 'Emergency preparedness and response systems for institutional and national health crises.',
      icon: Users,
      color: 'from-rose-500 to-pink-500',
      features: [
        'Situational awareness for EMS',
        'Disaster response coordination',
        'Medical supply logistics',
        'Mass-casualty event management',
        'Civil protection integration'
      ]
    }
  ]

  const clients = [
    {
      name: 'Ministries of Health',
      icon: Building,
      description: 'National health infrastructure'
    },
    {
      name: 'Public Health Agencies',
      icon: Users,
      description: 'Population health management'
    },
    {
      name: 'Hospital Networks',
      icon: Heart,
      description: 'Clinical operations optimization'
    },
    {
      name: 'Research Institutions',
      icon: Brain,
      description: 'Health research and analytics'
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
        <div className="absolute inset-0 bg-blue-900 z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                Healthcare Solutions
              </span>
              <h1 className="font-michroma text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Advanced Solutions for the Health Sector
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Securing, Optimizing, and Transforming Healthcare Through Intelligence
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Modern healthcare systems are under unprecedented strain. Pleiades Systems delivers 
                advanced, intelligence-driven solutions that strengthen healthcare systems through secure 
                data collection, advanced analytics, artificial intelligence, and resilient digital 
                infrastructure.
              </p>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1732690233982-1d4567384ea1?w=600&auto=format&fit=crop&q=60"
                alt="Modern healthcare data analytics dashboard in hospital setting"
                fill="true"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - Dynamic Bento Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-michroma text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
                Comprehensive Health Solutions
              </h2>
              <p className="text-lg text-[#6E7A86] max-w-3xl mx-auto leading-relaxed">
                End-to-end intelligence systems designed for resilient, secure, and future-ready healthcare
              </p>
            </div>

            {/* Dynamic Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {/* Large Featured Card - Spans 2 rows and 2 columns */}
              <div className="lg:col-span-3 lg:row-span-2 relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100 group">
                <div className="h-full flex flex-col">
                  <div className={`relative h-12 bg-gradient-to-r ${solutions[0].color}`}>
                    <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center z-10">
                      <Activity className={`w-6 h-6 ${solutions[0].color.replace('from-', 'text-').split(' ')[0]}`} />
                    </div>
                  </div>
                  <div className="flex-1 pt-10 p-6 flex flex-col">
                    <h3 className="font-michroma text-xl font-semibold text-[#0B1C2D] mb-3">
                      {solutions[0].title}
                    </h3>
                    <p className="text-[#6E7A86] mb-4">
                      {solutions[0].description}
                    </p>
                    <div className="mt-auto space-y-2">
                      {solutions[0].features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-[#6E7A86] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Medium Cards - Right Column */}
              {solutions.slice(1, 3).map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div
                    key={index}
                    className="lg:col-span-3 relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
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

              {/* Bottom Three Cards */}
              {solutions.slice(3, 6).map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div
                    key={index}
                    className="lg:col-span-2 relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
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
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-michroma text-3xl md:text-4xl font-bold text-white mb-6">
                Serving Healthcare Leaders
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                Trusted by healthcare organizations and government agencies worldwide
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

            {/* Why Choose Us Section */}
            <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-michroma text-2xl font-semibold text-white">
                      Why Pleiades Systems
                    </h3>
                  </div>
                  <p className="text-white/90 mb-6">
                    We bring a defence-grade, systems-engineering approach to healthcare, ensuring 
                    reliability, security, and scalability for mission-critical health systems.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-white/90">Secure, mission-critical data platforms</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-white/90">AI and analytics for complex health environments</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-white/90">End-to-end delivery and training</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-white/90">Custom solutions aligned with national priorities</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                      <div className="text-white/80 text-sm">Data Accuracy</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">50%</div>
                      <div className="text-white/80 text-sm">Faster Response Times</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">100%</div>
                      <div className="text-white/80 text-sm">Regulatory Compliance</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">24/7</div>
                      <div className="text-white/80 text-sm">System Availability</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Section */}
            <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-michroma text-xl font-semibold text-white mb-3">
                    Research, Policy & Strategic Health Planning
                  </h4>
                  <p className="text-white/90">
                    Beyond operations, Pleiades Systems enables long-term healthcare advancement through 
                    research-grade data platforms and strategic analytics, empowering governments to plan 
                    sustainably and invest intelligently in healthcare systems.
                  </p>
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
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
              <h3 className="font-michroma text-2xl md:text-3xl font-bold text-blue-900 mb-6">
                Transform Healthcare Delivery
              </h3>
              <p className="text-lg text-blue-800 mb-8 max-w-2xl mx-auto">
                Discover how our intelligence-driven healthcare solutions can protect lives, optimize 
                care delivery, and prepare your organization for future health challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="font-michroma bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3.5 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1">
                  Request Healthcare Demo
                </button>
                <button className="font-michroma border-2 border-blue-600 text-blue-600 px-8 py-3.5 rounded-full text-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Download Health Solutions Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-[#6E7A86] leading-relaxed">
              <strong className="text-[#0B1C2D]">Conclusion:</strong> Strong healthcare systems are 
              foundational to national stability, economic productivity, and public trust. Pleiades 
              Systems equips the health sector with the intelligence, security, and data-driven insight 
              required to protect lives, optimize care delivery, and prepare for future health challenges.
            </p>
            <p className="text-lg font-michroma font-bold text-[#0B1C2D] mt-4">
              Pleiades Systems — engineering intelligence for resilient, secure, and future-ready healthcare.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HealthPage