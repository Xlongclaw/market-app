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
    <div className=" flex gap-2 mt-8">
      <DateInputField
        title="START DATE"
        onChange={(value) => setStartDate(value)}
      />
      <DateInputField
        title="END DATE"
        onChange={(value) => setEndDate(value)}
      />
      <button
        onClick={fetchSymbolHistory}
        className="text-[10px] bg-green-700 hover:bg-green-800 p-3 rounded-full"
      >
        LOAD DATA
      </button>
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
