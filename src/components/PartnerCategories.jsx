import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2,
    ArrowRight,
} from 'lucide-react';
import RegistrationModal from './RegistrationModal';


// ==================================================================================
// 🎨 MASTER LAYOUT CONTROLLER (LAYER 1 ONLY)
// ==================================================================================
// FIXED THEME: SOFT CLAY (NEUMORHEISM)
// ==================================================================================

const ACTIVE_THEME = 'SOFT_CLAY';

// ==================================================================================

const THEME_PRESETS = {
    // 1. THE CLASSIC (Current)
    CLEAN_SLATE: {
        container: "bg-white border border-slate-100 rounded-[3rem] shadow-sm",
        navPanel: "bg-transparent border-r-0",
        navBtn: { inactive: "text-slate-400 hover:bg-slate-50", active: "bg-white shadow-md text-slate-900 font-bold" },
        contentPanel: "bg-transparent",
        statsCard: "bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md text-slate-600",
        headers: { main: "text-slate-900", sub: "text-slate-400" }
    },

    // 2. PREMIUM GLASS
    GLASS_FROST: {
        container: "bg-white/40 backdrop-blur-xl border border-white/50 rounded-[3rem] shadow-2xl ring-1 ring-white/60",
        navPanel: "bg-white/10 backdrop-blur-md border-r border-white/20",
        navBtn: { inactive: "text-slate-500 hover:bg-white/30", active: "bg-white/80 shadow-lg backdrop-blur-lg text-slate-800 font-bold" },
        contentPanel: "bg-transparent",
        statsCard: "bg-white/40 border border-white/50 hover:bg-white/80 shadow-sm text-slate-700",
        headers: { main: "text-slate-800", sub: "text-slate-500" }
    },

    // 3. DARK MODE
    MIDNIGHT_MAGMA: {
        container: "bg-slate-900 border border-slate-800 rounded-[3rem] shadow-2xl",
        navPanel: "bg-slate-800/50 border-r border-slate-800",
        navBtn: { inactive: "text-slate-400 hover:bg-slate-800", active: "bg-slate-800 shadow-inner text-white border border-slate-700 font-bold" },
        contentPanel: "bg-transparent",
        statsCard: "bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-300",
        headers: { main: "text-white", sub: "text-slate-500" }
    },

    // 4. NEUMORPHIC (Soft Clay)
    SOFT_CLAY: {
        container: "bg-[#F0F2F5] border-none rounded-[3rem] shadow-[20px_20px_60px_#d1d3d6,-20px_-20px_60px_#ffffff]",
        navPanel: "bg-transparent",
        navBtn: { inactive: "text-slate-400 font-medium hover:text-slate-600 hover:shadow-[inset_2px_2px_5px_#d1d3d6,inset_-2px_-2px_5px_#ffffff]", active: "shadow-[5px_5px_10px_#d1d3d6,-5px_-5px_10px_#ffffff] text-slate-800 font-bold bg-[#F0F2F5]" },
        contentPanel: "bg-transparent",
        statsCard: "bg-[#F0F2F5] shadow-[5px_5px_10px_#d1d3d6,-5px_-5px_10px_#ffffff] hover:scale-[1.02] transition-transform text-slate-600",
        headers: { main: "text-slate-800", sub: "text-slate-400" }
    },

    // 5. CORPORATE
    CORPORATE_NAVY: {
        container: "bg-[#0F172A] border border-blue-900/30 rounded-[3rem] shadow-xl",
        navPanel: "bg-[#1E293B]",
        navBtn: { inactive: "text-blue-200/60 hover:text-white", active: "bg-blue-600 text-white shadow-lg font-bold" },
        contentPanel: "bg-[#0F172A]",
        statsCard: "bg-[#1E293B] border border-blue-900/50 text-blue-100",
        headers: { main: "text-white", sub: "text-blue-400" }
    },

    // 6. TECHNICAL / WIREFRAME
    WIREFRAME_TECH: {
        container: "bg-white border-[3px] border-slate-900 rounded-[3rem] shadow-none",
        navPanel: "bg-slate-50 border-r-[3px] border-slate-900",
        navBtn: { inactive: "text-slate-900 font-mono hover:underline decoration-2", active: "bg-slate-900 text-white font-mono border border-slate-900" },
        contentPanel: "bg-white",
        statsCard: "bg-transparent border-[2px] border-slate-900 border-dashed hover:border-solid text-slate-900 font-mono text-xs",
        headers: { main: "text-slate-900 font-mono tracking-tighter", sub: "text-slate-900 font-mono" }
    },

    // 7. TEAL & MINT
    MENTAL_TEAL: {
        container: "bg-teal-50 border border-teal-100 rounded-[3rem]",
        navPanel: "bg-teal-100/30",
        navBtn: { inactive: "text-teal-600 hover:bg-teal-100", active: "bg-teal-600 text-white shadow-lg" },
        contentPanel: "bg-transparent",
        statsCard: "bg-white border border-teal-100 text-teal-800",
        headers: { main: "text-teal-900", sub: "text-teal-500" }
    },

    // 8. ROYAL
    ROYAL_PURPLE: {
        container: "bg-purple-50 border border-purple-100 rounded-[3rem]",
        navPanel: "bg-white",
        navBtn: { inactive: "text-purple-400", active: "bg-purple-100 text-purple-900 font-bold border border-purple-200" },
        contentPanel: "bg-purple-50",
        statsCard: "bg-white shadow-sm border border-purple-100 text-purple-700",
        headers: { main: "text-purple-950", sub: "text-purple-400" }
    },

    // 9. WARM SUNSET
    SUNSET_GLOW: {
        container: "bg-gradient-to-br from-orange-50 to-rose-50 border border-orange-100 rounded-[3rem]",
        navPanel: "bg-white/50 backdrop-blur-sm",
        navBtn: { inactive: "text-orange-900/50", active: "bg-gradient-to-r from-orange-400 to-rose-400 text-white shadow-orange-200 shadow-xl" },
        contentPanel: "bg-transparent",
        statsCard: "bg-white/80 border border-orange-100 text-orange-800",
        headers: { main: "text-rose-900", sub: "text-orange-400" }
    },

    // 10. FOREST
    FOREST_MIST: {
        container: "bg-[#F0FDF4] border border-green-100 rounded-[3rem]",
        navPanel: "bg-[#DCFCE7]/50",
        navBtn: { inactive: "text-emerald-600/70", active: "bg-[#166534] text-white shadow-emerald-200 shadow-lg" },
        contentPanel: "bg-transparent",
        statsCard: "bg-white border border-green-100 text-emerald-800",
        headers: { main: "text-emerald-950", sub: "text-emerald-500" }
    },

    // 11. PAPER TEXTURE
    CREAM_PAPER: {
        container: "bg-[#FDFBF7] border border-[#E6E1D6] rounded-[3rem] shadow-sm",
        navPanel: "bg-[#F5F2EA] border-r border-[#E6E1D6]",
        navBtn: { inactive: "text-[#8C8880] italic serif", active: "bg-white border border-[#E6E1D6] text-[#4A4740] font-serif shadow-sm" },
        contentPanel: "bg-transparent",
        statsCard: "bg-white border border-[#E6E1D6] text-[#5C5850] font-serif",
        headers: { main: "text-[#2E2C28] font-serif", sub: "text-[#8C8880]" }
    },

    // 12. HIGH TECH / CARBON
    CARBON_FIBER: {
        container: "bg-[#171717] border border-neutral-800 rounded-[3rem]",
        navPanel: "bg-black/40",
        navBtn: { inactive: "text-neutral-500", active: "bg-[#222] border border-neutral-700 text-neutral-200" },
        contentPanel: "bg-transparent",
        statsCard: "bg-[#1A1A1A] border border-neutral-800 text-neutral-400 group-hover:bg-[#222] group-hover:text-white",
        headers: { main: "text-white", sub: "text-neutral-500" }
    },

    // 13. SKY
    AZURE_SKY: {
        container: "bg-sky-50 border border-sky-100 rounded-[3rem]",
        navPanel: "bg-sky-100/50",
        navBtn: { inactive: "text-sky-400", active: "bg-sky-500 text-white shadow-sky-200 shadow-lg" },
        contentPanel: "bg-transparent",
        statsCard: "bg-white border border-sky-100 text-sky-700",
        headers: { main: "text-sky-900", sub: "text-sky-400" }
    },

    // 14. FEMININE / SOFT
    ROSE_QUARTZ: {
        container: "bg-rose-50 border border-pink-100 rounded-[3rem]",
        navPanel: "bg-white/60",
        navBtn: { inactive: "text-pink-300", active: "bg-rose-400 text-white shadow-pink-200 shadow-xl" },
        contentPanel: "bg-transparent",
        statsCard: "bg-white border border-pink-100 text-rose-700",
        headers: { main: "text-rose-900", sub: "text-pink-400" }
    },

    // 15. MONOCHROME GREY
    SLATE_MONOLITH: {
        container: "bg-slate-200 border border-slate-300 rounded-[3rem]",
        navPanel: "bg-slate-300",
        navBtn: { inactive: "text-slate-500", active: "bg-slate-600 text-white" },
        contentPanel: "bg-slate-200",
        statsCard: "bg-slate-100 border border-slate-300 text-slate-700",
        headers: { main: "text-slate-800", sub: "text-slate-500" }
    },

    // 16. DEEP INDIGO
    INDIGO_DREAM: {
        container: "bg-indigo-50 border border-indigo-100 rounded-[3rem]",
        navPanel: "bg-indigo-100/30",
        navBtn: { inactive: "text-indigo-400", active: "bg-indigo-600 text-white shadow-indigo-200 shadow-xl" },
        contentPanel: "bg-transparent",
        statsCard: "bg-white border border-indigo-100 text-indigo-800",
        headers: { main: "text-indigo-950", sub: "text-indigo-400" }
    },

    // 17. CYBER
    NEON_NIGHTS: {
        container: "bg-black border border-cyan-500/30 rounded-[3rem] shadow-[0_0_30px_rgba(6,182,212,0.1)]",
        navPanel: "bg-black",
        navBtn: { inactive: "text-cyan-900", active: "bg-cyan-500/10 text-cyan-400 border border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]" },
        contentPanel: "bg-transparent",
        statsCard: "bg-black border border-cyan-900 text-cyan-300",
        headers: { main: "text-cyan-50", sub: "text-cyan-600" }
    },

    // 18. VINTAGE
    VINTAGE_WARMTH: {
        container: "bg-[#FDF6E3] border border-[#EEE8D5] rounded-[3rem]",
        navPanel: "bg-[#EEE8D5]/50",
        navBtn: { inactive: "text-[#93A1A1]", active: "bg-[#CB4B16] text-white" },
        contentPanel: "bg-transparent",
        statsCard: "bg-[#FDF6E3] border border-[#EEE8D5] text-[#586E75]",
        headers: { main: "text-073642", sub: "text-B58900" }
    },

    // 19. GHOST
    GHOST_WHITE: {
        container: "bg-transparent border border-white rounded-[3rem] shadow-none ring-1 ring-slate-100",
        navPanel: "bg-slate-50/50",
        navBtn: { inactive: "text-slate-300", active: "bg-slate-100 text-slate-900" },
        contentPanel: "bg-transparent",
        statsCard: "bg-transparent border border-slate-200 text-slate-500",
        headers: { main: "text-slate-900", sub: "text-slate-300" }
    },

    // 20. VOID
    PURE_BLACK: {
        container: "bg-black rounded-[3rem] border border-neutral-900",
        navPanel: "bg-[#111]",
        navBtn: { inactive: "text-[#666]", active: "bg-white text-black font-bold" },
        contentPanel: "bg-black",
        statsCard: "bg-[#111] border border-neutral-800 text-neutral-400 group-hover:bg-[#222] group-hover:text-white",
        headers: { main: "text-white", sub: "text-[#666]" }
    },
};


