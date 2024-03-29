"use client";
import React from "react";
import AlgoTestingPanel from "./components/algo-testing-panel";
import CoinDetails from "./components/coin-details";
import CoinCurrentDataProvider from "./providers/coin-current-data-provider";
import CoinSymbolProvider from "./providers/coin-symbol-provider";

export default function Page({ params }: { params: { symbol: string } }) {
  return (
    <CoinSymbolProvider symbol={params.symbol}>
      <CoinCurrentDataProvider symbol={params.symbol}>
        <>
          <CoinDetails />
          <AlgoTestingPanel />
        </>
      </CoinCurrentDataProvider>
    </CoinSymbolProvider>
  );
}
