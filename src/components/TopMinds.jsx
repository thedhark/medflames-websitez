import React from 'react';

const TopMinds = () => {
    // List of prestigious institutes
    const institutes = [
        "AIIMS New Delhi", "Apollo Hospitals", "JIPMER", "Fortis Healthcare",
        "CMC Vellore", "Max Healthcare", "NIMHANS", "Manipal Hospitals",
        "PGI Chandigarh", "Lilavati Hospital"
    ];

    return (
        <div className="w-full py-20 bg-white border-y border-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Trusted by National Leaders
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    Learn from top minds across <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                        AIIMS, Apollo, JIPMER & More.
                    </span>
                </h3>
            </div>

            {/* Logo/Name Pills */}
            <div className="w-full relative">
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-6xl mx-auto opacity-70">
                    {institutes.map((name, idx) => (
                        <div key={idx} className="px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-slate-600 font-bold text-lg md:text-xl whitespace-nowrap hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 cursor-default">
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopMinds;
