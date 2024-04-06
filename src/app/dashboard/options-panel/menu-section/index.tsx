import Image from "next/image";
import React from "react";
import coins from "./Coins.svg";
import coinsWhite from "./CoinsWhite.svg";
import workflow from "./Workflow.svg";
import workflowWhite from "./WorkflowWHITE.svg";
import workflowBlue from "./WorkflowBlue.svg";
import bulletlist from "./Bullet List.svg";
import playlistwhite from "./PlaylistWhite.svg";

import stockGrowth from "./Stocks Growth.svg";
import stockGrowthWhite from "./Stocks GrowthWhite.svg";
import graph from "./Graph.svg";
import graphWhite from "./GraphWhite.svg";
import OptionIcon from "./option-icon";

export default function MenuSection() {
  return (
    <div className="my-16 flex flex-col gap-4">
      <OptionIcon src={coins} hoverSrc={coinsWhite} selectedSrc={""} />
      <OptionIcon src={workflow}  selectedSrc={workflowBlue} hoverSrc={workflowWhite} selected/>
      <OptionIcon src={graph} hoverSrc={graphWhite} selectedSrc={""} />
      <OptionIcon src={bulletlist} hoverSrc={playlistwhite} selectedSrc={""} />
      <OptionIcon src={stockGrowth} hoverSrc={stockGrowthWhite} selectedSrc={""} />
    </div>
  );
}
