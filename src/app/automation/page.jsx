'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowLeft,
    Settings,
    Activity,
    Cpu,
    Users,
    Zap,
    Globe,
    Truck,
    Factory,
    Siren,
    Layers,
    CheckCircle2
} from 'lucide-react'
import automationImage from '../../assets/8.jpg'

const AutomationPage = () => {
    const capabilities = [
        {
            title: 'Multi-System Orchestration',
            description: 'Coordinate and manage diverse systems and assets from a unified control layer.',
            icon: Layers,
            color: 'from-blue-500 to-indigo-500'
        },
        {
            title: 'Real-Time Control and Monitoring',
            description: 'Maintain continuous visibility and operational control across connected environments.',
            icon: Activity,
            color: 'from-emerald-500 to-teal-500'
        },
        {
            title: 'Autonomous Workflow Coordination',
            description: 'Enable automated responses to events based on predefined rules and objectives.',
            icon: Settings,
            color: 'from-orange-500 to-red-500'
        },
        {
            title: 'Human-Guided Automation',
            description: 'Preserve oversight, approval, and intervention at critical decision points.',
            icon: Users,
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'AI-Assisted Operational Control',
            description: 'Support operators with intelligent recommendations, prioritization, and execution support.',
            icon: Cpu,
            color: 'from-cyan-500 to-blue-500'
        }
    ]

    const applications = [
        { name: 'Smart infrastructure and cities', icon: Globe },
        { name: 'Energy and utilities', icon: Zap },
        { name: 'Transportation and logistics', icon: Truck },
        { name: 'Industrial and manufacturing systems', icon: Factory },
        { name: 'Emergency and crisis response coordination', icon: Siren }
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
                    <span className="font-medium">Back to Home</span>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative py-12 lg:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[#0B1C2D] z-0"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                                AUTOMATION SYSTEMS
                            </span>
                            <h1 className="font-michroma text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Automation & Control Systems
                            </h1>
                            <p className="text-xl text-white/90 font-medium mb-4">
                                Built for Complex Environments
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed mb-8">
                                Our automation systems are designed to operate reliably in complex environments where
                                multiple systems, assets, and stakeholders must be coordinated in real time.
                                The platform supports commercial, industrial, infrastructure, and large-scale operational
                                environments.
                            </p>
                             <p className="text-lg text-white/80 leading-relaxed">
                                System behavior is defined by configuration and governance—ensuring flexibility without
                                hard-coding specific use cases.
                            </p>
                        </div>

                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src={automationImage}
                                alt="Automation System Interface"
                                fill
                                className="object-cover"
                                placeholder="blur"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/60 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-michroma text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
                            Capabilities
                        </h2>
                        <p className="text-lg text-[#6E7A86] max-w-3xl mx-auto leading-relaxed">
                            Powering the next generation of operational control
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map((cap, index) => {
                            const Icon = cap.icon
                            return (
                                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                                    <div className={`w-14 h-14 bg-gradient-to-r ${cap.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="font-michroma text-xl font-bold text-[#0B1C2D] mb-3">
                                        {cap.title}
                                    </h3>
                                    <p className="text-[#6E7A86] leading-relaxed">
                                        {cap.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

             {/* Domain Agnostic Section */}
            <section className="py-16 lg:py-24 bg-[#0B1C2D] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                     <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-michroma text-3xl md:text-4xl font-bold mb-8">
                            Domain-Agnostic by Design
                        </h2>
                        <p className="text-xl text-white/90 mb-12 leading-relaxed">
                            Automation at Pleiades Systems is built on a single, adaptable core engine.
                            The same system can be configured to manage factories, fleets, networks, or complex
                            operational processes—depending on objectives, permissions, and operational rules.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-8 text-left bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                            <div>
                                <h3 className="text-2xl font-bold text-blue-400 mb-4">Adaptable Core</h3>
                                <p className="text-white/80">
                                    Rules change. Objectives change. The automation engine remains consistent, allowing for rapid adaptation to new requirements without core system rebuilding.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-blue-400 mb-4">Unified Management</h3>
                                <p className="text-white/80">
                                    Whether managing physical assets or digital workflows, our system provides a consistent unified operational picture and control interface.
                                </p>
                            </div>
                        </div>
                     </div>
                </div>
            </section>


            {/* Applications Section */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="font-michroma text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
                            Applications
                        </h2>
                        <p className="text-lg text-[#6E7A86] max-w-3xl mx-auto leading-relaxed">
                            Versatile deployment across critical sectors
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {applications.map((app, index) => {
                            const Icon = app.icon
                            return (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <span className="font-medium text-[#0B1C2D] text-lg">{app.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Why It Matters / Conclusion */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="font-michroma text-3xl md:text-4xl font-bold mb-6">
                                Why It Matters
                            </h2>
                            <p className="text-xl leading-relaxed mb-8 opacity-90">
                                As environments grow more complex, manual coordination becomes slower and less reliable.
                                These systems reduce operational friction, improve response times, and enable consistent
                                execution—while keeping people firmly in control.
                            </p>
                            
                             <Link href="/contact">
                                <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                    Start the Conversation
                                </button>
                            </Link>
                        </div>
                     </div>
                </div>
            </section>
        </div>
    )
}

export default AutomationPage
