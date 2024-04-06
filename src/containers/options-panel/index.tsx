import React from "react";
import HollowCircle from "./hollow-circle";
import MenuSection from "./menu-section";
import logout from "./menu-section/svgs/Logout.svg";
import OptionIcon from "./menu-section/option-icon";
import Image from "next/image";

export default function OptionsPanel() {
  return (
    <div className="w-14 h-screen bg-[#111111] border-r border-zinc-900 flex flex-col justify-between py-8 mr-3">
      <div className="flex flex-col items-center">
        <HollowCircle />
        <MenuSection />
      </div>
      <div className="flex flex-col items-center gap-6">
        <Image
          className="rounded-full"
          width={24}
          height={24}
          src={
            "https://res.cloudinary.com/dlxpf7d8c/image/upload/v1710854361/gje3vo4nceqb9gfpedtj.png"
          }
          alt=""
        />
        <OptionIcon selectedSrc={logout} hoverSrc={logout} src={logout} />
      </div>
    </div>
  );
}
