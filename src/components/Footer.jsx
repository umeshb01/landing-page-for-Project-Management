import React from "react";

const Footer = () => {
    return (
        <footer className="px-4 sm:px-6 py-12 sm:py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto rounded-3xl">

                {/* Inner Container */}
                <div className="bg-white rounded-3xl px-6 sm:px-8 md:px-12 py-10 sm:py-12 flex flex-col md:flex-row gap-10 md:gap-12">

                    {/* LEFT SIDE */}
                    <div className="flex-1">

                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-6 sm:mb-8">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                            <span className="text-xl sm:text-2xl font-bold text-gray-800">Space</span>
                        </div>

                        {/* Heading */}
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-full sm:max-w-sm leading-snug text-gray-900 mb-6 sm:mb-8">
                            Get Update our Newsletter
                        </h3>

                        {/* Input + Button */}
                        <div className="flex items-center bg-gray-100 rounded-full p-2 shadow-sm w-full max-w-full sm:max-w-sm">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="flex-1 bg-transparent px-3 py-2 text-sm sm:text-base outline-none text-gray-700"
                            />
                            <button className="px-4 py-2 text-sm sm:text-base rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300">
                                →
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex-[1.2] grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">

                        {/* Resources */}
                        <div>
                            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Resources
                            </h4>
                            <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base font-medium">
                                <li className="hover:text-purple-600 cursor-pointer">Company & Team</li>
                                <li className="hover:text-purple-600 cursor-pointer">News & Blog</li>
                                <li className="hover:text-purple-600 cursor-pointer">Investor Relation</li>
                                <li className="hover:text-purple-600 cursor-pointer">Modern Statement</li>
                            </ul>
                        </div>

                        {/* Product */}
                        <div>
                            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                                Product
                            </h4>
                            <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base font-medium">
                                <li className="hover:text-purple-600 cursor-pointer">Find Job</li>
                                <li className="hover:text-purple-600 cursor-pointer">Find Companies</li>
                                <li className="hover:text-purple-600 cursor-pointer">I'm Company</li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                                Support
                            </h4>
                            <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base font-medium">
                                <li className="hover:text-purple-600 cursor-pointer">Support</li>
                                <li className="hover:text-purple-600 cursor-pointer">Contact</li>
                                <li className="hover:text-purple-600 cursor-pointer">Cookies</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;