import React, { useState } from 'react';
import useWatch from '../src'
import './index.css'

const App: React.FC = () => {
  const [prev, setPrev] = useState()
  const [count, setCount] = useState(0);

  useWatch(count, (currentCount, prevCount) => {
    console.log('prevCount: ', prevCount);
    console.log('currentCount: ', currentCount);
    setPrev(prevCount)
  })

  const add = () => setCount(prevCount => prevCount + 1)

  return (
    <div>
      <p> 当前的count是{count}</p>
      <p> 前一次的count是{prev}</p>
      {count}
      <button onClick={add} className="btn">+</button>
    </div>
  )
}

export default App