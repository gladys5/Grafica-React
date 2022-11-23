import { useState } from "react"
import "./App.css"
import Balance from "./Components/Balance"
import Detail from "./Components/Detail"

function App() {
  const [goal, setGoal] = useState(1000)

  return (
    <div className="grid place-items-center bg-blue-200 w-full h-screen">
      <div className="w-64 flex flex-col gap-5 text-start">
        <Balance goal={goal} />
        <Detail goal={goal} />
      </div>
    </div>
  )
}

export default App
