import React from 'react';
import { ArrowRight } from 'lucide-react';

const TeamsPromoSection = () => {
    return (
        <section className="w-full py-24 bg-white flex flex-col items-center justify-center overflow-hidden">
            {/* Added Section Header */}
            <div className="text-center mb-12 max-w-4xl mx-auto px-4">
                <p className="text-slate-500 font-bold tracking-widest uppercase text-xs mb-3">
                    Enterprise
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    Medflames for Teams
                </h2>
            </div>

            <div className="w-[90%] max-w-[1300px] h-auto md:h-[480px] bg-blue-600 rounded-[3rem] relative overflow-hidden flex flex-col md:flex-row shadow-2xl">

                {/* Left Content Side (60%) */}
                <div className="w-full md:w-[60%] p-8 md:p-16 flex flex-col justify-center relative z-20 text-white">
                    <div className="mb-8">
                        <span className="text-white font-bold text-lg">medflames</span>
                        <span className="text-white font-medium text-lg ml-1 opacity-90">for teams</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 max-w-xl">
                        Upskill your entire organization with Verified Medical Intelligence
                    </h2>

                    {/* Button Removed */}
                </div>

                {/* Right Image Side (40%) with Wedge Design */}
                <div className="w-full md:w-[40%] relative min-h-[300px] md:min-h-full">

                    {/* The Wedge Shape */}
                    <div className="absolute top-0 left-0 h-full w-24 bg-blue-600 z-10 hidden md:block" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>

                    {/* Main Image */}
                    <img
                        src="/healthcare_team_promo_v2.png"
                        alt="Medical Team"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Badge Removed */}

                    {/* Decorative Background Circles (Matching Coursera Style) */}
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 right-0 w-32 h-32 bg-blue-300/10 rounded-full blur-2xl"></div>
                </div>

            </div>
        </section>
    );
};

export default TeamsPromoSection;
