import React from "react";
import { cn } from "../utils/cn";

interface IProps {
  children?: React.JSX.Element[];
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  width?: "full" | "sm" | "md" | "lg";
  justify?: "between" | "none" | "start" | "end" | "center";
}

const defaultProps: IProps = {
  children: [<></>],
  size: "md",
  justify: "between",
  width: "lg",
};

export default function NavigationBar(props: IProps) {
  props = { ...defaultProps, ...props };

  return (
    <nav
      className={cn(
        "flex items-center relative",
        {
          "h-10": props.size === "xs",
          "h-12": props.size === "sm",
          "h-16": props.size === "md",
          "h-20": props.size === "lg",
          "h-24": props.size === "xl",
        },
        {
          "px-0": props.width === "full",
          "px-48": props.width === "sm",
          "px-32": props.width === "md",
          "px-16": props.width === "lg",
        },
        {
          "justify-start": props.justify === "start" || "none",
          "justify-end": props.justify === "end",
          "justify-center": props.justify === "center",
          "justify-between": props.justify === "between",
        }
      )}
    >
      {props.children}
    </nav>
  );
}
