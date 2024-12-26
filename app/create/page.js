"use client"
import React from 'react'
import { useRef,} from 'react'
import {useRouter } from 'next/navigation'

const page = () => {
  // ROUTER
  const router = useRouter()
  // INITIALIZING REFS
    const SteamRef = useRef()
    const MapRef = useRef()
    const DurationRef = useRef()
    const ModeRef = useRef()
    // ERRORS
    const FieldRef = useRef()
    const MapErrorRef = useRef()
    const DurationErrorRef = useRef()
    const SteamErrorRef = useRef()
    // WHEN USER HITS SUBMIT BUTTON
    async function formEnter (e) {
      let FieldGood = false
      let MapGood = false
      let SteamGood = false
      let DurationGood = false
      e.preventDefault()
      if (SteamRef.current.value == "" || MapRef.current.value == ""|| DurationRef.current.value== "" || ModeRef.current.value== ""){
         // this just pops up the error for 5 seconds
        FieldRef.current.classList.add("transition-opacity")
        FieldRef.current.classList.add("duration-500")
        FieldRef.current.classList.remove("opacity-0")
        setTimeout(()=>{
        FieldRef.current.classList.add("opacity-0")
        },5000)
      }
      // ^MAKING SURE ALL FIELDS ARE FILLED
      else{
        FieldGood = true
        console.log(ModeRef.current.value)
        // In this else statement; making sure all filled fields are meaningful
        let validated_map_name = false
        validated_map_name = await fetchMap(MapRef.current.value)
        if (validated_map_name === true){
          let mapName = MapRef.current.value
          MapGood = true
        }
        else{
           // this just pops up the error for 5 seconds
          MapErrorRef.current.classList.add("transition-opacity")
          MapErrorRef.current.classList.add("duration-500")
          MapErrorRef.current.classList.remove("opacity-0")
          setTimeout(()=>{
          MapErrorRef.current.classList.add("opacity-0")
          },5000)

        }
        // ^ fetching map from surfheaven api to check if its good or nah
        // -  
        // -
        // Now fetch player from steam id to see if valid
        try{
          let validated_player_id = false
        let playerId = 0
        validated_player_id = await fetchPlayer(SteamRef.current.value)
        if(validated_player_id === true){
          playerId = SteamRef.current.value
          SteamGood = true
        }
        else{
           // this just pops up the error for 5 seconds
          SteamErrorRef.current.classList.add("transition-opacity")
            SteamErrorRef.current.classList.add("duration-500")
            SteamErrorRef.current.classList.remove("opacity-0")
            setTimeout(()=>{
            SteamErrorRef.current.classList.add("opacity-0")
            },5000)
        }
        }
        catch (error){
           // this just pops up the error for 5 seconds
          SteamErrorRef.current.classList.add("transition-opacity")
          SteamErrorRef.current.classList.add("duration-500")
          SteamErrorRef.current.classList.remove("opacity-0")
          setTimeout(()=>{
          SteamErrorRef.current.classList.add("opacity-0")
          },5000)

        }
        // Now see if timer is atleast 5mins and max 60mins
        try{
          
          let duration_check = 0
          duration_check = parseInt(DurationRef.current.value,10)

          if (duration_check < 5 || duration_check > 60 || isNaN(duration_check) === true){
            // this just pops up the error for 5 seconds
            DurationErrorRef.current.classList.add("transition-opacity")
            DurationErrorRef.current.classList.add("duration-500")
            DurationErrorRef.current.classList.remove("opacity-0")
            setTimeout(()=>{
            DurationErrorRef.current.classList.add("opacity-0")
            },5000)
          }
          else if (duration_check >= 5 && duration_check <=60 && isNaN(duration_check) !== true){
            let Duration = 0
            Duration = DurationRef.current.value
            DurationGood = true
          }
        }
        catch (error){
          console.log(error.message)
        }
      }
      if (FieldGood === true && SteamGood === true && MapGood === true && DurationGood === true ){
       if(ModeRef.current.value === "option1"){
        router.push("/1v1")
       }
       else{
        router.push("/team")
       }
      }

    }
    async function fetchMap(map){
      try{
        // Fetching the map from SH api
        let data = await fetch(`https://surfheaven.eu/api/mapinfo/${map}`)
        if (!data.ok){
          console.log("map invalid")
          return false
        }
        else{
          return true
        }
        // If not ok, map invalid return false else return true
      }
      catch (error){
        console.log("error")
        return false
        // if error return false again
      }
    }
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
  return (
    <>
      <h1 data-aos="fade-down" className=' text-7xl text-center pt-5 text-orange-700 font-bold '>Surf_Battles</h1>
      <div data-aos="fade-up" className='text-center mt-5 bg-slate-800 h-fit w-fit p-6 mx-auto border-none rounded-2xl'>
      <form onSubmit={formEnter} action="" method="post">
        <div>
   <p ref={FieldRef} className='opacity-0 w-fit mx-auto text-red-500 font-bold text-sm underline'>
        Enter all fields!
    </p>
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
            the &apos;921269561&apos; part is the steam ID3 </p>
        </div>
        <div className='mt-1'>
        <p className='text-white font-bold text-xl' htmlFor="duration">Time per round</p>
        <input 
        required
        ref={DurationRef}
        type="text"
        key = "duration"
        placeholder='Time in minutes -> Min 5,Max 60'
        className='w-[20vw] p-1 rounded-xl mt-1'
        />
        <p ref={DurationErrorRef} className='opacity-0 w-fit mx-auto text-red-500 font-bold text-sm underline'>
        Invalid time!
        </p>
        </div>
        <div>
        <p className='text-white font-bold text-xl mt-1' htmlFor="duration">Map name</p>
        <input 
        required
        ref={MapRef}
        type="text"
        key = "map"
        placeholder='eg: surf_corruption'
        className='w-[20vw] p-1 rounded-xl mt-1'
        />
        <p ref={MapErrorRef} className='opacity-0 w-fit mx-auto text-red-500 font-bold text-sm underline'>
        Invalid map name!
        </p>
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
