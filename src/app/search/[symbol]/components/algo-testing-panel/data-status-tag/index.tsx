import React from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { BiCheckCircle, BiError } from "react-icons/bi";

interface IProps {
  status: "NO DATA" | "LOADING" | "LOADED";
}

export default function DataStatusTag({ status }: IProps) {
  return (
    <div className="text-sm font-medium flex">
      {status === "NO DATA" ? (
        <h3 className="flex items-center gap-1 text-red-700">
          <BiError /> NO DATA
        </h3>
      ) : status === "LOADING" ? (
        <h3 className="flex items-center gap-1 text-yellow-600">
          <AiOutlineLoading /> LOADING
        </h3>
      ) : (
        <h3 className="flex items-center gap-1 text-green-700">
          <BiCheckCircle /> LOADED
        </h3>
      )}
    </div>
  );
}
