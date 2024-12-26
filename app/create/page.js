"use client"
import React from 'react'
import { useRef,} from 'react'
import {useRouter } from 'next/navigation'
import Link from 'next/link'

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
        // In this else statement; making sure all filled fields are meaningful
        let validated_map_name = false
        validated_map_name = await fetchMap(MapRef.current.value)
        if (validated_map_name === true){
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
        validated_player_id = await fetchPlayer(SteamRef.current.value)
        if(validated_player_id === true){
         let playerId = SteamRef.current.value
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
        let formObject = {}
        formObject = {
            "steamid": SteamRef.current.value,
            "map":MapRef.current.value,
            "duration":DurationRef.current.value,
            "mode": ModeRef.current.value
        }
        console.log(formObject)
       if(ModeRef.current.value === "1v1"){
        router.push("/1v1")
       }
       else{
        router.push("/team")
       }
       return(formObject)
      }
      
    }
    async function fetchMap(map){
      try {
        const response = await fetch(`https://surfheaven.eu/api/mapinfo/${map}`);
        const data = await response.json();
        console.log(data)
       if (data.length !== 0){
        return true
       }
       else{
        return false
       }
      } 
      catch (error) {
       return false
      }
      // try{
      //   // Fetching the map from SH api
      //   let data = ""
      //   let response = ""
      //    response = await fetch(`https://surfheaven.eu/api/mapinfo/${map}`)
      //   if (!response.ok){
      //     console.log("map invalid")
      //      console.log(data)
      //     return false
      //   }
      //   else if(response.ok ){
      //     console.log(`ok data: ${data[0].map}`)
      //     return true
      //   }
      
        // If not ok, map invalid return false else return true
      
    }
    async function fetchPlayer(id){
      try{
        let data = await fetch(`https://surfheaven.eu/api/playerinfo/${Number(id)}`)
      if (!data.ok){
        return false
      }
      else{
        return true
      }
      }
      catch (error){
        return false
      }
    }
  return (
    <>
   <Link href="/"><h1 data-aos="fade-down" className='text-orange-700 text-7xl text-center pt-5 font-bold'>Surf_Battles</h1></Link>
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
        Invalid time, enter an integer between 5 and 60!
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
        <option className='w-[10vw]' value="1v1">1v1</option>
        <option className='w-[10vw]' value="team">Teams</option>
    </select>
        </div>
        <button className='text-lg text-center font-bold text-white bg-orange-700 rounded-xl border border-none p-1 mt-2' onClick={formEnter}>Submit</button>
      </form>
      </div>
    </>
  )
}

export default page
