import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

interface IProps {
  children?: React.JSX.Element | string;
  onClick?: () => void;
  variant?: "bordered" | "fill";
}

const defaultProps: IProps = {
  children: <></>,
  onClick: () => {},
  variant: "fill",
};

export default function Button(props: IProps) {
  props = { ...defaultProps, ...props };
  return (
    <motion.button
      onClick={props.onClick}
      className={cn(" px-4 py-[6px] rounded-2xl", {
        "border-2": props.variant === "bordered",
      })}
    >
      {props.children}
    </motion.button>
  );
}
