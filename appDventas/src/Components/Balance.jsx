import React from "react"

const Balance = ({ goal }) => {
  return (
    <div className="flex flex-col bg-blue-600 rounded-md p-2">
      <div className=" text-white font-light text-sm">My Balance</div>
      <div className=" text-white font-bold">${goal}</div>
    </div>
  )
}

export default Balance
