import { cn } from "../cn";
import React from "react";

export interface INavLink {
  title: string;
  href: string;
}

type IProps = {
  links: INavLink[];
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  fontSize?: "xs" | "sm" | "md" | "lg";
  fontWeight?: "300" | "400" | "500" | "600" | "700";
};

const defaultProps: IProps = {
  gap: "sm",
  links: [{ href: "#", title: "NO_LINKS" }],
  fontSize: "sm",
  fontWeight: "500",
};

export default function NavLinks(props: IProps) {
  props = { ...defaultProps, ...props };
  return (
    <div
      className={cn(
        "flex",
        {
          "gap-4": props.gap === "xs",
          "gap-6": props.gap === "sm",
          "gap-8": props.gap === "md",
          "gap-10": props.gap === "lg",
          "gap-12": props.gap === "xl",
        },
        {
          "font-light": props.fontWeight === "300",
          "font-normal": props.fontWeight === "400",
          "font-medium": props.fontWeight === "500",
          "font-semibold": props.fontWeight === "600",
          "font-bold": props.fontWeight === "700",
        },
        {
          "text-xs": props.fontSize === "xs",
          "text-sm": props.fontSize === "sm",
          "text-md": props.fontSize === "md",
          "text-lg": props.fontSize === "lg",
        }
      )}
    >
      {props.links.map((link, i) => (
        <a href={link.href} key={`${link.title}_${link.href}_${i}`}>
          {link.title}
        </a>
      ))}
    </div>
  );
}
