import React from 'react';

const BlueSpheresSection = () => {
    return (
        <section className="w-full h-[900px] relative bg-slate-50 overflow-hidden flex items-center justify-center">

            {/* --- SPHERES --- */}

            {/* Sphere 1: Large Main Blue (Top Left) */}
            {/* Sphere 1: Large Main Blue (Top Left) - Pushed further out */}
            <div className="absolute top-[-25%] left-[-15%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-blue-500 via-indigo-400 to-violet-300 blur-[30px] opacity-70 animate-float-slow"></div>

            {/* Sphere 2: Deep Blue (Bottom Right) - Pushed further out */}
            <div className="absolute bottom-[-30%] right-[-15%] w-[900px] h-[900px] rounded-full bg-gradient-to-tl from-blue-700 via-indigo-600 to-blue-400 blur-[40px] opacity-70 animate-float-delayed"></div>

            {/* Sphere 3: Small Floating Accent (Top Right Corner) - Moved away from center */}
            <div className="absolute top-[5%] right-[-5%] w-[250px] h-[250px] rounded-full bg-gradient-to-br from-white via-blue-100 to-indigo-100 mix-blend-overlay blur-[20px] animate-float"></div>


            {/* --- CONTENT LAYER (Frosted Glass) --- */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">

                {/* Left Card: "Why MedFlames?" */}
                <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-12 rounded-[3rem] shadow-[0_20px_60px_rgba(37,99,235,0.15)] flex flex-col items-start gap-6 transform hover:-translate-y-2 transition-transform duration-500 group">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4 text-blue-600">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="text-4xl font-bold text-slate-800 leading-tight">
                        Why <br />
                        <span className="text-blue-600">MedFlames?</span>
                    </h3>
                    <div className="text-slate-600 text-lg leading-relaxed flex flex-col gap-4">
                        <p>
                            Medical education and careers are fragmented. Students struggle with guidance, researchers lack platforms, and mentors need engagement.
                        </p>
                        <p className="font-semibold text-slate-800">
                            MedFlames unifies everything into one verified ecosystem.
                        </p>
                    </div>
                    <button className="px-8 py-3 rounded-full bg-white text-slate-900 font-bold shadow-md hover:shadow-xl transition-all flex items-center gap-2 group-hover:bg-blue-600 group-hover:text-white">
                        Explore Vision
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>

                {/* Right: Feature List Card */}
                <div className="hidden md:flex flex-col items-end gap-6 pointer-events-none">
                    <div className="w-80 p-6 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-[2rem] shadow-xl animate-float-delayed flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></div>
                        <span className="text-slate-800 font-bold text-lg">Verified Profiles</span>
                    </div>
                    <div className="w-80 p-6 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-[2rem] shadow-xl animate-float flex items-center gap-4 ml-12">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></div>
                        <span className="text-slate-800 font-bold text-lg">Trusted Mentorship</span>
                    </div>
                    <div className="w-80 p-6 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-[2rem] shadow-xl animate-float-delayed flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                        <span className="text-slate-800 font-bold text-lg">Career Integration</span>
                    </div>
                </div>

            </div>

            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>

        </section>
    );
};

export default BlueSpheresSection;
