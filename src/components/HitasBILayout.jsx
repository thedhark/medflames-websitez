import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Orb from './Orb';

const HitasBILayout = ({ onOpenPage }) => {
    return (
        <section className="relative w-full py-24 flex flex-col items-center bg-white overflow-hidden">
            {/* Header - Standardized for Consistency */}
            <div className="text-center mb-16 max-w-3xl px-4 z-10 relative">
                <p className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4">
                    Core Intelligence
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                    Hitas Intelligence
                </h2>
            </div>

            {/* Main Card - Matched Dimensions to GlobalMindsSection - Responsive */}
            <div className="relative w-[90%] max-w-[1300px] min-h-[420px] h-auto md:h-[480px] py-8 md:py-0 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/80">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-100 to-fuchsia-200" />

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16"
                >
                    <div className="flex-1 max-w-2xl z-10 flex flex-col justify-center h-full">
                        <div className="space-y-6 mb-8">
                            <p className="text-lg md:text-2xl font-medium text-slate-800 leading-snug">
                                Ask anything in Medflames powered by <span className="font-bold text-indigo-700">Hitas Core Engine</span>.
                                <span className="block mt-2 opacity-80 text-base md:text-xl">Pure engine makes workflow smarter.</span>
                            </p>
                        </div>
                    </div>

                    {/* Orb Container - Centered and Responsive */}
                    <div className="flex flex-1 items-center justify-center scale-[0.8] md:scale-125 h-1/2 md:h-auto mt-[-40px] md:mt-0">
                        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center relative z-0">
                            <Orb />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HitasBILayout;
