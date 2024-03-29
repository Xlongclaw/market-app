"use client";
import React from "react";

interface IProps {
  children: React.JSX.Element;
}

export interface ICapitalContext {
  capital: number;
  remainingCapital: number;
  changeCapital: (capital: number) => void;
  changeRemainingCapital: (capital: number) => void;
}

export const CapitalContext = React.createContext<ICapitalContext>({
  capital: 0,
  remainingCapital: 0,
  changeCapital: () => {},
  changeRemainingCapital: () => {},
});

export default function CapitalProvider({ children }: IProps) {
  const [capital, setCapital] = React.useState<number>(1000);
  const [remainingCapital, setRemainingCapital] = React.useState<number>(1000);

  const changeCapital = (capital: number) => {
    setCapital(capital);
  };
  const changeRemainingCapital = (capital: number) => {
    setRemainingCapital(capital);
  };

  return (
    <CapitalContext.Provider
      value={{
        capital,
        changeCapital,
        changeRemainingCapital,
        remainingCapital,
      }}
    >
      {children}
    </CapitalContext.Provider>
  );
}
