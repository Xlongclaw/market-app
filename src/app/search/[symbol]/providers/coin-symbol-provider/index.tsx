"use client";
import React from "react";

interface IProps {
  children: React.JSX.Element;
  symbol: string;
}

export interface ICoinSymbolContext {
  value: string;
}

export const CoinSymbolContext = React.createContext<ICoinSymbolContext>({
  value: "",
});

export default function CoinSymbolProvider({ children, symbol }: IProps) {
  return (
    <CoinSymbolContext.Provider value={{ value:symbol }}>
      {children}
    </CoinSymbolContext.Provider>
  );
}
