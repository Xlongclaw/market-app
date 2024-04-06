import OptionsPanel from "@/containers/options-panel";
import React from "react";

export default function Layout({ children }: { children: React.JSX.Element }) {
  return (
    <section className="bg-[#131416] flex">
      <OptionsPanel />
      {children}
    </section>
  );
}
