"use client"
import { useState } from 'react'
import React from 'react'
import Timer from '@/components/Timer'
import Link from 'next/link'

const page = () => {
  const [team1time, setTeam1Time] = useState("1:00")
  const [team2time,setTeam2Time] = useState("1:00")
   return (
    <>
          
          <Link href="/"><h1 data-aos="fade-down" className='text-orange-700 text-7xl text-center pt-5 font-bold max-md:text-5xl'>Surf_Battles</h1></Link> 
        <div data-aos="fade-up" className="page">
        <div className='text-white text-5xl mt-8 text-center font-bold max-md:text-3xl'>
          <p>Team Mode</p>
          <p className='text-3xl text-left pl-5 max-md:text-xl'>Lobby ID:</p>
        </div>
        <div className="players flex text-center align-middle justify-evenly mt-5 max-md:flex-col">
          <div className="team1">
            <div className="box w-fit h-fit p-10 bg-slate-900 border-none rounded-xl pb-4 max-md:mx-auto max-md:p-6">
              <h1 className='text-orange-700 font-bold text-4xl text-center'>Team 1</h1>
              <div className="player1">
                <p className='text-2xl font-bold text-orange-700 text-left'>Player 1</p>
                <p className='text-white text-lg font-bold text-left'>Username: meow</p>
                <p className='text-white text-lg font-bold text-left'>Surfheaven profile: surfheavem/blahblah</p>
                <p className='text-white text-lg font-bold text-left'>Rank: 69</p>
              </div>

              <div className="player2">
                <p className='text-2xl font-bold text-orange-700 text-left'>Player 2</p>
                <p className='text-white text-lg font-bold text-left'>Username: meow</p>
                <p className='text-white text-lg font-bold text-left'>Surfheaven profile: surfheavem/blahblah</p>
                <p className='text-white text-lg font-bold text-left'>Rank: 69</p>
              </div>
              <div className="status ">
                <p className='text-2xl text-orange-700 font-bold '>Match Status</p>
                <p className='text-white text-lg font-bold text-left'>Time set: {team1time}</p>
              <p className='text-white text-lg font-bold text-left'>Current Standing: {team1time==team2time? <span className='text-white'>Draw</span>: team1time < team2time ? <span className='text-green-500'>Leading
                </span>:<span className='text-red-600'>Trailing</span>}</p>
              </div>
            </div>
          </div>
          <div className='m-3'>
            <Timer/>
          </div>
          <div className="team2">
            <div className="box w-fit h-fit p-10 bg-slate-900 border-none rounded-xl pb-4 max-md:p-6 max-md:mx-auto">
              <h1 className='text-orange-700 font-bold text-4xl text-center'>Team 2</h1>
              <div className="Player1">
                <p className='text-2xl font-bold text-orange-700 text-left'>Player 1</p>
                <p className='text-white text-lg font-bold text-left'>Username: meow</p>
                <p className='text-white text-lg font-bold text-left'>Surfheaven profile: surfheavem/blahblah</p>
                <p className='text-white text-lg font-bold text-left'>Rank: 69</p>
              </div>
              <div className="Player1">
                <p className='text-2xl font-bold text-orange-700 text-left'>Player 2</p>
                <p className='text-white text-lg font-bold text-left'>Username: meow</p>
                <p className='text-white text-lg font-bold text-left'>Surfheaven profile: surfheavem/blahblah</p>
                <p className='text-white text-lg font-bold text-left'>Rank: 69</p>
              </div>
              <div className="status ">
                <p className='text-2xl text-orange-700 font-bold '>Match Status</p>
                <p className='text-white text-lg font-bold text-left'>Time set: {team2time}</p>
                <p className='text-white text-lg font-bold text-left'>Current Standing: {team1time==team2time? <span className='text-white'>Draw</span>: team2time < team1time ? <span className='text-green-500'>Leading
                </span>:<span className='text-red-600'>Trailing</span>}</p>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </>
  )
}

export default page
