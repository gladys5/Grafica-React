import React from "react"
import { useState } from "react"
const Amount = (props) => {
  const { day, amount } = props
  const [isHover, setIsHover] = useState(false)
  return (
    <div className="w-full relative">
      {isHover && (
        <div className="absolute text-[10px]  font-bold  w-auto  h-auto p-1 rounded top-[-20px] ">
          ${amount}
        </div>
      )}
      <div
        className={
          amount > 500
            ? "w-full bg-blue-400 h-16 rounded-sm "
            : "w-full bg-pink-400 h-16 rounded-sm "
        }
        style={{ height: `${amount / 64}px` }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      ></div>
      <span className="text-[10px] font-bold">{day}</span>
    </div>
  )
}

export default Amount
