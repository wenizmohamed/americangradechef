import { RecipeSuggestion, UserSelection, Vibe } from '../types';

const titleByVibe: Record<Vibe, string> = {
  [Vibe.QUICK]: '15-Minute Roasted Sesame Rice Bowl',
  [Vibe.GOURMET]: 'Roasted Sesame Glazed Chef Plate',
  [Vibe.HEALTHY]: 'Crunchy Roasted Sesame Garden Bowl',
  [Vibe.COMFORT]: 'Cozy Roasted Sesame Noodle Toss',
};

export async function generateRecipeSuggestion(selection: UserSelection): Promise<RecipeSuggestion> {
  const pantryNote = selection.extraInfo.trim()
    ? ` featuring ${selection.extraInfo.trim()}`
    : '';

  return {
    title: titleByVibe[selection.vibe],
    usageType: selection.usageType,
    description: `A ${selection.vibe.toLowerCase()} idea for ${selection.moment.toLowerCase()}${pantryNote}, finished with American Garden roasted sesame dressing.`,
    ingredients: [
      'American Garden roasted sesame dressing',
      'Cooked rice, noodles, or crisp salad greens',
      selection.extraInfo.trim() || 'Grilled chicken, tofu, or boiled eggs',
      'Cucumber, carrots, scallions, or cabbage',
      'Sesame seeds and lime wedges',
    ],
    instructions: [
      'Prepare your base and slice the vegetables into bite-sized pieces.',
      'Cook or warm the protein, then season lightly with salt and pepper.',
      'Toss, drizzle, or serve the dressing on the side based on the suggested usage.',
      'Finish with sesame seeds, herbs, and a squeeze of lime before serving.',
    ],
    funFact: 'Roasted sesame dressing works especially well with crunchy textures because its nutty flavor balances fresh vegetables and savory proteins.',
  };
}

export async function generateRecipeImage(recipe: RecipeSuggestion): Promise<string> {
  const query = encodeURIComponent(`${recipe.title} roasted sesame bowl`);
  return `https://source.unsplash.com/1200x800/?${query}`;
}
