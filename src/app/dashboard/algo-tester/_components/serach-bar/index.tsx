import Image from 'next/image'
import React from 'react'
import Bitcoin from "./Bitcoin.svg"
import Binance from "./Binance.svg"
import { BiChevronDown } from 'react-icons/bi'

export default function SearchBar() {
  return (
    <div className='borde border-zinc-800 bg-zinc-900 px-4 py-3 flex gap-16 items-center rounded-xl 
    hover:border-zinc-700 cursor-pointer transition-colors duration-300'>
      <div className='flex items-center gap-2'>
      <Image className='w-6' width={100} height={100} src={Bitcoin} alt=''/>
      <h4 className='text-xs font-medium'>BTCUSDT</h4>

      </div>
      <h6 className='text-xs text-yellow-500 italic'>
        Bitcoin/TetherUs
      </h6>
      <div className='flex items-center gap-2'>
        <p className='text-[10px] font-medium text-zinc-400'>spot Crypto</p>

      <Image className='w-5' width={100} height={100} src={Binance} alt=''/>
        <p className='text-xs font-medium'>BINANCE</p>
        <BiChevronDown/>
      </div>
    </div>
  )
}
