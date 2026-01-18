import React from 'react';

const RealisticTick = ({ className = "", hue = 0, src = "/verified-badge-3d.png" }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            {/* The 3D Asset Image - Colored via CSS Hue Rotate */}
            <img
                src={src}
                alt="Verified"
                className="w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-300"
                style={{ filter: `hue-rotate(${hue}deg)` }}
            />
        </div>
    );
};

export default RealisticTick;
