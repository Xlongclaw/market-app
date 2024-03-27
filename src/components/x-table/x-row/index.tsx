import React from "react";
import StatusTag from "./status-tag";
import ActionTag from "./action-tag";
import { BiCaretDown, BiCaretUp, BiMoney } from "react-icons/bi";

export default function XRow(props: ITableData&{prevPrice:number}) {
  return (
    <div className="grid grid-cols-[6%_20%_20%_12%_12%_10%_10%_10%] items-center border border-zinc-900 p-4 text-sm">
      <h3 className="w-full">{props.sequence}.</h3>
      <h3 className="w-full">{new Date(props.date).toDateString()}</h3>
      <h3 className="w-full">{new Date(props.date).toLocaleTimeString()}</h3>
      <h3 className="w-full">
        <StatusTag status={props.tradeStatus} />
      </h3>
      <h3 className="w-full">
        <ActionTag action={props.action} />
      </h3>
      <h3 className="w-full">{props.quantity.toFixed(4)}</h3>
      <div className="w-full">
        
        {
          props.price > props.prevPrice && <h3 className="text-green-600 flex items-center gap-2">{props.price.toFixed(4)} <BiCaretUp/> </h3>
        }
        {
          props.price < props.prevPrice && <h3 className="text-red-600 flex items-center gap-2">{props.price.toFixed(4)} <BiCaretDown/></h3>
        }
        {
          props.price === props.prevPrice && <h3 className="text-white flex items-center gap-2">{props.price.toFixed(4)}</h3>
        }
        
        
        </div>
      <h3
        className={`w-full font-medium ${
          props.change > 0
            ? "text-green-600"
            : props.change < 0
            ? "text-red-600"
            : "text-white"
        }`}
      >
        {props.change > 0 ? (
          <div className="flex items-center gap-1">
            +{props.change.toFixed(2)} <BiMoney />
          </div>
        ) : (
          <div className="flex items-center gap-1">
            {props.change.toFixed(2)} <BiMoney />
          </div>
        )}
      </h3>
    </div>
  );
}
