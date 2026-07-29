
export enum MealMoment {
  BREAKFAST = 'Breakfast',
  LUNCH = 'Lunch',
  DINNER = 'Dinner',
  SNACK = 'Snack',
  PARTY = 'Party Time'
}

export enum UsageType {
  DRIZZLE = 'Drizzle',
  DIP = 'Dip',
  MIX = 'Mix'
}

export enum Vibe {
  QUICK = 'Quick & Easy',
  GOURMET = 'Gourmet Chef',
  HEALTHY = 'Healthy & Fresh',
  COMFORT = 'Comfort Food'
}

export interface RecipeSuggestion {
  title: string;
  usageType: UsageType;
  description: string;
  ingredients: string[];
  instructions: string[];
  funFact: string;
}

export interface UserSelection {
  moment: MealMoment;
  vibe: Vibe;
  usageType: UsageType;
  extraInfo: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
