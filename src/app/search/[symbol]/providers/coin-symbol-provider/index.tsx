"use client";
import React from "react";

interface IProps {
  children: React.JSX.Element;
  symbol: string;
}

export interface ICoinSymbolContext {
  symbol: string;
}

export const CoinSymbolContext = React.createContext<ICoinSymbolContext>({
  symbol: "",
});

export default function CoinSymbolProvider({ children, symbol }: IProps) {
  return (
    <CoinSymbolContext.Provider value={{ symbol }}>
      {children}
    </CoinSymbolContext.Provider>
  );
}
