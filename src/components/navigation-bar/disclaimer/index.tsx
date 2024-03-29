import React from "react";

const DISCLAIMER = `We are not SEBI Registered Advisors. This website is purely for training
and educational purposes. We shall not be responsible for your profit or
loss. All the information and content provided are for
educational/informational purposes only.`

export default function Disclaimer() {
  return (
    <h3 className=" bg-zinc-900 py-4 text-[10px] text-center">
     {DISCLAIMER}
    </h3>
  );
}
