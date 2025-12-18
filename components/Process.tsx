"use client";

import { motion } from "framer-motion";
import { BookOpen, Bell, Users, UserCheck } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: BookOpen,
        title: "Comprehensive Training",
        description: "Structured courses covering basics to advanced strategies through LegacyOfBuga Academy.",
        color: "from-purple-500 to-pink-500",
    },
    {
        number: "02",
        icon: Bell,
        title: "Reliable Trading Signals",
        description: "Premium signals with proven track record based on deep market analysis.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        number: "03",
        icon: Users,
        title: "Community Support",
        description: "Exclusive premium community for continuous mentorship and shared growth.",
        color: "from-green-500 to-emerald-500",
    },
    {
        number: "04",
        icon: UserCheck,
        title: "Personalized Mentorship",
        description: "One-on-one mentorship tailored to your goals, experience, and risk tolerance.",
        color: "from-orange-500 to-amber-500",
    },
];

export default function Process() {
    return (
        <section id="process" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">4-Step</span> Success Process
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A proven framework to transform your trading journey
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-4 -left-4 text-7xl font-bold text-white/10">
                                {step.number}
                            </div>

                            {/* Card */}
                            <div className="relative glass-effect rounded-2xl p-8 h-full hover:scale-[1.02] transition-all duration-300">
                                {/* Icon with Gradient */}
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6`}>
                                    <step.icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-300">{step.description}</p>

                                {/* Animated Border */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                            </div>

                            {/* Connector Lines (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-1 translate-x-1/2">
                                    <div className="h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all">
                        Join The Journey
                    </button>
                </motion.div>
            </div>
        </section>
    );
}