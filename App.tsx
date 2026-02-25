
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PrompterForm from './components/PrompterForm';
import ResultDisplay from './components/ResultDisplay';
import LoadingOverlay from './components/LoadingOverlay';
import ChatBot from './components/ChatBot';
import { UserSelection, RecipeSuggestion } from './types';
import { generateRecipeSuggestion, generateRecipeImage } from './services/geminiService';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [result, setResult] = useState<{ recipe: RecipeSuggestion; imageUrl: string } | null>(null);

  const handlePrompterSubmit = async (selection: UserSelection) => {
    setLoading(true);
    setResult(null);
    
    try {
      setLoadingMessage('Consulting the American Garden AI Chef...');
      const recipe = await generateRecipeSuggestion(selection);
      
      setLoadingMessage(`Styling your ${recipe.usageType.toLowerCase()}...`);
      const imageUrl = await generateRecipeImage(recipe);
      
      setResult({ recipe, imageUrl });
    } catch (error) {
      console.error("Error generating inspiration:", error);
      alert("The AI Chef is a bit busy! Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        {!result && !loading && (
          <>
            <Hero />
            <div className="mt-12">
              <PrompterForm onSubmit={handlePrompterSubmit} />
            </div>
          </>
        )}

        {loading && <LoadingOverlay message={loadingMessage} />}

        {result && !loading && (
          <ResultDisplay 
            recipe={result.recipe} 
            imageUrl={result.imageUrl} 
            onReset={handleReset} 
          />
        )}
      </main>

      <footer className="bg-stone-100 py-8 mt-12 border-t border-stone-200">
        <div className="container mx-auto px-4 text-center text-stone-500 text-sm">
          <p>© 2025 American Garden. Powered by AI Chef Technology.</p>
          <p className="mt-2 italic">"Bringing the world's flavors to your kitchen."</p>
        </div>
      </footer>

      {/* Floating AI Chat Bot */}
      <ChatBot />
    </div>
  );
};

export default App;
