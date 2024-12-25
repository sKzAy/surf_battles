"use client"
import React from 'react'
import { useRef } from 'react'

const page = () => {
    const LobbyRef = useRef()
    const SteamRef = useRef()
    function handleClick (){
        console.log("yo")
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
        <div>
            <p htmlFor="lobbycode" className='text-white font-bold text-xl'>Enter lobby ID:</p>
            <input 
        ref={LobbyRef}
        required
        type="text"
        placeholder = "idk rn"
        className='w-[20vw] p-1 rounded-xl mt-1'
        key="lobbycode"
        />
        </div>
        </form>
        <div>
            <button className='text-lg text-center font-bold text-white bg-orange-700 rounded-xl border border-none p-1 mt-2' onClick={handleClick}>Submit</button>
        </div>
        </div>
    </>
  )
}

export default page
