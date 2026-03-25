import React, { useState, useEffect, useRef } from 'react';
import { Check, MessageSquare, Tag } from 'lucide-react';
import avatar1 from '../assets/avatars/avatar1.png';
import avatar2 from '../assets/avatars/avatar2.png';
import avatar3 from '../assets/avatars/avatar3.png';

const AnalyticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const bars = [
    { height: '45%', delay: '0ms' },
    { height: '70%', delay: '100ms' },
    { height: '55%', delay: '200ms' },
    { height: '85%', delay: '300ms' },
    { height: '60%', delay: '400ms' },
    { height: '40%', delay: '500ms' },
    { height: '75%', delay: '600ms' },
    { height: '50%', delay: '700ms' },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left Column */}
        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4">
            Uncovered project insights analytics and statistics
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8">
            Gain actionable insights and track project performance with our advanced statistics and analytic tools.
          </p>

          {/* Bar Chart Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-shadow duration-500">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-md font-bold text-slate-800">Project Analytics</h3>
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <div className="w-2 h-2 rounded-full bg-purple-300" />
                <div className="w-2 h-2 rounded-full bg-purple-200" />
              </div>
            </div>

            {/* Bar Chart */}
            <div className="flex items-end justify-between space-x-2 h-44">
              {bars.map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                  <div
                    className="w-full rounded-t-lg transition-all duration-1000 ease-out"
                    style={{
                      height: isVisible ? bar.height : '0%',
                      transitionDelay: bar.delay,
                      background: `linear-gradient(to top, #7c3aed, ${i % 2 === 0 ? '#a78bfa' : '#c4b5fd'})`,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* X-axis labels */}
            <div className="flex justify-between mt-3">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'].map((d, i) => (
                <span key={i} className="text-[9px] text-slate-400 font-medium flex-1 text-center">{d}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={`transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4">
            Engaging & Interactive Calendar Experience
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8">
            Evaluate project decision-making with powerful statistics and analytics for informed insights and strategic planning.
          </p>

          {/* Design System Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-shadow duration-500">
            <div className="flex flex-col gap-2 mb-4">
              <h3 className="text-md font-bold text-slate-800">Design System</h3>
              <div className="flex space-x-2">
                <span className="text-[15px] font-semibold bg-red-100 text-red-600 px-2.5 py-1 rounded-full">High Priority</span>
                <span className="text-[15px] font-semibold bg-amber-100 text-blue-400 px-2.5 py-1 rounded-full">2 Days Left</span>
              </div>
            </div>

            {/* Gradient Progress Visual */}
            <div className="w-full h-32 rounded-xl mb-5 overflow-hidden relative"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #3b82f6, #06b6d4, #8b5cf6)' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-4 gap-3 p-4 w-full">
                  <div className="h-8 bg-white/20 rounded-lg backdrop-blur-sm" />
                  <div className="h-8 bg-white/15 rounded-lg backdrop-blur-sm col-span-2" />
                  <div className="h-8 bg-white/20 rounded-lg backdrop-blur-sm" />
                  <div className="h-8 bg-white/15 rounded-lg backdrop-blur-sm col-span-2" />
                  <div className="h-8 bg-white/20 rounded-lg backdrop-blur-sm" />
                  <div className="h-8 bg-white/15 rounded-lg backdrop-blur-sm" />
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-slate-600">Progress</span>
                <span className="text-[11px] font-bold text-indigo-600">45%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? '45%' : '0%',
                    background: 'linear-gradient(to right, #7c3aed, #3b82f6)',
                    transitionDelay: '400ms',
                  }}
                />
              </div>
            </div>

            {/* Bottom Row: Avatars + Stats */}
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                <img src={avatar1} alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src={avatar2} alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src={avatar3} alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-slate-400">
                  <Check size={14} className="text-green-500" />
                  <span className="text-[11px] font-semibold">12</span>
                </div>
                <div className="flex items-center space-x-1 text-slate-400">
                  <MessageSquare size={14} />
                  <span className="text-[11px] font-semibold">8</span>
                </div>
                <div className="flex items-center space-x-1 text-slate-400">
                  <Tag size={14} />
                  <span className="text-[11px] font-semibold">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AnalyticsSection;
