"use client"
import React from "react";
import AlgoTestingPanel from "./components/algo-testing-panel";
import CoinDetails from "./components/coin-details";
import CoinCurrentDataProvider from "./providers/coin-current-data-provider";
import CoinSymbolProvider from "./providers/coin-symbol-provider";
import TableProvider from "./providers/table-provider";
import CapitalProvider from "./providers/capital-provider";

/**
 * Page component represents a page for displaying cryptocurrency details and algorithm testing panel.
 * @param params Object containing symbol parameter.
 * @returns JSX element representing the Page component.
 */
export default function Page({ params }: { params: { symbol: string } }): JSX.Element {
  return (
    <CoinSymbolProvider symbol={params.symbol}>
      <CoinCurrentDataProvider symbol={params.symbol}>
        {/* Render CoinDetails component for displaying cryptocurrency details */}
        <>
          <CoinDetails />
          {/* CapitalProvider for providing capital data */}
          <CapitalProvider>
            {/* TableProvider for providing table data */}
            <TableProvider>
              {/* AlgoTestingPanel for displaying algorithm testing panel */}
              <AlgoTestingPanel />
            </TableProvider>
          </CapitalProvider>
        </>
      </CoinCurrentDataProvider>
    </CoinSymbolProvider>
  );
}
