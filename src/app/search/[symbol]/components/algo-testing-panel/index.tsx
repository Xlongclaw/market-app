import XTable from "@/components/x-table";
import React from "react";
import CapitalContainer from "./capital-container";
import XTerminal from "./x-terminal";
import DataLoader from "./data-loader";
import { TableContext } from "../../providers/table-provider";

export default function AlgoTestingPanel() {
  const [symbolHistory, setSymbolHistory] = React.useState<Array<any>>();
  const tradesData = React.useContext(TableContext);

  return (
    <div className="mx-32 my-8">
      <DataLoader
        onChange={(data) => setSymbolHistory(data)}
        symbolHistory={symbolHistory}
      />
      <XTerminal coinHistory={symbolHistory!} />
      <CapitalContainer />
      {tradesData.data.length !== 0 && <XTable data={tradesData.data} />}
    </div>
  );
}
