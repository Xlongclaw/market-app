import React from "react";
import { CoinDataContext } from "../../../providers/coin-current-data-provider";
import ChangeBox from "./change-box";

export default function CoinChangeContainer() {
  const marketData = React.useContext(CoinDataContext);

  return (
    <div className="flex gap-2 my-4">
      <ChangeBox time={"HOUR"} delta={marketData!.coinData.delta.hour} />
      <ChangeBox time={"DAY"} delta={marketData!.coinData.delta.day} />
      <ChangeBox time={"WEEK"} delta={marketData!.coinData.delta.week} />
      <ChangeBox time={"QUARTER"} delta={marketData!.coinData.delta.quarter} />
      <ChangeBox time={"YEAR"} delta={marketData!.coinData.delta.year} />
    </div>
  );
}
