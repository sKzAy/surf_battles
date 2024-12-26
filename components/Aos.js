"use client"
import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const AosComponent = () => {
    useEffect(() => {
        Aos.init({
            duration: 500,
            once: false,
        })
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default AosComponent