// --- ASSETS & ICONS ---

const PremiumBadge = ({ type = 'clinic', size = 24, className = '' }) => {
    const styles = {
        hr: {
            gradientOuter: ['#8B5CF6', '#7C3AED', '#4C1D95'],
            gradientInner: ['#E9D5FF', '#C4B5FD', '#A78BFA'],
            stroke: '#4C1D95',
            tick: '#FFFFFF',
        },
        clinic: {
            gradientOuter: ['#EF4444', '#DC2626', '#991B1B'],
            gradientInner: ['#FFE4E6', '#FECDD3', '#FDA4AF'],
            stroke: '#991B1B',
            tick: '#FFFFFF',
        },
        mentor: {
            gradientOuter: ['#FCD34D', '#F59E0B', '#B45309'],
            gradientInner: ['#FFFFFF', '#FDE68A', '#F59E0B'],
            stroke: '#B45309',
            tick: '#FFFFFF',
        },
        researcher: {
            gradientOuter: ['#22D3EE', '#0891B2', '#164E63'],
            gradientInner: ['#CFFAFE', '#67E8F9', '#0E7490'],
            stroke: '#155E75',
            tick: '#FFFFFF',
        },
        institute: {
            gradientOuter: ['#1E40AF', '#1E3A8A', '#0F172A'],
            gradientInner: ['#F1F5F9', '#CBD5E1', '#94A3B8'],
            stroke: '#0F172A',
            tick: '#FFFFFF',
        }
    };

    const currentStyle = styles[type] || styles.clinic;
    const uniqueId = `badge-${type}-${Math.random().toString(36).substr(2, 9)}`;
    const rosetteTransform = "translate(50, 50) scale(0.82) translate(-50, -56)";

    return (
        <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-sm">
                <defs>
                    <linearGradient id={`gradOuter-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={currentStyle.gradientOuter[0]} />
                        <stop offset="50%" stopColor={currentStyle.gradientOuter[1]} />
                        <stop offset="100%" stopColor={currentStyle.gradientOuter[2]} />
                    </linearGradient>
                    <linearGradient id={`gradInner-${uniqueId}`} x1="20%" y1="20%" x2="80%" y2="80%">
                        <stop offset="0%" stopColor={currentStyle.gradientInner[0]} />
                        <stop offset="50%" stopColor={currentStyle.gradientInner[1]} />
                        <stop offset="100%" stopColor={currentStyle.gradientInner[2]} />
                    </linearGradient>
                    <filter id={`shadow-${uniqueId}`} x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.3)" />
                    </filter>
                    <filter id={`inset-${uniqueId}`}>
                        <feOffset dx="0" dy="1" />
                        <feGaussianBlur stdDeviation="1" result="offset-blur" />
                        <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                        <feFlood floodColor="black" floodOpacity="0.2" result="color" />
                        <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                    </filter>
                </defs>

                <path d="M50 2 C54 2 57 8 61 9 C65 10 71 8 74 11 C77 14 77 20 80 23 C84 26 90 26 92 30 C94 34 91 40 92 44 C93 48 98 52 98 56 C98 60 93 64 92 68 C91 72 94 78 92 82 C90 86 84 86 80 89 C77 92 77 98 74 101 C71 104 65 102 61 103 C57 104 54 110 50 110 C46 110 43 104 39 103 C35 102 29 104 26 101 C23 98 23 92 20 89 C16 86 10 86 8 82 C6 78 9 72 8 68 C7 64 2 60 2 56 C2 52 7 48 8 44 C9 40 6 34 8 30 C10 26 16 26 20 23 C23 20 23 14 26 11 C29 8 35 10 39 9 C43 8 46 2 50 2 Z"
                    fill={`url(#gradOuter-${uniqueId})`} filter={`url(#shadow-${uniqueId})`} transform={rosetteTransform} />
                <path d="M50 8 C53 8 55 12 58 13 C61 14 66 12 68 14 C70 16 70 20 72 22 C75 25 80 25 82 28 C84 31 82 35 83 38 C84 41 88 44 88 47 C88 50 84 53 83 56 C82 59 84 64 82 67 C80 70 75 70 72 73 C70 75 70 79 68 81 C66 83 61 81 58 82 C55 83 53 87 50 87 C47 87 45 83 42 82 C39 81 34 83 32 81 C30 79 30 75 28 73 C25 70 20 70 18 67 C16 64 18 59 17 56 C16 53 12 50 12 47 C12 44 16 41 17 38 C18 35 16 31 18 28 C20 25 25 25 28 22 C30 20 30 16 32 14 C34 12 39 14 42 13 C45 12 47 8 50 8 Z"
                    fill={`url(#gradInner-${uniqueId})`} transform={rosetteTransform} />
                <circle cx="50" cy="50" r="32" fill={`url(#gradOuter-${uniqueId})`} stroke={currentStyle.stroke} strokeWidth="0.5" strokeOpacity="0.3" />
                <path d="M42 63 L30 51 L34 47 L42 55 L66 31 L70 35 L42 63 Z" fill={currentStyle.tick} filter={`url(#inset-${uniqueId})`} />
                <ellipse cx="40" cy="35" rx="20" ry="10" fill="white" fillOpacity="0.2" transform="rotate(-15 40 35)" />
            </svg>
        </div>
    );
};

// --- ELITE CUSTOM ICONS (SVG - REFRESHED) ---

const IconHospital = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M9 12H15" stroke="currentColor" strokeWidth="2" />
        <path d="M12 9V15" stroke="currentColor" strokeWidth="2" />
        <path d="M10 20V22" strokeOpacity="0.5" />
        <path d="M14 20V22" strokeOpacity="0.5" />
        <circle cx="12" cy="7" r="1" fill="currentColor" fillOpacity="0.2" />
    </svg>
);

const IconHR = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21V19C16 17.9 16 17 14 17H10C8 17 8 17.9 8 19V21" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M4 11V11.01" stroke="currentColor" strokeWidth="3" />
        <path d="M20 11V11.01" stroke="currentColor" strokeWidth="3" />
        <path d="M2 17L4 15" strokeOpacity="0.5" />
        <path d="M22 17L20 15" strokeOpacity="0.5" />
    </svg>
);

