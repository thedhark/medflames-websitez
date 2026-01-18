import React from 'react';
import { Hospital, User, GraduationCap, Users, Briefcase } from 'lucide-react';

const RoleCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white border border-slate-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group">
        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
        <p className="text-slate-500 text-xs leading-relaxed">{description}</p>
    </div>
);

const TrustedEcosystemSection = () => {
    const roles = [
        {
            icon: Hospital,
            title: "Hospitals",
            description: "Access a verified pool of medical professionals and streamline institutional onboarding."
        },
        {
            icon: User,
            title: "Doctors",
            description: "Build your professional sovereign identity and connect with global opportunities."
        },
        {
            icon: GraduationCap,
            title: "Institutes",
            description: "Enable students to access global clinical rotations and research mentorships."
        },
        {
            icon: Users,
            title: "Mentors",
            description: "Guide the next generation of medical talent and build your leadership legacy."
        },
        {
            icon: Briefcase,
            title: "HR Agencies",
            description: "Scale recruitment with instantly verified credentials and professional backgrounds."
        }
    ];

    return (
        <section className="w-full py-16 bg-white flex justify-center">
            <div className="w-[90%] max-w-[1300px]">
                {/* Header */}
                <div className="mb-12 text-left max-w-2xl cursor-default">
                    <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">
                        Ecosystem Roles
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
                        A Unified Platform for All <br />
                        <span className="text-slate-400">Healthcare Stakeholders.</span>
                    </h2>
                    <p className="text-slate-500 text-sm font-medium">
                        Medflames bridges the gap between institutions, educators, and professionals through a single, trusted verification layer.
                    </p>
                </div>

                {/* Role Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {roles.map((role, index) => (
                        <RoleCard key={index} {...role} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedEcosystemSection;
