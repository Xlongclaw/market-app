import React from "react";
import XRow from "./x-row";
import { BsClock } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { GrStatusInfo } from "react-icons/gr";

interface IProps {
  data: Array<any>;
}

export default function XTable({ data }: IProps) {
  return (
    <div className="my-4  border border-zinc-900 rounded-2xl overflow-hidden">
      <div className="grid grid-cols-[6%_15%_12%_12%_12%_10%_10%_10%_10%]  border-b border-zinc-900 px-4 py-5 text-xs
       font-medium text-zinc-400 bg-black">
        <h3 className="w-full text-center">*</h3>
        <h3 className="w-full text-center flex justify-center items-center gap-1"><BiCalendar size={16}/> DATE</h3>
        <h3 className="w-full text-center flex justify-center items-center gap-1"><BsClock size={16}/> TIME</h3>
        <h3 className="w-full text-center flex justify-center items-center gap-1"><GrStatusInfo size={16}/> STATUS</h3>
        <h3 className="w-full text-center">ACTION</h3>
        <h3 className="w-full text-center">QUANTITY</h3>
        <h3 className="w-full text-center">LTP {`(USD)`}</h3>
        <h3 className="w-full text-center">PNL</h3>
        <h3 className="w-full text-center">UNREALIZED PNL</h3>
      </div>
      {data.map((dt,i) => (
        <XRow
          action={dt.action}
          change={dt.change}
          date={dt.date}
          price={dt.price}
          quantity={dt.quantity}
          sequence={dt.sequence}
          tradeStatus={dt.tradeStatus}
          key={dt.date}
          prevPrice={i!==0 ? data[i-1].price : dt.price}
          unrealizedPnl={dt.unrealizedPnl}
        />
      ))}
    </div>
  );
}
