import React from 'react';
import { Plus } from 'lucide-react';
import avatar1 from '../assets/avatars/avatar1.png';
import avatar2 from '../assets/avatars/avatar2.png';
import avatar3 from '../assets/avatars/avatar3.png';

const Hero = () => {
  const avatars = [avatar1, avatar2];

  return (
    <section className="pt-32 pb-20 px-6 bg-slate-50 min-h-screen flex items-center justify-center text-center">
      <div className="container mx-auto max-w-4xl">

        {/* Social Proof */}
        <div className="flex items-center justify-center mb-10 animate-fade-in group">
          <div className="flex -space-x-3 mr-4">
            {avatars.map((avatar, i) => (
              <img
                key={i}
                src={avatar}
                alt={`User ${i + 1}`}
                className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover transform transition-transform group-hover:scale-110"
              />
            ))}
          </div>
          <p className="text-slate-800 font-bold text-sm md:text-base tracking-tight">
            395k+ success people are join with us
          </p>
        </div>

        {/* Headings */}
        <div className="space-y-4 mb-10 ">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight ">
            Discover of Project
          </h1>
          <h2 className="text-3xl md:text-6xl font-semibold  text-indigo-400 tracking-wide">
            Efficiency with Off Space
          </h2>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Empower your team, and achieve exceptional outcomes using our user friendly project management platform
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center space-x-2 bg-violet-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-all shadow-xl hover:scale-105 active:scale-95 group">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-slate-900 transition-transform group-hover:rotate-90">
              <Plus size={18} />
            </div>
            <span>join with us</span>
          </button>

          <button className="bg-transparent text-black border-2 border-slate-300 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-100 transition-all active:scale-95 lowercase">
            preview growth
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
