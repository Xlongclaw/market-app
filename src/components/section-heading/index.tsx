import React from "react";

interface IProps {
  textWithoutColor?: string;
  textWithColor?: string;
}

const defaultProps: IProps = {
  textWithColor: "Text",
  textWithoutColor: "No",
};

export default function SectionHeading(props: IProps) {
  props = { ...defaultProps, ...props };
  return (
    <div className="relative">
      <h4 className="font-semibold text-5xl">
        <span className="">{props.textWithoutColor}</span>
        <span className="text-primary">{props.textWithColor}</span>
      </h4>
      <p className="text-stroke text-8xl absolute -top-8 -z-10 font-bold -translate-x-1/2 left-1/2">
        {props.textWithoutColor}
        {props.textWithColor}
      </p>
      {/* BORDERED TEXT COMPONENT */}
    </div>
  );
}
