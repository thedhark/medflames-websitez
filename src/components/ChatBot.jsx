import React, { useState } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! How can we help you join the Medflames Ecosystem today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState("");

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput("");

        // Simple auto-reply simulation
        setTimeout(() => {
            const botMsg = { id: Date.now() + 1, text: "Thanks for reaching out! Our team is currently offline, but we've recorded your message.", sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#80acff] p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-2">
                                <MessageCircle size={20} />
                                <span className="font-bold">Medflames Support</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full text-white transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-[#80acff] text-white rounded-br-none' : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 px-4 py-2 rounded-full bg-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#80acff]/50 text-slate-900"
                            />
                            <button type="submit" className="p-2 bg-[#80acff] text-white rounded-full hover:bg-blue-500 transition-colors shadow-md">
                                <Send size={18} className="translate-x-0.5 translate-y-0.5" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button - Telegram Style */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-[#2AABEE] rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center text-white z-[100] hover:shadow-xl transition-shadow"
            >
                {/* Telegram Paper Plane Icon Logic */}
                <Send size={26} className="translate-x-[-2px] translate-y-[2px]" fill="white" />
            </motion.button>
        </div>
    );
};

export default ChatBot;
