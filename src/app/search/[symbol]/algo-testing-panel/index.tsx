import XRandomisation from "@/algorithms/xRandomization";
import XTable from "@/components/x-table";
import React from "react";
import CapitalContainer from "./capital-container";
import XTerminal from "./x-terminal";
import DataLoader from "./data-loader";
import AlgoBtn from "./algo-btn";

export default function AlgoTestingPanel({ symbol }: { symbol: string }) {
  const [symbolHistory, setSymbolHistory] = React.useState<Array<any>>();
  const [capital, setCapital] = React.useState(100);
  const [remainingCapital, setRemainingCapital] = React.useState(capital);
  const [tableData, setTableData] = React.useState<Array<ITableData>>([]);

  const deployAlgorithm = () => {
    const { cptl, tableData } = XRandomisation({
      capital: remainingCapital,
      symbolHistory: symbolHistory!,
      lever: 1,
      slRate: 2,
      tpRate: 1,
      rpt: 1,
    });
    setRemainingCapital(cptl);
    setTableData(tableData);
  };
  return (
    <div className=" mx-32 my-8 p-0">
      <div className="gap-5">
        <CapitalContainer
          capital={capital}
          setRemainingCapital={setRemainingCapital}
          remainingCapital={remainingCapital}
        />
        <DataLoader
          onChange={(data) => setSymbolHistory(data)}
          symbol={symbol}
          symbolHistory={symbolHistory}
        />
        <XTerminal />
        <AlgoBtn
          onClick={deployAlgorithm}
          title="Run XRandomization Algorithm"
        />
        {tableData.length!==0 && <XTable data={tableData} />}
      </div>
    </div>
  );
}
