"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSocialContent } from "@/lib/content-loader";
import { SocialPlatform, FloatingButtonConfig, SocialData } from "@/types/content";
import {
    MessageCircle,
    X,
    ChevronRight,
    Mail,
    Phone,
    Clock,
    ExternalLink,
    MessageSquare,
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
    Twitter,
    Send
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
    MessageCircle,
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
    Twitter,
    Send,
    MessageSquare,
    Mail,
    Phone,
    Clock,
    ExternalLink,
    ChevronRight,
    X
};

export default function FloatingSocial() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [content, setContent] = useState<SocialData>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadContent();
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const loadContent = async () => {
        try {
            const data = await getSocialContent();
            setContent(data);
        } catch (error) {
            console.error("Failed to load social content:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Hide when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    const handlePlatformClick = (platform: SocialPlatform) => {
        window.open(platform.url, "_blank", "noopener,noreferrer");
        // Optional: Close menu after click
        // setIsOpen(false);
    };

    if (loading || !content) return null;

    const { floatingButton, platforms, contact } = content;
    const isRight = floatingButton.position === "right";

    return (
        <>
            {/* Main Floating Button */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 100,
                    x: isRight ? 0 : 0
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`fixed ${isRight ? 'right-6' : 'left-6'} bottom-6 z-50`}
            >
                {/* Expanded Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className={`absolute ${isRight ? 'right-0' : 'left-0'} bottom-16 mb-4`}
                        >
                            <div className="glass-effect rounded-2xl p-4 shadow-2xl shadow-black/50 w-80">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                                            <MessageCircle className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">Connect With Me</h3>
                                            <p className="text-sm text-gray-400">Choose your platform</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Platforms Grid */}
                                <div className="grid grid-cols-4 gap-3 mb-4">
                                    {platforms.slice(0, 8).map((platform, index) => {
                                        const IconComponent = iconMap[platform.icon] || ExternalLink;
                                        return (
                                            <motion.button
                                                key={platform.name}
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.05 }}
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => handlePlatformClick(platform)}
                                                className="relative group"
                                                title={platform.tooltip}
                                            >
                                                <div
                                                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-all"
                                                    style={{ backgroundColor: `${platform.color}15` }}
                                                >
                                                    <IconComponent
                                                        className="w-6 h-6"
                                                        style={{ color: platform.color }}
                                                    />
                                                </div>

                                                {/* Tooltip */}
                                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                    <div className="bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                                                        {platform.tooltip}
                                                    </div>
                                                    <div className="w-2 h-2 bg-gray-900 rotate-45 absolute -bottom-1 left-1/2 transform -translate-x-1/2" />
                                                </div>
                                            </motion.button>
                                        );
                                    })}
                                </div>

                                {/* Contact Info */}
                                <div className="space-y-3 pt-3 border-t border-white/10">
                                    <div className="flex items-center gap-3 text-sm">
                                        <Mail className="w-4 h-4 text-amber-400" />
                                        <span className="text-gray-300">{contact.email}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Phone className="w-4 h-4 text-amber-400" />
                                        <span className="text-gray-300">{contact.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Clock className="w-4 h-4 text-amber-400" />
                                        <span className="text-gray-300">{contact.availability}</span>
                                    </div>
                                </div>

                                {/* Quick Message Prompt */}
                                <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-amber-500/10 to-orange-500/10">
                                    <p className="text-sm text-center text-amber-300">
                                        Let&apos;s talk about your trading journey!
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Toggle Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`relative group ${floatingButton.animation === 'bounce'
                        ? 'animate-bounce hover:animate-none'
                        : floatingButton.animation === 'pulse'
                            ? 'animate-pulse hover:animate-none'
                            : ''
                        }`}
                    title={isOpen ? floatingButton.openTooltip : floatingButton.tooltip}
                >
                    {/* Outer Ring Animation */}
                    <motion.div
                        animate={isOpen ? { scale: 1.2 } : { scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/30 to-orange-500/30 blur-sm"
                    />

                    {/* Main Button */}
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center shadow-2xl shadow-amber-500/30">
                        <motion.div
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        >
                            {isOpen ? (
                                <X className="w-6 h-6 text-white" />
                            ) : (
                                <MessageCircle className="w-6 h-6 text-white" />
                            )}
                        </motion.div>

                        {/* Notification Badge */}
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold">8</span>
                        </div>
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="bg-gray-900 text-white text-sm py-1.5 px-3 rounded-lg whitespace-nowrap">
                            {isOpen ? floatingButton.openTooltip : floatingButton.tooltip}
                        </div>
                        <div className="w-2 h-2 bg-gray-900 rotate-45 absolute -bottom-1 left-1/2 transform -translate-x-1/2" />
                    </div>
                </motion.button>
            </motion.div>

            {/* Backdrop (closes menu when clicked outside) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>
        </>
    );
}