import React from "react";

export default function ChangeBox({ delta,time }: { delta: number,time:string }) {
  const value = Number(((delta - 1) * 100).toFixed(4));
  return (
    <div className="bg-zinc-900 rounded-xl p-4">
      <p className="text-xs text-zinc-400">{time}</p>
      <h3
        className={` text-xl ${
          value > 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {value >0 && "+"}{value}%
      </h3>
      
    </div>
  );
}
