import Link from "next/link";
import React from "react";

/**
 * Props interface for the LinkBox component.
 */
interface IProps {
  link: string; // The URL to navigate to when the link is clicked.
  title: string; // The title of the link box.
  color: string; // The color of the link text.
  children: React.ReactNode; // The content inside the link box (typically an icon).
}

/**
 * LinkBox component represents a clickable box with a link and title.
 * @param props Props containing link, title, color, and children.
 * @returns JSX element representing the LinkBox component.
 */
export default function LinkBox(props: IProps): JSX.Element {
  return (
    <Link href={props.link} passHref>
      {/* Render the link box with provided styles */}
      <a
        style={{ color: props.color }}
        className="flex items-center gap-2 p-4 bg-zinc-900"
      >
        {/* Render children inside the link box */}
        {props.children} {props.title}
      </a>
    </Link>
  );
}
