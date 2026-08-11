import React from 'react'
import Timer1 from './Timer1'
import Timer2 from './Timer2'
import StopWatch from './StopWatch'
import Timer3 from './Timer3'

const Timers = () => {
  return (
    <div>
        <Timer1/>
        <hr />
        <Timer2/>
        <hr />
        <Timer3/>

        <hr />
        <StopWatch/>
    </div>
  )
}

export default Timers