import React from "react";
import { CoinDataContext } from "../../../providers/coin-current-data-provider";
import { BiLink } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import LinkBox from "./link-box";

/**
 * LinksContainer component displays links related to a specific cryptocurrency.
 * @returns JSX element representing the LinksContainer component.
 */
export default function LinksContainer(): JSX.Element {
  // Accessing coin data from context
  const marketData = React.useContext(CoinDataContext);

  // Render links if coin data is available
  return (
    <div className="flex gap-2">
      {/* Link to Trading View */}
      <LinkBox
        color={"#eee"}
        link={marketData!.coinData.links.website}
        title="Trading View"
      >
        <BsArrowRight />
      </LinkBox>
      {/* Link to Official Site */}
      <LinkBox
        color={marketData!.coinData.color}
        link={marketData!.coinData.links.website}
        title="Official Site"
      >
        <BiLink />
      </LinkBox>
    </div>
  );
}
