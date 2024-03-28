import XRandomisation from "@/algorithms/x-randomization";
import XTable from "@/components/x-table";
import React from "react";
import DataStatusTag from "./data-status-tag";
import CapitalContainer from "../capital-container";
import DateInputField from "./date-input-field";

export default function AlgoTestingPanel({ symbol }: { symbol: string }) {
  const [symbolHistory, setSymbolHistory] = React.useState<Array<any>>();
  const [capital, setCapital] = React.useState(100);
  const [remainingCapital, setRemainingCapital] = React.useState(capital);
  const [tableData, setTableData] = React.useState<Array<ITableData>>([]);
  const [startDate, setStartDate] = React.useState<number>(0);
  const [endDate, setEndDate] = React.useState<number>(Date.now());
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {}, [startDate, endDate]);

  const fetchSymbolHistory = () => {
    setLoading(true);
    fetch(
      `http://localhost:3000/api/history?symbol=${symbol}&startDate=${startDate}&endDate=${endDate}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSymbolHistory(data);
        console.log("algo-testing-panel-fetch");
        setLoading(false);
      });
  };

  const runAlgo1 = () => {
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
        <CapitalContainer capital={capital} setRemainingCapital={setRemainingCapital} remainingCapital={remainingCapital}/>
        <div className=" flex gap-2 mt-8">       
          <DateInputField title="START DATE" onChange={(value)=>setStartDate(value)} />
          <DateInputField title="END DATE" onChange={(value)=>setEndDate(value)} />
          <button
            onClick={fetchSymbolHistory}
            className="text-[10px] bg-green-700 hover:bg-green-800 p-3 rounded-full"
          >
            LOAD DATA
          </button>
          <DataStatusTag
            status={
              !loading && !symbolHistory ? "NO DATA" : !loading && symbolHistory ? "LOADED" : "LOADING"
            }
          />
        </div>

        <div className={`${!loading && symbolHistory ?"block" : "hidden"} bg-black rounded-2xl p-4 hover:cursor-text text-xs flex flex-col gap-1 h-64 my-5`}>
          <h4 className=" text-zinc-400 font-medium">Available Algorithms {`->`}</h4>
          <h4 className=" text-zinc-400 font-medium">xray - XRandomization Algorithm Varient-Y</h4>
          <h4 className=" text-zinc-400 font-medium">blf - bulls fight 1:2</h4>
          <br />
          <h4 className=" text-zinc-400 font-medium">ALGORITHMS DEPLOYING MACHINE V1.09.87</h4>
          <h4 className=" text-zinc-400 font-medium">$ <input type="text" placeholder="_" className="bg-transparent focus:outline-none" /></h4>
        </div>
        <button
            onClick={runAlgo1}
            className="p-3 my-2 border border-zinc-800 text-xs rounded-full bg-zinc-900 text-zinc-300 font-medium px-4 hover:bg-zinc-800 transition-colors"
          >
            Run XRandomization Algorithm
          </button>
        
        <XTable data={tableData} />
      </div>
    </div>
  );
}
