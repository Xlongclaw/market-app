import React from "react";
import { CapitalContext } from "../../../providers/capital-provider";
import CapitalBox from "./capital-box";

interface Iprops {}

export default function CapitalContainer({}: Iprops) {
  const capitalData = React.useContext(CapitalContext);

  return (
    <div className="flex justify-between px-2">
      <CapitalBox capital={capitalData.capital} capitalType="INITIAL" />
      <CapitalBox
        capital={capitalData.remainingCapital}
        capitalType="REMAINING"
      />
    </div>
  );
}
