import React, { useState } from 'react';
import { MealMoment, UsageType, UserSelection, Vibe } from '../types';

interface PrompterFormProps {
  onSubmit: (selection: UserSelection) => void;
}

const enumValues = <T extends Record<string, string>>(value: T) => Object.values(value);

const PrompterForm: React.FC<PrompterFormProps> = ({ onSubmit }) => {
  const [moment, setMoment] = useState<MealMoment>(MealMoment.LUNCH);
  const [vibe, setVibe] = useState<Vibe>(Vibe.QUICK);
  const [usageType, setUsageType] = useState<UsageType>(UsageType.DRIZZLE);
  const [extraInfo, setExtraInfo] = useState('');

  return (
    <form
      className="bg-white rounded-3xl shadow-xl border border-stone-200 p-6 md:p-8 space-y-6"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ moment, vibe, usageType, extraInfo });
      }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <label className="space-y-2">
          <span className="font-semibold text-stone-800">Meal moment</span>
          <select
            className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3"
            value={moment}
            onChange={(event) => setMoment(event.target.value as MealMoment)}
          >
            {enumValues(MealMoment).map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="font-semibold text-stone-800">Cooking vibe</span>
          <select
            className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3"
            value={vibe}
            onChange={(event) => setVibe(event.target.value as Vibe)}
          >
            {enumValues(Vibe).map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="space-y-3">
        <legend className="font-semibold text-stone-800">How do you want to use the dressing?</legend>
        <div className="grid sm:grid-cols-3 gap-3">
          {enumValues(UsageType).map((option) => (
            <label key={option} className="cursor-pointer">
              <input
                checked={usageType === option}
                className="peer sr-only"
                name="usageType"
                onChange={() => setUsageType(option as UsageType)}
                type="radio"
                value={option}
              />
              <span className="block rounded-xl border border-stone-300 px-4 py-3 text-center peer-checked:border-amber-600 peer-checked:bg-amber-50">
                {option}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="space-y-2 block">
        <span className="font-semibold text-stone-800">Anything in your kitchen?</span>
        <textarea
          className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 min-h-28"
          placeholder="Chicken, noodles, salad greens, tofu..."
          value={extraInfo}
          onChange={(event) => setExtraInfo(event.target.value)}
        />
      </label>

      <button className="w-full rounded-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 transition" type="submit">
        Generate my idea
      </button>
    </form>
  );
};

export default PrompterForm;
