import React from 'react';

const Header: React.FC = () => (
  <header className="bg-white/90 backdrop-blur border-b border-stone-200 sticky top-0 z-20">
    <div className="container mx-auto px-4 py-4 max-w-5xl flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-semibold">American Garden</p>
        <h1 className="text-2xl md:text-3xl text-stone-900">AI Chef</h1>
      </div>
      <span className="rounded-full bg-amber-100 text-amber-800 px-4 py-2 text-sm font-semibold">
        Roasted Sesame Prompter
      </span>
    </div>
  </header>
);

export default Header;
