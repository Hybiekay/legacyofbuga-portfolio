"use client";

import { useState } from "react";
import { Menu, X, TrendingUp, User } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" }, // Add this line
        { name: "Services", href: "#services" },
        { name: "Process", href: "#process" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 w-full glass-effect z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <TrendingUp className="h-8 w-8 text-amber-400 mr-2" />
                        <span className="text-xl font-bold gradient-text">
                            LegacyOfBuga
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="hover:text-amber-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button className="ml-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all">
                                Start Trading
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-amber-400"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden glass-effect rounded-lg mt-2">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 hover:text-amber-400"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button className="w-full mt-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-6 py-3 rounded-full font-semibold">
                                Start Trading
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}