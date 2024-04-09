import Image from "next/image";
import React from "react";

interface IProps {
  icon: any;
  title: string;
  keyPoints: string[];
}

export default function ServiceTile(props: IProps) {
  return (
    <div className="w-56 h-56 rounded-3xl glass3 p-4">
      <Image src={props.icon} alt="" />
      <h6>{props.title}</h6>
      <div className="mt-2">
        {props.keyPoints.map((point) => (
          <p className="text-sm my-1">{point}</p>
        ))}
      </div>
      <h6></h6>
    </div>
  );
}
