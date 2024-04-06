import coins from "./svgs/Coins.svg";
import coinsWhite from "./svgs/CoinsWhite.svg";
import coinsBlue from "./svgs/CoinsBlue.svg";

import workflow from "./svgs/Workflow.svg";
import workflowWhite from "./svgs/WorkflowWHITE.svg";
import workflowBlue from "./svgs/WorkflowBlue.svg";

import playlist from "./svgs/Playlist.svg";
import playlistWhite from "./svgs/PlaylistWhite.svg";
import playlistBlue from "./svgs/PlaylistBlue.svg";

import stockGrowth from "./svgs/Stocks Growth.svg";
import stockGrowthWhite from "./svgs/Stocks GrowthWhite.svg";
import stockGrowthBlue from "./svgs/Stocks GrowthBlue.svg";

import graph from "./svgs/Graph.svg";
import graphWhite from "./svgs/GraphWhite.svg";
import graphBlue from "./svgs/GraphBlue.svg";

const options = [
  {
    title: "portfolio",
    src: coins,
    hoverSrc: coinsWhite,
    selectedSrc: coinsBlue,
  },
  {
    title: "algo-tester",
    src: workflow,
    hoverSrc: workflowWhite,
    selectedSrc: workflowBlue,
  },
  {
    title: "market",
    src: graph,
    hoverSrc: graphWhite,
    selectedSrc: graphBlue,
  },
  {
    title: "watchlist",
    src: playlist,
    hoverSrc: playlistWhite,
    selectedSrc: playlistBlue,
  },
  {
    title: "trade",
    src: stockGrowth,
    hoverSrc: stockGrowthWhite,
    selectedSrc: stockGrowthBlue,
  },
];

export default options;
