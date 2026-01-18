import React, { useState } from 'react';
import { X, Mail, Lock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LoginModal = ({ isOpen, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    // Reset state on close/open
    // (Optional: useEffect to reset isSuccess when isOpen changes)

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login delay
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false); // Reset for next time
                onClose();
            }, 1500);
        }, 1500);
    };

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
                        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-8">
                            {isSuccess ? (
                                <div className="text-center py-8">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                                    >
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </motion.div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back!</h2>
                                    <p className="text-slate-500 text-sm">Redirecting to your dashboard...</p>
                                </div>
                            ) : (
                                <>
                                    <div className="flex justify-between items-center mb-8">
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900">Welcome Back</h2>
                                            <p className="text-slate-500 text-sm">Sign in to access your dashboard</p>
                                        </div>
                                        <button
                                            onClick={onClose}
                                            className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                                        >
                                            <X size={20} className="text-slate-400" />
                                        </button>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="name@company.com"
                                                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Password</label>
                                            <div className="relative">
                                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                <input
                                                    type="password"
                                                    required
                                                    placeholder="••••••••"
                                                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full py-3.5 mt-2 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2 group"
                                        >
                                            {isLoading ? (
                                                <span>Signing in...</span>
                                            ) : (
                                                <>
                                                    <span>Sign In</span>
                                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>

                                        <div className="text-center mt-6">
                                            <a href="#" className="text-sm font-medium text-slate-400 hover:text-slate-600">Forgot your password?</a>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LoginModal;
