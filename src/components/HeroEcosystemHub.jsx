import React from 'react';
import MedflamesLogo from './MedflamesLogo';

const HeroEcosystemHub = () => {
    // Icons for the bottom row (Simple SVG Representations matching the reference)
    const ecosystemItems = [
        { label: "Careers", color: "bg-orange-500", icon: <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
        { label: "Learning", color: "bg-blue-600", icon: <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> },
        { label: "Community", color: "bg-teal-500", icon: <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> },
        { label: "Institutions", color: "bg-sky-500", icon: <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /> },
        { label: "Research", color: "bg-indigo-500", icon: <><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></> },
        { label: "Mentorship", color: "bg-pink-500", icon: <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> },
    ];

    return (
        <div className="relative w-full h-[600px] flex flex-col items-center justify-center perspective-[1000px]">

            {/* --- BACKGROUND LAYERS (Rich & Deep) --- */}
            {/* --- BACKGROUND LAYERS (Rich & Deep) --- */}
            {/* Layer 1: Deep Blue Ambient Pulse */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 via-transparent to-violet-50/30 blur-[100px] animate-pulse -z-20"></div>

            {/* Layer 2: Floating Orbs (Blue & Violet) */}
            <div className="absolute top-[10%] left-[10%] w-32 h-32 bg-blue-400/20 rounded-full blur-[40px] animate-float-slow -z-10"></div>
            <div className="absolute bottom-[20%] right-[10%] w-40 h-40 bg-violet-400/20 rounded-full blur-[50px] animate-float-delayed -z-10"></div>
            <div className="absolute top-[40%] right-[20%] w-20 h-20 bg-fuchsia-500/10 rounded-full blur-[20px] animate-float -z-10"></div>

            {/* --- 3D STACKED GLASS CARDS --- */}

            {/* Card Layer 1: Backing Sheet (Rotated & Translucent) */}
            <div className="absolute w-80 md:w-[420px] h-[320px] bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/40 transform -rotate-6 translate-x-4 translate-y-4 shadow-2xl opacity-60 animate-float-delayed"></div>

            {/* Card Layer 2: Secondary Accent Sheet (Violet Tint) */}
            <div className="absolute w-80 md:w-[420px] h-[320px] bg-gradient-to-tl from-blue-50/30 to-violet-50/10 backdrop-blur-md rounded-[2.5rem] border border-white/30 transform rotate-3 -translate-x-2 -translate-y-2 shadow-xl opacity-70 animate-float"></div>

            {/* --- CENTRAL HERO CARD (Main Focus) --- */}
            <div className="relative z-10 w-80 md:w-[400px] bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.6)] p-10 flex flex-col items-center justify-center mb-12 transform hover:scale-105 transition-all duration-700 ease-in-out group">

                {/* Inner White Gloss Reflection */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent rounded-[2.5rem] pointer-events-none opacity-80"></div>

                <div className="relative z-20 flex flex-col items-center text-center">
                    {/* Floating Logo Container */}
                    <div className="relative mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 blur-[30px] opacity-30 animate-pulse rounded-full"></div>
                        <div className="relative scale-150 transform group-hover:rotate-12 transition-transform duration-500">
                            <MedflamesLogo className="w-20 h-20 drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600" />
                        </div>
                    </div>

                    {/* Rich Gradient Typography */}
                    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 tracking-tight drop-shadow-sm mb-1">
                        medflames
                    </h2>
                    <p className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/50 shadow-sm">
                        Empowering Healthcare
                    </p>
                </div>

                {/* Decorative Pill 1 (Floating) */}
                <div className="absolute -top-6 -right-8 bg-white/90 backdrop-blur border border-white/50 p-3 rounded-2xl shadow-lg flex items-center gap-2 animate-bounce delay-700">
                    <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                    <span className="text-[10px] font-bold text-slate-600">Premium</span>
                </div>

                {/* Decorative Pill 2 (Floating) */}
                <div className="absolute -bottom-4 -left-8 bg-white/90 backdrop-blur border border-white/50 p-3 rounded-2xl shadow-lg flex items-center gap-2 animate-bounce delay-1000">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span className="text-[10px] font-bold text-slate-600">Verified</span>
                </div>
            </div>

            {/* --- ICON ROW (Floating beneath) --- */}
            <div className="relative z-20 flex flex-wrap justify-center gap-6 mb-8 w-full max-w-2xl px-4 perspective-[500px]">
                {ecosystemItems.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 group cursor-pointer transform hover:translate-z-10 transition-transform duration-300">
                        {/* 3D Bubble Icon */}
                        <div className="w-14 h-14 bg-white rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.1),inset_0_-4px_4px_rgba(0,0,0,0.05)] border border-white flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)]">
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-white to-${item.color.replace('bg-', '')}/10 opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                            {/* Icon */}
                            <svg className={`w-6 h-6 ${item.color.replace('bg-', 'text-')} relative z-10 filter drop-shadow-sm`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                {item.icon}
                            </svg>
                        </div>
                        {/* Label Badge */}
                        <span className="px-2 py-0.5 rounded-md bg-white/50 backdrop-blur-sm border border-white/30 text-[9px] font-bold text-slate-500 group-hover:text-blue-700 group-hover:bg-white transition-all uppercase tracking-tight shadow-sm">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>

            {/* --- BOTTOM CTA (Glow Button) --- */}
            <button className="relative z-20 group px-10 py-4 bg-slate-900 text-white font-bold rounded-full shadow-[0_20px_50px_rgba(15,23,42,0.3)] hover:shadow-[0_30px_60px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center gap-2">
                    Explore Medflames
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
            </button>

        </div>
    );
};

export default HeroEcosystemHub;
