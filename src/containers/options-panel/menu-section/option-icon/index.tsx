"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface IProps {
  src: StaticImport | string;
  selected?: boolean;
  selectedSrc: StaticImport | string;
  hoverSrc?: StaticImport | string;
  onClick?: () => void;
}

const defaultProps: IProps = {
  src: "",
  selected: false,
  selectedSrc: "",
  hoverSrc: "",
  onClick: () => {},
};

export default function OptionIcon(props: IProps) {
  props = { ...defaultProps, ...props };
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={props.onClick}
      className="relative w-14 flex justify-center"
    >
      <Image
        className={`w-10 p-2 rounded-xl transition-all duration-300 ${
          hover === true && " bg-white/0"
        }`}
        width={100}
        height={100}
        src={
          props.selected
            ? props.selectedSrc
            : hover
            ? props.hoverSrc!
            : props.src
        }
        alt="coins"
      />
      {props.selected && (
        <div className="w-[2px] h-10 absolute bg-primary top-0 left-0 rounded-e-full"></div>
      )}
    </button>
  );
}
