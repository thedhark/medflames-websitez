import React from 'react';

const ServiceIcon = ({ icon, label, color = "text-purple-500", bgGradient = "from-white to-purple-50" }) => {
    return (
        <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${bgGradient} shadow-md flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg border border-white/60`}>
                <div className={`w-6 h-6 md:w-7 md:h-7 ${color}`}>
                    {icon}
                </div>
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">{label}</span>
        </div>
    );
};

export default ServiceIcon;
