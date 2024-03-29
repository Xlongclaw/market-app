"use client";
import React from "react";
import getMarketDataBySymbol from "@/utils/getMarketDataBySymbol";

interface IProps {
  children: React.JSX.Element;
  symbol: string;
}

interface ICoinDataContext {
  coinData: any;
  symbol: string;
}

export const CoinDataContext = React.createContext<ICoinDataContext | null>(
  null
);

export default function CoinCurrentDataProvider({ children, symbol }: IProps) {
  const [coinCurrentData, setCoinCurrentData] = React.useState<any>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      getMarketDataBySymbol(symbol).then((data) => {
        console.log("symbol-fetch");
        setCoinCurrentData(data);
      });
    }, 20000);
    return () => {
      clearInterval(interval);
    };
  }, [coinCurrentData]);

  return (
    <CoinDataContext.Provider value={{ coinData: coinCurrentData, symbol }}>
      {children}
    </CoinDataContext.Provider>
  );
}
