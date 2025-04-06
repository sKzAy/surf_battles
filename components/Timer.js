"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation'

const Timer = ({ initialMinutes }) => {
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [matchEnd, setMatchEnd] = useState(false);
    const parameter = useParams()
    const timerRef = useRef()
    const matchId = parameter.matchId


async function RemoveMatch(id){
    const response = await fetch("https://shduels.toasti.net/api/removematch", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(id),
      });
      const data = await response.json()
      console.log(data)
      
}

    useEffect(() => {
        // Reset the timer when the initialMinutes prop changes
        setMinutes(initialMinutes);
        setSeconds(0);
        setMatchEnd(false);
        setIsRunning(false);
    }, [initialMinutes]);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        setMatchEnd(true);
                        setIsRunning(false);
                        RemoveMatch(matchId)
                        
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            
            }
           
            , 1000);
        }

        return () => clearInterval(interval); // Cleanup the interval on unmount or when isRunning changes
    }, [isRunning, minutes, seconds]);

    const handleClick = () => {
        if (!isRunning) {
            setMatchEnd(false); // Reset match end state
            setIsRunning(true); // Start the timer
        }
        timerRef.current.classList.add("opacity-0")
    };



    return (
        <div>
            {matchEnd === false ? (
                <div className="timer text-white font-bold text-3xl">
                    {minutes < 10 ? `0${minutes}` : minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                </div>
            ) : (
                <div className='text-white font-bold text-3xl'>Match has ended!</div>
            )}
            <div className="start">
                <button ref={timerRef} onClick={handleClick} className='p-2 text-green-500 bg-green-950 text-xl font-bold border-none rounded-xl'>
                    Start
                </button>
            </div>
        </div>
    );
};

export default Timer;