import React from 'react'
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { increment, decrement } from './counterSlice'
import styles from './Counter.module.css';

type Props = {}


const Counter = (props: Props) => {
    const count = useAppSelector((state) => state.counter.count);
    const dispatch = useAppDispatch()

    // 
    return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter