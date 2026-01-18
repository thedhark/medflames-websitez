import React from 'react';

const NewtonCradleSection = () => {
    return (
        <section className="w-full py-24 px-6 bg-white relative overflow-hidden flex flex-col items-center">

            <div className="max-w-4xl w-full relative h-[600px] flex justify-center border-t-8 border-slate-100/50 rounded-t-3xl">
                {/* 1. Left Sphere (Static/Reaction) - HOSPITAL */}
                <div className="relative group w-32 h-[500px] origin-top animate-swing-left-slow">
                    {/* String */}
                    <div className="absolute left-1/2 top-0 w-[1px] h-full bg-slate-300 origin-top"></div>
                    {/* Sphere */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-slate-50 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1),_10px_10px_30px_rgba(0,0,0,0.2)] flex items-center justify-center z-10 transition-transform">
                        {/* Red Plus Icon (Reference) */}
                        <div className="w-16 h-16 rounded-full border-4 border-red-500/20 flex items-center justify-center">
                            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                        </div>
                        {/* Reflections */}
                        <div className="absolute top-4 left-6 w-8 h-4 bg-white rounded-full blur-[2px] opacity-80"></div>
                    </div>
                </div>

                {/* 2. Middle Sphere 1 - HR */}
                <div className="relative w-32 h-[500px]">
                    <div className="absolute left-1/2 top-0 w-[1px] h-full bg-slate-300"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-slate-100 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1),_10px_10px_30px_rgba(0,0,0,0.2)] flex items-center justify-center z-10">
                        {/* Glossy Reflection */}
                        <div className="absolute top-4 left-6 w-8 h-4 bg-white rounded-full blur-[2px] opacity-90"></div>
                    </div>
                </div>

                {/* 3. Middle Sphere 2 - INSTITUTE */}
                <div className="relative w-32 h-[500px]">
                    <div className="absolute left-1/2 top-0 w-[1px] h-full bg-slate-300"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-slate-100 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1),_10px_10px_30px_rgba(0,0,0,0.2)] flex items-center justify-center z-10">
                        <div className="absolute top-4 left-6 w-8 h-4 bg-white rounded-full blur-[2px] opacity-90"></div>
                    </div>
                </div>

                {/* 4. Right Sphere (The Swinger) - MENTOR */}
                <div className="relative w-32 h-[500px] origin-top animate-swing-right-heavy">
                    <div className="absolute left-1/2 top-0 w-[1px] h-full bg-slate-300 origin-top"></div>
                    {/* Striped Texture (Reference) */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-slate-800 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5),_10px_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-center z-20 overflow-hidden">
                        {/* Stripes */}
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]"></div>
                        <div className="relative z-10 font-bold text-white text-xl tracking-widest">IMPACT</div>
                        {/* Reflection */}
                        <div className="absolute top-4 left-6 w-8 h-4 bg-white/50 rounded-full blur-[2px]"></div>
                    </div>
                </div>

            </div>

            {/* Text Content (Reference Match) */}
            <div className="text-center mt-12 max-w-2xl animate-fade-in-up">
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                    The Shifting Healthcare <br />
                    <span className="text-blue-600">Ownership</span>
                </h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                    MedFlames empowers you to take back control. No longer just a cog in the machine—become the engine.
                </p>
            </div>

            <style jsx>{`
                @keyframes swing-right-heavy {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(45deg); }
                    50% { transform: rotate(0deg); } /* Hit */
                    75% { transform: rotate(0deg); } /* Wait for left to swing */
                }
                @keyframes swing-left-slow {
                    0%, 25% { transform: rotate(0deg); } /* Wait for right to hit */
                    50% { transform: rotate(0deg); } /* Hit happens */
                    62.5% { transform: rotate(-25deg); } /* Swing out left */
                    75% { transform: rotate(0deg); } /* Return */
                    100% { transform: rotate(0deg); }
                }
                .animate-swing-right-heavy {
                    animation: swing-right-heavy 2s ease-in-out infinite;
                }
                .animate-swing-left-slow {
                    animation: swing-left-slow 2s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default NewtonCradleSection;
