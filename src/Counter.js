import { useState } from 'react'

const Counter = (props) => {
  const [count, setCount] = useState(0)
  const {name, color, extra} = props
  return (
    <>
      <h1>{name ? name : "Counter"}</h1>
      <h3 style={{color: color ? color: "black"}}>count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>add</button>
      <button onClick={() => setCount(count - 1)}>minus</button>
      {extra && extra}
    </>
  )
}
export default Counter; 