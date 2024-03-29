import React from 'react'

interface IProps {
  dataLoaded:boolean,
  onClick:()=>void
}

export default function LoadDataBtn({ dataLoaded, onClick}:IProps) {
  return (
    <button
    onClick={onClick}
    className="text-xs border-2 border-zinc-300 text-zinc-300  font-semibold hover:bg-zinc-300 hover:text-black px-6 rounded-full"
  >
    {!dataLoaded ? "Load Data" : "Reload Data"}
  </button>
  )
}
