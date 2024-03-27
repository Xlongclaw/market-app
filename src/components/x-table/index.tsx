import React from "react";
import XRow from "./x-row";

interface IProps {
  data: Array<any>;
}

export default function XTable({ data }: IProps) {
  return (
    <div className="my-4">
      <div className="grid grid-cols-[6%_20%_20%_12%_12%_10%_10%_10%] border border-zinc-900 p-4 text-sm">
        <h3 className="w-full">S.NO</h3>
        <h3 className="w-full">DATE</h3>
        <h3 className="w-full">TIME</h3>
        <h3 className="w-full">STATUS</h3>
        <h3 className="w-full">ACTION</h3>
        <h3 className="w-full">QUANTITY</h3>
        <h3 className="w-full">AVG. PRICE</h3>
        <h3 className="w-full">CHANGE</h3>
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
          key={0}
          prevPrice={i!==0 ? data[i-1].price : dt.price}
        />
      ))}
    </div>
  );
}
