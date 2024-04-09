import Image from "next/image";
import React from "react";
import {
  BiCloudRain,
  BiSearch,
  BiNotification,
  BiCaretDown,
} from "react-icons/bi";
import { BsMoonStarsFill, BsMicFill } from "react-icons/bs";

export default function NavigationBar() {
  return (
    <div className="py-2 my-3 rounded-xl flex justify-between w-full px-8 items-center bg-black">
      <div className="flex items-center gap-2">
        <BiCloudRain size={24} />
        <p className="text-sm">Friday, 4 Nov 2022</p>
      </div>
      <div className="flex items-center gap-2 px-3 border border-zinc-700 text-zinc-400 py-2 rounded-xl w-64">
        <BiSearch size={24} />
        <p className="text-sm">Search</p>
      </div>
      <div className="flex items-center gap-6 px-3 py-2 rounded-xl">
        <BiNotification size={24} />
        <BsMoonStarsFill />
        <BsMicFill />
        <div className="flex gap-4">
          <Image
            className="rounded-full h-10 w-10 object-cover"
            width={100}
            height={100}
            src={
              "https://res.cloudinary.com/dlxpf7d8c/image/upload/v1710854361/gje3vo4nceqb9gfpedtj.png"
            }
            alt=""
          />
          <div>
            <h4 className="font-medium text-sm flex gap-2 items-center">
              Madhuresh Verma <BiCaretDown />{" "}
            </h4>
            <h4 className="text-xs tracking-[1px] text-zinc-400">
              xlongclaw@gmail.com
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
