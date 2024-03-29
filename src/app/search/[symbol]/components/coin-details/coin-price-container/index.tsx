import React from 'react';
import { CoinDataContext } from '../../../providers/coin-current-data-provider';

/**
 * CoinPriceContainer component displays the price of a specific cryptocurrency.
 * @returns JSX element representing the CoinPriceContainer component.
 */
export default function CoinPriceContainer(): JSX.Element {
  // Accessing coin data from context
  const marketData = React.useContext(CoinDataContext);

  // Render the price of the cryptocurrency
  return (
    <h3 className="text-3xl mt-4 font-semibold transition-all">
      {/* Display the cryptocurrency price rounded to 5 decimal places */}
      {marketData!.coinData.rate.toFixed(5)}{" "}
      {/* Display the currency (USD) */}
      <span className="text-sm">USD</span>
    </h3>
  );
}
