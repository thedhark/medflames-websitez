import React from 'react';
import { motion } from 'framer-motion';

const DNAHelix = () => {
    // Ultra-High-res DNA: High density for solid structure feel
    const numPairs = 120; // Increased to fill the longer length
    const pairs = Array.from({ length: numPairs }, (_, i) => i);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {/* 
                Position: Stretches diagonally from Bottom-Left to Top-Right.
                Responsive Rotation: -60deg for portrait (steep), -25deg for landscape/desktop.
                We use a wider container to ensure continuity.
                STRETCHED: Increased width to 300% to elongate the sine waves.
                OPACITY: Reduced to 40% (0.4) for subtler look.
            */}
            <div className="absolute top-1/2 left-1/2 w-[700%] md:w-[300%] h-96 -translate-x-1/2 -translate-y-1/2 rotate-[-60deg] md:rotate-[-25deg] flex items-center justify-between opacity-40 mix-blend-overlay">

                {pairs.map((i) => (
                    <DNABasePair key={i} index={i} total={numPairs} />
                ))}
            </div>
        </div>
    );
};

const DNABasePair = ({ index, total }) => {
    // PERFECT SYNC LOGIC:
    // We want exactly 3 full sine waves across the container.
    // The delay must be proportional to position (index / total).
    // duration = 12s.
    // delay = - (index / total) * duration * 4 (Stretched to 4 waves for length).

    return (
        <div
            className="flex-1 h-full flex flex-col items-center justify-center relative"
            style={{
                perspective: "1000px"
            }}
        >
            <motion.div
                animate={{
                    rotateX: [0, 360],
                }}
                transition={{
                    duration: 12, // Slow, majestic rotation
                    ease: "linear",
                    repeat: Infinity,
                    // Precise phase delay creates the smooth traveling wave
                    delay: - (index / total) * 12 * 4
                }}
                className="w-full h-32 md:h-48 flex flex-col justify-between items-center relative"
                style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center"
                }}
            >
                {/* Strand 1 (Backbone Node) - Detailed */}
                <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)] relative">
                    {/* Inner Core for Detail */}
                    <div className="absolute inset-[20%] bg-blue-100 rounded-full" />
                </div>

                {/* Hydrogen Bond (Connector) - Detailed Gradient */}
                {/* Thin line that fades at edges to look connected to nodes, solid in center */}
                <div className="w-[1px] h-full bg-gradient-to-b from-white/30 via-white/80 to-white/30 shadow-[0_0_8px_rgba(255,255,255,0.3)]" />

                {/* Strand 2 (Backbone Node) - Detailed */}
                <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)] relative">
                    <div className="absolute inset-[20%] bg-blue-100 rounded-full" />
                </div>

            </motion.div>
        </div>
    );
};

const AiInsightsSection = ({ onCategorySelect }) => {
    return (
        <section className="w-full min-h-screen bg-white pb-2 pt-0 flex flex-col items-center justify-start font-inter">

            {/* === HERO CARD === */}
            {/* Flattened Top, Curved Bottom. Removed border-b to fix "white line" issue. */}
            <div className="relative w-full max-w-full min-h-[750px] md:h-[90vh] md:min-h-[700px] rounded-b-[3rem] rounded-t-none overflow-hidden bg-gradient-to-br from-[#80acff] to-[#a3c2ff] flex flex-col items-center justify-center shadow-lg">

                {/* === DNA ANIMATION (Sensible, Logical, Fixed Edges) === */}
                <DNAHelix />

                {/* Top Spotlight Effect for "Attached" feel */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                {/* === 1. SIMPLIFIED FLOATING BACKGROUNDS (Subtle & Sensible) === */}
                {/* Top Left - Subtle White Circle */}
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 md:left-32 w-24 h-24 rounded-full bg-white/10 blur-2xl"
                />

                {/* Top Right - Subtle White Pill */}
                <motion.div
                    animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-40 right-10 md:right-40 w-32 h-16 rounded-full bg-white/10 blur-xl rotate-12"
                />

                {/* Bottom Left - Floating Small Plus (Medical Theme) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-32 left-20 opacity-20"
                >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                </motion.div>


                {/* === CONTENT WRAPPER (Scaled for Desktop, Full Size for Mobile) === */}
                <div className="flex flex-col items-center transform scale-100 md:scale-[0.85] origin-center w-full px-4">

                    {/* === 2. CENTER PIECE: GLASS LOGO CARD === */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative p-0 mb-6 md:mb-8 flex items-center justify-center min-w-[280px] md:min-w-[400px]"
                    >
                        {/* Logo & Text in Card */}
                        <div className="flex flex-col items-center">
                            <div className="w-[240px] md:w-[350px] relative">
                                <img
                                    src="/assets/medflames_hero_logo.png"
                                    alt="Medflames - Empowering Healthcare"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </motion.div>


                    {/* === 3. MAIN HEADLINES === */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center z-10 px-2"
                    >
                        <h2 className="text-4xl md:text-7xl font-bold text-white drop-shadow-md mb-4 leading-tight">
                            The world's largest<br />
                            emerging health care platform.
                        </h2>
                        <p className="text-white/90 text-sm md:text-xl font-medium tracking-wide mb-10">
                            Connect & grow within the elite medical ecosystem.
                        </p>

                        {/* === 4. CTA BUTTON === */}
                        <button
                            onClick={() => document.getElementById('verified-partners')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-[#80acff] px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-base tracking-widest shadow-lg hover:scale-105 transition-transform uppercase"
                        >
                            Onboard Now
                        </button>
                    </motion.div>

                    {/* === 5. BOTTOM ICONS (Recruiters, Institutes, Doctors, Hospitals, Researchers) === */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12 md:mt-20"
                    >
                        {/* 1. Recruiters */}
                        <div onClick={() => onCategorySelect && onCategorySelect('HR Agencies')} className="flex flex-col items-center gap-3 group cursor-pointer">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 group-hover:bg-white group-hover:text-[#80acff] transition-colors text-white">
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                            </div>
                            <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mt-1 drop-shadow-sm">Recruiters</span>
                        </div>

                        {/* 2. Institutes */}
                        <div onClick={() => onCategorySelect && onCategorySelect('Institutes')} className="flex flex-col items-center gap-3 group cursor-pointer">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 group-hover:bg-white group-hover:text-[#80acff] transition-colors text-white">
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" /></svg>
                            </div>
                            <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mt-1 drop-shadow-sm">Institutes</span>
                        </div>

                        {/* 3. Doctors */}
                        <div onClick={() => onCategorySelect && onCategorySelect('Doctors')} className="flex flex-col items-center gap-3 group cursor-pointer">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 group-hover:bg-white group-hover:text-[#80acff] transition-colors text-white">
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
                            </div>
                            <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mt-1 drop-shadow-sm">Doctors</span>
                        </div>

                        {/* 4. Hospitals */}
                        <div onClick={() => onCategorySelect && onCategorySelect('Hospitals')} className="flex flex-col items-center gap-3 group cursor-pointer">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 group-hover:bg-white group-hover:text-[#80acff] transition-colors text-white">
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" /></svg>
                            </div>
                            <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mt-1 drop-shadow-sm">Hospitals</span>
                        </div>

                        {/* 5. Researchers (Added) */}
                        <div onClick={() => onCategorySelect && onCategorySelect('Researchers')} className="flex flex-col items-center gap-3 group cursor-pointer">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 group-hover:bg-white group-hover:text-[#80acff] transition-colors text-white">
                                {/* Simple Microscope Icon for Research */}
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /></svg>
                            </div>
                            <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mt-1 drop-shadow-sm">Researchers</span>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AiInsightsSection;
