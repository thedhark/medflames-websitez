import React from 'react';
import {
    ShieldCheck,
    Database,
    Cpu,
    Lock,
    ArrowRight
} from 'lucide-react';
import LearnMoreModal from './LearnMoreModal';

const IntelligenceSection = () => {
    const [activeCard, setActiveCard] = React.useState(null);

    const MODAL_CONTENT = {
        TRUST: {
            title: "Trust Records",
            content: (
                <div className="space-y-6">
                    <p className="text-slate-600 leading-relaxed">
                        Our decentralized ledger technology creates an immutable history of every medical credential. By cryptographically signing every degree, certificate, and experience letter, we eliminate fraud and instant verification delays.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0" />
                            <span className="text-slate-700"><strong>Tamper-Proof:</strong> Once recorded, credentials cannot be altered or falsified.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0" />
                            <span className="text-slate-700"><strong>Instant Verification:</strong> Institutions can verify records in milliseconds, not weeks.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0" />
                            <span className="text-slate-700"><strong>Global Portability:</strong> Your achievements travel with you, recognized worldwide.</span>
                        </li>
                    </ul>
                </div>
            ),
            icon: ShieldCheck,
            colorClass: "text-emerald-600",
            bgClass: "bg-emerald-50"
        },
        SECURE: {
            title: "Secure Access",
            content: (
                <div className="space-y-6">
                    <p className="text-slate-600 leading-relaxed">
                        We prioritize privacy without compromising collaboration. Our granular permission systems ensure that you retain full ownership of your data while allowing necessary access to authorized institutions.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                            <span className="text-slate-700"><strong>User-Controlled:</strong> You decide exactly who sees your profile and for how long.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                            <span className="text-slate-700"><strong>Role-Based Audits:</strong> Every access request is logged and visible to you.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                            <span className="text-slate-700"><strong>Encryption Standards:</strong> Medical-grade encryption protects all sensitive identifiers.</span>
                        </li>
                    </ul>
                </div>
            ),
            icon: Lock,
            colorClass: "text-blue-600",
            bgClass: "bg-blue-50"
        },
        SYSTEMS: {
            title: "Intelligent Systems",
            content: (
                <div className="space-y-6">
                    <p className="text-slate-600 leading-relaxed">
                        Beyond just data storage, Medflames acts as an active intelligence layer. We analyze ecosystem data to provide actionable insights for career growth, recruitment trends, and institutional gaps.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 flex-shrink-0" />
                            <span className="text-slate-700"><strong>Predictive Analytics:</strong> Forecasting talent demand in specific medical specializations.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 flex-shrink-0" />
                            <span className="text-slate-700"><strong>Smart Matching:</strong> Automatically connecting the right talent with the right opportunities.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 flex-shrink-0" />
                            <span className="text-slate-700"><strong>Workflow Automation:</strong> Reducing administrative burden for HR and Admissions teams.</span>
                        </li>
                    </ul>
                </div>
            ),
            icon: Cpu,
            colorClass: "text-amber-600",
            bgClass: "bg-amber-50"
        }
    };

    return (
        <section className="relative w-full py-24 bg-white overflow-hidden font-sans">
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
                    <div
                        onClick={() => setActiveCard('TRUST')}
                        className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden cursor-pointer"
                    >


                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 text-2xl shadow-sm">
                                <ShieldCheck size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                                Trust Records
                            </h3>

                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                Immutable, decentralized ledgers that serve as the single source of truth for all medical credentials, ensuring that every data point is traceable and audit-ready.
                            </p>

                            <div className="flex items-center text-emerald-600 font-bold text-xs uppercase tracking-wider group-hover:gap-2 transition-all">
                                <span>Learn more</span>
                                <ArrowRight size={14} />
                            </div>
                        </div>
                    </div>

                    {/* === CARD 2: SECURE ACCESS (Blue/Indigo) === */}
                    <div
                        onClick={() => setActiveCard('SECURE')}
                        className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden cursor-pointer"
                    >


                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 text-2xl shadow-sm">
                                <Lock size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                                Secure Access
                            </h3>

                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                Granular, role-based permission frameworks that protect sensitive patient data while allowing authorized providers to collaborate without friction.
                            </p>

                            <div className="flex items-center text-blue-600 font-bold text-xs uppercase tracking-wider group-hover:gap-2 transition-all">
                                <span>Learn more</span>
                                <ArrowRight size={14} />
                            </div>
                        </div>
                    </div>

                    {/* === CARD 3: INTELLIGENT SYSTEMS (Amber/Orange) === */}
                    <div
                        onClick={() => setActiveCard('SYSTEMS')}
                        className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden cursor-pointer"
                    >


                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 text-2xl shadow-sm">
                                <Cpu size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                                Intelligent Systems
                            </h3>

                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                Advanced analytic engines that process fragmented clinical data into clear, unified insights, enabling faster and more accurate decision-making.
                            </p>

                            <div className="flex items-center text-amber-600 font-bold text-xs uppercase tracking-wider group-hover:gap-2 transition-all">
                                <span>Learn more</span>
                                <ArrowRight size={14} />
                            </div>
                        </div>
                    </div>

                </div>

                {/* === LEARN MORE MODAL === */}
                {activeCard && (
                    <LearnMoreModal
                        isOpen={!!activeCard}
                        onClose={() => setActiveCard(null)}
                        title={MODAL_CONTENT[activeCard].title}
                        content={MODAL_CONTENT[activeCard].content}
                        icon={MODAL_CONTENT[activeCard].icon}
                        colorClass={MODAL_CONTENT[activeCard].colorClass}
                        bgClass={MODAL_CONTENT[activeCard].bgClass}
                    />
                )}

            </div>
        </section>
    );
};

export default IntelligenceSection;
