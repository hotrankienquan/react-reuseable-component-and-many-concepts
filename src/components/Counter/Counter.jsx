import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../app/features/counter/counterSlice';


const Counter = () => {
    //read the data from the store

    const count = useSelector((state) => state.counter.value);

    //changing the data by sending "actions" to the store
    const dispatch = useDispatch()
    return (
        <div>{count}
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter