import React from "react";

const features = [
    {
        title: "Intuitive Interface",
        desc: "Navigate projects effortlessly with our user-friendly interface.",
        img: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
    },
    {
        title: "Advanced Reporting",
        desc: "Gain insights with detailed reports and analytics tools.",
        img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    },
    {
        title: "Task Management",
        desc: "Organize and track tasks efficiently to meet deadlines.",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
        title: "Collaboration Hub",
        desc: "Collaborate with your team in real-time seamlessly.",
        img: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    },
];

const FeaturesSection = () => {
    return (
        <section className="py-24 px-6 bg-gray-50 text-center">
            {/* Heading */}
            <h2 className="text-4xl max-w-160 mx-auto md:text-5xl font-bold text-gray-900 leading-tight">
                We provide the most Unique & Modern Features
            </h2>

            {/* Description */}
            <p className="text-gray-600 mt-4  max-w-150 mx-auto text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Elevate your experience with modern features and a clean, intuitive UI designed for efficiency and collaboration.
            </p>

            {/* Button */}
            <button className="mt-8 px-8 py-3 rounded-full text-white bg-gradient-to-r from-purple-500 to-indigo-500 text-lg font-medium hover:scale-105 transition-transform duration-300">
                More Features
            </button>

            {/* Grid container */}
            <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-3xl shadow-md hover:shadow-xl p-8 flex flex-col items-center text-center h-[380px] transition-all duration-300"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-30 h-30 mb-6"
                        />
                        <h1 className="text-3xl font-semibold text-gray-800 mb-3">
                            {item.title}
                        </h1>
                        <p className="text-base text-md text-gray-500 leading-relaxed max-w-60">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;