"use client"
import React from 'react'
import { useRef, } from 'react'
const page = () => {
  return (
    <>
    
        <h1 className='text-orange-700 text-9xl text-center pt-5 font-bold'>Surf_Battles</h1> 
        <div className="page ">
        <div className='text-white text-5xl mt-10 text-center font-bold'>
          <p>1v1 Mode</p>
          <p className='text-3xl text-left pl-5'>Lobby ID:</p>
        </div>
        <div className="players flex text-center align-middle justify-evenly mt-5">
          <div className="p1">
            <div className="box w-fit h-fit p-12 bg-slate-900 border-none rounded-xl">
              <h1 className='text-orange-700 font-bold text-4xl text-center'>Player 1</h1>
              <div className="info">
                <p className='text-white text-lg font-bold text-left'>username: meow</p>
                <p className='text-white text-lg font-bold text-left'>Surfheaven profile: 433244334</p>
                <p className='text-white text-lg font-bold text-left'>Rank: 69</p>
                <p className='text-white text-lg font-bold text-left'>Rank name: goat</p>
                <p className='text-white text-lg font-bold text-left'>Points: 69420</p>
                <p className='text-white text-lg font-bold text-left'>Hours played: too many</p>
              </div>
            </div>
          </div>
          <div className="p2">
            <div className="box w-fit h-fit p-12 bg-slate-900 border-none rounded-xl">
              <h1 className='text-orange-700 font-bold text-4xl text-center'>Player 2</h1>
              <div className="info">
                <p className='text-white text-lg font-bold text-left'>username: meow2</p>
                <p className='text-white text-lg font-bold text-left'>Surfheaven profile: 355555</p>
                <p className='text-white text-lg font-bold text-left'>Rank: 96</p>
                <p className='text-white text-lg font-bold text-left'>Rank name:taog</p>
                <p className='text-white text-lg font-bold text-left'>Points: 42069</p>
                <p className='text-white text-lg font-bold text-left'>Hours played: way too many</p>
              </div>
            </div>
          </div>
          

        </div>
      </div>
     
    </>
  )
}

export default page
