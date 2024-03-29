import React from "react";
import { CapitalContext } from "../../../providers/capital-provider";
import CapitalBox from "./capital-box";

/**
 * Props interface for the CapitalContainer component.
 */
interface Iprops {}

/**
 * CapitalContainer component represents a container for displaying capital information.
 * @param {} Unused props object.
 * @returns JSX element representing the CapitalContainer component.
 */
export default function CapitalContainer({}: Iprops): JSX.Element {
  // Accessing capital data from context
  const capitalData = React.useContext(CapitalContext);

  // Render capital container with initial and remaining capital boxes
  return (
    <div className="flex justify-between px-2">
      {/* CapitalBox for displaying initial capital */}
      <CapitalBox capital={capitalData.capital} capitalType="INITIAL" />
      {/* CapitalBox for displaying remaining capital */}
      <CapitalBox capital={capitalData.remainingCapital} capitalType="REMAINING" />
    </div>
  );
}
