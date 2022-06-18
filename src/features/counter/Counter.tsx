import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { increment, decrement } from './counterSlice'

type Props = {}


const Counter = (props: Props) => {
    const count = useAppSelector((state) => state.counter.count);
    const dispatch = useAppDispatch()

    // 
    return (
    <div>Counter</div>
    )

}

export default Counter