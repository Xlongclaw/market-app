import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

interface IProps {
  children?: React.JSX.Element | string;
  onClick?: () => void;
  variant?: "bordered" | "fill";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?:"sm" | "md" | "full"
}

const defaultProps: IProps = {
  children: <></>,
  onClick: () => {},
  variant: "fill",
  size: "sm",
  rounded:"md"
};

export default function Button(props: IProps) {
  props = { ...defaultProps, ...props };
  return (
    <motion.button
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      whileHover={{ backgroundColor: "#fff", color: "#000" }}
      whileTap={{ scale: 0.9 }}
      onClick={props.onClick}
      className={cn(
        " rounded-xl",
        {
          "border-2": props.variant === "bordered",
        },
        {
          "rounded-full":props.rounded === "full"
        },
        {
          " px-6 py-2": props.size === "sm",
          " px-8 py-3": props.size === "md",
          " px-10 py-3": props.size === "lg",
          " px-12 py-4": props.size === "xl",
        }
      )}
    >
      {props.children}
    </motion.button>
  );
}
