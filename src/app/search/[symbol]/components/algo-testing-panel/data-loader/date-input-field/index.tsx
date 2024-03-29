import React from "react";

/**
 * Props interface for the DateInputField component.
 */
interface IProps {
  onChange: (value: number) => void; // Function to be called when the date value changes.
  title: string; // The title or label for the date input field.
}

/**
 * DateInputField component represents a date input field.
 * @param onChange Function to be called when the date value changes.
 * @param title The title or label for the date input field.
 * @returns JSX element representing the DateInputField component.
 */
export default function DateInputField({ onChange, title }: IProps): JSX.Element {
  // Render the date input field
  return (
    <div className="bg-zinc-900 p-3 rounded-2xl text-xs px-8 relative border-zinc-800 border">
      {/* Title or label for the date input field */}
      <h5 className="text-[10px] font-medium text-zinc-300 absolute top-[-20px] left-[8px] border border-zinc-800 bg-zinc-950 px-2 rounded-full">{title}</h5>
      {/* Date input element */}
      <input
        type="date"
        onChange={(e) => {
          // Convert selected date value to timestamp and call onChange function
          onChange(Number(new Date(e.target.value)));
        }}
        className="bg-transparent focus:outline-none"
      />
    </div>
  );
}
