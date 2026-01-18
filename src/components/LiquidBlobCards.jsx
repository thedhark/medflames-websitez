import React from 'react';
import {
    ShieldCheck,
    Database,
    Cpu,
    Lock,
    ArrowRight
} from 'lucide-react';

const LiquidBlobCards = () => {
    return (
        <section className="relative w-full py-24 bg-slate-50 overflow-hidden font-sans">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto px-4 z-10 relative">
                    <p className="text-slate-500 font-bold tracking-widest uppercase text-xs mb-4">
                        Core Architecture
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                        Intelligent Infrastructure
                    </h2>
                </div>

                {/* 3-Column Grid - Compact & Clean */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">

                    {/* === CARD 1: TRUST RECORDS (Emerald) === */}
                    <div className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100%] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 text-2xl shadow-sm">
                                <ShieldCheck size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                                Trust Records
                            </h3>

                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                Immutable ledger systems ensuring every medical credential and data point is verified, traceable, and tamper-proof.
                            </p>

                            <div className="flex items-center text-emerald-600 font-bold text-xs uppercase tracking-wider group-hover:gap-2 transition-all cursor-pointer">
                                <span>Learn more</span>
                                <ArrowRight size={14} />
                            </div>
                        </div>
                    </div>

                    {/* === CARD 2: SECURE ACCESS (Blue/Indigo) === */}
                    <div className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100%] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 text-2xl shadow-sm">
                                <Lock size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                                Secure Access
                            </h3>

                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                Role-based permission protocols that guarantee patient data privacy while enabling seamless provider collaboration.
                            </p>

                            <div className="flex items-center text-blue-600 font-bold text-xs uppercase tracking-wider group-hover:gap-2 transition-all cursor-pointer">
                                <span>Learn more</span>
                                <ArrowRight size={14} />
                            </div>
                        </div>
                    </div>

                    {/* === CARD 3: INTELLIGENT SYSTEMS (Amber/Orange) === */}
                    <div className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-[100%] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 text-2xl shadow-sm">
                                <Cpu size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                                Intelligent Systems
                            </h3>

                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                AI-driven analytic co-pilots that synthesize fragmentation into clear, actionable clinical insights.
                            </p>

                            <div className="flex items-center text-amber-600 font-bold text-xs uppercase tracking-wider group-hover:gap-2 transition-all cursor-pointer">
                                <span>Learn more</span>
                                <ArrowRight size={14} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LiquidBlobCards;
