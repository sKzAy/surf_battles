import React from 'react'
import Link from 'next/link'


const Landing = () => {
  return (
    <>
        <Link href="/"><h1 data-aos="fade-down" className='text-orange-700 text-7xl text-center pt-5 font-bold'>Surf_Battles</h1></Link>
        <div data-aos="fade-up" className='text-white text-5xl text-center mt-10 font-bold'>
            Choose:
        </div>
        <div data-aos="fade-up" className='flex flex-col text-center gap-2 mt-10'>
            <Link href="/create"><button className='text-orange-700 text-3xl font-semibold rounded-xl p-2 text-center hover:transition-transform transition-transform hover:border-orange-700 hover:border hover:scale-105'  >Create Lobby</button></Link>
            <Link href="/join"><button className='text-orange-700 text-3xl font-semibold rounded-xl p-2 text-center hover:transition-transform transition-transform hover:border-orange-700 hover:border hover:scale-105'>Join Lobby</button></Link>
        </div> 
    </>
  )
}

export default Landing
