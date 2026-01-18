import React from 'react';

const GlassCard = ({ title, children, className = '', titleClassName = '' }) => {
    return (
        <div className={`backdrop-blur-xl bg-white/40 border border-white/40 rounded-3xl p-6 shadow-sm hover:bg-white/50 transition-all duration-300 ${className}`}>
            {title && (
                <div className={`text-sm font-semibold tracking-wide text-gray-700 uppercase mb-4 ${titleClassName}`}>
                    {title}
                </div>
            )}
            {children}
        </div>
    );
};

export default GlassCard;
