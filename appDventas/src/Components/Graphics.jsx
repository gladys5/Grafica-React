import React from "react"
import Amount from "./Amount"

const Graphics = (props) => {
  const { Days } = props

  return (
    <div className="w-full grid  grid-cols-7 gap-2 text-center items-end ">
      {Days.map((item, index) => (
        <Amount {...item} />
      ))}
    </div>
  )
}

export default Graphics
