"use client"
import React from 'react'
import { useRef } from 'react'

const page = () => {
    const LobbyRef = useRef()
    const SteamRef = useRef()
    const SteamErrorRef = useRef()
    async function fetchPlayer(id){
      try{
        let data = await fetch(`https://surfheaven.eu/api/playerinfo/${Number(id)}`)
      if (!data.ok){
        console.log("player invalid")
        return false
      }
      else{
        return true
      }
      }
      catch (error){
        console.log(`player error ${error.message}`)
        return false
      }
    }
    async function handleClick (){
      try{
        let validated_player_id = false
      let playerId = 0
      validated_player_id = await fetchPlayer(SteamRef.current.value)
      if(validated_player_id === true){
        playerId = SteamRef.current.value
        console.log(playerId)
      }
      else{
        SteamErrorRef.current.classList.add("transition-opacity")
          SteamErrorRef.current.classList.add("duration-500")
          SteamErrorRef.current.classList.remove("opacity-0")
          setTimeout(()=>{
          SteamErrorRef.current.classList.add("opacity-0")
          },5000)
      }
      }
      catch (error){
        SteamErrorRef.current.classList.add("transition-opacity")
        SteamErrorRef.current.classList.add("duration-500")
        SteamErrorRef.current.classList.remove("opacity-0")
        setTimeout(()=>{
        SteamErrorRef.current.classList.add("opacity-0")
        },5000)

      }
    }
  return (
    <>
     <h1 data-aos="fade-down" className=' text-7xl text-center pt-5 text-orange-700 font-bold '>Surf_Battles</h1>
      <div data-aos="fade-up" className='text-center mt-5 bg-slate-800 h-fit w-fit p-8 mx-auto border-none rounded-2xl'>
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
        <p ref={SteamErrorRef} className='opacity-0 w-fit mx-auto text-red-500 font-bold text-sm underline'>
        Invalid Steam ID3!
        </p>
        <p className='text-white text-sm w-[25vw] mx-auto'>The numbers at the end of your surfheaven profile link is your steam ID3, for example in this profile: https://surfheaven.eu/player/921269561
            the &apos;921269561&apos; part is the steam id 3 </p>
        </div>
        <div>
            <p htmlFor="lobbycode" className='text-white font-bold text-xl mt-1'>Enter lobby ID:</p>
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
