"use client";
import React from "react";
import Logo from "../logo";
import SearchBar from "../search-bar";
import { useRouter } from "next/navigation";
import Disclaimer from "./disclaimer";

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
      <Disclaimer/>
    </div>
  );
}
