"use client";
import React from "react";
import NavigationBar from "@/components/navigation-bar";
import getMarketDataBySymbol from "@/utils/getMarketDataBySymbol";
import AlgoTestingPanel from "./algo-testing-panel";
import CoinDetails from "./coin-details";

export default function Page({ params }: { params: { symbol: string } }) {
  const [marketData, setMarketData] = React.useState<any>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      getMarketDataBySymbol(params.symbol).then((data) => {
        console.log("symbol-fetch");
        setMarketData(data);
      });
    }, 20000);
    return () => {
      clearInterval(interval);
    };
  }, [marketData]);

  return (
    <div>
      <NavigationBar />
      {marketData ? (
        <CoinDetails marketData={marketData} symbol={params.symbol} />
      ) : <div className="h-80 mx-32 flex justify-center items-center text-[10px]">LOADING....</div>
    }
      <AlgoTestingPanel symbol={params.symbol} />
    </div>
  );
}
