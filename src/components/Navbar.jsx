import React, { useState, useEffect } from 'react';
import MedflamesLogo from './MedflamesLogo';
import LoginModal from './LoginModal';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 20);

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const scrollToVerified = () => {
        const element = document.getElementById('verified-partners');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>

                {/* === PREMIUM LAYERED GLASS COATING === */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                    {/* 1. Base Blur Layer */}
                    <div className="absolute inset-0 backdrop-blur-3xl bg-white/80"></div>

                    {/* 2. Glass "Coating" Layer (White tint - making it whiter) */}
                    <div className={`absolute inset-0 bg-white transition-opacity duration-500 ${scrolled ? 'opacity-95' : 'opacity-90'}`}></div>

                    {/* 3. Shine/Refraction Edge (Top Highlight) */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>

                    {/* 4. Bottom Border & Shadow (REMOVED to fix white line issue) */}
                    <div className={`absolute bottom-0 left-0 w-full h-[1px] transition-all duration-500 bg-transparent`}></div>
                </div>

                <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-1' : 'py-2'}`}>

                    {/* Logo Section */}
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <div className="group-hover:rotate-12 transition-transform duration-300">
                            {/* REDUCED SIZE: w-14 -> w-11 (approx 20% smaller from previous) */}
                            <MedflamesLogo className="w-11 h-11 object-contain" />
                        </div>
                        {/* REDUCED TEXT SIZE + PROFESSIONAL STYLING */}
                        <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-slate-900">
                            MedFlames
                        </span>
                    </div>

                    {/* Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {['Ecosystem', 'Network', 'Enterprise'].map((item) => (
                            <button
                                key={item}
                                onClick={scrollToVerified}
                                className="text-[13px] font-bold text-slate-600 hover:text-blue-600 transition-colors relative group uppercase tracking-wide bg-transparent border-none cursor-pointer"
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsLoginOpen(true)}
                            className="hidden md:block text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            Log in
                        </button>
                        <button
                            onClick={scrollToVerified}
                            className="px-5 py-2 bg-slate-900 text-white text-[12px] font-bold rounded-full shadow-lg hover:bg-blue-600 hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
                        >
                            Get Verified
                        </button>
                    </div>

                </div>
            </nav>

            {/* Login Modal */}
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
};

export default Navbar;
