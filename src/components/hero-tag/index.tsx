import React from "react";

const TAG = "THE ULTIMATE CHOICE FOR TRUSTED TRADING";

export default function HeroTag() {
  return (
    <div className="text-sm flex items-center gap-2 bg-dark-blue-I p-4 mt-20 text-light-blue-I font-medium rounded-2xl tracking-[1px]">
      <p>⭐</p>
      <p>{TAG}</p>
    </div>
  );
}
