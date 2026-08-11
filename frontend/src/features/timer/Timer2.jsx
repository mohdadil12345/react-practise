import React, { useEffect, useState } from 'react'

import "../../styles/Timers.scss"

const Timer2 = () => {

    const [second, setsecond] = useState(0)
    const [status, setStatus] = useState(false)


    useEffect(() => {

        if(!status) return 

        const interval = setTimeout(() => {

            if (status) {
                setsecond((prev) => prev == 60 ? 1 : prev + 1)
            }

        }, 1000);

        return () => clearInterval(interval)

    }, [status, second])



    return (
        <div>

            <h3>Timer2 :  {second}</h3>

            <div className="btn">
                <button onClick={() => setStatus(true)}>Start</button>
                <button onClick={() => setStatus(false)}>Stop</button>
                <button onClick={() => setsecond(0)}>Reset</button>

            </div>

            <p>“Why use setTimeout here instead of setInterval?” :
                “Because I want controlled execution — the timer only runs when status is true, and stops cleanly without overlapping executions.”</p>

        </div>
    )
}

export default Timer2