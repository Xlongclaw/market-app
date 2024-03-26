import React from 'react'
import { BiTrendingUp } from 'react-icons/bi'

export default function Logo() {
  return (
    <div className='flex items-center gap-2'>
      <BiTrendingUp size={16} className='text-green-60'/>
      <div className='text-xs'>THE TREND</div>
    </div>
  )
}
