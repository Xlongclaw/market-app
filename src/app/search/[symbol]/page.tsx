import NavigationBar from "@/components/navigation-bar";
import getMarketDataBySymbol from "@/utils/getMarketDataBySymbol";
import Image from "next/image";
import React from "react";

export default async function Page({params}:{params:{symbol:string}}) {
  const marketData = await getMarketDataBySymbol(params.symbol);
  return (
    <div>
      <NavigationBar/>
      <div className="borde bg-zinc-900 p-8 mx-32 my-4">
        <div className="flex items-center gap-4">
          <Image width={32} height={32} src={marketData.webp64} alt="" />
          <h3 className="text-3xl font-semibold">{marketData.name}</h3>
        </div>
          <h3 className="text-3xl mt-4 font-semibold">{marketData.rate} <span className="text-sm">USD</span></h3>
          <h3>ATH : ${marketData.allTimeHighUSD}</h3>
        Change:
        <h3>Hour :{marketData.delta.hour}</h3>
        <h3>Day : {marketData.delta.day}</h3>
        <h3>Week : {marketData.delta.week}</h3>
        <h3>Month : {marketData.delta.month}</h3>
        <h3>Quarter : {marketData.delta.quarter}</h3>
        <h3>Year : {marketData.delta.year}</h3>
        <h3>Website : {marketData.links.website}</h3>
        <h3>circulatingSupply : {marketData.circulatingSupply}</h3>
        <h3>totalSupply : {marketData.totalSupply}</h3>
        <h3>maxSupply : {marketData.maxSupply}</h3>
      </div>
    </div>
  );
}
