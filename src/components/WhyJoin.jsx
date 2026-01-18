import React, { useState } from 'react';
import VerifiedBadge from './VerifiedBadge';

const WhyJoin = () => {
    // Partner Data configuration
    const partners = [
        {
            id: 'hospitals',
            label: 'Hospitals',
            color: '#EF4444', // Red-500
            badgeColor: '#EF4444',
            title: "St. John's Hospital",
            subtitle: "TRUSTED RECORDS. SECURE ACCESS. INTELLIGENT CARE.",
            description: "Serving the community with excellence in healthcare and patient safety through verified medical workflows.",
            benefits: [
                "Partner with Medical Institutes to offer clinical rotations.",
                "Collaborate with Researchers on trial environments.",
                "Source specialists from accredited HR Agencies."
            ],
            image: "https://images.unsplash.com/photo-1587351021759-3e566b92f094?q=80&w=2574&auto=format&fit=crop"
        },
        {
            id: 'hr',
            label: 'HR Agencies',
            color: '#3B82F6', // Blue-500
            badgeColor: '#3B82F6',
            title: "Elite Staffing Sol.",
            subtitle: "PREMIUM TALENT. VERIFIED CREDENTIALS. RAPID PLACEMENT.",
            description: "Connecting top-tier healthcare facilities with verified professionals through a streamlined, secure platform.",
            benefits: [
                "Access a verified pool of medical professionals.",
                "Streamline credential verification processes.",
                "Connect directly with Hospital hiring managers."
            ],
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
        },
        {
            id: 'institutes',
            label: 'Institutes',
            color: '#10B981', // Emerald-500
            badgeColor: '#10B981',
            title: "NIV Medical College",
            subtitle: "ADVANCED LEARNING. RESEARCH HUBS. FUTURE LEADERS.",
            description: "Empowering the next generation of medical professionals with cutting-edge resources and practical exposure.",
            benefits: [
                "Place students in verified clinical rotations.",
                "Access real-world case studies from Hospitals.",
                "Connect alumni with premium HR Agencies."
            ],
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2586&auto=format&fit=crop"
        },
        {
            id: 'doctors',
            label: 'Doctors',
            color: '#F59E0B', // Amber-500
            badgeColor: '#F59E0B',
            title: "Dr. Sarah Chen",
            subtitle: "EXPERT GUIDANCE. CAREER PATHWAYS. SKILL MASTERY.",
            description: "Guiding young professionals through complex medical landscapes with experience and personalized mentorship.",
            benefits: [
                "Mentor verified students and junior doctors.",
                "Host exclusive workshops for Medical Institutes.",
                "Build reputation across the ecosystem."
            ],
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 'researchers',
            label: 'Researchers',
            color: '#8B5CF6', // Violet-500
            badgeColor: '#8B5CF6',
            title: "BioGen Research",
            subtitle: "DATA DRIVEN. INNOVATIVE TRIALS. GLOBAL IMPACT.",
            description: "Pioneering breakthroughs in medical science through collaborative research and secure data exchange.",
            benefits: [
                "Access anonymized patient data from Hospitals.",
                "Recruit trial participants via verified networks.",
                "Publish findings to a global professional audience."
            ],
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop"
        }
    ];

    const [activePartnerIndex, setActivePartnerIndex] = useState(0);
    const activePartner = partners[activePartnerIndex];

    return (
        <div className="w-full py-24 px-6 relative bg-slate-50 overflow-hidden" id="verified-partners">

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Starting with <span style={{ color: activePartner.color }}>Verified Partners.</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Experience a unified ecosystem where every interaction is secured by trusted verification.
                    </p>
                </div>

                {/* Main 3-Column Glass Layout */}
                <div className="relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-[2.5rem] shadow-2xl p-8 md:p-12 overflow-visible">

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                        {/* LEFT COLUMN: Partner Tabs */}
                        <div className="md:col-span-3 flex flex-col gap-4">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 mb-2">Partner Type</h3>
                            {partners.map((partner, index) => {
                                const isActive = activePartnerIndex === index;
                                return (
                                    <button
                                        key={partner.id}
                                        onClick={() => setActivePartnerIndex(index)}
                                        className={`group relative flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 w-full
                                            ${isActive ? 'shadow-lg scale-105 ring-1 ring-black/5' : 'hover:bg-white/50'}`}
                                        style={isActive ? { backgroundColor: `${partner.color}10` } : {}} // Dynamic background tint
                                    >
                                        {/* Icon Container */}
                                        <div
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300
                                                ${isActive ? 'bg-opacity-20' : 'bg-slate-100 text-slate-400'}`}
                                            style={isActive ? { backgroundColor: `${partner.color}20`, color: partner.color } : {}}
                                        >
                                            {/* Simple Dynamic Icon based on type (simulated with SVG) */}
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                {partner.id === 'hospitals' && <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m8-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2m3-8h6m-6 4h6m-6-8h6m-6 4h6" />}
                                                {partner.id === 'hr' && <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                                                {partner.id === 'institutes' && <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />}
                                                {partner.id === 'institutes' && <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />}
                                                {partner.id === 'doctors' && <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                                                {partner.id === 'researchers' && <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />}
                                            </svg>
                                        </div>

                                        <span className={`font-semibold text-sm md:text-base ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>
                                            {partner.label}
                                        </span>

                                        {/* Active Line Indicator */}
                                        {isActive && (
                                            <div
                                                className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-l-full"
                                                style={{ backgroundColor: partner.color }}
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>


                        {/* CENTER COLUMN: The Hero Card (Static Neutral Container) */}
                        <div className="md:col-span-4 md:-my-16 z-20">
                            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden ring-1 ring-slate-100 transform transition-all duration-500 hover:scale-[1.02]">
                                {/* Card Header Image */}
                                <div className="h-48 w-full overflow-hidden relative">
                                    <img
                                        src={activePartner.image}
                                        alt={activePartner.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>

                                {/* Logo & Content */}
                                <div className="relative px-8 pb-8 -mt-12 text-center">
                                    {/* Logo Circle */}
                                    <div className="w-24 h-24 bg-white rounded-full mx-auto p-1 shadow-lg flex items-center justify-center relative z-10">
                                        {/* Placeholder Logo */}
                                        <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                                            <span className="font-bold text-xs text-slate-400 uppercase tracking-widest">{activePartner.id.slice(0, 3)}</span>
                                        </div>
                                    </div>

                                    {/* Verified Title */}
                                    <div className="mt-4 flex items-center justify-center gap-2">
                                        <h3 className="text-2xl font-bold text-slate-900">{activePartner.title}</h3>
                                        <div className="w-6 h-6">
                                            <VerifiedBadge fill={activePartner.badgeColor} />
                                        </div>
                                    </div>

                                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-2 mb-4">
                                        {activePartner.subtitle}
                                    </h4>

                                    <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                        {activePartner.description}
                                    </p>

                                    {/* Static CTA Button but with specific brand color passed as prop/style */}
                                    <button
                                        className="w-full py-4 rounded-xl flex items-center justify-center gap-2 text-white font-bold tracking-wide text-sm transition-transform active:scale-95 shadow-lg"
                                        style={{
                                            background: `linear-gradient(to right, #1e293b, #0f172a)`, // Dark background as per image
                                            borderBottom: `2px solid ${activePartner.color}` // Subtle hint of color
                                        }}
                                    >
                                        <span className="uppercase">Verify as {activePartner.label}</span>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: activePartner.color }}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>


                        {/* RIGHT COLUMN: Benefits Information */}
                        <div className="md:col-span-5 md:pl-8 flex flex-col gap-6 mt-8 md:mt-0">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800">Why Verify?</h3>
                                <p className="text-slate-500">Unlock ecosystem wide benefits.</p>
                            </div>

                            <div className="space-y-4">
                                {activePartner.benefits.map((benefit, i) => (
                                    <div
                                        key={i}
                                        className="p-4 rounded-xl shadow-sm border flex items-start gap-4 transition-all duration-300 hover:shadow-md"
                                        style={{
                                            backgroundColor: `${activePartner.color}08`, // Very subtle tint
                                            borderColor: `${activePartner.color}30`     // Subtle border color
                                        }}
                                    >
                                        <div
                                            className="mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                                            style={{ backgroundColor: `${activePartner.color}15` }}
                                        >
                                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke={activePartner.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <p className="text-sm font-medium text-slate-700 leading-snug">
                                            {benefit}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyJoin;
