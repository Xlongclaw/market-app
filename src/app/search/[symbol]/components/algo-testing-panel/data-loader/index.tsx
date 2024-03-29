import React from "react";
import DateInputField from "./date-input-field";
import DataStatusTag from "../data-status-tag";

interface IProps {
  onChange: (data: any) => void;
  symbolHistory: Array<any> | undefined;
  symbol: string;
}

export default function DataLoader({
  symbolHistory,
  symbol,
  onChange,
}: IProps) {
  const [startDate, setStartDate] = React.useState<number>(0);
  const [endDate, setEndDate] = React.useState<number>(Date.now());
  const [loading, setLoading] = React.useState(false);

  const fetchSymbolHistory = () => {
    setLoading(true);
    fetch(
      `http://localhost:3000/api/history?symbol=${symbol}&startDate=${startDate}&endDate=${endDate}`
    )
      .then((res) => res.json())
      .then((data) => {
        onChange(data);
        console.log("algo-testing-panel-fetch");
        setLoading(false);
      });
  };

  return (
    <div className=" flex gap-2 mt-8 justify-between">
      <div className="flex gap-2">
        <DateInputField
          title="START DATE"
          onChange={(value) => setStartDate(value)}
        />
        <DateInputField
          title="END DATE"
          onChange={(value) => setEndDate(value)}
        />
        {!loading && (
          <button
            onClick={fetchSymbolHistory}
            className="text-xs border-2 border-zinc-300 text-zinc-300  font-semibold hover:bg-zinc-300 hover:text-black px-6 rounded-full"
          >
            {!symbolHistory ? "Load Data" : "Reload Data"}
          </button>
        )}
      </div>
      <DataStatusTag
        status={
          !loading && !symbolHistory
            ? "NO DATA"
            : !loading && symbolHistory
            ? "LOADED"
            : "LOADING"
        }
      />
    </div>
  );
}