const IconInstitute = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10L12 5L2 10L12 15L22 10Z" stroke="currentColor" strokeWidth="2" />
        <path d="M6 12V17C6 17.5 8 19 12 19C16 19 18 17.5 18 17V12" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="5" x2="12" y2="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="2" r="1.5" fill="currentColor" />
    </svg>
);

const IconMentor = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.2" />
        <path d="M12 2V4" strokeOpacity="0.5" />
        <path d="M12 20V22" strokeOpacity="0.5" />
        <path d="M2 12H4" strokeOpacity="0.5" />
        <path d="M20 12H22" strokeOpacity="0.5" />
    </svg>
);

const IconResearcher = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2H14" stroke="currentColor" strokeWidth="2" />
        <path d="M12 2V6" stroke="currentColor" strokeWidth="2" />
        <path d="M12 6C7.5 6 6.5 8 6.5 10C6.5 13 8 14 8 17H16C16 14 17.5 13 17.5 10C17.5 8 16.5 6 12 6Z" stroke="currentColor" strokeWidth="2" />
        <path d="M9 22H15" stroke="currentColor" strokeWidth="2" />
        <path d="M8 17L9 22" stroke="currentColor" />
        <path d="M16 17L15 22" stroke="currentColor" />
        <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.2" />
    </svg>
);


