import React from "react";
import { CoinDataContext } from "../../../providers/coin-current-data-provider";
import { BiInfoCircle } from "react-icons/bi";

export default function CoinVolumeContainer() {
  const marketData = React.useContext(CoinDataContext);

  return (
    <div>
      <div className="text-2xl font-semibold mt-8">Market Volume</div>
      <div className="flex gap-4 bg-zinc-90 py-3 justify-between">
        <div className="font-semibold text-base">
          <div className="flex items-center gap-2">
            Circulating{" "}
            <BiInfoCircle style={{ color: marketData!.coinData.color }} />
          </div>
          <h3 className="text-2xl font-normal mt-1">
            {marketData!.coinData.circulatingSupply / 1000000}
            {" M "}
            <span className="text-xs"> {marketData!.symbol}</span>
          </h3>
        </div>
        <div className="font-semibold text-base">
          <div className="flex items-center gap-2">
            Total <BiInfoCircle style={{ color: marketData!.coinData.color }} />
          </div>
          <h3 className="text-2xl font-normal mt-1">
            {marketData!.coinData.totalSupply / 1000000}
            {" M "}
            <span className="text-xs"> {marketData!.symbol}</span>
          </h3>
        </div>
        <div className="font-semibold text-base">
          <div className="flex items-center gap-2">
            Max <BiInfoCircle style={{ color: marketData!.coinData.color }} />
          </div>
          <h3 className="text-2xl font-normal mt-1">
            {(marketData!.coinData.maxSupply / 1000000).toFixed(2)}
            {" M"}
            <span className="text-xs"> {marketData!.symbol}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
