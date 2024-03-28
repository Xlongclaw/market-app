import XRandomisation from "@/algorithms/x-randomization";
import XTable from "@/components/x-table";
import React from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { BiCheck, BiCheckCircle, BiError, BiMoney } from "react-icons/bi";
import DataStatusTag from "./data-status-tag";
import { RxReload } from "react-icons/rx";

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
    <div className=" mx-32  border border-zinc-900 p-8">
      {/* {symbolHistory && ( */}
      <div className="gap-5">
        <div className="flex justify-between py-2">
          <h5 className=" text-xl flex items-center gap-2">
            <span className="text-xs">INITIAL {`->`}</span>
            {capital} <BiMoney className="text-green-700" />
          </h5>
          <div className=" flex gap-2 items-center text-xl">
            <span className="text-xs">REMAINING {`->`}</span>
            <h3
              className={
                remainingCapital < capital ? "text-red-600" : " text-green-600"
              }
            >
              {remainingCapital.toFixed(2)}{" "}
            </h3>
            <BiMoney className="text-green-700" />
            <button onClick={()=>setRemainingCapital(capital)} className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-xl"> <RxReload size={16}/> </button>
          </div>
        </div>
        <div className=" my-4 flex gap-2">
         
          <input
            type="date"
            onChange={(e) => {
              setStartDate(Number(new Date(e.target.value)));
            }}
            placeholder="start date"
            className="bg-zinc-900 p-3 rounded-full text-xs"
          />
          <input
            type="date"
            onChange={(e) => {
              setEndDate(Number(new Date(e.target.value)));
            }}
            placeholder="end date"
            className="bg-zinc-900 p-3 rounded-full text-xs"
          />
          <button
            onClick={fetchSymbolHistory}
            className="text-xs bg-green-700 hover:bg-green-800 p-3 rounded-full"
          >
            LOAD DATA
          </button>
          <DataStatusTag
            status={
              !loading && !symbolHistory ? "NO DATA" : !loading && symbolHistory ? "LOADED" : "LOADING"
            }
          />
        </div>

        <div className={`${!loading && symbolHistory ?"block" : "hidden"} bg-black rounded-2xl p-4`}>
          <h4 className="text-xs mb-4 text-zinc-400 font-medium">ALGORITHMS DEPLOYING MACHINE V1.09.87</h4>
        <button
            onClick={runAlgo1}
            className="p-3 border border-zinc-800 text-xs rounded-full bg-zinc-900 text-zinc-300 font-medium px-4 hover:bg-zinc-800 transition-colors"
          >
            Run XRandomization Algorithm
          </button>
        </div>
        
        <XTable data={tableData} />
      </div>
    </div>
  );
}
