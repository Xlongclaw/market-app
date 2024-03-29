import React from "react";

interface IProps {
  onClick: () => void;
  title:string
}

export default function AlgoBtn({ title, onClick }: IProps) {
  return (
    <button
      onClick={onClick}
      className="p-3 my-2 border border-zinc-800 text-xs rounded-full bg-zinc-900 text-zinc-300 font-medium px-4 hover:bg-zinc-800 transition-colors"
    >
      {title}
    </button>
  );
}
