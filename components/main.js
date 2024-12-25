import React from 'react'
import "@/app/globals.css"
import Link from 'next/link'

const Main = () => {
 

  return (
    <>
          
        <h1 className=' text-9xl text-center pt-5 text-orange-700 font-bold'>Surf_Battles</h1>
        <div className='text-white text-5xl text-center mt-10 font-bold'>
            Choose:
        </div>
        <div className='flex flex-col text-center gap-2 mt-10'>
            <Link href="/create"><button className='text-orange-700 text-3xl font-semibold rounded-xl p-2 text-center hover:transition-transform transition-transform hover:border-orange-700 hover:border hover:scale-105'  >Create Lobby</button></Link>
            <Link href="/join"><button className='text-orange-700 text-3xl font-semibold rounded-xl p-2 text-center hover:transition-transform transition-transform hover:border-orange-700 hover:border hover:scale-105'>Join Lobby</button></Link>
        </div> 
   
    </>
  )
}

export default Main
