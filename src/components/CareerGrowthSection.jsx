import React from 'react';

const CareerGrowthSection = () => {
    return (
        <section className="w-full py-24 bg-white flex flex-col items-center justify-center">
            {/* Added Section Header */}
            <div className="text-center mb-12 max-w-4xl mx-auto px-4">
                <p className="text-slate-500 font-bold tracking-widest uppercase text-xs mb-3">
                    Join Us
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    Global Career Acceleration
                </h2>
            </div>

            <div className="w-[90%] max-w-[1300px] h-auto md:h-[480px] bg-blue-50 rounded-[3rem] relative overflow-hidden flex flex-col md:flex-row shadow-sm border border-blue-100">

                {/* Left Content (60%) */}
                <div className="w-full md:w-[60%] p-8 md:p-16 flex flex-col justify-center relative z-20">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-blue-600 font-bold text-xl tracking-tight">medflames</span>
                        <div className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded uppercase tracking-wider">Plus</div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6 max-w-lg">
                        Accelerate your medical career with Global Standards
                    </h2>

                    <p className="text-slate-600 text-lg mb-8 max-w-md leading-relaxed">
                        Join a network where your skills are recognized instantly by top hospitals worldwide. From specialized certifications to leadership roles, MedFlames Plus maps your growth.
                    </p>

                    <div className="flex flex-col gap-4">
                        {/* Button Removed */}
                    </div>
                </div>

                {/* Right Image Side (40%) with Fan Background */}
                <div className="w-full md:w-[40%] relative flex items-end justify-center overflow-hidden">

                    {/* The Fan/Wing Shapes (Abstract Geometric) */}
                    <div className="absolute inset-0 z-0">
                        {/* Large Blue Arc */}
                        <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[120%] border-[80px] border-blue-100 rounded-full opacity-50"></div>
                        {/* Fan Slices */}
                        <div className="absolute bottom-[10%] right-[10%] w-[80%] h-[80%] bg-blue-200/30 rounded-full origin-bottom-right rotate-[-15deg]" style={{ clipPath: 'polygon(100% 100%, 0 0, 0 50%)' }}></div>
                        <div className="absolute bottom-[10%] right-[10%] w-[70%] h-[70%] bg-blue-600/10 rounded-full origin-bottom-right rotate-[-30deg]" style={{ clipPath: 'polygon(100% 100%, 0 20%, 0 70%)' }}></div>
                        <div className="absolute bottom-[10%] right-[10%] w-[90%] h-[90%] border-2 border-blue-400/20 rounded-full"></div>
                    </div>

                    {/* Main Image - Professional Person */}
                    <div className="relative z-10 w-full h-full flex items-end justify-center px-8">
                        <img
                            src="/doctor_mentoring_realistic_v2.png"
                            alt="Medical Professional"
                            className="w-full h-[90%] object-cover rounded-t-[5rem] shadow-2xl border-x border-t border-white/20"
                            style={{ objectPosition: 'center top' }}
                        />
                    </div>

                    {/* Gradient Fade to Bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-50 to-transparent z-20"></div>
                </div>

            </div>
        </section>
    );
};

export default CareerGrowthSection;
