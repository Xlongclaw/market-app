import {
  NavItem,
  NavLinks,
  NavigationBar as NavBar,
} from "@/ext_components/NavigationBar";
import React from "react";
import NAVLINKS from "./NAVLINKS";
import BlurBlob from "./blur-blob";

export default function NavigationBar() {
  return (
    <NavBar size="lg" width="lg">
      <NavItem hideForScren="large">
        <NavLinks links={NAVLINKS} />
      </NavItem>
      <NavItem>
        <img className="h-10 mt-6" src="logo.png" alt="" />
      </NavItem>
      <NavItem hideForScren="small">
        <div className="flex gap-6 text-sm font-medium">
          <button>Login</button>
          <button className="border-2 px-4 py-[6px] rounded-2xl">
            Sign Up
          </button>
        </div>
      </NavItem>
      <div className="absolute left-1/2 -translate-x-1/3 z-10 ">
        <BlurBlob/>
      </div>
    </NavBar>
  );
}

{
  /* <SearchBar
  onSearch={(v) => {
    router.push(`/search/${v}`);
  }}
/> */
}
