import React, { useEffect, useState } from 'react'

const Timer1 = () => {

const [sec, setSec] = useState(0)


useEffect(() => {

 const interval = setInterval(() => {
    setSec((prev) => prev == 5 ? 1 : prev + 1)
 }, 1000);

 return () => clearInterval(interval)

}, [sec])

  

  return (
    <div>

        <h3>Timer 1 : {sec}</h3>

    </div>
  )
}

export default Timer1