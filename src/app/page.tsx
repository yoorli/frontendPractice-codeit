"use client";

import { ComponentType, useState } from "react";
import Day1 from "./day1";
import Day2 from "./day2";
// import Day3 from "./day3";
// import Day4 from "./day4";

type DayItem = {
  id: number;
  label: string;
  Component: ComponentType;
};

const DAYS: DayItem[] = [
  { id: 1, label: "Day1 - Tailwind css practice", Component: Day1 },
  { id: 2, label: "Day2 - Tailwind css practice", Component: Day2 },
  // { id: 3, label: "Day3 - Tailwind css practice", Component: Day3 },
  // { id: 4, label: "Day4 - Tailwind css practice", Component: Day4 },
];

export default function Home() {
  const [activeDayId, setActiveDayId] = useState<number | null>(null);

  const activeDay = DAYS.find((day) => day.id === activeDayId);
  const ActiveComponent = activeDay?.Component;

  return (
    <div className="m-2 flex w-full flex-col items-start gap-2">
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

      <div className="h-[calc(100%-24px)] w-full mt-4">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
}
