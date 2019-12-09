# use-watch-hook

A React Hook that use to call the callback when the dep changed

通过React自定义Hook实现Vue中的watch功能，当依赖发生变化的时候，执行回调函数，并且支持了immediate和stop功能。

## Stability
[![Coverage Status](https://coveralls.io/repos/github/sl1673495/use-watch/badge.svg?branch=master)](https://coveralls.io/github/sl1673495/use-watch?branch=master)

## Doc
https://sl1673495.github.io/use-watch-hook

## Usage
```
npm i use-watch-hook -S
```

```ts
import React, { useState } from 'react';
import useWatch from '../src'
import './index.css'

const App: React.FC = () => {
  const [prev, setPrev] = useState()
  const [count, setCount] = useState(0);

  const stop = useWatch(count, (prevCount) => {
    console.log('prevCount: ', prevCount);
    console.log('currentCount: ', count);
    setPrev(prevCount)
  })

  const add = () => setCount(prevCount => prevCount + 1)

  return (
    <div>
      <p> 当前的count是{count}</p>
      <p> 前一次的count是{prev}</p>
      {count}
      <button onClick={add} className="btn">+</button>
      <button onClick={stop} className="btn">停止观察旧值</button>
    </div>
  )
}

export default App
```

## LICENSE

MIT
