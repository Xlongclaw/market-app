import React from "react";
import { CoinDataContext } from "../../../providers/coin-current-data-provider";
import VolumeWrapper from "./volume-wrapper";

/**
 * CoinVolumeContainer component displays volume information related to a specific cryptocurrency.
 * @returns JSX element representing the CoinVolumeContainer component.
 */
export default function CoinVolumeContainer(): JSX.Element {
  // Accessing coin data from context
  const marketData = React.useContext(CoinDataContext);

  // Render volume information if coin data is available
  return (
    <>
      {/* Title */}
      <div className="text-2xl font-semibold mt-8">Market Volume</div>
      {/* Volume information */}
      <div className="flex gap-4 bg-zinc-90 py-3 justify-between">
        {/* Circulating supply volume */}
        <VolumeWrapper title="Circulating" volume={marketData!.coinData.circulatingSupply} />
        {/* Total supply volume */}
        <VolumeWrapper title="Total" volume={marketData!.coinData.totalSupply} />
        {/* Maximum supply volume */}
        <VolumeWrapper title="Max" volume={marketData!.coinData.maxSupply} />
      </div>
    </>
  );
}
