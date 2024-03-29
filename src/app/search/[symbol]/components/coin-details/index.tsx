import React from "react";
import { CoinDataContext } from "../../providers/coin-current-data-provider";
import CoinHeroContainer from "./coin-hero-container";
import CoinPriceContainer from "./coin-price-container";
import CoinChangeContainer from "./coin-change-container";
import LinksContainer from "./links-container";
import CoinVolumeContainer from "./coin-volume-container";

interface IProps {}

export default function CoinDetails({}: IProps) {
  const marketData = React.useContext(CoinDataContext);

  if (marketData?.coinData)
    return (
      <div className="borde border-zinc-900 bg-neutral-9 p-0 mx-32 my-4">
        <div className="flex justify-between">
          <>
            <CoinHeroContainer />
            <CoinPriceContainer />
          </>
          <CoinChangeContainer />
        </div>
        <LinksContainer />
        <CoinVolumeContainer />
      </div>
    );
}
