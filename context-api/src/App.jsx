import { Counter } from "../components/CounterComp"
import { useContext } from "react"
import { CounterContext } from "../context/Counter"

function App() {
  const counterState = useContext(CounterContext);
  return (
    <>
    <div>The count is {counterState.count}</div>
    <Counter></Counter>
    <Counter></Counter>
    <Counter></Counter>
    <Counter></Counter>
    </>
  )
}

export default App
