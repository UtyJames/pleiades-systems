'use client'

const Hero = () => {
  const capabilities = [
    {
      title: 'National Security',
      description: 'Comprehensive defence systems for national protection and resilience',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'AI Systems',
      description: 'Advanced artificial intelligence for autonomous defence solutions',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: 'Surveillance',
      description: 'Advanced monitoring and reconnaissance systems',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Intelligence',
      description: 'Data analytics and intelligence database integration',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ]

  // SVG pattern encoded properly
  const svgPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image - You can replace this with your actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C2D] via-[#1a2c3d] to-[#2a3c4d]">
          {/* Placeholder for defense/tech pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0"
              style={{ backgroundImage: `url("${svgPattern}")` }}
            ></div>
          </div>
        </div>
        
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2D]/90 via-[#0B1C2D]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-transparent to-transparent" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[size:50px_50px] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white font-michroma">
                Engineering Advanced Systems for
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#CBD5E0] to-[#6E7A86] font-michroma mt-2">
                National Defence & Security
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-3xl mb-12">
            <p className="text-lg md:text-xl text-[#CBD5E0] leading-relaxed">
              Pleiades Systems develops cutting-edge defence technologies integrating AI, 
              unmanned platforms, threat detection, and intelligence databases to enhance 
              national resilience and security.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="font-michroma bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] text-white px-8 py-3.5 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-[#6E7A86]/25 transition-all duration-300 hover:-translate-y-1">
              Explore Solutions
            </button>
            <button className="font-michroma border-2 border-[#6E7A86] text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-[#6E7A86]/10 transition-all duration-300">
              Contact Our Team
            </button>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-16 border-t border-[#6E7A86]/20">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group relative bg-[#0B1C2D]/50 backdrop-blur-sm border border-[#6E7A86]/20 rounded-xl p-6 hover:border-[#6E7A86]/40 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B1C2D] to-[#6E7A86] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {capability.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-michroma text-xl font-semibold mb-2 text-white">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-[#CBD5E0] text-sm leading-relaxed">
                  {capability.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex justify-center">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-[#6E7A86] rounded-full flex justify-center">
                <div className="w-1 h-3 bg-[#6E7A86] rounded-full mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-[#0B1C2D]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#6E7A86]/10 rounded-full blur-3xl" />
    </section>
  )
}

export default Hero