// --- DATA ---
const CATEGORIES_DATA = {
    'Hospitals': {
        title: 'Apex Hospital', // NATURAL 2-WORD NAME
        subtitle: 'TRUSTED RECORDS. SECURE ACCESS. INTELLIGENT CARE.',
        description: 'Serving the community with excellence in healthcare and patient safety through verified medical workflows.',
        type: 'clinic',
        icon: IconHospital,
        accent: '#EF4444',
        coverImage: "/assets/hospital_lobby_realistic_1768403118460.png", // GENERIC PREMIUM LOBBY (No text)
        profileImage: "/assets/logo_hospital_apex_clinical_1768473450991.png", // MATCHES 'APEX'
        coverColor: "from-red-500 to-orange-500",
        stats: [
            'Access clinical data via partner Hospitals.',
            'Recruit assistants from verified Institutes.',
            'Validate findings with global peer networks.'
        ],
        role: 'hospital',
        buttonGradient: "from-orange-500 via-[#e08e23] to-[#0f172a]"
    },
    'HR Agencies': {
        title: 'Veritas Talent',
        subtitle: 'VERIFIED CREDENTIALS. GLOBAL COMPLIANCE. RAPID SCALE.',
        description: 'Empowering India\'s medical workforce with pre-verified talent pipelines for rapid deployment.',
        type: 'hr',
        icon: IconHR,
        accent: '#8B5CF6',
        coverImage: "/assets/leadership_panel_v2_1768403427546.png", // UPDATED: More corporate/agency feel
        profileImage: "/assets/logo_hr_veritas_talent_1768473486472.png",
        coverColor: "from-purple-500 to-indigo-500",
        stats: [
            'Zero fees for Agency Verification & Onboarding.',
            'Recruit top graduates from partner Institutes.',
            'Supply Hospitals with verified medical staff.'
        ],
        role: 'recruiter',
        buttonGradient: "from-purple-500 via-indigo-600 to-[#0f172a]"
    },
    'Institutes': {
        title: 'Meridian Academy',
        subtitle: 'NURTURING GENIUS. CERTIFYING TRUST. SHAPING FUTURES.',
        description: 'Leading the frontier of medical education and research with globally certified academic standards.',
        type: 'institute',
        icon: IconInstitute,
        accent: '#3B82F6',
        coverImage: "/assets/institute_students_campus_v2_1768472882283.png",
        profileImage: "/assets/logo_institute_meridian_academy_1768473502325.png",
        coverColor: "from-blue-500 to-blue-700",
        stats: [
            'Free Verification for all Educational Institutes.',
            'Secure residency placements at partner Hospitals.',
            'Integrate mentor masterclasses into curriculum.'
        ],
        role: 'institute',
        buttonGradient: "from-blue-500 via-blue-800 to-[#0f172a]"
    },
    'Doctors': {
        title: 'Dr. Rajesh Khanna',
        subtitle: 'LEGACY & GOVERNANCE FOR THE NEXT ERA.',
        description: 'Join the apex tier of medical leadership, architecting future-proof career paths for human intelligence in healthcare.',
        type: 'mentor',
        icon: IconMentor, // Keeping icon variable name same for now
        accent: '#F59E0B',
        coverImage: "/assets/scene_mentor_virtual_class_laptop_1768474661429.png",
        profileImage: "/assets/portrait_mentor_indian_male_30s_1768474645321.png",
        coverColor: "from-orange-400 to-orange-500",
        stats: [
            'Free Profile Verification for Doctors.',
            'Mentor the next generation of medical professionals.',
            'Deliver specialized modules at Institutes.'
        ],
        role: 'doctor',
        buttonGradient: "from-[#F59E0B] via-[#E08E23] to-[#0F172A]"
    },
    'Researchers': {
        title: 'Dr. Sarah Jenkins',
        subtitle: 'GROUNDBREAKING DATA. PEER VALIDATION. GLOBAL IMPACT.',
        description: 'Pioneering scientific discovery through peer-validated data and decentralized collaboration.',
        type: 'researcher',
        icon: IconResearcher,
        accent: '#06B6D4',
        coverImage: "/assets/researcher_science_lab_v2_1768472906120.png",
        profileImage: "/assets/portrait_researcher_female_1768473519591.png",
        coverColor: "from-cyan-500 to-teal-500",
        stats: [
            'Free Verification for Research Professionals.',
            'Access clinical data via partner Hospitals.',
            'Recruit assistants from verified Institutes.'
        ],
        role: 'researcher',
        buttonGradient: "from-cyan-500 via-teal-700 to-[#0f172a]"
    }
};

