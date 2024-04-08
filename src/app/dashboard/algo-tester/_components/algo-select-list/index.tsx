import Image from "next/image";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import Dice from "./Dice.svg";

export default function AlgoSelectList() {
  return (
    <div className="bg-zinc-900 py-2 px-4 border border-zinc-800 flex items-center gap-2 text-xs font-medium rounded-2xl">
      <Image width={32} height={32} className="w-6" src={Dice} alt="" />
      {`Rubik's Bomb`}
      <BiChevronDown />
    </div>
  );
}
