import { TrendingUp, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-gradient-to-t from-black to-gray-900/50 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center mb-6">
                            <TrendingUp className="h-10 w-10 text-amber-400 mr-2" />
                            <span className="text-2xl font-bold gradient-text">LegacyOfBuga</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Empowering traders with proven strategies, mentorship, and community support for sustainable growth.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 gradient-text">Quick Links</h3>
                        <ul className="space-y-3">
                            {["Home", "Services", "Process", "Testimonials", "Contact"].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-amber-400 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 gradient-text">Services</h3>
                        <ul className="space-y-3">
                            {["Trading Academy", "Premium Signals", "1-on-1 Mentorship", "Community Access", "Market Analysis"].map((service) => (
                                <li key={service} className="text-gray-400 hover:text-amber-400 transition-colors">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 gradient-text">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-amber-400" />
                                <span>contact@legacyofbuga.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-amber-400" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-amber-400" />
                                <span>Global - Online Services</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="glass-effect rounded-2xl p-8 mb-12">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4">Growth & Marketing Strategies</h3>
                        <p className="text-gray-300 mb-6">
                            Delivered straight into your inbox. Subscribe to stay updated with market insights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-amber-400 transition-colors"
                            />
                            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-gray-500">
                        © {new Date().getFullYear()} LegacyOfBuga. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        Crypto trading involves risk. Past performance is not indicative of future results.
                    </p>
                </div>
            </div>
        </footer>
    );
}