'use client';

import { ComponentType, useState } from 'react';

import Day1 from './day01';
import Day2 from './day02';
import Day3 from './day03';
import Day4 from "./day04";

type DayItem = {
  id: number;
  label: string;
  Component: ComponentType;
};

const DAYS: DayItem[] = [
  { id: 1, label: 'Day1 - Tailwind css practice', Component: Day1 },
  { id: 2, label: 'Day2 - Tailwind css practice', Component: Day2 },
  { id: 3, label: 'Day3 -  CSS 애니메이션 practice', Component: Day3 },
  { id: 4, label: "Day4 -  CSS 애니메이션 practice", Component: Day4 },
];

export default function Home() {
  const [activeDayId, setActiveDayId] = useState<number | null>(null);

  const activeDay = DAYS.find((day) => day.id === activeDayId);
  const ActiveComponent = activeDay?.Component;

  return (
    <div className="m-4 flex flex-col items-start gap-2">
      {DAYS.map((day) => (
        <button
          key={day.id}
          type="button"
          onClick={() =>
            setActiveDayId((prev) => (prev === day.id ? null : day.id))
          }
          className="hover:text-red-600"
        >
          {day.label}
        </button>
      ))}

      <div className="mt-4 h-[calc(100%-24px)] w-full">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
}
