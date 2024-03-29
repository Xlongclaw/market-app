import React from "react";

/**
 * ChangeBox component represents a box displaying percentage change over a specific time interval.
 * @param delta The percentage change value.
 * @param time The time interval (e.g., HOUR, DAY, WEEK, QUARTER, YEAR).
 * @returns JSX element representing the ChangeBox component.
 */
export default function ChangeBox({ delta, time }: { delta: number; time: string }): JSX.Element {
  // Calculate the percentage change value
  const value = Number(((delta - 1) * 100).toFixed(4));

  // Render the change box
  return (
    <div className="bg-zinc-900 rounded-xl p-4">
      {/* Display the time interval */}
      <p className="text-xs text-zinc-400">{time}</p>
      {/* Display the percentage change value with appropriate styling */}
      <h3 className={`text-xl ${value > 0 ? "text-green-600" : "text-red-600"}`}>
        {/* Display '+' sign for positive change */}
        {value > 0 && "+"}
        {value}%
      </h3>
    </div>
  );
}
