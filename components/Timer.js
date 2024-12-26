"use client"
import React from 'react'
import { useState,useEffect } from 'react'


const Timer = (props) => {
    const [matchEnd, setMatchEnd] = useState(false);
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false); 

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        setMatchEnd(true);
                        setIsRunning(false); 
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        }

        return () => clearInterval(interval); // Cleanup the interval on unmount or when isRunning changes
    }, [isRunning, minutes, seconds]); // Dependencies include isRunning, minutes, and seconds

    const handleClick = () => {
        if (!isRunning) {
            setMatchEnd(false); // Reset match end state
            setIsRunning(true); // Start the timer
        }
    };

  return (
    <>
      <div>
       
        {matchEnd == false ? <div className="timer text-white font-bold text-3xl">
           {minutes}<span className='text-xl'>M:</span>{seconds}<span className='text-xl'>S</span>
            </div>:  <div className='text-white font-bold text-3xl'>Match has ended!</div> }
        <div className="start">
            <button onClick={handleClick} className='p-2 text-green-500 bg-green-950 text-xl font-bold border-none rounded-xl'>Start</button>
        </div>
      </div>
    </>
  )
}

export default Timer
