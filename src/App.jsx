import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import PartnerCategories from './components/PartnerCategories';
import Footer from './components/Footer';
import AiInsightsSection from './components/AiInsightsSection';
import GlobalMindsSection from './components/GlobalMindsSection';
import HitasBILayout from './components/HitasBILayout';
import IntelligenceSection from './components/IntelligenceSection';

import TeamsPromoSection from './components/TeamsPromoSection';
import CareerGrowthSection from './components/CareerGrowthSection';
import FounderSection from './components/FounderSection';

function App() {
    const [partnerCategory, setPartnerCategory] = useState('Hospitals');
    const partnerRef = useRef(null);

    const handleCategorySelect = (category) => {
        setPartnerCategory(category);
        if (partnerRef.current) {
            partnerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="w-full min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
            {/* Force Refresh */}
            {/* 1. Navigation */}
            <Navbar />

            {/* 2. NEW HERO (Main Insight Section) */}
            <AiInsightsSection onCategorySelect={handleCategorySelect} />

            {/* 3. Partner Categories (Card Layout) */}
            <div id="verified-partners" ref={partnerRef} className="w-full">
                <PartnerCategories activeTab={partnerCategory} onTabChange={setPartnerCategory} />
            </div>

            {/* 4. Global Minds Section */}
            <GlobalMindsSection />

            {/* 5. Hitas BI Layout */}
            <HitasBILayout />





            {/* 8. Promotional Layouts */}
            <TeamsPromoSection />
            <CareerGrowthSection />

            {/* 9. Founder Spotlight */}
            <FounderSection />

            {/* Final. Intelligence Section */}
            <IntelligenceSection />

            {/* 10. Footer */}
            <Footer />
        </div >
    );
}

export default App;
