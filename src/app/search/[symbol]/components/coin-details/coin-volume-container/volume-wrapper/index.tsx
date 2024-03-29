import { CoinDataContext } from "@/app/search/[symbol]/providers/coin-current-data-provider";
import React from "react";
import { BiInfoCircle } from "react-icons/bi";

interface IProps {
  title: string;
  volume: number;
}

export default function VolumeWrapper(props: IProps) {
  const marketData = React.useContext(CoinDataContext);
  return (
    <div className="font-semibold text-base">
      <div className="flex items-center gap-2">
        {props.title}
        <BiInfoCircle style={{ color: marketData!.coinData.color }} />
      </div>
      <h3 className="text-2xl font-normal mt-1">
        {props.volume / 1000000}
        {" M "}
        <span className="text-xs"> {marketData!.symbol}</span>
      </h3>
    </div>
  );
}
