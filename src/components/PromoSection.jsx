import React, { useEffect, useRef, useState } from "react";

const CTASection = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="px-6 py-24 bg-gray-50">
            <div
                ref={sectionRef}
                className="max-w-5xl mx-auto rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-xl"
            >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 opacity-90"></div>

                {/* Glass Effect Layer */}
                <div className="absolute inset-0 backdrop-blur-xl bg-white/10"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">

                    {/* Heading */}
                    <h2
                        className={`text-3xl md:text-5xl font-bold text-white leading-tight transition-all duration-700 ease-out ${visible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }`}
                    >
                        Ready to Transform Your Project? <br />
                        Get Started Today!
                    </h2>

                    {/* Button */}
                    <button
                        className={`mt-10 px-8 py-3 rounded-full bg-white text-purple-600 font-semibold shadow-md transition-all duration-700 delay-200 ease-out hover:scale-105 hover:shadow-lg ${visible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }`}
                    >
                        Get Started →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;