// --- Developer Control Panel (Extracted) ---


const PartnerCategories = ({ activeTab = 'Doctors', onTabChange = () => { } }) => {
    // --- MODAL LOGIC ---
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openRegister = () => {
        setIsModalOpen(true);
    };

    const currentKey = CATEGORIES_DATA[activeTab] ? activeTab : 'Doctors';
    const content = CATEGORIES_DATA[currentKey];

    // Unified Theme Logic
    const [activeThemeName, setActiveThemeName] = useState('SOFT_CLAY');
    const T = THEME_PRESETS[activeThemeName] || THEME_PRESETS.SOFT_CLAY;

    // Helper to determine Page Background based on Theme
    const getPageBg = (themeName) => {
        if (themeName === 'PURE_BLACK') return 'bg-black';
        if (themeName === 'MIDNIGHT_MAGMA') return 'bg-slate-950';
        if (themeName === 'CORPORATE_NAVY') return 'bg-[#020617]';
        if (themeName === 'CARBON_FIBER') return 'bg-neutral-950';
        if (themeName === 'NEON_NIGHTS') return 'bg-black';
        return 'bg-white';
    };

    return (
        <section className={`w-full pt-12 pb-24 font-sans transition-colors duration-500 ${getPageBg(activeThemeName)}`}>
            {/* Developer Controls Removed */}

            <div className="w-full flex flex-col items-center">

                {/* Header - MATCHING GLOBAL MINDS STYLE */}
                {/* Increased margin-bottom (mb-32) to prevent text from overlapping with the cards below */}
                <div className="text-center mb-32 max-w-4xl px-4 z-10 relative">
                    <p className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">
                        ECOSYSTEM
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                        Verified Profiles <span className="text-blue-600">×</span> Trusted Ecosystem
                    </h2>
                </div>

                {/* 
                   ========================================
                   LAYER 1: MAIN LAYOUT CONTAINER
                   Controlled by THEME_PRESETS[ACTIVE_THEME]
                   ========================================
                */}
                <div className={`w-[90%] max-w-[1300px] h-auto md:h-[480px] min-h-[450px] flex flex-col lg:flex-row items-stretch relative transition-all duration-500 ${T.container}`}>

                    {/* LEFT PANEL: NAVIGATION */}
                    <div className={`w-full lg:w-1/4 p-8 relative overflow-hidden flex flex-col gap-3 rounded-l-[3rem] transition-colors duration-500 ${T.navPanel}`}>
                        <div className="relative z-10">
                            {/* RENAMED LABEL */}
                            <div className={`mb-6 pl-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${T.headers.sub}`}>
                                PARTNER TYPE
                            </div>
                            {Object.keys(CATEGORIES_DATA).map((key) => {
                                const item = CATEGORIES_DATA[key];
                                const isActive = currentKey === key;
                                const Icon = item.icon;

                                return (
                                    <button
                                        key={key}
                                        onClick={() => onTabChange(key)}
                                        className={`
                                            w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 flex items-center gap-4 group relative
                                            ${isActive
                                                ? `${T.navBtn.active}`
                                                : `${T.navBtn.inactive}`
                                            }
                                        `}
                                    >
                                        <div
                                            // FIXED VISIBILITY: Removed opacity-10, used bg-black/5 for inactive
                                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive ? '' : 'bg-black/5'}`}
                                            style={isActive ? { backgroundColor: `${item.accent}15`, color: item.accent } : {}}
                                        >
                                            <Icon size={20} />
                                        </div>
                                        <span className="tracking-wide text-[13px]">{key}</span>
                                        {isActive && (
                                            <div className="w-1.5 h-6 absolute right-4 top-1/2 -translate-y-1/2 rounded-full" style={{ backgroundColor: item.accent }} />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT PANEL: CONTENT & IMPACT */}
                    {/* Wrapper includes Profile Card (Center) and Impact Stats (Right) */}
                    <div className={`flex-1 p-8 lg:p-12 flex flex-col lg:flex-row gap-12 items-center relative rounded-r-[3rem] transition-colors duration-500 ${T.contentPanel}`}>

                        {/* LAYER 2: THE PROFILE CARD (FIXED - DO NOT TOUCH STYLE) */}
                        <div className="w-full lg:w-[420px] flex justify-center z-20">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentKey}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="relative w-full"
                                >
                                    <div
                                        className="p-6 rounded-[3.5rem] shadow-xl border transition-colors duration-500"
                                        style={{
                                            backgroundColor: `${content.accent}10`,
                                            borderColor: `${content.accent}25`
                                        }}
                                    >
                                        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl relative flex flex-col min-h-[600px] justify-between">

                                            {/* COVER SECTION - NO DOTS */}
                                            <div className="h-40 relative">
                                                <img
                                                    src={content.coverImage}
                                                    alt="Cover"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            <div className="px-10 pb-10 relative flex flex-col">
                                                <div className="relative -mt-20 mb-8 self-start">
                                                    <div className="w-36 h-36 rounded-full border-[10px] border-white shadow-lg bg-white overflow-hidden relative">
                                                        <img
                                                            src={content.profileImage}
                                                            alt="Profile"
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="mb-8">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-[28px] font-bold text-[#0f172a] tracking-tight">
                                                            {content.title}
                                                        </h3>
                                                        <PremiumBadge type={content.type} size={32} />
                                                    </div>
                                                    <div className="text-[11px] font-black tracking-[0.15em] text-[#94a3b8] uppercase">
                                                        {content.subtitle}
                                                    </div>
                                                    <p className="text-[14px] leading-relaxed text-[#64748b] font-medium opacity-90 mt-4">
                                                        {content.description}
                                                    </p>
                                                </div>

                                                <button
                                                    onClick={openRegister}
                                                    className={`w-full py-4 rounded-[2rem] text-white font-black text-[14px] tracking-[0.1em] uppercase transition-all duration-300 hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3 bg-gradient-to-r ${content.buttonGradient}`}
                                                >
                                                    <span>VERIFY AS {currentKey.toUpperCase()}</span>
                                                    <ArrowRight size={18} strokeWidth={3} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* RIGHT COL: INTEGRATION & IMPACT (Controlled by Theme) */}
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="space-y-1">
                                {/* Why Verify? Header */}
                                <h4 className={`text-lg font-bold tracking-tight ${T.headers.main}`}>Why Verify?</h4>
                                <p className={`text-xs ${T.headers.sub}`}>Unlock ecosystem-wide benefits.</p>
                            </div>

                            <div className="space-y-4">
                                {content.stats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * i }}
                                        className={`flex gap-4 p-4 rounded-xl transition-all group duration-300 ${T.statsCard}`}
                                    >
                                        <div
                                            className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-colors duration-300"
                                            style={{ color: content.accent, backgroundColor: `${content.accent}15` }}
                                        >
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <p className="text-[13px] leading-relaxed font-medium">
                                            {stat}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Role-Based Verification Modal */}
            <RegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                partnerType={currentKey}
                accentColor={content.accent}
            />

        </section>
    );
};

export default PartnerCategories;
