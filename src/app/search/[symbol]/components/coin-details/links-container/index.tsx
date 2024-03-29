import React from "react";
import { CoinDataContext } from "../../../providers/coin-current-data-provider";
import Link from "next/link";
import { BiLink } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

export default function LinksContainer() {
  const marketData = React.useContext(CoinDataContext);
  return (
    <div className="flex gap-2">
      <Link
        href={marketData!.coinData.links.website}
        className="flex items-center gap-2 text-zinc-300 p-4 bg-zinc-900"
      >
        Trading View <BsArrowRight />
      </Link>
      <Link
        href={marketData!.coinData.links.website}
        style={{ color: marketData!.coinData.color }}
        className="flex items-center gap-2 p-4 bg-zinc-900"
      >
        <BiLink /> Official Site
      </Link>
    </div>
  );
}
