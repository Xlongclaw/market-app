import React from "react";
import StatusTag from "./status-tag";
import ActionTag from "./action-tag";
import { BiCaretDown, BiCaretUp, BiMoney } from "react-icons/bi";
import classNames from "classnames";

export default function XRow(props: ITableData&{prevPrice:number}) {
  return (
    <div className={classNames(`grid grid-cols-[6%_15%_12%_12%_12%_10%_10%_10%_10%] items-center border-b border-zinc-900 p-4
     text-sm text-zinc-300 font-medium `,{
      "bg-zinc-900":props.tradeStatus === 'CLOSED',
     })}>
      <h3 className="w-full text-center">{props.sequence}.</h3>
      <h3 className="w-full text-center">{new Date(props.date).toDateString()}</h3>
      <h3 className="w-full text-center">{new Date(props.date).toLocaleTimeString()}</h3>
      <h3 className="w-full flex justify-center">
        <StatusTag status={props.tradeStatus} />
      </h3>
      <h3 className="w-full flex justify-center">
        <ActionTag action={props.action} />
      </h3>
      <h3 className="w-full text-center">{props.quantity.toFixed(4)}</h3>
      <div className="w-full flex justify-center">
        
        {
          props.price > props.prevPrice && <h3 className="text-green-500 flex items-center gap-2">{props.price.toFixed(4)} <BiCaretUp/> </h3>
        }
        {
          props.price < props.prevPrice && <h3 className="text-red-500 flex items-center gap-2">{props.price.toFixed(4)} <BiCaretDown/></h3>
        }
        {
          props.price === props.prevPrice && <h3 className=" flex items-center gap-2">{props.price.toFixed(4)}</h3>
        }
        
        
        </div>
      <h3
        className={`w-full font-medium flex justify-center ${
          props.change > 0
            ? "text-green-500"
            : props.change < 0
            ? "text-red-500"
            : ""
        }`}
      >
        {props.change > 0 ? (
          <div className="flex items-center gap-1">
            +{props.change.toFixed(2)} <BiMoney />
          </div>
        ) : props.change === 0 ? (
          <div className="text-center">*</div>
        ) : (
          <div className="flex items-center gap-1">
            {props.change.toFixed(2)} <BiMoney />
          </div>
        )}
      </h3>
      
      <div className="w-full flex justify-center">
        
        {
          props.unrealizedPnl > 0 && <h3 className="text-green-500 flex items-center gap-2">+{props.unrealizedPnl.toFixed(4)} $</h3>
        }
        {
          props.unrealizedPnl < 0 && <h3 className="text-red-500 flex items-center gap-2">{props.unrealizedPnl.toFixed(4)} $</h3>
        }
        {
          props.unrealizedPnl === 0 && <h3 className="flex items-center gap-2">{props.unrealizedPnl.toFixed(4)} $</h3>
        }
        
        
        </div>


    </div>
  );
}
