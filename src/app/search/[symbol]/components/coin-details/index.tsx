import React from "react";
import { CoinDataContext } from "../../providers/coin-current-data-provider";
import CoinHeroContainer from "./coin-hero-container";
import CoinPriceContainer from "./coin-price-container";
import CoinChangeContainer from "./coin-change-container";
import CoinVolumeContainer from "./coin-volume-container";
import LinksContainer from "./links-container";

/**
 * Props interface for the CoinDetails component.
 */
interface IProps {}

/**
 * CoinDetails component displays details of a specific cryptocurrency.
 * @returns JSX element representing the CoinDetails component.
 */
export default function CoinDetails({}: IProps): JSX.Element {
  // Accessing coin data from context
  const marketData = React.useContext(CoinDataContext);

  // Render if coin data is available
  if (marketData?.coinData) {
    return (
      <div className="border border-zinc-900 bg-neutral-9 p-0 mx-32 my-4">
        <div className="flex justify-between">
          {/* CoinHeroContainer for displaying hero section */}
          <>
            <CoinHeroContainer />
            {/* CoinPriceContainer for displaying price information */}
            <CoinPriceContainer />
          </>
          {/* CoinChangeContainer for displaying price change */}
          <CoinChangeContainer />
        </div>
        {/* LinksContainer for displaying useful links */}
        <LinksContainer />
        {/* CoinVolumeContainer for displaying volume information */}
        <CoinVolumeContainer />
      </div>
    );
  } else {
    // Render nothing if coin data is not available
    return <></>;
  }
}
