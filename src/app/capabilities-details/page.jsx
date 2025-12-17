'use client'

import Link from 'next/link'
import { useState } from 'react'

const CapabilitiesDetails = () => {
  const capabilities = [
    {
      id: 'uas',
      number: '1',
      title: 'Unmanned Aerial Systems (UAS) & ISR Platforms',
      description: 'Pleiades Systems develops and researches military-grade unmanned aerial systems designed for intelligence, surveillance, and reconnaissance (ISR) operations in diverse operational environments.',
      points: [
        'Long-endurance ISR drone platforms',
        'Day and night operations using electro-optical (EO) and infrared (IR) payloads',
        'Persistent aerial surveillance for borders, forests, deserts, coastlines, and urban terrain',
        'Low-altitude and medium-altitude operational profiles',
        'Modular payload architecture for mission-specific deployment'
      ],
      outcome: 'These systems are designed to enhance situational awareness, early threat detection, and force protection.'
    },
    {
      id: 'ai-threat',
      number: '2',
      title: 'Artificial Intelligence–Driven Threat Detection Systems',
      description: 'The company designs AI-powered security intelligence systems for real-time threat identification and analysis.',
      points: [
        'AI-based anomaly detection for abnormal movement, behavior, and activity',
        'Automated recognition of suspicious human, vehicular, and convoy patterns',
        'Real-time alerts based on deviation from established security baselines',
        'Continuous learning models for evolving threat environments'
      ],
      outcome: 'These systems support early warning, risk mitigation, and rapid response decision-making.'
    },
    {
      id: 'computer-vision',
      number: '3',
      title: 'Computer Vision & Automated Recognition Technologies',
      description: 'Advanced computer vision research supports tactical and strategic security operations.',
      points: [
        'Facial recognition (research-grade, policy-controlled deployment)',
        'Weapon and object recognition',
        'Vehicle identification and classification',
        'Scene and environment understanding for operational awareness'
      ],
      outcome: 'All solutions are designed to operate within controlled authorisation frameworks and national security regulations.'
    },
    {
      id: 'ied-detection',
      number: '4',
      title: 'Counter-IED & Explosive Threat Detection Technologies',
      description: 'Pleiades Systems conducts research into stand-off and remote detection of improvised explosive devices (IEDs).',
      points: [
        'Drone-based pre-route and area scanning',
        'Multisensor fusion for explosive threat identification including:',
        'Visual and infrared anomaly detection',
        'Electromagnetic disturbance sensing',
        'Thermal and environmental irregularity analysis',
        'Risk-zone mapping prior to troop or convoy movement'
      ],
      outcome: 'These systems are designed to reduce casualties, enhance operational safety, and improve mission survivability.'
    },
    {
      id: 'border-security',
      number: '5',
      title: 'Border Security & Anti-Insurgency Surveillance Systems',
      description: 'The company develops integrated border and territorial security solutions combining aerial, ground, and AI-based systems.',
      points: [
        'Persistent border surveillance platforms',
        'Detection of illegal crossings, smuggling routes, and infiltration paths',
        'Insurgency movement tracking and hotspot identification',
        'Terrain-based risk assessment and predictive threat modelling',
        'Forest and rural area surveillance for anti-banditry operations'
      ],
      outcome: 'These systems support territorial integrity and internal security operations.'
    },
    {
      id: 'intelligence-databases',
      number: '6',
      title: 'National Defence Intelligence Databases & Analytics Platforms',
      description: 'Pleiades Systems designs secure, centralised defence intelligence systems for data aggregation and analysis.',
      points: [
        'Secure ingestion of data from drones, sensors, field units, and reports',
        'AI-assisted intelligence correlation and threat prioritisation',
        'Historical threat and incident archiving',
        'Pattern recognition and trend analysis',
        'Decision-support dashboards for commanders and policymakers'
      ],
      outcome: 'These platforms enhance command-level intelligence, planning, and strategic foresight.'
    },
    {
      id: 'command-control',
      number: '7',
      title: 'Command, Control & Decision-Support Systems (C2)',
      description: 'The company provides research and development support for command and control (C2) environments.',
      points: [
        'Real-time operational dashboards',
        'Live ISR feed integration',
        'Demonstrated threat visualisation and alerts',
        'Mission planning and scenario simulation tools',
        'Resource and asset allocation modelling'
      ],
      outcome: 'These systems improve operational coordination and command effectiveness.'
    },
    {
      id: 'counter-terrorism',
      number: '8',
      title: 'Counter-Terrorism & Internal Security Applications',
      description: 'Technologies are designed for counter-terrorism, homeland security, and public safety missions.',
      points: [
        'Urban security surveillance',
        'Protection of critical national infrastructure:',
        'Airports',
        'Power and energy facilities',
        'Oil and gas installations',
        'Telecommunications assets',
        'Soft-target protection for:',
        'Religious centers',
        'Educational institutions',
        'Public markets and transport hubs'
      ],
      outcome: 'The focus is on early detection, deterrence, and the coordination of rapid responses.'
    },
    {
      id: 'engineering-research',
      number: '9',
      title: 'Aeronautical & Defence Engineering Research',
      description: 'Pleiades Systems conducts aeronautical and defence systems research supporting indigenous capability development.',
      points: [
        'UAV airframe and structural design',
        'Flight control systems',
        'Endurance and energy efficiency optimisation',
        'Modular payload and sensor integration',
        'Advanced sensing technologies'
      ],
      outcome: 'This research underpins sovereign defence innovation and technical self-reliance.'
    },
    {
      id: 'ethical-ai',
      number: '10',
      title: 'Ethical AI, Security Governance & Sovereign Capability Development',
      description: 'All systems are designed with a focus on national sovereignty, controlled deployment, and ethical use.',
      points: [
        'Human-in-the-loop operational control',
        'Secure authorisation and access frameworks',
        'Compliance with national defence policies',
        'Reduced dependence on foreign defence technologies',
        'Indigenous development aligned with local threat realities'
      ],
      outcome: ''
    },
    {
      id: 'defence-advisory',
      number: '11',
      title: 'Defence Advisory, Research & Strategic Support',
      description: 'In addition to technical development, the company provides strategic defence consulting and advisory services.',
      points: [
        'National threat assessment and capability gap analysis',
        'Defence technology roadmap development',
        'Proof-of-concept and prototype development',
        'Executive-level briefings for defence leadership',
        'Collaboration with Ministries of Defence and security agencies'
      ],
      outcome: ''
    }
  ]

  const [activeCapability, setActiveCapability] = useState(capabilities[0])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1C2D] to-[#1a2c3d]">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#6E7A86] hover:text-white transition-colors duration-200 group"
        >
          <div className="w-8 h-8 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
              Military & National Security Applications
            </span>
            <h1 className="font-michroma text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              CORE DEFENCE TECHNOLOGY CAPABILITIES
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Capabilities List */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="font-michroma text-lg font-semibold text-white mb-6">
                  Capabilities List
                </h2>
                <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
                  {capabilities.map((cap) => (
                    <button
                      key={cap.id}
                      onClick={() => {
                        setActiveCapability(cap)
                        document.getElementById(cap.id)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                        activeCapability.id === cap.id
                          ? 'bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] text-white'
                          : 'text-[#CBD5E0] hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                          activeCapability.id === cap.id ? 'bg-white/20' : 'bg-[#0B1C2D]'
                        }`}>
                          <span className="text-sm font-bold">{cap.number}</span>
                        </div>
                        <span className="text-sm font-medium">{cap.title.split('&')[0].trim()}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {capabilities.map((cap) => (
                <div 
                  key={cap.id} 
                  id={cap.id}
                  className="mb-12 scroll-mt-24"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{cap.number}</span>
                      </div>
                      <div>
                        <h2 className="font-michroma text-2xl font-semibold text-white mb-2">
                          {cap.title}
                        </h2>
                        <p className="text-[#CBD5E0]">
                          {cap.description}
                        </p>
                      </div>
                    </div>

                    {/* Points List */}
                    <div className="mb-8">
                      <h3 className="font-michroma text-lg font-semibold text-white mb-4">
                        Capabilities include:
                      </h3>
                      <ul className="space-y-3">
                        {cap.points.map((point, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-[#6E7A86] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-[#CBD5E0]">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome */}
                    {cap.outcome && (
                      <div className="pt-6 border-t border-white/10">
                        <p className="text-[#CBD5E0] font-medium">
                          {cap.outcome}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Download Section */}
              <div className="mt-16 bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] rounded-2xl p-8 lg:p-12">
                <div className="text-center">
                  <h3 className="font-michroma text-2xl font-semibold text-white mb-4">
                    Download Complete Capabilities Document
                  </h3>
                  <p className="text-[#CBD5E0] mb-8 max-w-2xl mx-auto">
                    Get the full technical specifications, case studies, and deployment scenarios for all our defence technology capabilities.
                  </p>
                  <button className="font-michroma bg-white text-[#0B1C2D] px-8 py-3.5 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1">
                    Download PDF Document
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CapabilitiesDetails