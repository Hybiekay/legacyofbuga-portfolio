"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
    {
        name: "Russell T.",
        role: "Forex Trader",
        content: "Samuel transformed my approach to trading. His mentorship helped me achieve consistent profits I never thought possible.",
        rating: 5,
    },
    {
        name: "Michael B.",
        role: "Crypto Investor",
        content: "The trading signals are incredibly accurate. My portfolio grew by 40% in just 3 months following his strategies.",
        rating: 5,
    },
    {
        name: "Sarah K.",
        role: "Beginner Trader",
        content: "The academy courses are comprehensive yet easy to understand. Perfect for someone starting their trading journey.",
        rating: 5,
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-b from-black to-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Success <span className="gradient-text">Stories</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Hear from traders who transformed their results
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group"
                        >
                            <div className="glass-effect rounded-2xl p-8 h-full hover:scale-[1.02] transition-all duration-300">
                                {/* Quote Icon */}
                                <Quote className="w-12 h-12 text-amber-400/30 mb-6" />

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>

                                {/* Author */}
                                <div>
                                    <div className="font-bold text-lg">{testimonial.name}</div>
                                    <div className="text-amber-400 text-sm">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === activeIndex
                                    ? "bg-amber-400 w-8"
                                    : "bg-gray-700 hover:bg-gray-600"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}