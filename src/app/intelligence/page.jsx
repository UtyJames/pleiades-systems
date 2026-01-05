'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowLeft,
    Database,
    Activity,
    LineChart,
    AlertTriangle,
    Map,
    Network,
    Eye,
    Zap,
    BarChart3,
    Monitor
} from 'lucide-react'
import image15 from '../../assets/15.jpg'
import image12 from '../../assets/12.jpg'

const IntelligencePage = () => {
    const capabilities = [
        {
            title: 'Data Ingestion from Any Source',
            description: 'Collect and normalize data from sensors, systems, feeds, reports, and digital platforms.',
            icon: Database,
            color: 'from-blue-500 to-indigo-500'
        },
        {
            title: 'Real-Time and Historical Data Fusion',
            description: 'Combine live and historical information into a unified, continuously updated view.',
            icon: Activity,
            color: 'from-emerald-500 to-teal-500'
        },
        {
            title: 'Pattern and Trend Analysis',
            description: 'Identify recurring behaviors, trends, and shifts over time.',
            icon: LineChart,
            color: 'from-purple-500 to-fuchsia-500'
        },
        {
            title: 'Anomaly Detection',
            description: 'Automatically surface unusual activity, deviations, or emerging issues.',
            icon: AlertTriangle,
            color: 'from-orange-500 to-red-500'
        },
        {
            title: 'Geospatial Intelligence',
            description: 'Visualize data in spatial context to understand location-based relationships and movement.',
            icon: Map,
            color: 'from-cyan-500 to-blue-500'
        },
        {
            title: 'Signal and Event Correlation',
            description: 'Connect related events across systems to reveal hidden dependencies and insights.',
            icon: Network,
            color: 'from-amber-500 to-yellow-500'
        }
    ]

    const monitoringFeatures = [
        'Continuous visibility across physical and digital environments',
        'Persistent monitoring architectures',
        'Intelligent alerting and prioritization',
        'Interactive visualization and analytics dashboards'
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
                                INTELLIGENCE SYSTEMS
                            </span>
                            <h1 className="font-michroma text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                From Raw Data to Situational Awareness
                            </h1>
                            <p className="text-xl text-white/90 font-medium mb-4">
                                Data Fusion & Large-Scale Management
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed mb-8">
                                We specialize in large-scale data management and intelligence fusion, helping organizations
                                understand complex environments as they change in real time.
                            </p>
                             <p className="text-lg text-white/80 leading-relaxed">
                                The platform transforms raw, disconnected data into structured insight—making it easier to see
                                what is happening, recognize patterns, and anticipate change.
                            </p>
                        </div>

                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src={image15}
                                alt="Intelligence Dashboard Interface"
                                fill
                                className="object-cover"
                                placeholder="blur"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/60 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-michroma text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
                            Core Capabilities
                        </h2>
                        <p className="text-lg text-[#6E7A86] max-w-3xl mx-auto leading-relaxed">
                            Advanced tools for transforming data into actionable intelligence
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

             {/* Monitoring & Awareness / Foundation Section */}
            <section className="py-16 lg:py-24 bg-[#0B1C2D] text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-900/20 to-transparent"></div>
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 order-2 lg:order-1">
                             <Image
                                src={image12}
                                alt="Data Visualization and Monitoring"
                                fill
                                className="object-cover"
                                placeholder="blur"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2D]/40 to-transparent"></div>
                        </div>

                        <div className="order-1 lg:order-2">
                             <h2 className="font-michroma text-3xl md:text-4xl font-bold mb-8">
                                Monitoring & Awareness
                            </h2>
                            <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                These capabilities enable ongoing awareness in complex, dynamic systems.
                            </p>
                            
                            <ul className="space-y-4 mb-12">
                                {monitoringFeatures.map((feature, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-4 flex-shrink-0"></div>
                                        <span className="text-lg text-white/80">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                             <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-blue-400 mb-4">Foundation for Intelligent Operations</h3>
                                <p className="text-white/80 leading-relaxed">
                                    This intelligence layer forms the foundation for advanced operational capabilities.
                                    It supports enterprise platforms, infrastructure monitoring, smart environments, and
                                    data-driven operations—providing the clarity required for effective coordination and
                                    automation.
                                </p>
                            </div>
                        </div>
                    </div>
                 </div>
            </section>


            {/* Why It Matters / Conclusion */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="max-w-5xl mx-auto bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="font-michroma text-3xl md:text-4xl font-bold mb-6">
                                Why It Matters
                            </h2>
                            <p className="text-xl leading-relaxed mb-8 opacity-90">
                                Data alone does not create understanding. By turning raw inputs into meaningful insight, 
                                the platform reduces uncertainty, improves awareness, and enables faster, more confident 
                                decision-making—at any scale.
                            </p>
                            
                             <Link href="/contact">
                                <button className="bg-white text-teal-900 px-8 py-3 rounded-full font-bold hover:bg-teal-50 transition-colors shadow-lg">
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

export default IntelligencePage
