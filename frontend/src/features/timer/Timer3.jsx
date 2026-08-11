import React, { useEffect, useRef, useState } from 'react'

const Timer3 = () => {

    const [time, setTime] = useState(0)

    const [status, setStatus] = useState(false)

    const timeRef = useRef(null)

    useEffect(() => {

        if(!status) return

        if(status) {
         timeRef.current = setTimeout(() => {
            setTime(prev=> prev + 1)
         }, 1000);
        }

        return (() => clearTimeout(timeRef.current))
      
    }, [time, status])
    

    const handle_stop = () => {

        setStatus(false)
        clearTimeout(timeRef.current)
        
    }
    const handle_reset = () => {
        setStatus(false)
        clearTimeout(timeRef.current)
        setTime(0)
        timeRef.current = null
    }

    console.log(timeRef);



  return (
    <div>
        <h3>Timer using useref : {time} : timref.current:{timeRef.current}</h3>

        <div className="btn">
                <button onClick={() => setStatus(true)} >Start</button>
                <button onClick={handle_stop}>Stop</button>
                <button onClick={handle_reset} >Reset</button>

            </div>

            <p>time state → stores elapsed seconds (0, 1, 2, 3...)
timeRef.current → stores timeout ID (165, 166, 167...)</p>
    </div>
    
  )
}

export default Timer3