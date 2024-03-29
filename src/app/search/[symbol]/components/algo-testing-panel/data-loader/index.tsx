import React from "react";
import DateInputField from "./date-input-field";
import DataStatusTag from "./data-status-tag";
import { CoinSymbolContext } from "../../../providers/coin-symbol-provider";
import LoadDataBtn from "./load-data-btn";

interface IProps {
  onChange: (data: any) => void;
  symbolHistory: Array<any> | undefined;
}

export default function DataLoader({
  symbolHistory,
  onChange,
}: IProps) {
  const [startDate, setStartDate] = React.useState<number>(0);
  const [endDate, setEndDate] = React.useState<number>(Date.now());
  const [loading, setLoading] = React.useState(false);

  const symbol = React.useContext(CoinSymbolContext);

  const fetchSymbolHistory = () => {
    setLoading(true);
    fetch(
      `http://localhost:3000/api/history?symbol=${symbol.value}&startDate=${startDate}&endDate=${endDate}`
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
        <DateInputField title="START DATE" onChange={(value) => setStartDate(value)}/>
        <DateInputField title="END DATE" onChange={(value) => setEndDate(value)}/>
        {!loading && (
         <LoadDataBtn onClick={fetchSymbolHistory} dataLoaded={Boolean(symbolHistory?.length)}/>
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
