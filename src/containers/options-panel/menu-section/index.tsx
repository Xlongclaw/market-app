"use client";
import React from "react";
import OptionIcon from "./option-icon";
import { useRouter } from "next/navigation";
import options from "./options";

export default function MenuSection() {
  const router = useRouter();
  const [selected, setSelected] = React.useState<string>("portfolio");

  return (
    <div className="my-16 flex flex-col gap-4">
      {options.map((option) => (
        <OptionIcon
        key={option.title}
          onClick={() => {
            setSelected(option.title);
            router.push(`/dashboard/${option.title}`);
          }}
          src={option.src}
          hoverSrc={option.hoverSrc}
          selectedSrc={option.selectedSrc}
          selected={selected === option.title}
        />
      ))}
    </div>
  );
}
