import React from 'react';

const Hero: React.FC = () => (
  <section className="text-center py-10 md:py-16">
    <p className="text-amber-700 font-semibold uppercase tracking-[0.25em] text-xs mb-4">Flavor inspiration</p>
    <h2 className="text-4xl md:text-6xl text-stone-900 leading-tight">
      Turn roasted sesame dressing into your next craveable dish.
    </h2>
    <p className="mt-6 text-lg text-stone-600 max-w-2xl mx-auto">
      Pick a meal moment, choose your vibe, and get a tailored serving idea with ingredients and simple steps.
    </p>
  </section>
);

export default Hero;
