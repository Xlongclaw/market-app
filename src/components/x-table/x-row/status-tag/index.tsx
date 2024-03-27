import classNames from 'classnames'
import React from 'react'

interface PropTypes {
status:"OPENED" | "CLOSED" | "RUNNING"   
}

export default function StatusTag({status}:PropTypes) {
  return (
    <div className={classNames("flex w-24 p-2 justify-center text-[10px] font-medium tracking-wider rounded-2xl",{
      "bg-blue-800": status === 'OPENED',
      "bg-blue-950": status === 'CLOSED',
      "bg-yellow-600": status === 'RUNNING'
    })}>
      {status}
    </div>
  )
}
