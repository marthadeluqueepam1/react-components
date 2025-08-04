import { useState } from 'react'

function Counter(){
    const [count, setCount] = useState(0)

    return (
    <>
      <div className="counter">
        <h1>counter</h1>
        <button data-testid="increment" onClick={() => setCount((count) => count + 1)}>Increase count</button>
        <button data-testid="decrement" onClick={() => setCount((count) => count - 1)}>Decrease count</button>
        <p data-testid="counter-result">Count is {count}</p>
      </div>
    </>
    )
}

export default Counter