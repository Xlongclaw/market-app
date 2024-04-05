import React from "react";

const TAG = "THE ULTIMATE CHOICE FOR TRUSTED TRADING";

export default function HeroTag() {
  return (
    <div className="text-xs flex items-center gap-2 bg-dark-blue-I p-4 rounded-2xl tracking-[1px]">
      <p>⭐</p>
      <p>{TAG}</p>
    </div>
  );
}
