'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft,
  Building,
  BarChart3,
  Shield,
  Bitcoin,
  Network,
  CreditCard,
  Users,
  FileText,
  Eye
} from 'lucide-react'

const FinancialPage = () => {
  const solutions = [
    {
      title: 'Financial Intelligence & Risk Analytics',
      description: 'Real-time monitoring of transactions, behaviors, and systemic risk using advanced AI and anomaly detection.',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Real-time transaction monitoring',
        'Behavioral pattern analysis',
        'Systemic risk assessment',
        'AI-powered anomaly detection',
        'Predictive risk modeling'
      ]
    },
    {
      title: 'Anti-Money Laundering & Financial Crime Prevention',
      description: 'Automated AML, KYC, and CFT systems with network analysis to uncover fraud rings and illicit finance.',
      icon: Shield,
      color: 'from-emerald-500 to-teal-500',
      features: [
        'Automated AML compliance',
        'KYC and customer due diligence',
        'Fraud ring detection',
        'Network relationship analysis',
        'Transaction pattern recognition'
      ]
    },
    {
      title: 'Cryptocurrency & Digital Asset Intelligence',
      description: 'Advanced monitoring and analysis solutions for cryptocurrency platforms and digital asset transactions.',
      icon: Bitcoin,
      color: 'from-amber-500 to-yellow-500',
      features: [
        'Cryptocurrency transaction monitoring',
        'Wallet address analysis',
        'Blockchain intelligence',
        'Digital asset compliance',
        'Crypto fraud detection'
      ]
    },
    {
      title: 'Secure Financial Networks',
      description: 'Protected financial communication networks and secure transaction processing systems.',
      icon: Network,
      color: 'from-purple-500 to-violet-500',
      features: [
        'Secure financial messaging',
        'Encrypted transaction networks',
        'Network intrusion detection',
        'Real-time threat monitoring',
        'Secure API integrations'
      ]
    },
    {
      title: 'Payment Security Systems',
      description: 'Advanced protection for digital payments, card transactions, and mobile payment platforms.',
      icon: CreditCard,
      color: 'from-indigo-500 to-blue-500',
      features: [
        'Payment fraud detection',
        'Card transaction monitoring',
        'Mobile payment security',
        'Real-time authorization',
        'Payment gateway protection'
      ]
    },
    {
      title: 'Regulatory Compliance Automation',
      description: 'Automated compliance systems for financial regulations and reporting requirements.',
      icon: FileText,
      color: 'from-rose-500 to-pink-500',
      features: [
        'Automated regulatory reporting',
        'Compliance monitoring',
        'Audit trail generation',
        'Regulatory change management',
        'Compliance dashboard'
      ]
    }
  ]

  const clients = [
    {
      name: 'Banks & Financial Institutions',
      icon: Building,
      description: 'Enterprise-grade financial security'
    },
    {
      name: 'Fintech Companies',
      icon: Eye,
      description: 'Innovative financial technology protection'
    },
    {
      name: 'Cryptocurrency Platforms',
      icon: Bitcoin,
      description: 'Digital asset security and compliance'
    },
    {
      name: 'Government & Regulators',
      icon: Users,
      description: 'Financial oversight and monitoring'
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
        <div className="absolute inset-0 bg-green-900 z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                Financial Security
              </span>
              <h1 className="font-michroma text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Financial Sector Solutions
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                We deliver intelligence-driven, security-first technologies that protect financial systems, 
                prevent financial crime, and unlock deep insight into customer and transaction behavior.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Our solutions serve banks, fintechs, cryptocurrency platforms, regulators, and government 
                financial institutions operating in high-risk, high-compliance environments.
              </p>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1728022873385-1b48bbc41ecc?w=600&auto=format&fit=crop&q=60"
                alt="Advanced financial security and analytics dashboard"
                fill="true"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver Section - Mixed Grid Layout */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-michroma text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
                What We Deliver
              </h2>
              <p className="text-lg text-[#6E7A86] max-w-3xl mx-auto leading-relaxed">
                Comprehensive financial security and intelligence solutions for modern financial institutions
              </p>
            </div>

            {/* Staggered Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
              {/* First Row - 2 cards */}
              <div className="lg:col-span-7 relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className={`relative h-12 bg-gradient-to-r ${solutions[0].color}`}>
                  <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <BarChart3 className={`w-6 h-6 ${solutions[0].color.replace('from-', 'text-').split(' ')[0]}`} />
                  </div>
                </div>
                <div className="pt-10 p-6">
                  <h3 className="font-michroma text-xl font-semibold text-[#0B1C2D] mb-3">
                    {solutions[0].title}
                  </h3>
                  <p className="text-[#6E7A86] mb-4">
                    {solutions[0].description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {solutions[0].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-[#6E7A86] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className={`relative h-12 bg-gradient-to-r ${solutions[1].color}`}>
                  <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <Shield className={`w-6 h-6 ${solutions[1].color.replace('from-', 'text-').split(' ')[0]}`} />
                  </div>
                </div>
                <div className="pt-10 p-6">
                  <h3 className="font-michroma text-lg font-semibold text-[#0B1C2D] mb-2">
                    {solutions[1].title}
                  </h3>
                  <p className="text-[#6E7A86] text-sm mb-3">
                    {solutions[1].description}
                  </p>
                  <div className="space-y-1">
                    {solutions[1].features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1 h-1 bg-[#6E7A86] rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Second Row - 3 cards */}
              {solutions.slice(2, 5).map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div
                    key={index}
                    className="lg:col-span-4 relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
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
              <div className="lg:col-span-12 relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className={`relative h-12 bg-gradient-to-r ${solutions[5].color}`}>
                  <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <FileText className={`w-6 h-6 ${solutions[5].color.replace('from-', 'text-').split(' ')[0]}`} />
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-emerald-900 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-michroma text-3xl md:text-4xl font-bold text-white mb-6">
                Serving Financial Leaders
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                Trusted by leading financial institutions and regulatory bodies worldwide
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

            {/* Stats Section */}
            <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-white/80 text-sm">Transaction Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50ms</div>
                  <div className="text-white/80 text-sm">Fraud Detection Speed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-white/80 text-sm">Regulatory Compliance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/80 text-sm">Security Monitoring</div>
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
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12 border border-emerald-100">
              <h3 className="font-michroma text-2xl md:text-3xl font-bold text-emerald-900 mb-6">
                Secure Your Financial Operations
              </h3>
              <p className="text-lg text-emerald-800 mb-8 max-w-2xl mx-auto">
                Discover how our intelligence-driven financial security solutions can protect your institution 
                while ensuring regulatory compliance and operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="font-michroma bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3.5 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1">
                  Request Financial Demo
                </button>
                <button className="font-michroma border-2 border-emerald-600 text-emerald-600 px-8 py-3.5 rounded-full text-lg font-medium hover:bg-emerald-600 hover:text-white transition-all duration-300">
                  Download Compliance Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FinancialPage