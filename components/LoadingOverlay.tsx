import React from 'react';

interface LoadingOverlayProps {
  message: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ message }) => (
  <div className="fixed inset-0 z-30 bg-stone-950/50 backdrop-blur-sm flex items-center justify-center p-4">
    <div className="bg-white rounded-3xl shadow-2xl p-8 text-center max-w-sm w-full">
      <div className="mx-auto mb-5 h-14 w-14 rounded-full border-4 border-amber-200 border-t-amber-700 animate-spin" />
      <h2 className="text-2xl text-stone-900">Cooking up inspiration</h2>
      <p className="mt-3 text-stone-600">{message || 'Please wait...'}</p>
    </div>
  </div>
);

export default LoadingOverlay;
