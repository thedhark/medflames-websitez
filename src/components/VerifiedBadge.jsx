import React from 'react';



const VerifiedBadge = ({ className = "", fill = "#2F80ED" }) => {
    // Generate unique ID for gradients based on fill color to prevent conflicts
    const gradientId = `badge-gradient-${fill.replace('#', '')}`;
    const shadowId = `badge-shadow-${fill.replace('#', '')}`;

    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} drop-shadow-sm`}
        >
            <defs>
                <linearGradient id={gradientId} x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor={fill} />
                    <stop offset="100%" stopColor={fill} stopOpacity="0.85" />
                </linearGradient>
                <filter id={shadowId} x="-2" y="-2" width="28" height="28" filterUnits="userSpaceOnUse">
                    <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="rgba(0,0,0,0.15)" />
                </filter>
            </defs>

            {/* Main Seal Body with Gradient and Subtle Shadow */}
            <path
                d="M10.45 2.16C11.19 1.08 12.81 1.08 13.55 2.16L14.49 3.52C14.81 3.99 15.39 4.23 15.94 4.14L17.58 3.86C18.88 3.64 20.03 4.79 19.81 6.09L19.53 7.73C19.44 8.28 19.68 8.86 20.15 9.18L21.51 10.12C22.59 10.86 22.59 12.48 21.51 13.22L20.15 14.16C19.68 14.48 19.44 15.06 19.53 15.61L19.81 17.25C20.03 18.55 18.88 19.7 17.58 19.48L15.94 19.2C15.39 19.11 14.81 19.35 14.49 19.82L13.55 21.18C12.81 22.26 11.19 22.26 10.45 21.18L9.51 19.82C9.19 19.35 8.61 19.11 8.06 19.2L6.42 19.48C5.12 19.7 3.97 18.55 4.19 17.25L4.47 15.61C4.56 15.06 4.32 14.48 3.85 14.16L2.49 13.22C1.41 12.48 1.41 10.86 2.49 10.12L3.85 9.18C4.32 8.86 4.56 8.28 4.47 7.73L4.19 6.09C3.97 4.79 5.12 3.64 6.42 3.86L8.06 4.14C8.61 4.23 9.19 3.99 9.51 3.52L10.45 2.16Z"
                fill={fill} // Fallback
                style={{ fill: `url(#${gradientId})` }}
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="0.2"
            />

            {/* Crisp White Checkmark */}
            <path
                d="M8.25 11.75L10.75 14.25L16.25 8.75"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default VerifiedBadge;
