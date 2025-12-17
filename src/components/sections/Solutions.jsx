"use client"
import aiDetection from "@/assets/ai-detection.jpg";
import droneRecon from "@/assets/drone-recon.jpg";
import iedDetection from "@/assets/ied-detection.jpg";
import securityDatabase from "@/assets/security-database.jpg";


import Image from 'next/image'

// You'll need to import these images in your actual implementation
// import aiDetection from "@/assets/ai-detection.jpg";
// import droneRecon from "@/assets/drone-recon.jpg";
// import iedDetection from "@/assets/ied-detection.jpg";
// import securityDatabase from "@/assets/security-database.jpg";


const Solutions = () => {
  const solutions = [
    {
      image: aiDetection,
      title: "AI-Driven Threat Detection",
      description: "Real-time identification of abnormal patterns, insurgent movement, and hostile activities using advanced machine learning algorithms.",
      features: ["Pattern Recognition", "Behavioral Analysis", "Predictive Intelligence"],
    },
    {
      image: droneRecon,
      title: "Drone Reconnaissance Systems",
      description: "Military-grade ISR platforms for surveillance, terrain mapping, and operational awareness in complex environments.",
      features: ["Aerial Surveillance", "Terrain Mapping", "Real-time Feeds"],
    },
    {
      image: iedDetection,
      title: "Counter-IED & Explosive Detection",
      description: "Multi-sensor systems designed to detect and neutralize explosive threats before they cause harm.",
      features: ["Multi-Spectrum Sensing", "Rapid Response", "Field Deployment"],
    },
    {
      image: securityDatabase,
      title: "National Security Databases",
      description: "Centralized intelligence systems for secure data collection, analysis, and inter-agency coordination.",
      features: ["Encrypted Storage", "Cross-Agency Access", "Audit Trails"],
    },
  ]

  return (
    <section id="solutions" className="relative py-20 lg:py-32 overflow-hidden bg-[#0B1C2D]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D] to-[#1a2c3d]">
          {/* Circuit board pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '300px'
            }}></div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6E7A86]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B1C2D]/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-michroma">
              Defence Solutions
            </h2>
            <p className="text-lg md:text-xl text-[#CBD5E0] max-w-3xl mx-auto leading-relaxed">
              Integrated defence technologies designed for modern threat environments.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#6E7A86]/40 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={solution.image.src}
                      alt={solution.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/80 via-transparent to-transparent"></div>
                  {/* Title on Image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-michroma text-2xl font-semibold text-white">
                      {solution.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Description */}
                  <p className="text-[#CBD5E0] mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-3">
                      {solution.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-white backdrop-blur-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-[#6E7A86] rounded-full mr-2"></span>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <button className="font-michroma bg-gradient-to-r from-[#0B1C2D] to-[#6E7A86] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-[#6E7A86]/25 transition-all duration-300 hover:-translate-y-0.5">
                      Learn More
                    </button>
                    
                    {/* Arrow Indicator */}
                    <div className="flex items-center gap-2 text-[#6E7A86] text-sm">
                      <span>View case study</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#6E7A86]/30 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-8 p-8 bg-gradient-to-r from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl max-w-4xl mx-auto">
              <div className="text-left">
                <h3 className="font-michroma text-xl font-semibold text-white mb-2">
                  Need a Custom Solution?
                </h3>
                <p className="text-[#CBD5E0] text-sm">
                  Our team can develop tailored defence systems for your specific requirements.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button className="font-michroma bg-white text-[#0B1C2D] px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5">
                  Contact Solutions Team
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-white mb-2">24/7</div>
                <div className="text-[#CBD5E0] text-sm">Technical Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">On-Site</div>
                <div className="text-[#CBD5E0] text-sm">Training & Deployment</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">Custom</div>
                <div className="text-[#CBD5E0] text-sm">Solution Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions