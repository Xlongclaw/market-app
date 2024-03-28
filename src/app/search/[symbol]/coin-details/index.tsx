import React from 'react'
import ChangeBox from '../change-box'
import Link from 'next/link'
import { BiLink, BiInfoCircle } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'

interface IProps {
  marketData:any,
  symbol:string
}

export default function CoinDetails({marketData,symbol}:IProps) {
  return (
    <div className="borde border-zinc-900 bg-neutral-9 p-0 mx-32 my-4">
          <div className="flex  justify-between">
            <div>
              <div className="flex items-center gap-4">
                <Image width={32} height={32} src={marketData.webp64} alt="" />
                <h3 className="text-3xl font-semibold">{marketData.name}</h3>
                <h3
                  style={{ color: marketData.color }}
                  className={`text-xs font-semibold`}
                >
                  {symbol}
                </h3>
              </div>
              <h3 className="text-3xl mt-4 font-semibold transition-all">
                {marketData.rate.toFixed(5)}{" "}
                <span className="text-sm">USD</span>
              </h3>
            </div>
            <div className="flex gap-2 my-4">
              <ChangeBox time={"HOUR"} delta={marketData.delta.hour} />
              <ChangeBox time={"DAY"} delta={marketData.delta.day} />
              <ChangeBox time={"WEEK"} delta={marketData.delta.week} />
              <ChangeBox time={"QUARTER"} delta={marketData.delta.quarter} />
              <ChangeBox time={"YEAR"} delta={marketData.delta.year} />
            </div>
          </div>
          <div className="flex gap-2">
            <Link
              href={marketData.links.website}
              className="flex items-center gap-2 text-zinc-300 p-4 bg-zinc-900"
            >
              Trading View <BsArrowRight />
            </Link>
            <Link
              href={marketData.links.website}
              style={{ color: marketData.color }}
              className="flex items-center gap-2 p-4 bg-zinc-900"
            >
              <BiLink /> Official Site
            </Link>
          </div>
          {/* <h3>ATH : ${marketData.allTimeHighUSD}</h3> */}
          <div className="text-2xl font-semibold mt-8">Market Volume</div>
          <div className="flex gap-4 bg-zinc-90 py-3 justify-between">
            <div className="font-semibold text-base">
              <div className="flex items-center gap-2">
                Circulating <BiInfoCircle style={{ color: marketData.color }} />
              </div>
              <h3 className="text-2xl font-normal mt-1">
                {marketData.circulatingSupply / 1000000}
                {" M "}
                <span className="text-xs"> {symbol}</span>
              </h3>
            </div>
            <div className="font-semibold text-base">
              <div className="flex items-center gap-2">
                Total <BiInfoCircle style={{ color: marketData.color }} />
              </div>
              <h3 className="text-2xl font-normal mt-1">
                {marketData.totalSupply / 1000000}
                {" M "}
                <span className="text-xs"> {symbol}</span>
              </h3>
            </div>
            <div className="font-semibold text-base">
              <div className="flex items-center gap-2">
                Max <BiInfoCircle style={{ color: marketData.color }} />
              </div>
              <h3 className="text-2xl font-normal mt-1">
                {(marketData.maxSupply / 1000000).toFixed(2)}
                {" M"}
                <span className="text-xs"> {symbol}</span>
              </h3>
            </div>
          </div>
        </div>
  )
}
