import React from "react";

/**
 * Props interface for the DataStatusTag component.
 */
interface IProps {
  status: "NO DATA" | "LOADING" | "LOADED"; // The status of data loading.
}

/**
 * DataStatusTag component represents a status tag for data loading.
 * @param status The status of data loading.
 * @returns JSX element representing the DataStatusTag component.
 */
export default function DataStatusTag({ status }: IProps): JSX.Element {
  // Render the status tag based on the provided status
  return (
    <div className="text-sm font-medium flex mx-8">
      {status === "NO DATA" ? (
        // Render no data status
        <div className="flex items-center text-xs gap-2 justify-center rounded-xl h-10">
          <div className="bg-red-700 w-4 h-4 rounded-full"></div> NO DATA LOADED
        </div>
      ) : status === "LOADING" ? (
        // Render loading status
        <div className="flex items-center text-xs gap-2 justify-center rounded-xl h-10">
          <div className="bg-yellow-600 w-4 h-4 rounded-full"></div> DATA FETCHING IN PROGRESS
        </div>
      ) : (
        // Render loaded status
        <div className="flex items-center text-xs gap-2 justify-center rounded-xl h-10">
          <div className="bg-green-400 w-4 h-4 rounded-full"></div> DATA LOADING SUCCESSFUL
        </div>
      )}
    </div>
  );
}
