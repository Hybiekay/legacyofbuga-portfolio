"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getAboutContent } from "@/lib/content-loader";
import { AboutData } from "@/types/content";
import {
    TrendingUp, Users, Briefcase, Award, Eye, GraduationCap,
    HeartHandshake, Target, Calendar, CheckCircle, Download, Mail,
    ArrowRight, Sparkles
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
    TrendingUp,
    Users,
    Briefcase,
    Award,
    Eye,
    GraduationCap,
    HeartHandshake,
    Target,
    Calendar,
    CheckCircle,
    Download,
    Mail,
    ArrowRight,
    Sparkles
};

export default function About() {
    const [content, setContent] = useState<AboutData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadContent();
    }, []);

    const loadContent = async () => {
        try {
            const data = await getAboutContent();
            setContent(data);
        } catch (error) {
            console.error("Failed to load content:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <section className="py-24 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading profile...</p>
                </div>
            </section>
        );
    }

    if (!content) return null;

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-amber-500/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span className="text-sm">Meet Your Mentor</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        About <span className="gradient-text">{content.name.split(' ')[0]}</span>
                    </h1>
                    <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                        {content.tagline}
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    {/* Left Column - Intro */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
                            <p className="text-lg text-gray-300 mb-6">{content.description}</p>
                            <p className="text-gray-400">{content.bio}</p>
                        </div>

                        {/* Mission */}
                        <div className="glass-effect rounded-2xl p-8">
                            <div className="flex items-start gap-4">
                                <Target className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2">My Mission</h3>
                                    <p className="text-gray-300">{content.mission}</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            {content.stats.map((stat, index) => {
                                const IconComponent = iconMap[stat.icon] || TrendingUp;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="text-center glass-effect rounded-xl p-6"
                                    >
                                        <IconComponent className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                                        <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                                        <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Column - Image & Values */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Profile Image Placeholder */}
                        <div className="relative group">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-500/20 to-purple-500/20 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
                                            <span className="text-4xl font-bold">SS</span>
                                        </div>
                                        <p className="text-gray-400">Profile image placeholder</p>
                                        <p className="text-sm text-gray-500">Add your photo to /public/images/profile.jpg</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-2xl border-2 border-amber-400/30 group-hover:border-amber-400 transition-all duration-300" />
                        </div>

                        {/* Core Values */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Core Values</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {content.values.map((value, index) => {
                                    const IconComponent = iconMap[value.icon] || Eye;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="glass-effect rounded-xl p-5"
                                        >
                                            <IconComponent className="w-6 h-6 text-amber-400 mb-3" />
                                            <h4 className="font-semibold mb-2">{value.title}</h4>
                                            <p className="text-sm text-gray-400">{value.description}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Journey Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-center mb-12">
                        My <span className="gradient-text">Trading Journey</span>
                    </h2>
                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 via-purple-500 to-transparent" />

                        {/* Timeline Items */}
                        <div className="space-y-12">
                            {content.journey.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                    {/* Content */}
                                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                                        <div className="glass-effect rounded-xl p-6">
                                            <div className="inline-flex items-center gap-2 mb-2">
                                                <Calendar className="w-4 h-4 text-amber-400" />
                                                <span className="text-amber-400 font-semibold">{item.year}</span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-gray-300">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2">
                                        <div className="w-4 h-4 rounded-full bg-amber-400 ring-4 ring-black" />
                                    </div>

                                    {/* Year Label */}
                                    <div className={`w-2/12 text-center ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                                        <div className="glass-effect rounded-full py-2 px-4 inline-block">
                                            <span className="font-bold">{item.year}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Expertise & Certifications */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Expertise */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8">Areas of Expertise</h2>
                        <div className="space-y-6">
                            {content.expertise.map((area, index) => (
                                <div key={index} className="glass-effect rounded-xl p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-xl font-semibold">{area.category}</h3>
                                        <span className="text-amber-400 font-bold">{area.level}%</span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="h-2 bg-gray-800 rounded-full mb-4 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${area.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.2 }}
                                            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                                        />
                                    </div>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2">
                                        {area.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="inline-flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full text-sm"
                                            >
                                                <CheckCircle className="w-3 h-3 text-amber-400" />
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
                        <div className="space-y-6">
                            {content.certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-effect rounded-xl p-6 hover:scale-[1.02] transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                                            <Award className="w-6 h-6 text-amber-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">{cert.name}</h3>
                                            <p className="text-gray-400 mb-2">{cert.issuer}</p>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Calendar className="w-4 h-4 text-amber-400" />
                                                <span className="text-amber-400">Issued {cert.year}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Cards */}
                        <div className="mt-12 space-y-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-amber-500/30 transition-all"
                            >
                                {content.cta.primary}
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full glass-effect border border-amber-400/30 font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:border-amber-400 transition-all"
                            >
                                <Download className="w-5 h-5" />
                                {content.cta.secondary}
                            </motion.button>

                            <div className="text-center pt-6">
                                <a
                                    href={`mailto:${content.cta.contact}`}
                                    className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300"
                                >
                                    <Mail className="w-5 h-5" />
                                    {content.cta.contact}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}