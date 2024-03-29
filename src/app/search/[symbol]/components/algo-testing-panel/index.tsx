import XTable from "@/components/x-table";
import React from "react";
import CapitalContainer from "./capital-container";
import XTerminal from "./x-terminal";
import DataLoader from "./data-loader";
import { TableContext } from "../../providers/table-provider";

/**
 * AlgoTestingPanel component represents an algorithm testing panel.
 * @returns JSX element representing the AlgoTestingPanel component.
 */
export default function AlgoTestingPanel(): JSX.Element {
  // State to store symbol history data
  const [symbolHistory, setSymbolHistory] = React.useState<Array<any>>();

  // Accessing trades data from context
  const tradesData = React.useContext(TableContext);

  // Render the algorithm testing panel
  return (
    <div className="mx-32 my-8">
      {/* DataLoader component for loading symbol history data */}
      <DataLoader
        onChange={(data) => setSymbolHistory(data)}
        symbolHistory={symbolHistory}
      />
      {/* XTerminal component for displaying terminal */}
      <XTerminal coinHistory={symbolHistory!} />
      {/* CapitalContainer component for displaying capital information */}
      <CapitalContainer />
      {/* Render XTable component if trades data is available */}
      {tradesData.data.length !== 0 && <XTable data={tradesData.data} />}
    </div>
  );
}
