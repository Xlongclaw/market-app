import React from "react";
import { cn } from "../cn";

interface IProps {
  children?: React.JSX.Element;
  hideForScren?: "small" | "medium" | "large" | "extra-large" | "none";
}

const defaultProps: IProps = {
  children: <></>,
  hideForScren: "none",
};

export default function NavItem(props: IProps) {
  props = { ...defaultProps, ...props };
  return (
    <div
      className={cn("mx-auto sm:mx-0", {
        "hidden sm:block": props.hideForScren === "small",
        "hidden md:block": props.hideForScren === "medium",
        "hidden lg:block": props.hideForScren === "large",
        "hidden xl:block": props.hideForScren === "extra-large",
      })}
    >
      {props.children}
    </div>
  );
}
