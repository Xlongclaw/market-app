import React from "react";
import DateInputField from "./date-input-field";
import DataStatusTag from "./data-status-tag";
import { CoinSymbolContext } from "../../../providers/coin-symbol-provider";
import LoadDataBtn from "./load-data-btn";

/**
 * Props interface for the DataLoader component.
 */
interface IProps {
  onChange: (data: any) => void; // Function to be called when data is loaded.
  symbolHistory: Array<any> | undefined; // Array containing symbol history data.
}

/**
 * DataLoader component is responsible for loading data based on selected dates and displaying data status.
 * @param onChange Function to be called when data is loaded.
 * @param symbolHistory Array containing symbol history data.
 * @returns JSX element representing the DataLoader component.
 */
export default function DataLoader({
  symbolHistory,
  onChange,
}: IProps): JSX.Element {
  // State for start date
  const [startDate, setStartDate] = React.useState<number>(0);
  // State for end date
  const [endDate, setEndDate] = React.useState<number>(Date.now());
  // State for loading status
  const [loading, setLoading] = React.useState(false);

  // Accessing symbol value from context
  const symbol = React.useContext(CoinSymbolContext);

  // Function to fetch symbol history data
  const fetchSymbolHistory = () => {
    setLoading(true);
    fetch(
      `http://localhost:3000/api/history?symbol=${symbol.value}&startDate=${startDate}&endDate=${endDate}`
    )
      .then((res) => res.json())
      .then((data) => {
        // Call onChange function to pass loaded data
        onChange(data);
        console.log("algo-testing-panel-fetch");
        setLoading(false);
      });
  };

  // Render the DataLoader component
  return (
    <div className="flex gap-2 mt-8 justify-between">
      {/* Date input fields for selecting start and end dates */}
      <div className="flex gap-2">
        <DateInputField title="START DATE" onChange={(value) => setStartDate(value)} />
        <DateInputField title="END DATE" onChange={(value) => setEndDate(value)} />
        {/* Render LoadDataBtn component if data is not loading */}
        {!loading && (
          <LoadDataBtn onClick={fetchSymbolHistory} dataLoaded={Boolean(symbolHistory?.length)} />
        )}
      </div>
      {/* DataStatusTag component for displaying data loading status */}
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
