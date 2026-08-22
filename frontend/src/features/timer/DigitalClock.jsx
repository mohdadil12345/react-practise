import React, { useEffect, useState } from 'react'

import "../../styles/digitalclock.scss"

const DigitalClock = () => {

    const [currentTime, setCurrentTime] = useState(new Date()) // 24 hour format
    const [is24Hour, setIs24Hour] = useState(false)

    useEffect(() => {

        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);

    }, []);


    const hours = currentTime.getHours()  // 12 hour format
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()

    console.log(String(hours).padStart(2, "0")); // explantion : if hours is less than 10, it will add 0 to the front of the number

    const displayHours = is24Hour ? String(hours).padStart(2, "0") : String(hours % 12 || 12).padStart(2, "0")

    const displayMinutes = String(minutes).padStart(2, "0")
    const displaySeconds = String(seconds).padStart(2, "0")


    const period = hours >= 12 ? "AM" : "PM"

    // date 
    // const dateString = currentTime.toLocaleDateString() // like 8/15/2026
    const dateString = currentTime.toLocaleDateString("en-IN", {

        weekday : "short",
        day : "numeric", // day: "2-digit"
        month : "long",
        year : "numeric"

    })

// toLocaleDateString() converts a Date object into a string based on a locale and formatting options
// weekday: "long" Displays the full weekday name.

    return (
        <div className='digitalclock'>

            <h3>Digital Clock</h3>


            <p className='date'>{dateString}</p>

            <div className="time-display">

                <span className='digit'>{displayHours}</span>
                <span className='colon'>:</span>

                <span className='digit'>{displayMinutes}</span>
                <span className='colon'>:</span>

                <span className='digit'>{displaySeconds}</span>

                {!is24Hour && <span className="period">{period}</span>
                }
            </div>

            <button onClick={() => setIs24Hour(prev => !prev)}>
                {is24Hour ? "12 Hour" : "24 Hour"}
            </button>

        </div>
    )
}

export default DigitalClock