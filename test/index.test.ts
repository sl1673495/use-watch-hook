import React, { useState } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { cleanup, render, fireEvent } from '@testing-library/react';
import useWatch from '../src';

describe('使用测试', () => {
  test('新旧值保持正确', async () => {
    function useWatchCallback(prevC: number | undefined) {
      expect(prevC).toEqual(0);
    }
    function useTest() {
      const [count, setCount] = useState(0);
      const add = () => setCount(prev => prev + 1);
      useWatch(count, useWatchCallback);
      return {
        add,
        count,
      };
    }
    const { result } = renderHook(() => useTest());
    const { add } = result.current;
    act(() => add())
  });

  test('设置了immediate，应当立即执行回调函数', () => {
    function useWatchCallback(prevC: number | undefined) {
      expect(prevC).toEqual(undefined);
    }

    function useTest() {
      const [count, setCount] = useState(0);
      useWatch(count, useWatchCallback, { immediate: true });
      return {
        count,
      };
    }

    renderHook(() => useTest());
  });

  test("执行了stop以后，应当停止执行回调函数", () => {
    const useWatchCallback = jest.fn(() => {})

    function useTest() {
      const [count, setCount] = useState(0);
      const add = () => setCount(prev => prev + 1);
      const stop = useWatch(count, useWatchCallback);

      return {
        add,
        count,
        stop,
      };
    }

    const { result } = renderHook(() => useTest());
    const { add, stop } = result.current;
    stop()
    act(() => add())

    expect(useWatchCallback).not.toBeCalled()
  })
});
