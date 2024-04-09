import SectionHeading from "@/components/section-heading";
import React from "react";
import ServiceTile from "./service-tile";
import SERVICES from "./SERVICES";

export default function ServicesSection() {
  return (
    <div className="flex flex-col items-center gap-24 mb-24 relative">
      <SectionHeading textWithoutColor="Serv" textWithColor="ices" />
      <div className="grid grid-cols-4 gap-4">
        {SERVICES.map((service, i) => (
          <ServiceTile icon={service.icon} keyPoints={service.keyPoints} title={service.title} key={`TILE_${i}`} />
        ))}
      </div>
      <div className="w-[80rem] h-32 bg-gradient-to-bl rotate-0 from-primary to-purple-600 blur-[200px] absolute bottom-1/3 -z-10"></div>
    </div>
  );
}
