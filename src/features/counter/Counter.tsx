import React, {useState} from 'react'
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { increment, decrement, incrementByAmount } from './counterSlice'
import styles from './Counter.module.css';
import logo from '../../logo.svg';
type Props = {}


const Counter = (props: Props) => {
    const count = useAppSelector((state) => state.counter.count);
    const dispatch = useAppDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2'); 

    const incrementValue = Number(incrementAmount) || 0 

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
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementValue}
          onChange={(ev) => {setIncrementAmount(ev.target.value)}}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
      </div>
      <div className={styles.row}><img src={logo} className="App-logo" alt="logo" /></div>
    </div>
  );
}

export default Counter