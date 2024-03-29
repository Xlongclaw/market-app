import Link from "next/link";
import React from "react";

interface IProps {
  link: string;
  title: string;
  color: string;
  children: React.JSX.Element;
}

export default function LinkBox(props: IProps) {
  return (
    <Link
      href={props.link}
      style={{ color: props.color }}
      className="flex items-center gap-2 p-4 bg-zinc-900"
    >
      {props.children} {props.title}
    </Link>
  );
}
