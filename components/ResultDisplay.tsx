import React from 'react';
import { RecipeSuggestion } from '../types';

interface ResultDisplayProps {
  recipe: RecipeSuggestion;
  imageUrl: string;
  onReset: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ recipe, imageUrl, onReset }) => (
  <section className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-200">
    {imageUrl && (
      <img className="w-full h-72 object-cover" src={imageUrl} alt={recipe.title} />
    )}
    <div className="p-6 md:p-8 space-y-6">
      <div>
        <span className="inline-flex rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-sm font-semibold mb-3">
          Best as a {recipe.usageType}
        </span>
        <h2 className="text-3xl md:text-4xl text-stone-900">{recipe.title}</h2>
        <p className="mt-3 text-stone-600 text-lg">{recipe.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl text-stone-900 mb-3">Ingredients</h3>
          <ul className="space-y-2 text-stone-700 list-disc pl-5">
            {recipe.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-xl text-stone-900 mb-3">Steps</h3>
          <ol className="space-y-2 text-stone-700 list-decimal pl-5">
            {recipe.instructions.map((instruction) => <li key={instruction}>{instruction}</li>)}
          </ol>
        </div>
      </div>

      <p className="rounded-2xl bg-stone-50 border border-stone-200 p-4 text-stone-600 italic">{recipe.funFact}</p>

      <button className="rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold px-6 py-3" onClick={onReset} type="button">
        Create another idea
      </button>
    </div>
  </section>
);

export default ResultDisplay;
