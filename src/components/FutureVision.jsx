import React from 'react';

const FutureVision = () => {
    return (
        <div className="w-full py-24 px-6 relative bg-white overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none">
                <h1 className="text-[12rem] md:text-[20rem] font-bold text-slate-50 opacity-60 tracking-tighter leading-none">
                    MedFlames
                </h1>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* LEFT: Visual Element (Quote Card) */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-md">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-blue-400 blur-[80px] opacity-20 rounded-full"></div>

                        {/* Main Card Container */}
                        <div className="relative bg-white/40 backdrop-blur-xl border border-white/60 p-4 rounded-[3rem] shadow-2xl">
                            {/* Inner Blue Card */}
                            <div className="bg-blue-600 rounded-[2.5rem] p-10 text-center text-white relative overflow-hidden">
                                {/* Decorative Circle Top Right */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500 rounded-full blur-2xl -mr-10 -mt-10"></div>

                                <p className="text-xl font-medium leading-relaxed relative z-10">
                                    "The brain is a complex system. <br />
                                    Our platform decodes medical signals to enable scalable, research-driven learning."
                                </p>

                                {/* Decorative Element Bottom Left */}
                                <div className="absolute bottom-6 left-6 w-8 h-8 bg-orange-400 rounded-full shadow-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Content */}
                <div className="text-center lg:text-left">
                    <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-[1.1] mb-8">
                        Designed for the <br />
                        <span className="text-blue-600">Future of Healthcare</span>
                    </h2>

                    <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                        MedFlames blends traditional medical rigor with modern learning technologies, helping students build not only knowledge, but confidence and decision-making ability.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                        <button className="px-8 py-3 bg-slate-900 text-white font-bold rounded-full shadow-lg hover:bg-black hover:-translate-y-1 transition-all duration-300">
                            View Research
                        </button>

                        <div className="flex flex-col items-start gap-2 text-sm font-bold text-slate-400">
                            {['Platform', 'Research Lab', 'Journey'].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FutureVision;
