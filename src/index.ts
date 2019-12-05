import React, {useEffect, useRef} from 'react';

type Callback<T> = (current: T, prev: T | undefined) => void

function useWatch<T>(dep: T, callback: Callback<T>) {
  const prev = useRef<T>()
  const inited = useRef(false)

  useEffect(() => {
    if (!inited.current) {
      inited.current = true
    }else {
      callback(dep, prev.current)
    }
    prev.current = dep
  }, [dep])
}

export default useWatch;
