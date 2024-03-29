import React from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { BiCheckCircle, BiError } from "react-icons/bi";

interface IProps {
  status: "NO DATA" | "LOADING" | "LOADED";
}

export default function DataStatusTag({ status }: IProps) {
  return (
    <div className="text-sm font-medium flex mx-8">
      {status === "NO DATA" ? (
        <div className="flex items-center text-xs gap-2 justify-centerrounded-xl h-10">
        <div className="bg-red-700 w-4 h-4 rounded-full"></div> NO DATA LOADED
      </div>
      ) : status === "LOADING" ? (
        <div className="flex items-center text-xs gap-2 justify-center rounded-xl h-10">
        <div className="bg-yellow-600 w-4 h-4 rounded-full"></div> DATA FETCHING IN PROGRESS
      </div>
      ) : (
        <div className="flex items-center text-xs gap-2 justify-centerrounded-xl h-10">
          <div className="bg-green-400 w-4 h-4 rounded-full"></div> DATA LOADING SUCCESSFUL
        </div>
      )}
    </div>
  );
}
