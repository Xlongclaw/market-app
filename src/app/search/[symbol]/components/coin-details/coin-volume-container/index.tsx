import React from "react";
import { CoinDataContext } from "../../../providers/coin-current-data-provider";
import VolumeWrapper from "./volume-wrapper";

export default function CoinVolumeContainer() {
  const marketData = React.useContext(CoinDataContext);

  return (
    <>
      <div className="text-2xl font-semibold mt-8">Market Volume</div>
      <div className="flex gap-4 bg-zinc-90 py-3 justify-between">
        <VolumeWrapper title="Circulating" volume={marketData!.coinData.circulatingSupply}/>
        <VolumeWrapper title="Total" volume={marketData!.coinData.totalSupply}/>
        <VolumeWrapper title="Max" volume={marketData!.coinData.maxSupply}/>
      </div>
    </>
  );
}
