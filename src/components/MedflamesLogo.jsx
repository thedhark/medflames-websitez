import React from 'react';

const MedflamesLogo = ({ className }) => {
    return (
        <img
            src="/medflames_logo.png"
            alt="MedFlames Logo"
            className={`object-contain ${className}`}
        />
    );
};

export default MedflamesLogo;
