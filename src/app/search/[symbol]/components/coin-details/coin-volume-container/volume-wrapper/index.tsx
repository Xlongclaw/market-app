import { CoinDataContext } from "@/app/search/[symbol]/providers/coin-current-data-provider";
import React from "react";
import { BiInfoCircle } from "react-icons/bi";

/**
 * Props interface for the VolumeWrapper component.
 */
interface IProps {
  title: string; // The title of the volume information.
  volume: number; // The volume value.
}

/**
 * VolumeWrapper component represents a volume wrapper displaying volume information for a specific cryptocurrency.
 * @param props Props containing title and volume.
 * @returns JSX element representing the VolumeWrapper component.
 */
export default function VolumeWrapper(props: IProps): JSX.Element {
  // Accessing coin data from context
  const marketData = React.useContext(CoinDataContext);

  // Render volume wrapper
  return (
    <div className="font-semibold text-base">
      {/* Title and info icon */}
      <div className="flex items-center gap-2">
        {props.title}
        {/* Info icon with color based on coin data */}
        <BiInfoCircle style={{ color: marketData!.coinData.color }} />
      </div>
      {/* Volume value */}
      <h3 className="text-2xl font-normal mt-1">
        {/* Display volume in millions */}
        {props.volume / 1000000}
        {" M "}
        {/* M for million */}
        <span className="text-xs"> {marketData!.symbol}</span>
      </h3>
    </div>
  );
}
