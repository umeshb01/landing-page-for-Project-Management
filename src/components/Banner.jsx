import React, { useState } from 'react';
import { X } from 'lucide-react';

const Banner = ({ isVisible, setIsVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden transition-all duration-500 ease-in-out">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">

        {/* Banner Text with Badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm md:text-base font-medium">
          <span className="bg-white text-black px-3.5 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider shadow-md">
            Limited
          </span>
          <span className="opacity-90 tracking-wide">
            All plans are
          </span>
          <span className="bg-purple-800/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-black shadow-lg border border-white/10">
            30% OFF
          </span>
          <span className="opacity-90 tracking-wide">
            for the next 7 days
          </span>
        </div>

        {/* Claim Button */}
        <button className="bg-white text-indigo-700 px-5 py-1.5 rounded-full text-sm font-bold hover:bg-opacity-95 transition-all shadow-xl active:scale-95 whitespace-nowrap">
          Claim Discount
        </button>

        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsVisible(false);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-1 bg-white/10 rounded-full hover:bg-white/20"
          aria-label="Close banner"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
