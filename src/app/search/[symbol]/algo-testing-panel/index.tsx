import XRandomisation from "@/algorithms/x-randomization";
import React from "react";
import { BiMoney } from "react-icons/bi";
import { MdMoney } from "react-icons/md";

export default function AlgoTestingPanel({ symbol }: { symbol: string }) {
  const [symbolHistory, setSymbolHistory] = React.useState<Array<any>>();
  const [capital, setCapital] = React.useState(100);
  const [remainingCapital, setRemainingCapital] = React.useState(capital);

  React.useEffect(() => {
    fetch(`http://localhost:3000/api/history?symbol=${symbol}`)
      .then((res) => res.json())
      .then((data) => {
        setSymbolHistory(data.history);
      });
  }, []);
  const runAlgo1 = () => {
    const fc = XRandomisation({
      capital: remainingCapital,
      symbolHistory: symbolHistory!,
      lever: 1,
      slRate: 3,
      tpRate: 2,
    });
    setRemainingCapital(fc);
  };
  return (
    <div className=" mx-32  border border-zinc-900 p-8">
      {symbolHistory && (
        <div className="gap-5">
          <div className="flex justify-between py-2">
            <h5 className=" text-xl flex items-center gap-2">
            <span className="text-xs">INITIAL {`->`}</span>
              {capital} <BiMoney className="text-green-700" />
            </h5>
            <div className=" flex gap-2 items-center text-xl">
              <span className="text-xs">REMAINING {`->`}</span>
              <h3 className={remainingCapital<capital ? "text-red-600" :" text-green-600"}>{remainingCapital.toFixed(2)}  </h3>
              <BiMoney className="text-green-700" />
            </div>
          </div>
          <div className=" flex gap-4 items-center">
            <button
              onClick={runAlgo1}
              className="p-3 bg-green-700 hover:bg-green-600"
            >
              Run XRandamization Algorithm
            </button>
          </div>
          {/* {symbolHistory.map((data) => (
              
              <div className=" bg-zinc-900 p-2 w-32">{data.rate.toFixed(3)} {new Date(data.date).toString()}</div>
              ))} */}
        </div>
      )}
    </div>
  );
}
