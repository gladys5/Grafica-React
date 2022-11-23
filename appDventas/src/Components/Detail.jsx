import React from "react"
import Graphics from "./Graphics"

const Detail = ({ goal }) => {
  const weekdays = {
    Days: [
      { day: "Mon", amount: 600 },
      { day: "Tue", amount: 800 },
      { day: "Wed", amount: 925 },
      { day: "Thu", amount: 1000 },
      { day: "Fri", amount: 1150 },
      { day: "Sat", amount: 3000 },
      { day: "Sun", amount: 2000 },
    ],
  }
  let total = weekdays.Days.reduce((acc, item) => {
    return acc + item.amount
  }, 0)
  let percentage = (total / goal) * 100
  return (
    <div className="  grid bg-blue-100 rounded-md p-2 gap-7 ">
      <div className="text-blue-500 font-bold ">Sales of the last 7 days</div>

      <Graphics Days={weekdays.Days} />
      <div className="w-full grid">
        <div className="text-gray-600 font-light text-[10px]">
          Total This Week
        </div>

        <div className="flex justify-between">
          <div className="font-bold text-2xl">${total}</div>
          <div className="flex flex-col items-end text-[10px] justify-end ">
            <span className="font-bold"> % {Math.round(percentage)}</span>
            <span>Vs the Goal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
