import React from 'react';

const RedMatrixSection = () => {
    // Generate a simple grid of dots
    // We'll use CSS to create the "Wave" pattern by varying opacity/color based on index
    const rows = 20;
    const cols = 40;
    const dots = Array.from({ length: rows * cols });

    return (
        <section className="w-full py-32 bg-slate-950 relative overflow-hidden flex items-center justify-center">

            {/* Background Gradient Mesh (Underlay) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-red-950/20"></div>

            <div className="max-w-7xl mx-auto w-full relative z-10 px-6 flex flex-col md:flex-row items-center gap-16">

                {/* LEFT: The Matrix Visual */}
                <div className="w-full md:w-1/2 perspective-[1000px]">
                    <div className="grid grid-cols-[repeat(40,minmax(0,1fr))] gap-1 md:gap-1.5 transform rotate-y-12 rotate-x-6 hover:rotate-y-0 transition-transform duration-1000 ease-out origin-center">
                        {dots.map((_, i) => {
                            const row = Math.floor(i / cols);
                            const col = i % cols;

                            // Create a "Wave" pattern: Color changes based on a sine wave of position
                            const isHigh = Math.sin(col / 5 + row / 3) > 0;
                            const isBright = Math.sin(col / 3 + row / 2) > 0.5;

                            let colorClass = "bg-slate-800"; // Default dark
                            if (isHigh) colorClass = "bg-red-900";
                            if (isBright) colorClass = "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"; // Bright glowing dots

                            return (
                                <div
                                    key={i}
                                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors duration-500 ${colorClass}`}
                                    style={{
                                        opacity: Math.random() > 0.8 ? 0.4 : 1, // Random flicker
                                        animationDelay: `${Math.random() * 2}s`
                                    }}
                                ></div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT: Content */}
                <div className="w-full md:w-1/2 text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold tracking-widest uppercase mb-6">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        System Core
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-8">
                        Data <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Architecture.</span>
                    </h2>

                    <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-10 border-l-2 border-red-500/30 pl-6">
                        The backbone of modern healthcare. Robust, scalable, and secure infrastructure designed for high-frequency data streams.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-12 h-1 bg-slate-800 rounded-full overflow-hidden">
                                <div className="w-3/4 h-full bg-orange-500 animate-progress"></div>
                            </div>
                            <span className="text-xs font-mono">Uptime: 99.99%</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-12 h-1 bg-slate-800 rounded-full overflow-hidden">
                                <div className="w-1/2 h-full bg-red-500 animate-progress delay-75"></div>
                            </div>
                            <span className="text-xs font-mono">Latency: &lt;12ms</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RedMatrixSection;
