import NumericDataWrapper from "@/components/numeric-data-wrapper";
import { Button } from "@/ext_components/Button";
import React from "react";
import PORTFOLIO_DATA from "./PORTFOLIO_DATA";

export default function OverallPortfolioContainer() {
  return (
    <div className="p-12 bg-black  w-[75rem] rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold tracking-[1px]">Overall Portfolio</h3>
        <div className="flex">
          <Button>Withdraw</Button>
          <Button variant="bordered">Deposit +</Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-24">
        {PORTFOLIO_DATA.map((data) => (
          <NumericDataWrapper
            amount={data.amount}
            change={data.change}
            title={data.title}
          />
        ))}
      </div>
    </div>
  );
}
