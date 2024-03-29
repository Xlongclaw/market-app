import React from 'react'
import { CoinDataContext } from '../../../providers/coin-current-data-provider';

export default function CoinPriceContainer() {
  const marketData = React.useContext(CoinDataContext);
  return (
    <h3 className="text-3xl mt-4 font-semibold transition-all">
    {marketData!.coinData.rate.toFixed(5)}{" "}
    <span className="text-sm">USD</span>
  </h3>
  )
}
