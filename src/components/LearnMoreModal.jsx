import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const LearnMoreModal = ({ isOpen, onClose, title, content, icon: Icon, colorClass = "text-blue-600", bgClass = "bg-blue-50" }) => {

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
                    >
                        {/* Header */}
                        <div className={`px-8 py-6 border-b border-slate-100 flex items-center justify-between ${bgClass}`}>
                            <div className="flex items-center gap-4">
                                {Icon && (
                                    <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm ${colorClass}`}>
                                        <Icon size={24} strokeWidth={2} />
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                            </div>

                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-white/50 hover:bg-white flex items-center justify-center text-slate-500 hover:text-slate-900 transition-all duration-200"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="p-8 overflow-y-auto custom-scrollbar">
                            <div className="prose prose-slate prose-lg max-w-none">
                                {content}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-8 py-6 border-t border-slate-100 bg-slate-50/50 flex justify-end">
                            <button
                                onClick={onClose}
                                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
                            >
                                Close Details
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LearnMoreModal;
