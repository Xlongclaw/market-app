import XRandomisation from "@/algorithms/xRandomization";
import XTable from "@/components/x-table";
import React from "react";
import CapitalContainer from "./capital-container";
import XTerminal from "./x-terminal";
import DataLoader from "./data-loader";
import AlgoBtn from "./algo-btn";
import { CoinSymbolContext } from "../../providers/coin-symbol-provider";
import { TableContext } from "../../providers/table-provider";
import { CapitalContext } from "../../providers/capital-provider";

export default function AlgoTestingPanel() {
  const [symbolHistory, setSymbolHistory] = React.useState<Array<any>>();
  const symbol = React.useContext(CoinSymbolContext);
  const tradesData = React.useContext(TableContext);
  const capitalData = React.useContext(CapitalContext);

  const deployAlgorithm = () => {
    const { cptl, tableData } = XRandomisation({
      capital: capitalData.remainingCapital,
      symbolHistory: symbolHistory!,
      lever: 1,
      slRate: 1.5,
      tpRate: 3,
      rpt: 1,
    });
    capitalData.changeRemainingCapital(cptl);
    tradesData.changeTableData(tableData);
  };
  return (
    <div className="mx-32 my-8">
      <DataLoader
        onChange={(data) => setSymbolHistory(data)}
        symbol={symbol.value}
        symbolHistory={symbolHistory}
      />
      <XTerminal coinHistory={symbolHistory!} />
      <CapitalContainer
        capital={capitalData.capital}
        setRemainingCapital={capitalData.changeRemainingCapital}
        remainingCapital={capitalData.remainingCapital}
      />
      <AlgoBtn onClick={deployAlgorithm} title="Run XRandomization Algorithm" />
      {tradesData.data.length !== 0 && <XTable data={tradesData.data} />}
    </div>
  );
}
