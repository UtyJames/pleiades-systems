'use client'

const Research = () => {
  const innovationItems = [
    {
      title: "Indigenous Development",
      description: "Creating locally-tailored defence solutions that address specific regional security challenges.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Precision Engineering",
      description: "Developing high-precision systems that meet international defence standards.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Global Standards",
      description: "Ensuring all technologies comply with international security and defence protocols.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Strategic Partnerships",
      description: "Collaborating with government agencies and international defence organizations.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ]

  const partners = [
    "Ministries of Defence",
    "Armed Forces",
    "Intelligence Agencies",
    "National Security Institutions"
  ]

  const engagementModels = [
    {
      title: "Pilot Programs",
      description: "Test and validate solutions in controlled environments"
    },
    {
      title: "Research Partnerships",
      description: "Joint development of innovative defence technologies"
    },
    {
      title: "System Deployment",
      description: "Full-scale implementation and integration"
    }
  ]

  return (
    <section id="research" className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50">
          {/* Blueprint pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230B1C2D' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6E7A86]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B1C2D]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#0B1C2D]/10 rounded-full text-[#0B1C2D] text-sm font-medium mb-4">
              Innovation First
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C2D] mb-6 font-michroma">
              Research & Innovation
            </h2>
            <p className="text-lg md:text-xl text-[#6E7A86] max-w-3xl mx-auto leading-relaxed">
              Pleiades Systems operates with a research-first approach, developing indigenous 
              defence technologies tailored to local security realities while meeting international standards.
            </p>
          </div>

          {/* Innovation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {innovationItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:border-[#6E7A86]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B1C2D] to-[#6E7A86] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-michroma text-lg font-semibold text-[#0B1C2D] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#6E7A86] text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Strategic Engagement Section */}
          <div className="bg-gradient-to-r from-[#0B1C2D] to-[#1a2c3d] rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
              {/* Left Content */}
              <div className="p-8 lg:p-12">
                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                  Strategic Engagement
                </span>
                <h3 className="font-michroma text-2xl md:text-3xl font-bold text-white mb-6">
                  Government & Strategic Partners
                </h3>
                <p className="text-[#CBD5E0] mb-8 leading-relaxed">
                  We collaborate with key stakeholders in national security to deliver comprehensive defence solutions.
                </p>

                {/* Partner List */}
                <div className="space-y-4 mb-8">
                  {partners.map((partner, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#6E7A86] rounded-full mr-3"></div>
                      <span className="text-white font-medium">{partner}</span>
                    </div>
                  ))}
                </div>

                {/* Engagement Models */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="font-michroma text-lg font-semibold text-white mb-4">
                    Engagement Models
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {engagementModels.map((model, index) => (
                      <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                        <h5 className="font-michroma text-sm font-semibold text-white mb-1">
                          {model.title}
                        </h5>
                        <p className="text-[#CBD5E0] text-xs">
                          {model.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Content - Visual */}
              <div className="relative bg-gradient-to-br from-[#6E7A86] to-[#0B1C2D] p-8 lg:p-12 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Network Visualization */}
                  <div className="relative h-64">
                    {/* Central Node */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <span className="font-michroma text-[#0B1C2D] font-bold">PS</span>
                        </div>
                      </div>
                    </div>

                    {/* Connecting Lines */}
                    <div className="absolute inset-0">
                      {[0, 90, 180, 270].map((angle) => (
                        <div
                          key={angle}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          style={{ transform: `rotate(${angle}deg) translateX(120px)` }}
                        >
                          <div className="w-16 h-0.5 bg-white/30"></div>
                          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Outer Nodes */}
                    <div className="absolute top-8 left-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </div>

                    <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>

                    <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>

                    <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-2"></div>
                      <span className="text-white text-sm">Strategic Partner</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-white/30 rounded-full mr-2"></div>
                      <span className="text-white text-sm">Active Connection</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="text-4xl font-bold text-[#0B1C2D] mb-2 font-michroma">15+</div>
              <div className="text-[#6E7A86] font-medium">Active Research Projects</div>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] mx-auto"></div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="text-4xl font-bold text-[#0B1C2D] mb-2 font-michroma">25+</div>
              <div className="text-[#6E7A86] font-medium">Patents & Innovations</div>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] mx-auto"></div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="text-4xl font-bold text-[#0B1C2D] mb-2 font-michroma">10+</div>
              <div className="text-[#6E7A86] font-medium">Years of R&D</div>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research