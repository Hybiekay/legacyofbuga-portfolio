"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/10 to-amber-900/10" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Animated Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-8"
                    >
                        <TrendingUp className="w-4 h-4 text-amber-400" />
                        <span className="text-sm">Proven Trading Strategies</span>
                    </motion.div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="block">SAMUEL</span>
                        <span className="gradient-text">SORETIRE</span>
                    </h1>

                    {/* Typewriter Effect */}
                    <div className="text-2xl md:text-4xl font-semibold mb-8 min-h-[60px]">
                        <Typewriter
                            options={{
                                strings: [
                                    "Crypto Growth & Trading Strategies",
                                    "Forex Market Expertise",
                                    "Personalized Mentorship",
                                    "Proven Trading Techniques"
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                            }}
                        />
                    </div>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                        I help individuals and businesses grow through{" "}
                        <span className="text-amber-400 font-semibold">proven trading techniques</span>,{" "}
                        <span className="text-amber-400 font-semibold">mentorship</span>, and{" "}
                        <span className="text-amber-400 font-semibold">actionable insights</span>{" "}
                        in the crypto and forex markets.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-gradient-to-r from-amber-500 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-amber-500/50 transition-all"
                        >
                            Start Your Journey
                            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-effect px-8 py-4 rounded-full font-bold text-lg border border-amber-400/30 hover:border-amber-400 transition-all"
                        >
                            Book Free Consultation
                        </motion.button>
                    </div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
                    >
                        {[
                            { icon: TrendingUp, value: "500+", label: "Traders Mentored" },
                            { icon: Shield, value: "95%", label: "Success Rate" },
                            { icon: Users, value: "1K+", label: "Community Members" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-amber-400 rounded-full mt-2" />
                </div>
            </motion.div>
        </section>
    );
}