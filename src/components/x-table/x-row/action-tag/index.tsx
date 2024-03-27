import classNames from 'classnames'
import React from 'react'

interface PropTypes {
action:"BUY" | "SELL" | "NA"  
}

export default function ActionTag({action}:PropTypes) {
  return (
    <div className={classNames("flex w-24 p-2 justify-center text-[10px] font-medium tracking-wider rounded-2xl",{
      "bg-green-800": action === 'BUY',
      "bg-red-800": action === 'SELL',
      "bg-gray-800": action === 'NA'
    })}>
      {action}
    </div>
  )
}