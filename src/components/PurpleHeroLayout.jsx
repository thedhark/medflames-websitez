import React, { useState } from 'react';

const PurpleHeroLayout = () => {
    // === THEME ENGINE ===
    // Define the "Situations" / Themes
    const THEMES = {
        violet: {
            id: 'violet',
            name: 'Neon Violet',
            bg: 'bg-gradient-to-br from-[#8e78ff] to-[#7059f5]',
            circle: 'from-[#9d8aff] to-[#7f69fa]',
            accent: 'bg-[#4ecdd4]', // Cyan
            accentText: 'text-[#4ecdd4]',
            textMain: 'text-white',
            textSub: 'text-violet-200',
            glow: 'shadow-[0_20px_50px_rgba(112,89,245,0.4)]',
            timerText: 'text-[#8e78ff]'
        },
        ocean: {
            id: 'ocean',
            name: 'Ocean Depths',
            bg: 'bg-gradient-to-br from-[#0f4b6e] to-[#0b3a55]',
            circle: 'from-[#1c7fa6] to-[#105a78]',
            accent: 'bg-[#41ffc9]', // Mint
            accentText: 'text-[#41ffc9]',
            textMain: 'text-white',
            textSub: 'text-cyan-200',
            glow: 'shadow-[0_20px_50px_rgba(11,58,85,0.4)]',
            timerText: 'text-[#0f4b6e]'
        },
        flame: {
            id: 'flame',
            name: 'Midnight Flame',
            bg: 'bg-gradient-to-br from-[#53132e] to-[#36091c]',
            circle: 'from-[#8c264a] to-[#611631]',
            accent: 'bg-[#ff6b6b]', // Hot Red
            accentText: 'text-[#ff6b6b]',
            textMain: 'text-white',
            textSub: 'text-rose-200',
            glow: 'shadow-[0_20px_50px_rgba(83,19,46,0.4)]',
            timerText: 'text-[#53132e]'
        },
        forest: {
            id: 'forest',
            name: 'Emerald Glass',
            bg: 'bg-gradient-to-br from-[#124d35] to-[#092b1d]',
            circle: 'from-[#1e7a54] to-[#124d35]',
            accent: 'bg-[#41ff69]', // Neon Green
            accentText: 'text-[#41ff69]',
            textMain: 'text-white',
            textSub: 'text-emerald-200',
            glow: 'shadow-[0_20px_50px_rgba(18,77,53,0.4)]',
            timerText: 'text-[#124d35]'
        }
    };

    const [activeTheme, setActiveTheme] = useState('violet');
    const theme = THEMES[activeTheme];

    return (
        <section className={`relative w-full min-h-screen ${theme.bg} transition-colors duration-1000 overflow-hidden font-sans text-white`}>

            {/* === 1. TOP NAVIGATION === */}
            <div className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-6 font-medium">
                <div className="text-2xl font-bold tracking-wide">Neonmel</div>

                {/* Right Nav Links */}
                <div className="hidden md:flex items-center gap-8 text-sm opacity-90">
                    <a href="#" className="hover:opacity-100 transition">About Project</a>
                    <a href="#" className="hover:opacity-100 transition">Team</a>
                    <a href="#" className="hover:opacity-100 transition">Contacts</a>
                    <a href="#" className="hover:opacity-100 transition">White Paper</a>
                    <div className="flex items-center gap-1 cursor-pointer hover:opacity-100 transition">
                        <span>RU</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>

            {/* === 2. BACKGROUND GEOMETRY (The "Glass Socket Sidebar") === */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <svg
                    viewBox="0 0 1440 900"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full object-cover"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="rgba(255, 255, 255, 0.03)"
                        d="M1440 180 
                           Q1220 180 1150 380 
                           A 240 240 0 0 0 1150 720
                           Q1220 880 1440 900 
                           V180 Z"
                    />
                </svg>
            </div>

            {/* === 3. THE CIRCLE "LOGO" (Dynamic Colors) === */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br ${theme.circle} ${theme.glow} transition-all duration-1000 flex items-center justify-center`}>
                {/* Inner Ring */}
                <div className="w-[450px] h-[450px] rounded-full border border-white/20 flex items-center justify-center">
                    {/* The "P" Logo */}
                    <span className="text-[15rem] text-white/30 font-serif translate-y-[-10px]">P</span>
                </div>
                {/* Orbiting Dot */}
                <div className="absolute bottom-24 right-24 w-8 h-8 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
            </div>



            {/* === 5. FLOATING ELEMENTS === */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-10 text-white/70 z-40">
                <a href="#" className="hover:text-white transition -rotate-90 text-[10px] tracking-widest font-bold">FB</a>
                <a href="#" className="hover:text-white transition -rotate-90 text-[10px] tracking-widest font-bold">TW</a>
                <a href="#" className="hover:text-white transition -rotate-90 text-[10px] tracking-widest font-bold">VK</a>
            </div>

            <div className="absolute right-12 top-1/2 -translate-y-[20%] flex flex-col items-center gap-4 z-40">
                <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold rotate-90 whitespace-nowrap">Scroll Down</span>
                <div className="w-[1px] h-24 bg-white/20 mt-8"></div>
                <svg className="w-4 h-4 text-white/40 animate-bounce mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </div>

            <button className="absolute bottom-12 right-12 z-50 w-14 h-14 bg-[#54a9eb] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-6 h-6 transform -translate-x-0.5 translate-y-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
            </button>


            {/* === SITUATION CONTROL PANEL (Theme Switcher) === */}
            <div className="absolute bottom-8 left-8 z-50 bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex gap-4">
                {Object.values(THEMES).map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setActiveTheme(t.id)}
                        className={`w-10 h-10 rounded-full border-2 transition-all transform hover:scale-110 ${activeTheme === t.id ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'}`}
                        style={{
                            // Preview Gradient
                            background: `linear-gradient(135deg, ${t.id === 'violet' ? '#8e78ff, #7f69fa' : t.id === 'ocean' ? '#1c7fa6, #105a78' : t.id === 'flame' ? '#ff6b6b, #500f28' : '#41ff69, #0e3d23'})`
                        }}
                        title={t.name}
                    >
                    </button>
                ))}
            </div>

        </section>
    );
};

export default PurpleHeroLayout;
