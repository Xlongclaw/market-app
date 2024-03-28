import React from "react";

export default function XTerminal() {
  return (
    <div
      className={`bg-black rounded-2xl p-4 hover:cursor-text text-xs flex flex-col gap-1 h-64 my-5`}
    >
      <h4 className=" text-zinc-400 font-medium">
        Available Algorithms {`->`}
      </h4>
      <h4 className=" text-zinc-400 font-medium">
        xray - XRandomization Algorithm Varient-Y
      </h4>
      <h4 className=" text-zinc-400 font-medium">blf - bulls fight 1:2</h4>
      <br />
      <h4 className=" text-zinc-400 font-medium">
        ALGORITHMS DEPLOYING MACHINE V1.09.87
      </h4>
      <h4 className=" text-zinc-400 font-medium">
        ${" "}
        <input
          type="text"
          placeholder="_"
          className="bg-transparent focus:outline-none"
        />
      </h4>
    </div>
  );
}
