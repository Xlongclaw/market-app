import React from "react";
import { CoinDataContext } from "../../../providers/coin-current-data-provider";
import { BiLink } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import LinkBox from "./link-box";

export default function LinksContainer() {
  const marketData = React.useContext(CoinDataContext);
  return (
    <div className="flex gap-2">
      <LinkBox
        color={"#eee"}
        link={marketData!.coinData.links.website}
        title="Trading View"
      >
        <BsArrowRight />
      </LinkBox>
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
