import React from 'react';
import { Quote } from 'lucide-react';

const FounderSection = () => {


    return (
        <section className="w-full py-24 bg-white flex justify-center overflow-hidden relative">

            {/* MATCHED DIMENSIONS TO HITAS BI (CORE INTELLIGENCE) */}
            <div className="w-[90%] max-w-[1300px] h-auto md:h-[520px] bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 pl-8 md:pl-20">

                {/* Left Side: Content - Strictly Constrained to Left 55% */}
                <div className="w-full md:w-[55%] text-center md:text-left z-20 flex flex-col justify-center h-full relative pr-0 md:pr-4 pb-56 md:pb-0">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-[10px] tracking-widest uppercase mb-6 w-fit mx-auto md:mx-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
                        Founder's Vision
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                        Built with <span className="text-blue-200">Love for Healthcare.</span>
                    </h2>

                    <div className="relative mb-8">
                        <Quote className="absolute -top-3 -left-4 w-8 h-8 text-white/10 -scale-x-100" />
                        <p className="text-blue-100/90 text-sm md:text-lg font-medium leading-relaxed max-w-xl mx-auto md:mx-0 relative z-10">
                            "Medflames is the platform that connects the entire medical ecosystem. We are bridging the gap between talent and institutions to create a seamless future."
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-white tracking-tight">Kandala Srikanth</h3>
                            <p className="text-blue-200 text-sm font-medium">Founder & Chief Medical Architect</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image - PINNED TO CORNER (MOBILE & DESKTOP) */}
                <div className="absolute bottom-0 right-0 z-10 flex items-end justify-end pointer-events-none w-full h-full overflow-hidden rounded-[3rem]">
                    <img
                        src="/assets/founder_final.png"
                        alt="Kandala Srikanth, Founder"
                        className="w-auto h-auto max-h-[40%] md:max-h-[50%] object-contain object-bottom drop-shadow-2xl transition-all duration-300
                                   origin-bottom-right
                                   translate-x-4 translate-y-2
                                   md:translate-x-[-32px] md:translate-y-[20px] md:scale-[1.75] md:origin-bottom"
                        style={{
                            marginBottom: '0px',
                            marginRight: '0px'
                        }}
                    />
                </div>

            </div>
        </section>
    );
};

export default FounderSection;
