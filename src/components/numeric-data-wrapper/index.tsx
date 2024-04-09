import React from "react";
import { BiChevronUp } from "react-icons/bi";

interface IProps {
  change: number;
  amount:number
  title:string
}

export default function NumericDataWrapper(props: IProps) {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-zinc-500">{props.title}</h3>
        <div className="flex items-center text-emerald-500 font-medium">
          <BiChevronUp /> {props.change} %
        </div>
      </div>
      <h3 className="text-3xl font-semibold mt-3">$ {props.amount}.00</h3>
    </div>
  );
}
