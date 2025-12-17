const About = () => {
  const stats = [
    {
      label: 'AI',
      title: 'Advanced Intelligence',
      description: 'Cutting-edge artificial intelligence for predictive threat analysis and autonomous response systems.',
    },
    {
      label: 'ISR',
      title: 'Surveillance Systems',
      description: 'Comprehensive intelligence, surveillance, and reconnaissance solutions for real-time situational awareness.',
    },
    {
      label: 'R&D',
      title: 'Research First',
      description: 'Continuous research and development to stay ahead of evolving security threats and technological advancements.',
    },
    {
      label: 'GOV',
      title: 'Strategic Partners',
      description: 'Collaborative partnerships with government agencies and defense organizations worldwide.',
    },
  ]

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden" id="about">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0B1C2D]">
          {/* Subtle geometric pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%236E7A86' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '400px'
            }}></div>
          </div>
        </div>
        {/* Gradient accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#6E7A86]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B1C2D]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#6E7A86]/10 rounded-full text-[#6E7A86] text-sm font-medium mb-4">
              About Pleiades Systems
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-michroma">
              Who We Are
            </h2>
            <p className="text-lg md:text-xl text-[#CBD5E0] max-w-3xl mx-auto leading-relaxed">
              Pleiades Systems is a technology-driven defence research and systems integration 
              company focused on addressing modern security challenges through innovation, 
              intelligence, and precision engineering.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Mission */}
            <div className="bg-[#0B1C2D]/50 backdrop-blur-sm border border-[#6E7A86]/20 rounded-2xl p-8 lg:p-10 hover:border-[#6E7A86]/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0B1C2D] to-[#6E7A86] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-michroma text-2xl font-semibold text-white">Our Mission</h3>
              </div>
              <p className="text-[#CBD5E0] text-lg leading-relaxed">
                To equip nations with advanced, reliable, and scalable security systems that safeguard 
                lives, infrastructure, and sovereignty.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#0B1C2D]/50 backdrop-blur-sm border border-[#6E7A86]/20 rounded-2xl p-8 lg:p-10 hover:border-[#6E7A86]/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0B1C2D] to-[#6E7A86] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-michroma text-2xl font-semibold text-white">Our Vision</h3>
              </div>
              <p className="text-[#CBD5E0] text-lg leading-relaxed">
                To become a trusted strategic partner in national defence transformation across 
                Africa and beyond.
              </p>
            </div>
          </div>

          {/* Stats/Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-[#0B1C2D]/30 backdrop-blur-sm border border-[#6E7A86]/20 rounded-xl p-6 hover:border-[#6E7A86]/40 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Label Badge */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2">
                    <span className="font-michroma text-2xl font-bold text-white">
                      {stat.label}
                    </span>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86]"></div>
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-michroma text-xl font-semibold text-white mb-3">
                  {stat.title}
                </h4>

                {/* Description */}
                <p className="text-[#CBD5E0] text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 text-[#6E7A86]">
              <div className="w-12 h-0.5 bg-[#6E7A86]/30"></div>
              <span className="text-sm font-medium">Innovating for a Secure Future</span>
              <div className="w-12 h-0.5 bg-[#6E7A86]/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About