import React from "react";
import HollowCircle from "./hollow-circle";
import MenuSection from "./menu-section";
import logout from "./menu-section/svgs/Logout.svg";
import OptionIcon from "./menu-section/option-icon";

export default function OptionsPanel() {
  return (
    <div className="w-14 h-screen bg-[#111111] border-r border-zinc-900 flex flex-col justify-between py-8">
      <div className="flex flex-col items-center">
        <HollowCircle />
        <MenuSection />
      </div>
      <div>
        <OptionIcon selectedSrc={logout} hoverSrc={logout} src={logout} />
      </div>
    </div>
  );
}
