import React from "react";
import NavigationBar from "./NavigationBar";
import NavLinks from "./NavLinks";
import NavItem from "./NavItem";

export default function NavigationBarPrototype() {
  return (
    <NavigationBar size="lg">
      <NavItem hideForScren="large">
        <NavLinks links={LINKS} />
      </NavItem>
      <NavItem>
        <img className="h-10 mt-6" src="logo.png" alt="" />
      </NavItem>
      <NavItem hideForScren="small">
        <div className="flex gap-6 text-sm font-medium">
          <button>Login</button>
          <button className="border-2 px-4 py-[6px] rounded-2xl">Sign Up</button>
        </div>
      </NavItem>
    </NavigationBar>
  );
}

const LINKS = [
  {
    title: "Dashboard",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
];
