'use client'
import React, { useState } from "react";
import SearchBar from "../search-bar";
import getMarketDataBySymbol from "@/utils/getMarketDataBySymbol";

export default function SearchPanel() {
  const [marketData, setMarketData] = React.useState<any>();

  return (
    <div>
      <SearchBar
        onSearch={async (v) => {
          const data = await getMarketDataBySymbol(v);
          setMarketData(data);
        }}
      />
      {marketData && <div>{JSON.stringify(marketData)}</div>}
    </div>
  );
}
