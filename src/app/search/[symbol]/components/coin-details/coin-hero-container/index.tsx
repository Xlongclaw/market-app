import Image from "next/image";
import React from "react";
import { CoinDataContext } from "../../../providers/coin-current-data-provider";

export default function CoinHeroContainer({}) {
  const marketData = React.useContext(CoinDataContext);
  return (
    <div className="flex items-center gap-4">
      <Image width={32} height={32} src={marketData!.coinData.webp64} alt="" />
      <h3 className="text-3xl font-semibold">{marketData!.coinData.name}</h3>
      <h3
        className={`text-xs font-semibold`}
        color={marketData!.coinData.color}
      >
        {marketData!.symbol}
      </h3>
    </div>
  );
}
