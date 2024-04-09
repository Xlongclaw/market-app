import NavigationBar from "@/containers/NavigationBar";
import OptionsPanel from "@/containers/options-panel";
import React from "react";


export default function Layout({ children }: { children: React.JSX.Element }) {
  return (
    <section className="bg-[#131416] flex h-full">
      <OptionsPanel />
      <section className="w-full mr-3">
        <NavigationBar />
        {children}
      </section>
    </section>
  );
}
