import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from './counterSlice'

type Props = {}


const Counter = (props: Props) => {
    const count = useSelector((state) => state.counter.count);

    return (
    <div>Counter</div>
    )

}

export default Counter