import React from 'react';

const PurpleStatsLayout = () => {
    return (
        <section className="relative w-full py-20 bg-white overflow-hidden">

            {/* === 1. LEFT FLUID PURPLE SHAPE === */}
            {/* This shape continues the flow from the Hero section */}
            <div className="absolute top-0 left-0 w-[40%] h-full bg-violet-600 rounded-r-[200px] z-0">
                {/* Decorative blobs to make it organic */}
                <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-violet-600 translate-x-[50%] rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Header - Added for Consistency (Spans Full Width) */}
                <div className="col-span-1 md:col-span-2 text-center mb-8">
                    <p className="text-violet-300 font-bold tracking-widest uppercase text-xs mb-4">
                        Ecosystem Growth
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                        Market Reach
                    </h2>
                </div>

                {/* LEFT: STATS (On Purple) */}
                <div className="text-white p-8 md:p-12">
                    <h2 className="text-8xl md:text-9xl font-bold mb-4 opacity-90">
                        74%
                    </h2>
                    <h3 className="text-xl font-bold uppercase tracking-wider mb-2">
                        Internet Users
                    </h3>
                    <p className="text-violet-200 leading-relaxed max-w-sm">
                        Learn about goods and services from social networks. Blockchain transparency ensures trust.
                    </p>
                </div>

                {/* RIGHT: PARTNERS (On White) */}
                <div className="bg-white p-8 md:p-12">
                    <h3 className="text-slate-400 uppercase tracking-widest text-sm mb-12">
                        Our Partners
                    </h3>

                    {/* Logo Grid */}
                    <div className="grid grid-cols-3 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos */}
                        <div className="h-10 bg-slate-200 rounded animate-pulse"></div>
                        <div className="h-8 bg-slate-200 rounded animate-pulse"></div>
                        <div className="h-12 bg-slate-200 rounded animate-pulse"></div>

                        <div className="h-8 bg-slate-200 rounded animate-pulse"></div>
                        <div className="h-10 bg-slate-200 rounded animate-pulse"></div>
                        <div className="h-8 bg-slate-200 rounded animate-pulse"></div>
                    </div>

                    {/* Bottom Info Section */}
                    <div className="mt-16 max-w-md">
                        <h4 className="text-2xl font-bold text-violet-900 mb-4">
                            What is POLUSHCOIN?
                        </h4>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Virtual equivalent of manager services. One token is tied to one unit of content content media, ideally suited for open requests.
                        </p>
                    </div>

                    {/* Chat Bubble / Person Illustration (Simplified) */}
                    <div className="mt-12 flex items-center gap-4">
                        <div className="w-12 h-12 bg-sky-400 rounded-full flex items-center justify-center text-white font-bold">
                            ?
                        </div>
                        <div className="p-4 bg-violet-50 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-violet-800 text-sm font-medium">
                            Have questions? We are online!
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default PurpleStatsLayout;
