import Image from "next/image";
import React from "react";
import { CoinDataContext } from "../../../providers/coin-current-data-provider";

/**
 * CoinHeroContainer component displays the hero section for a specific cryptocurrency.
 * @returns JSX element representing the CoinHeroContainer component.
 */
export default function CoinHeroContainer(): JSX.Element {
  // Accessing coin data from context
  const marketData = React.useContext(CoinDataContext);

  // Render the hero section
  return (
    <div className="flex items-center gap-4">
      {/* Display cryptocurrency logo */}
      <Image width={32} height={32} src={marketData!.coinData.webp64} alt="" />
      {/* Display cryptocurrency name */}
      <h3 className="text-3xl font-semibold">{marketData!.coinData.name}</h3>
      {/* Display cryptocurrency symbol */}
      <h3 className={`text-xs font-semibold`} style={{ color: marketData!.coinData.color }}>
        {marketData!.symbol}
      </h3>
    </div>
  );
}
