import React from 'react';

const SocialProofSection = () => {
  const logos = [
    { name: 'Forbes', style: 'italic' },
    { name: 'Forbes', style: 'italic' },
    { name: 'CNBC', style: 'normal' },
    { name: 'Bloomberg', style: 'normal' },
    { name: 'Inc.', style: 'italic' },
  ];

  return (
    <section className="py-4 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm text-slate-400 font-medium tracking-wide  mb-10">
          Trusted by 100+ companies and Business
        </p>
        <div className="flex items-center justify-between gap-16 md:gap-24">
          {logos.map((logo) => (
            <span
              key={logo.name}
              className="text-2xl md:text-3xl font-bold text-slate-500 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default select-none"
              style={{ fontStyle: logo.style }}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
