import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function CounterDisplay() {
    const counter = useSelector((state) => state.counter.value);

    // const [counters, setCounter] = useState()

  return (
    <div>{counter}</div>
  )
}

export default CounterDisplay;