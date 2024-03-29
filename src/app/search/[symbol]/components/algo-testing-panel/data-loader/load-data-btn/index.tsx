import React from 'react'

/**
 * Props interface for the LoadDataBtn component.
 */
interface IProps {
  dataLoaded: boolean; // Indicates whether data is already loaded.
  onClick: () => void; // Function to be called when the button is clicked.
}

/**
 * LoadDataBtn component represents a button for loading or reloading data.
 * @param dataLoaded Indicates whether data is already loaded.
 * @param onClick Function to be called when the button is clicked.
 * @returns JSX element representing the LoadDataBtn component.
 */
export default function LoadDataBtn({ dataLoaded, onClick }: IProps): JSX.Element {
  // Render the button with appropriate text based on dataLoaded status
  return (
    <button
      onClick={onClick}
      className="text-xs border-2 border-zinc-300 text-zinc-300 font-semibold hover:bg-zinc-300 hover:text-black px-6 rounded-full"
    >
      {/* Display "Load Data" if data is not loaded, otherwise display "Reload Data" */}
      {!dataLoaded ? "Load Data" : "Reload Data"}
    </button>
  )
}
