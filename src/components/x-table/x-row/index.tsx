import React from "react";

export default function XRow(props:ITableData) {
  return (
    <div className="grid grid-cols-[6%_22%_21%_21%_10%_10%_10%] border border-zinc-900 p-4">
      <h3 className="w-full">{props.sequence}</h3>
      <h3 className="w-full">{new Date(props.date).toDateString()}</h3>
      <h3 className="w-full">{props.tradeStatus}</h3>
      <h3 className="w-full">{props.action}</h3>
      <h3 className="w-full">{props.quantity.toFixed(4)}</h3>
      <h3 className="w-full">{props.price.toFixed(4)}</h3>
      <h3 className="w-full">{props.change.toFixed(4)}</h3>
    </div>
  );
}
