'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"
import { ArrowRight, Shield, Activity, Cpu, Globe, Target, Users, Zap, Database } from 'lucide-react'

// Asset imports
import heroBg from '../assets/hero-bg.jpg'
import automationImg from '../assets/8.jpg'
import intelligenceImg from '../assets/15.jpg'
import defenceImg from '../assets/16.jpg' // Samson image

export default function Home() {
  // SVG pattern from original design for tech feel
  const svgPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

  const whatWeDo = [
    {
      title: "Large-scale Automation",
      description: "Systems that streamline operations and reduce human error.",
      icon: Cpu
    },
    {
      title: "AI Decision Platforms",
      description: "Advanced logic for complex, high-stakes environments.",
      icon: Zap
    },
    {
      title: "Data Fusion & Intel",
      description: "Transforming raw signals into actionable understanding.",
      icon: Database
    },
    {
      title: "Situational Awareness",
      description: "Surveillance systems for total operational clarity.",
      icon: Activity
    },
    {
      title: "Defence Systems",
      description: "Sovereign technologies built under strict authorization.",
      icon: Shield
    }
  ]

  return (
    <div className="min-h-screen bg-[#0B1C2D]">
      <Header />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1C2D] text-white pt-20">
          {/* Background */}
          <div className="absolute inset-0 z-0">
             {/* Tech Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-10 z-10"
              style={{ backgroundImage: `url("${svgPattern}")` }}
            ></div>
            
            <Image
              src={heroBg}
              alt="Background"
              fill
              className="object-cover opacity-20"
              priority
              placeholder="blur"
            />
            {/* Gradients for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2D]/90 via-[#0B1C2D]/50 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
                Indigenous Technology Company
              </span>
              <h1 className="font-michroma text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
                Advanced Automation, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Intelligence & Strategic Systems
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 max-w-3xl">
                Pleiades Systems is an indigenous technology company focused on building advanced
                automation, intelligence, and decision systems for complex environments across commercial,
                institutional, and government domains.
              </p>
              
              <p className="text-lg text-gray-400 italic mb-12 max-w-2xl border-l-2 border-blue-500/50 pl-6">
                We design systems that transform data into awareness, signals into understanding, and
                information into coordinated action — always under lawful authority and governance.
              </p>

              <div className="flex flex-wrap gap-4">
                 <Link href="/contact">
                  <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-1 flex items-center gap-2">
                    Start a Conversation
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/about">
                  <button className="px-8 py-4 rounded-full font-bold border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2 text-white">
                    Our Mission
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT US SECTION (New) --- */}
        <section className="py-20 bg-white relative overflow-hidden">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                   <div>
                      <div className="flex items-center gap-2 text-blue-600 font-bold mb-4">
                         <Target className="w-5 h-5" />
                         <span className="tracking-wider uppercase text-sm">About Us</span>
                      </div>
                      <h2 className="font-michroma text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
                         Clarity, Foresight, and Control
                      </h2>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                         Pleiades Systems exists to help institutions operate with clarity, foresight, and control in
                         complex environments. We are engineers, system architects, and intelligence technologists 
                         building the next layer of national capability.
                      </p>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                         Our work is defined by systems engineering discipline and strategic foresight. We prioritize
                         interoperability, resilience, and scalability to ensure relevance in both current and future 
                         landscapes.
                      </p>
                      <Link href="/about">
                         <button className="text-[#0B1C2D] font-bold border-b-2 border-[#0B1C2D] pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors flex items-center gap-2">
                            Read Our Story <ArrowRight className="w-4 h-4" />
                         </button>
                      </Link>
                   </div>
                   {/* About Visual/Grid */}
                   <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-4 mt-8">
                         <div className="bg-blue-50 p-6 rounded-2xl">
                            <Users className="w-8 h-8 text-blue-600 mb-2" />
                            <div className="font-bold text-[#0B1C2D]">Expert Team</div>
                         </div>
                         <div className="bg-gray-100 p-6 rounded-2xl">
                             <Globe className="w-8 h-8 text-gray-600 mb-2" />
                            <div className="font-bold text-[#0B1C2D]">National Scale</div>
                         </div>
                      </div>
                      <div className="space-y-4">
                         <div className="bg-emerald-50 p-6 rounded-2xl">
                            <Zap className="w-8 h-8 text-emerald-600 mb-2" />
                            <div className="font-bold text-[#0B1C2D]">Rapid Action</div>
                         </div>
                         <div className="bg-gray-900 p-6 rounded-2xl">
                            <Shield className="w-8 h-8 text-white mb-2" />
                            <div className="font-bold text-white">Secure Systems</div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
        </section>

        {/* --- WHAT WE DO STRIP (Restored Dark/Card Aesthetic) --- */}
        <section className="bg-[#0B1C2D] py-20 relative overflow-hidden">
            {/* Subtle pattern background */}
             <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("${svgPattern}")` }}></div>
             
             <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                   <h2 className="font-michroma text-3xl md:text-4xl font-bold text-white mb-4">What We Do</h2>
                   <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                   {whatWeDo.map((item, idx) => {
                      const Icon = item.icon
                      return (
                        <div key={idx} className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
                           <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                              <Icon className="w-6 h-6 text-blue-300 group-hover:text-emerald-300" />
                           </div>
                           <h3 className="font-michroma text-sm font-bold text-white mb-2">{item.title}</h3>
                           <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                        </div>
                      )
                   })}
                </div>
             </div>
        </section>

        {/* --- SECTIONS SNIPPETS --- */}
        
        {/* Automation Snippet */}
        <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                    <Image src={automationImg} alt="Automation" fill className="object-cover transition-transform duration-700 group-hover:scale-105" placeholder="blur"/>
                 </div>
                 <div>
                    <div className="flex items-center gap-2 text-blue-600 font-bold mb-4">
                       <Cpu className="w-5 h-5" />
                       <span className="tracking-wider uppercase text-sm">Automation</span>
                    </div>
                    <h2 className="font-michroma text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
                       Intelligent Automation Systems
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                       We specialize in the design and deployment of advanced automation systems that streamline operations,
                       enhance efficiency, and reduce human error in critical environments.
                    </p>
                    <Link href="/automation">
                       <button className="text-[#0B1C2D] font-bold border-b-2 border-[#0B1C2D] pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors flex items-center gap-2">
                          Learn More <ArrowRight className="w-4 h-4" />
                       </button>
                    </Link>
                 </div>
              </div>
           </div>
        </section>

        {/* Intelligence Snippet (Dark BG) */}
        <section className="py-20 lg:py-28 bg-[#0B1C2D] text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("${svgPattern}")` }}></div>
           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold mb-4">
                       <Activity className="w-5 h-5" />
                       <span className="tracking-wider uppercase text-sm">Intelligence</span>
                    </div>
                    <h2 className="font-michroma text-3xl md:text-4xl font-bold mb-6">
                       From Raw Data to Situational Awareness
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                       We specialize in large-scale data management and intelligence fusion, helping organizations
                       understand complex environments as they change in real time. The platform transforms raw data
                       into structured insight.
                    </p>
                    <Link href="/intelligence">
                       <button className="text-white font-bold border-b-2 border-white pb-1 hover:text-emerald-400 hover:border-emerald-400 transition-colors flex items-center gap-2">
                          Learn More <ArrowRight className="w-4 h-4" />
                       </button>
                    </Link>
                 </div>
                 <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                    <Image src={intelligenceImg} alt="Intelligence" fill className="object-cover transition-transform duration-700 group-hover:scale-105" placeholder="blur"/>
                    <div className="absolute inset-0 bg-[#0B1C2D]/20"></div>
                 </div>
              </div>
           </div>
        </section>

        {/* Defence Snippet */}
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                    <Image src={defenceImg} alt="Defence" fill className="object-cover transition-transform duration-700 group-hover:scale-105" placeholder="blur"/>
                 </div>
                 <div>
                    <div className="flex items-center gap-2 text-red-600 font-bold mb-4">
                       <Shield className="w-5 h-5" />
                       <span className="tracking-wider uppercase text-sm">Defence</span>
                    </div>
                    <h2 className="font-michroma text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
                       Software-Defined & Autonomous Warfare
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                       Pleiades Systems develops advanced defence systems focused on decision superiority,
                       autonomous operations, and multi-domain dominance. Our flagship SAMSON platform
                       integrates intelligence, automation, and weaponized platforms.
                    </p>
                    <Link href="/defence">
                       <button className="text-[#0B1C2D] font-bold border-b-2 border-[#0B1C2D] pb-1 hover:text-red-600 hover:border-red-600 transition-colors flex items-center gap-2">
                          Learn More <ArrowRight className="w-4 h-4" />
                       </button>
                    </Link>
                 </div>
              </div>
           </div>
        </section>

        {/* Governance Snippet (Grey BG) */}
        <section className="py-20 lg:py-28 bg-gray-100">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-gray-500 font-bold mb-4">
                 <Globe className="w-5 h-5" />
                 <span className="tracking-wider uppercase text-sm">Governance</span>
              </div>
              <h2 className="font-michroma text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
                 Control & Authorization
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                 Defence systems are developed, deployed, and operated only under authorized government
                 and military frameworks. We ensure human-in-the-loop lethal decision authority and
                 strict adherence to national data sovereignty.
              </p>
              <Link href="/governance">
                 <button className="bg-[#0B1C2D] text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg">
                    Read Governance Policy
                 </button>
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
