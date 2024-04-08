import React from "react";
import CalenderSVG from "./CalenderSVG";

interface IProps {
  title?: string;
}

const defaultProps:IProps = {
title:"Date"
}

export default function DateInput(props: IProps) {
  props = {...defaultProps,...props}

  return (
    <div className="flex bg-zinc-900 rounded-2xl px-6 font-medium border border-zinc-800 gap-4 items-center">
      <div className="  flex flex-col justify-center">
        <h4 className="text-[10px]">{props.title}</h4>
        <h4 className="text-xs">22 March, 2023</h4>
      </div>
      <div className="bg-[#232323] w-[2px] h-full"></div>
      <CalenderSVG/>
    </div>
  );
}
