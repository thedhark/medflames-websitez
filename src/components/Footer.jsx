import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const FAQ_DATA = [
    { q: "Is verification free?", a: "Absolutely. We believe trust is a fundamental right. Basic credential verification is 100% free for all medical talent and students.", color: "bg-emerald-500" },
    { q: "How does the ecosystem help?", a: "We dissolve the barriers between disconnected institutions. MedFlames unifies hospitals, universities, and talent into a single, cooperative trust network.", color: "bg-blue-500" },
    { q: "How do we connect you?", a: "Our 'Trust Layer' builds a direct, cryptographic bridge between you and your institutions, ensuring your credentials travel instantly and securely.", color: "bg-purple-500" },
    { q: "Who can join the network?", a: "Any accredited medical institution, verified hospital, licensed practitioner, or medical student can join the MedFlames ecosystem.", color: "bg-orange-500" },
    { q: "What about data privacy?", a: "Your data is encrypted and sovereign. You own your credentials; we just provide the secure rails for them to travel.", color: "bg-cyan-500" },
    { q: "Can students join?", a: "Yes! Students get a 'Future Professional' profile to track clinical hours, internships, and verified academic achievements.", color: "bg-rose-500" },
    { q: "Do you support international verification?", a: "We are expanding globally. Currently, we support major Indian medical councils and are piloting international cross-verification.", color: "bg-indigo-500" },
    { q: "How fast is onboarding?", a: "Instant for individuals. Institutions go through a rigorous 24-48 hour vetting process to maintain ecosystem integrity.", color: "bg-teal-500" },
    { q: "Is it compliant?", a: "We adhere to NMC (National Medical Commission) guidelines and global data protection standards (GDPR/DPDP).", color: "bg-red-500" },
    { q: "Can HR agencies use this?", a: "Yes. Verified agencies get 'Recruiter Access' to source pre-vetted talent, saving 40% on background checks.", color: "bg-violet-500" },
    { q: "What is the 'Trust Layer'?", a: "It's our proprietary verification engine that validates credentials directly at the source (the issuing institute).", color: "bg-lime-500" },
    { q: "Is it secure?", a: "Bank-grade security. We use blockchain-inspired ledger integrity to ensure no credential can ever be forged or tampered with.", color: "bg-amber-500" },
    { q: "How do hospitals benefit?", a: "Hospitals get zero-cost access to verify staff, streamline residency programs, and recruit top talent instantly.", color: "bg-fuchsia-500" },
    { q: "Why focus on students?", a: "Students are the future. By verifying them early, we build a career-long history of trust that helps them land better opportunities.", color: "bg-pink-500" },
    { q: "Can I integrate my existing HRMS?", a: "Yes, our API allows hospitals and institutes to plug MedFlames verification directly into their existing software.", color: "bg-sky-500" },
    { q: "What is a 'Verified Profile'?", a: "A profile with a 'Blue Check' that means your identity and credentials have been cryptographically proven by an authority.", color: "bg-green-500" },
    { q: "Do you charge mainly for verification?", a: "No. Verification is free. We charge for premium recruitment tools and advanced analytics for institutions.", color: "bg-yellow-500" },
    { q: "How do research grants work?", a: "Researchers can publish verified data, attracting grants from institutions looking for credible, proven scientific work.", color: "bg-slate-500" },
    { q: "Can I update my profile?", a: "Always. As you gain new skills or degrees, your profile grows with you, maintaining a living record of your career.", color: "bg-zinc-500" },
    { q: "How do I get support?", a: "Our dedicated partner success team is available 24/7 to help institutes and hospitals onboard smoothly.", color: "bg-neutral-500" }
];

const Footer = () => {


    return (
        <footer className="w-full bg-white text-slate-900 pt-24 pb-8 relative z-20 mt-12 overflow-hidden">

            {/* Background Watermark Text - FINAL POSITION */}
            <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden">
                <span
                    className="absolute whitespace-nowrap bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow bg-gradient-to-r from-orange-400 via-cyan-400 to-purple-500"
                    style={{
                        // Typography
                        fontFamily: "sans-serif",
                        fontSize: "13vw",
                        fontWeight: 900,
                        letterSpacing: "-0.05em",
                        textTransform: "uppercase",

                        // Visuals
                        opacity: 0.3,
                        mixBlendMode: "normal",

                        // Position
                        top: "81%",
                        left: "50%",
                        transform: "translate(-50%, -50%) scale(1.2)",

                        // Animation
                        animationDuration: "15s",

                        lineHeight: 0.8
                    }}
                >
                    MedFlames
                </span>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">

                {/* LEFT: Quote Card */}
                <div className="relative lg:w-1/2 flex justify-center">
                    {/* The Card */}
                    <div
                        className={`relative bg-gradient-to-br from-blue-600 to-indigo-700 p-10 md:p-12 rounded-[2rem] shadow-2xl max-w-md text-white`}
                        style={{
                            boxShadow: `0 20px 50px -10px rgba(59, 130, 246, 0.4)`
                        }}
                    >
                        <p className="text-lg md:text-xl font-medium leading-relaxed text-center relative z-10">
                            "Architecting a <span className="text-blue-200 font-bold">scalable, trustable</span> ecosystem for business and education. We verify knowledge to serve a higher purpose—transforming career history into an undeniable asset for the entire medical world."
                        </p>
                    </div>
                </div>

                {/* RIGHT: CTA Content */}
                <div className="lg:w-1/2 flex flex-col items-start gap-6 h-[300px] overflow-hidden relative">

                    {/* FADING MASKS REMOVED */}

                    <motion.div
                        className="flex flex-col gap-6 w-full max-w-lg"
                        animate={{ y: [0, -1450] }}
                        transition={{
                            repeat: Infinity,
                            duration: 60,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                    >
                        {/* Duplicated List for Infinite Scroll */}
                        {[...FAQ_DATA, ...FAQ_DATA].map((faq, index) => (
                            <div key={index} className="space-y-2 group">
                                <h3 className="text-slate-900 font-bold text-xl flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                                    <span className={`w-2 h-2 rounded-full ${faq.color}`}></span>
                                    {faq.q}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed pl-4 border-l-2 border-slate-100 group-hover:border-blue-200 transition-colors">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-slate-100 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright */}
                    <div className="flex items-center gap-4 text-slate-400 text-sm">
                        <span>© 2026 Medflames. All rights reserved.</span>
                        <span className="hidden md:block w-1 h-1 bg-slate-300 rounded-full" />
                        <span className="hidden md:block text-slate-400">Powered by Hitas Core</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-50 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center text-slate-400 transition-colors">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-50 hover:bg-sky-50 hover:text-sky-500 flex items-center justify-center text-slate-400 transition-colors">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-50 hover:bg-rose-50 hover:text-rose-500 flex items-center justify-center text-slate-400 transition-colors">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
