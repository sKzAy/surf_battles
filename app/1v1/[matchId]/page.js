"use client"
import React from 'react'
import { useRef,useState,useEffect } from 'react'
import Timer from '@/components/Timer'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const page = () => {
  const [map,setMap] = useState("surf_map")
  const [zone,setZone] = useState("Main map")
  const [winnertime,setwinnerTime] = useState("No time set")
  const [winnerName,setwinnerName] = useState("Player Name")
  const [winnerID,setwinnerID] = useState(99999999)
  const [winnerSet,setwinnerSet] = useState(0)
  const [losertime,setloserTime] = useState("No time set")
  const [loserName,setloserName] = useState("Player Name 2")
  const [loserID,setloserID] = useState(99999998)
  const [loserSet,setloserSet] = useState(0)
  const[duration,setDuration] = useState(0)
  console.log(typeof duration)
  const parameters = useParams()
  const [data,setData] = useState({})
  const matchId = parameters.matchId


//   async function fetchingData(id)
//   {
//     let matchData
//     let response
//     try{
//       response = await fetch(`https://shduels.toasti.net/api/match/${id}`)
//       matchData = await response.json()
//       setData(matchData)
//       console.log(matchData)
//       setwinnerName(matchData.leaderboard.entries[0].team.players[0].name)
//       setwinnerID(matchData.leaderboard.entries[0].team.players[0].id)
//       setwinnerTime(matchData.leaderboard.entries[0].team.players[0].records[0])
//       setloserName(matchData.leaderboard.entries[1].team.players[0].name)
//       setloserID(matchData.leaderboard.entries[1].team.players[0].id)
//       setloserTime(matchData.leaderboard.entries[1].team.players[0].records[0])
//       setMap(matchData.surfmap)
//       if(matchData.zone === Number(0)){
//         setZone("Main map")
//       }
//       else{
//         setZone(`Bonus ${matchData.zone}`)
//       }
      
//     }
//     catch(error){
//       console.log(error)
//     }
    
//   };
// fetchingData(matchId)
useEffect(() => {
  const fetchingData = async (id) => {
    let matchData;
    let response;
    try {
      response = await fetch(`https://shduels.toasti.net/api/match/${id}`);
      matchData = await response.json();
      setData(matchData);
      console.log(matchData);
      setwinnerName(matchData.leaderboard.entries[0].team.players[0].name);
      setwinnerID(matchData.leaderboard.entries[0].team.players[0].id);
      setwinnerTime(matchData.leaderboard.entries[0].team.players[0].records[0]);
      setwinnerSet(matchData.leaderboard.entries[0].times_set)
      setloserName(matchData.leaderboard.entries[1].team.players[0].name);
      setloserID(matchData.leaderboard.entries[1].team.players[0].id);
      setloserTime(matchData.leaderboard.entries[1].team.players[0].records[0]);
      setloserSet(matchData.leaderboard.entries[1].times_set)
      setDuration(Number(matchData.duration))

      setMap(matchData.surfmap);
      setZone(matchData.zone === 0 ? "Main map" : `Bonus ${matchData.zone}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (matchId) {
    fetchingData(matchId);
  }
}, [matchId]); // Dependency array includes matchId



async function TimeFetch(id){
  let response
  let matchData
  setInterval(async () => {
    response = await fetch(`https://shduels.toasti.net/api/match/${id}`);
    matchData = await response.json();
    setwinnerTime(matchData.leaderboard.entries[0].team.players[0].records[0]);
    setwinnerSet(matchData.leaderboard.entries[0].times_set)
    setloserTime(matchData.leaderboard.entries[1].team.players[0].records[0]);
    setloserSet(matchData.leaderboard.entries[1].times_set)
    console.log("10sec done")
  }, 10000);
}

function timerClick(id){
  TimeFetch(id)
}

  return (
    <>
    
        <Link href="/"><h1 data-aos="fade-down" className='text-orange-700 text-7xl text-center pt-5 font-bold max-md:text-5xl'>Surf_Battles</h1></Link>
        <div data-aos="fade-up" className="page ">
        <div className='text-white text-5xl mt-10 text-center font-bold max-md:text-3xl'>
          <p>1v1 Mode</p>
          <p className='text-3xl text-left pl-5 max-md:text-xl'>Map: {map}</p>
          <p className='text-3xl text-left pl-5 max-md:text-xl'>Zone: {zone}</p>
        </div>
        <div className="players flex text-center align-middle justify-evenly mt-5 max-md:flex-col max-md:mx-auto">
          <div data-aos="fade-up" className="p1">
            <div className="box w-fit h-fit p-12 bg-slate-900 border-none rounded-xl  max-md:mx-auto">
              <h1 className='text-green-500 font-bold text-4xl text-center'>Winning Player</h1>
              <div className="info">
                <Link href={`https://surfheaven.eu/player/${winnerID}`} className='text-white text-xl font-bold text-left underline hover:text-orange-500 hover:transition-all transition-all '>username: {winnerName} </Link>
              </div>
              <div className="status ">
                <p className='text-2xl text-orange-700 font-bold '>Match Status</p>
                <p className=' text-lg font-bold text-left text-green-400'>Time set: {winnertime}</p>
                <p className='text-white text-lg font-bold text-left'>No. of times set: {winnerSet}</p>
                
              </div>
            </div>
          </div>
          <div onClick={() => timerClick(matchId)} className='max-md:m-3' data-aos="fade-up">
            <Timer initialMinutes = {duration}/> 
          </div>
          <div data-aos="fade-up" className="p2">
            <div className="box w-fit h-fit p-12 bg-slate-900 border-none rounded-xl max-md:mx-auto">
            <h1 className='text-red-500 font-bold text-4xl text-center'>Trailing Player</h1>              <div className="info">
              <Link href={`https://surfheaven.eu/player/${loserID}`}  className='text-white text-xl font-bold text-left underline hover:text-orange-500 hover:transition-all transition-all '>username: {loserName} </Link>
              

              </div>
              <div className="status ">
                <p className='text-2xl text-orange-700 font-bold '>Match Status</p>
                <p className='text-red-600 text-lg font-bold text-left'>Time set: {losertime}</p>
                <p className='text-white text-lg font-bold text-left'>No. of times set: {loserSet}</p>
              </div>
            </div>
          </div>
          

        </div>
      </div>
     
    </>
  )
}

export default page
