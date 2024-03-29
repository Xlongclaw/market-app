import React from "react";

/**
 * Props interface for the AlgoBtn component.
 */
interface IProps {
  onClick: () => void; // Function to be called when the button is clicked.
  title: string; // The title or text displayed on the button.
}

/**
 * AlgoBtn component represents a button for algorithm operations.
 * @param onClick Function to be called when the button is clicked.
 * @param title The title or text displayed on the button.
 * @returns JSX element representing the AlgoBtn component.
 */
export default function AlgoBtn({ title, onClick }: IProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="p-3 my-2 border border-zinc-800 text-xs rounded-full bg-zinc-900 text-zinc-300 font-medium px-4 hover:bg-zinc-800 transition-colors"
    >
      {title}
    </button>
  );
}
