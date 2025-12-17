const Capabilities = () => {
  const capabilities = [
    {
      title: 'Artificial Intelligence & Anomaly Detection',
      description: 'Advanced AI systems for real-time pattern recognition and threat identification.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Unmanned Aerial Systems (ISR Drones)',
      description: 'Military-grade reconnaissance platforms for surveillance and operational awareness.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
        </svg>
      ),
      color: 'from-emerald-500 to-teal-400',
      bgColor: 'bg-emerald-500/10'
    },
    {
      title: 'Threat & IED Detection Technologies',
      description: 'Multi-sensor systems designed to detect and neutralize explosive threats.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L3.282 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      color: 'from-amber-500 to-yellow-400',
      bgColor: 'bg-amber-500/10'
    },
    {
      title: 'Border & Perimeter Surveillance Systems',
      description: 'Comprehensive security solutions for territorial and infrastructure protection.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-purple-500 to-violet-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Advanced Security Databases & Intelligence Platforms',
      description: 'Centralized intelligence systems for secure data collection and analysis.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      color: 'from-indigo-500 to-blue-400',
      bgColor: 'bg-indigo-500/10'
    },
    {
      title: 'Defence Research & Prototyping',
      description: 'Indigenous technology development tailored to local security realities.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: 'from-rose-500 to-pink-400',
      bgColor: 'bg-rose-500/10'
    },
  ]

  return (
    <section id="capabilities" className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background Pattern - White Theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230B1C2D' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
        </div>
        
        {/* Decorative accents */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#0B1C2D]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#6E7A86]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#0B1C2D] rounded-full text-white text-sm font-medium mb-4">
              What We Deliver
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C2D] mb-6 font-michroma">
              Core Capabilities
            </h2>
            <p className="text-lg md:text-xl text-[#6E7A86] max-w-3xl mx-auto leading-relaxed">
              Comprehensive defence technology solutions engineered for modern security challenges.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${capability.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`bg-gradient-to-br ${capability.color} p-3 rounded-xl`}>
                      <div className="text-white">
                        {capability.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-michroma text-xl font-semibold text-[#0B1C2D] mb-4 leading-tight">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-[#6E7A86] leading-relaxed mb-6">
                  {capability.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center">
                  <span className={`text-sm font-medium bg-gradient-to-r ${capability.color} bg-clip-text text-transparent mr-2`}>
                    Learn more
                  </span>
                  <svg className={`w-4 h-4 bg-gradient-to-r ${capability.color} bg-clip-text text-transparent`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r ${capability.color} transition-all duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="mt-20 bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold font-michroma mb-2">50+</div>
                <div className="text-gray-300 font-medium">Active Projects</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold font-michroma mb-2">15+</div>
                <div className="text-gray-300 font-medium">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold font-michroma mb-2">100%</div>
                <div className="text-gray-300 font-medium">Mission Success</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-lg text-[#6E7A86] mb-8 max-w-2xl mx-auto">
              Ready to enhance your security capabilities with cutting-edge defence technology?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="font-michroma bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] text-white px-8 py-3.5 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-[#6E7A86]/25 transition-all duration-300 hover:-translate-y-1">
                Request a Demo
              </button>
              <button className="font-michroma border-2 border-[#0B1C2D] text-[#0B1C2D] px-8 py-3.5 rounded-full text-lg font-medium hover:bg-[#0B1C2D] hover:text-white transition-all duration-300">
                Download Capabilities Deck
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Capabilities