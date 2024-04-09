"use client";
import OverallPortfolioContainer from "@/containers/overall-portfolio-container";
import React from "react";


export default function Page() {
  return (
    <div className="flex">
      <div>
        <OverallPortfolioContainer/>
        <div></div>
      </div>
      <div></div>
    </div>
  );
}
