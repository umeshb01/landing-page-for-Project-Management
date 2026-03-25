import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react"; // optional icons from lucide

const testimonials = [
    {
        name: "Adam Meek",
        title: "CEO of Forbes",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Matt is an incredible designer, his creativity is limitless. Challenging materials, shape & function in furniture design, he creates amazing unique fashionable forms.",
    },
    {
        name: "Sophia Lee",
        title: "CTO of TechWave",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Working with Matt was a joy. His design vision elevated our product beyond expectations, blending elegance and functionality seamlessly.",
    },
    {
        name: "James Brown",
        title: "Founder of Creativa",
        avatar: "https://randomuser.me/api/portraits/men/56.jpg",
        text: "Matt’s designs transformed our brand. Every piece feels thoughtful, creative, and modern — a perfect blend of aesthetics and usability.",
    },
];

const TestimonialSection = () => {
    const [current, setCurrent] = useState(0);

    const prevTestimonial = () => {
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextTestimonial = () => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="py-24 px-6 bg-gradient-to-br from-white to-gray-50 text-center font-sans">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Voices of Satisfaction <br /> What Our Clients Say
            </h2>

            {/* Subheading */}
            <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Elevate your experience with a suite of unparalleled and contemporary features, setting us apart as a provider of unique and modern solutions.
            </p>

            {/* Button */}
            <button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-purple-300 to-purple-500 text-white shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 font-medium">
                All Testimonial
            </button>

            {/* Carousel */}
            <div className="mt-16 max-w-3xl mx-auto">
                <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-6 transition-all duration-500">
                    {/* Left: Avatar + name/title + buttons */}
                    <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                        <img
                            src={testimonials[current].avatar}
                            alt={testimonials[current].name}
                            className="w-20 h-20 rounded-full mb-3 shadow-sm"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">
                            {testimonials[current].name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">{testimonials[current].title}</p>

                        {/* Prev / Next buttons below avatar */}
                        <div className="flex gap-2 mt-1">
                            <button
                                onClick={prevTestimonial}
                                className="flex items-center gap-2 px-2 py-1 rounded-full bg-purple-200 hover:bg-purple-300 shadow-sm text-gray-700 font-medium transition-transform duration-300 hover:scale-105"
                            >
                                &#8592; Prev
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="flex items-center gap-2 px-2 py-1 rounded-full bg-purple-200 hover:bg-purple-300 shadow-sm text-gray-700 font-medium transition-transform duration-300 hover:scale-105"
                            >
                                Next &#8594;
                            </button>
                        </div>
                    </div>

                    {/* Right: Testimonial Text */}
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        "{testimonials[current].text}"
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;