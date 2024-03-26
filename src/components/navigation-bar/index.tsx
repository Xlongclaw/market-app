"use client";
import React from "react";
import Logo from "../logo";
import SearchBar from "../search-bar";
import { useRouter } from "next/navigation";

export default function NavigationBar() {
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center justify-between gap-4 py-4 px-32">
        <Logo />
        <SearchBar
          onSearch={(v) => {
            router.push(`/search/${v}`);
          }}
        />
      </div>
      <h3 className=" bg-zinc-900 py-4 text-[10px] text-center">We are not SEBI Registered Advisors. This website is purely for training and educational purposes. We shall not be responsible for your profit or loss. All the information and content provided are for educational/informational purposes only. </h3>
    </div>
  );
}
