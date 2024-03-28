import React from "react";

interface IProps {
  onChange: (value: number) => void;
  title:string
}

export default function DateInputField({ onChange,title }: IProps) {
  return (
    <div className="bg-zinc-900 p-3  rounded-2xl text-xs px-8 relative border-zinc-800 border">
      <h5 className="text-[10px] font-medium text-zinc-300 absolute top-[-20px] left-[8px] border border-zinc-800 bg-zinc-950 px-2 rounded-full">{title}</h5>
      <input
        type="date"
        onChange={(e) => {
          onChange(Number(new Date(e.target.value)));
        }}
        className=" bg-transparent focus:outline-none"
      />
    </div>
  );
}
