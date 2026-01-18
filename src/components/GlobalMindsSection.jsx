import React from 'react';

// SVGs for the "Iconic based" content
const Icons = {
    Stethoscope: () => (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    ),
    Doctor: () => (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    ),
    Lab: () => (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
    ),
    Award: () => (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
        </svg>
    ),
};


const GlobalMindsSection = () => {

    // Row 1: Prestigious Indian & International (Left to Right)
    const row1 = [
        { type: 'text', content: "AIIMS New Delhi" },
        { type: 'icon', component: Icons.Stethoscope },
        { type: 'text', content: "Johns Hopkins Medicine" },
        { type: 'text', content: "CMC Vellore" },
        { type: 'icon', component: Icons.Doctor },
        { type: 'text', content: "Harvard Medical School" },
        { type: 'text', content: "Apollo Hospitals" },
        { type: 'icon', component: Icons.Lab },
        { type: 'text', content: "Mayo Clinic" },
        { type: 'text', content: "JIPMER" },
        { type: 'icon', component: Icons.Award },
        { type: 'text', content: "Stanford Medicine" },
        { type: 'text', content: "Fortis Healthcare" },
        { type: 'text', content: "King's College London" },
        { type: 'text', content: "Afmc Pune" },
        { type: 'icon', component: Icons.Stethoscope },
    ];

    // Row 2: Prestigious Indian & International (Right to Left)
    const row2 = [
        { type: 'text', content: "University of Oxford" },
        { type: 'icon', component: Icons.Lab },
        { type: 'text', content: "Max Healthcare" },
        { type: 'text', content: "Cleveland Clinic" },
        { type: 'icon', component: Icons.Award },
        { type: 'text', content: "Maulana Azad Medical College" },
        { type: 'text', content: "UCSF Health" },
        { type: 'icon', component: Icons.Stethoscope },
        { type: 'text', content: "Manipal Hospitals" },
        { type: 'text', content: "Karolinska Institute" },
        { type: 'icon', component: Icons.Doctor },
        { type: 'text', content: "Grant Medical College" },
        { type: 'text', content: "Charité - Universitätsmedizin" },
        { type: 'text', content: "Medanta - The Medicity" },
        { type: 'icon', component: Icons.Lab },
        { type: 'text', content: "Yale School of Medicine" },
    ];

    return (
        <div className="w-full py-32 bg-white relative flex flex-col items-center overflow-hidden">

            {/* Header - Outside Card for Consistency */}
            <div className="text-center mb-16 max-w-3xl px-4">
                <p className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">
                    A Global Healthcare Network
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                    Global Minds <span className="text-blue-600">×</span> Medflames
                </h2>
            </div>

            {/* The Blue Gradient Card Container - Responsive Height */}
            <div className="w-[90%] max-w-[1300px] min-h-[420px] h-auto md:h-[480px] py-8 md:py-0 rounded-[3rem] bg-gradient-to-br from-[#2563EB] to-[#4F46E5] relative shadow-2xl flex flex-col items-center justify-center z-10 overflow-hidden">

                {/* Background Decor (Inside Card) */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                    <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white blur-[150px] rounded-full mix-blend-overlay opacity-40"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-300 blur-[120px] rounded-full mix-blend-overlay opacity-30"></div>
                </div>

                {/* Content Container - Centered */}
                <div className="relative z-20 flex flex-col items-center text-center w-full h-full py-12">

                    {/* 1. Top Statement (Moved here) */}
                    <div className="max-w-2xl mb-12 px-4">
                        <p className="text-blue-50 text-sm md:text-base leading-relaxed font-medium text-balance">
                            Medflames collaborates with Global Minds and other prestigious institutions
                            to reshape the future of healthcare infrastructure.
                        </p>
                    </div>

                    {/* 2. INSTITUTION MARQUEES (Natural, Edge-to-Edge) */}
                    <div className="w-full relative flex flex-col gap-10 overflow-hidden py-4">
                        {/* Row 1: Left to Right */}
                        <div className="flex whitespace-nowrap gap-8 animate-scroll-left hover:[animation-play-state:paused]">
                            {[...row1, ...row1].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300">
                                    {item.type === 'icon' ? (
                                        <div className="text-white scale-90"><item.component /></div>
                                    ) : (
                                        <span className="text-white font-bold text-sm md:text-base tracking-wide uppercase">
                                            {item.content}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Row 2: Right to Left */}
                        <div className="flex whitespace-nowrap gap-8 animate-scroll-right hover:[animation-play-state:paused]">
                            {[...row2, ...row2].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300">
                                    {item.type === 'icon' ? (
                                        <div className="text-white scale-90"><item.component /></div>
                                    ) : (
                                        <span className="text-white font-bold text-sm md:text-base tracking-wide uppercase">
                                            {item.content}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 3. Bottom Quote (Moved here) */}
                    <div className="mt-auto pt-8 border-t border-white/10 w-full max-w-xl px-4">
                        <p className="text-xs md:text-sm text-blue-200 font-semibold italic opacity-90 tracking-wide">
                            "Together, we are creating a connected healthcare ecosystem that transcends geography."
                        </p>
                    </div>
                </div>

                {/* === DOCTOR IMAGES (Inside Card) === */}
                {/* Left Doctor (Female) */}
                <div className="absolute bottom-[-10px] md:bottom-[-20px] left-[-20px] md:left-[2%] z-30 w-[160px] md:w-[320px] pointer-events-none select-none block opacity-100">
                    <img
                        src="/doctor-female-v2.png"
                        alt="Female Doctor"
                        className="w-full h-auto drop-shadow-2xl object-contain"
                        style={{
                            WebkitMaskImage: 'url(/doctor-female-mask.png)',
                            maskImage: 'url(/doctor-female-mask.png)',
                            WebkitMaskSize: 'contain',
                            maskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            maskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'bottom',
                            maskPosition: 'bottom'
                        }}
                    />
                </div>

                {/* Right Doctor (Male) */}
                <div className="absolute bottom-0 right-[-20px] md:right-[2%] z-30 w-[160px] md:w-[320px] pointer-events-none select-none block opacity-100">
                    <img
                        src="/doctor-male-v2.png"
                        alt="Male Doctor"
                        className="w-full h-auto drop-shadow-2xl object-contain"
                        style={{
                            WebkitMaskImage: 'url(/doctor-male-mask-v2.png)',
                            maskImage: 'url(/doctor-male-mask-v2.png)',
                            WebkitMaskSize: 'contain',
                            maskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            maskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'bottom',
                            maskPosition: 'bottom'
                        }}
                    />
                </div>

            </div>



        </div>
    );
};

export default GlobalMindsSection;
