import classNames from 'classnames'
import React from 'react'

interface PropTypes {
status:"OPENED" | "CLOSED" | "RUNNING"   
}

export default function StatusTag({status}:PropTypes) {
  return (
    <div className={classNames("flex w-24 p-2 justify-center text-[10px] font-medium tracking-wider rounded-2xl border-2",{
      "border-sky-600 text-sky-600": status === 'OPENED',
      "border-blue-600 text-blue-600": status === 'CLOSED',
      "border-yellow-600 text-yellow-600": status === 'RUNNING'
    })}>
      {status}
    </div>
  )
}
