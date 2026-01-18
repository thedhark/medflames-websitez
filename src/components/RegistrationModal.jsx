import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Building2, GraduationCap, Users, Stethoscope } from 'lucide-react';

const RegistrationModal = ({ isOpen, onClose, partnerType, accentColor = '#3b82f6' }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setStep(1);
            setFormData({});
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setStep(3); // Success state
        }, 1500);
    };

    // --- DYNAMIC FORM CONFIGURATION ---
    const getFormConfig = (type) => {
        switch (type) {
            case 'Hospitals':
                return {
                    title: 'Hospital Verification',
                    icon: Building2,
                    fields: [
                        { name: 'orgName', label: 'Hospital Name', placeholder: 'e.g. Apollo Hospitals' },
                        { name: 'license', label: 'Clinical Establishment License No.', placeholder: 'Reg. Number' },
                        { name: 'nabh', label: 'NABH Accreditation ID', placeholder: 'Optional' },
                        { name: 'gst', label: 'GSTIN', placeholder: 'Tax ID' }
                    ]
                };
            case 'Institutes':
                return {
                    title: 'Institute Verification',
                    icon: GraduationCap,
                    fields: [
                        { name: 'orgName', label: 'University/Institute Name', placeholder: 'e.g. AIIMS Delhi' },
                        { name: 'ugc', label: 'UGC/NMC Affiliation Code', placeholder: 'Affiliation ID' },
                        { name: 'dean', label: 'Dean/Registrar Name', placeholder: 'Full Name' },
                        { name: 'email', label: 'Official (.edu/.ac) Email', placeholder: 'admin@institute.edu' }
                    ]
                };
            case 'HR Agencies':
                return {
                    title: 'Agency Verification',
                    icon: Users,
                    fields: [
                        { name: 'orgName', label: 'Agency Name', placeholder: 'e.g. MedHiring Solutions' },
                        { name: 'incorp', label: 'Certificate of Incorporation', placeholder: 'CIN' },
                        { name: 'license', label: 'Recruitment License No.', placeholder: 'Labor License' },
                        { name: 'tax', label: 'PAN/TAN', placeholder: 'Tax ID' }
                    ]
                };
            case 'Doctors':
                return {
                    title: 'Doctor Verification',
                    icon: Stethoscope,
                    fields: [
                        { name: 'fullName', label: 'Full Name', placeholder: 'Dr. Jane Doe' },
                        { name: 'regNo', label: 'Medical Registration No.', placeholder: 'MCI/State Council ID' },
                        { name: 'specialty', label: 'Specialization', placeholder: 'e.g. Cardiology' },
                        { name: 'exp', label: 'Years of Experience', placeholder: 'e.g. 15' }
                    ]
                };
            default: // Researchers/Others
                return {
                    title: 'Partner Verification',
                    icon: Users,
                    fields: [
                        { name: 'fullName', label: 'Full Name / Org Name', placeholder: 'Name' },
                        { name: 'id', label: 'Professional ID / ORCID', placeholder: 'ID Number' },
                        { name: 'email', label: 'Official Email', placeholder: 'email@org.com' }
                    ]
                };
        }
    };

    const config = getFormConfig(partnerType);
    const Icon = config.icon;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md cursor-pointer"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="px-8 py-6 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center" style={{ color: accentColor }}>
                                    <Icon size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">{config.title}</h3>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Step {step} of 3</p>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-200 transition-colors">
                                <X size={20} className="text-slate-500" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {step === 1 && (
                                <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-4">
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 gap-4">
                                            {config.fields.slice(0, 2).map((field) => (
                                                <div key={field.name}>
                                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">{field.label}</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name={field.name}
                                                        placeholder={field.placeholder}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400"
                                                    />
                                                </div>
                                            ))}
                                            <div className="grid grid-cols-2 gap-4">
                                                {config.fields.slice(2).map((field) => (
                                                    <div key={field.name}>
                                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">{field.label}</label>
                                                        <input
                                                            required
                                                            type="text"
                                                            name={field.name}
                                                            placeholder={field.placeholder}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full py-3.5 mt-6 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" style={{ backgroundColor: accentColor }}>
                                        Continue
                                    </button>
                                </form>
                            )}

                            {step === 2 && (
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                            <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Upload Proof</h4>
                                        <p className="text-sm text-slate-500">Please upload a scanned copy of your {config.fields[1].label}</p>
                                    </div>

                                    <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                                        <p className="text-sm font-medium text-slate-400 group-hover:text-slate-600">Click to upload or drag and drop</p>
                                        <p className="text-xs text-slate-300 mt-1">PDF, JPG or PNG (Max 5MB)</p>
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="w-full py-3.5 rounded-xl text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                                        style={{ backgroundColor: accentColor, opacity: isSubmitting ? 0.8 : 1 }}
                                    >
                                        {isSubmitting ? (
                                            <>Processing...</>
                                        ) : (
                                            <>Submit for Verification</>
                                        )}
                                    </button>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="text-center py-8">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                    >
                                        <CheckCircle2 size={40} strokeWidth={3} />
                                    </motion.div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-2">Submission Received</h3>
                                    <p className="text-slate-500 max-w-xs mx-auto mb-8">
                                        Your documents are now being reviewed by our compliance team. You will receive an status update via email within 24 hours.
                                    </p>
                                    <button onClick={onClose} className="px-8 py-3 rounded-xl bg-slate-100 text-slate-900 font-bold hover:bg-slate-200 transition-colors">
                                        Return to Ecosystem
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default RegistrationModal;
