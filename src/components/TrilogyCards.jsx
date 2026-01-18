import React from 'react';

const TrilogyCards = () => {
    return (
        <section className="w-full py-32 bg-black flex flex-col items-center justify-center overflow-hidden">

            <div className="text-center mb-16">
                <h2 className="text-sm font-bold text-slate-500 tracking-[0.3em] uppercase mb-4">The Core Foundation</h2>
                <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter max-w-3xl mx-auto leading-tight">
                    Three pillars that define <br />
                    the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">new medical standard.</span>
                </h3>
            </div>

            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 h-auto md:h-[600px]">

                {/* Card 1: TRUST (Cyan/Teal) */}
                <div className="relative w-full h-[500px] md:h-full bg-teal-200 rounded-sm overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-[#A6D6D9] flex flex-col justify-between p-8">
                        <span className="text-xs font-bold text-teal-900 tracking-[0.2em] uppercase text-center opacity-60">Verified Trust</span>

                        {/* Abstract Minimalist Shape */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-48 bg-teal-900/80 transform -rotate-12 shadow-2xl group-hover:rotate-0 transition-transform duration-700"></div>
                        <div className="absolute top-[60%] left-[60%] w-12 h-12 bg-teal-800 transform rotate-12"></div>

                        {/* Bottom Dark Area */}
                        <div className="absolute bottom-0 left-0 w-full h-[35%] bg-[#0F172A] p-8 flex flex-col justify-center">
                            <h4 className="text-2xl font-bold text-white uppercase tracking-wider mb-1">Identity</h4>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">The First Pillar</p>
                        </div>
                    </div>
                </div>

                {/* Card 2: KNOWLEDGE (Deep Blue/Grey) */}
                <div className="relative w-full h-[500px] md:h-full bg-slate-800 rounded-sm overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.05] z-10 shadow-2xl">
                    <div className="absolute inset-0 bg-[#1E293B] flex flex-col justify-between p-8">
                        <span className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase text-center opacity-60">Global Minds</span>

                        {/* Abstract Minimalist Shape */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-slate-200 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-700">
                            <div className="w-24 h-32 bg-[#0F172A] transform rotate-12"></div>
                        </div>

                        {/* Bottom Text Area */}
                        <div className="absolute bottom-12 left-0 w-full text-center">
                            <h4 className="text-3xl font-bold text-white uppercase tracking-tighter mb-1">Wisdom</h4>
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">The Central Core</p>
                        </div>
                    </div>
                </div>

                {/* Card 3: COMMUNITY (Orange) */}
                <div className="relative w-full h-[500px] md:h-full bg-orange-400 rounded-sm overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-[#E88D46] flex flex-col justify-between p-8">
                        <span className="text-xs font-bold text-orange-900 tracking-[0.2em] uppercase text-center opacity-60">Unity</span>

                        {/* Abstract Minimalist Shape */}
                        <div className="absolute top-1/2 right-12 -translate-y-1/2 w-24 h-32 bg-[#481E14] transform rotate-6 shadow-2xl group-hover:-rotate-6 transition-transform duration-700"></div>
                        <div className="absolute bottom-40 left-12 w-16 h-16 bg-[#27100B] transform -rotate-12"></div>

                        {/* Bottom Dark Area */}
                        <div className="absolute bottom-0 left-0 w-full h-[35%] bg-[#6D3627] p-8 flex flex-col justify-center">
                            <h4 className="text-2xl font-bold text-white uppercase tracking-wider mb-1">Impact</h4>
                            <p className="text-[10px] text-orange-200 uppercase tracking-widest font-bold">The Final Goal</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TrilogyCards;
