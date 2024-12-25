"use client"
import React from 'react'
import { useRef } from 'react'

const page = () => {
    const SteamRef = useRef()
    const MapRef = useRef()
    const DurationRef = useRef()
    const ModeRef = useRef()
    function formEnter () {
        console.log("worko")
    }
  return (
    <>
      <h1 className=' text-9xl text-center pt-5 text-orange-700 font-bold '>Surf_Battles</h1>
      <div className='text-center mt-5 bg-slate-800 h-fit w-fit p-8 mx-auto border-none rounded-2xl'>
      <form action="" method="post">
        <div>
        <p htmlFor="steamid" className='text-white font-bold text-xl'>Steam ID3</p>
        <input 
        ref={SteamRef}
        required
        type="text"
        placeholder = "eg: 921269561"
        className='w-[20vw] p-1 rounded-xl mt-1'
        key="steamid"
        />
        <p className='text-white text-sm w-[25vw] mx-auto'>The numbers at the end of your surfheaven profile link is your steam ID3, for example in this profile: https://surfheaven.eu/player/921269561
            the &apos;921269561&apos; part is the steam id 3 </p>
        </div>
        <div className='mt-2'>
        <p className='text-white font-bold text-xl' htmlFor="duration">Time per round</p>
        <input 
        required
        ref={DurationRef}
        type="text"
        key = "duration"
        placeholder='Time in minutes for 1 map'
        className='w-[20vw] p-1 rounded-xl mt-1'
        />
        </div>
        <div>
        <p className='text-white font-bold text-xl mt-2' htmlFor="duration">Map name</p>
        <input 
        required
        ref={MapRef}
        type="text"
        key = "map"
        placeholder='eg: surf_corruption'
        className='w-[20vw] p-1 rounded-xl mt-1'
        />
        </div>
        <div>
        <p htmlFor="dropdown" className='text-white font-bold text-xl mt-2'>Choose Mode:</p>
    <select ref={ModeRef} id="dropdown" name="options" className='mt-1'>
        <option className='w-[10vw]' value="option1">1v1</option>
        <option className='w-[10vw]' value="option2">Teams</option>
    </select>
        </div>
        <button className='text-lg text-center font-bold text-white bg-orange-700 rounded-xl border border-none p-1 mt-2' onClick={formEnter}>Submit</button>
      </form>
      </div>
    </>
  )
}

export default page
