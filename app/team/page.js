import React from 'react'
import Timer from '@/components/Timer'
import Link from 'next/link'

const page = () => {
  return (
    <>
          
          <Link href="/"><h1 data-aos="fade-down" className='text-orange-700 text-7xl text-center pt-5 font-bold'>Surf_Battles</h1></Link> 
        <div data-aos="fade-up" className="page ">
        <div className='text-white text-5xl mt-10 text-center font-bold'>
          <p>Team Mode</p>
          <p className='text-3xl text-left pl-5'>Lobby ID:</p>
        </div>
        <div className="players flex text-center align-middle justify-evenly mt-5">
          <div className="p1">
            <div className="box w-fit h-fit p-10 bg-slate-900 border-none rounded-xl">
              <h1 className='text-orange-700 font-bold text-4xl text-center'>Team 1</h1>
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
            </div>
          </div>
          <div>
            <Timer/>
          </div>
          <div className="p2">
            <div className="box w-fit h-fit p-10 bg-slate-900 border-none rounded-xl">
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
            </div>
          </div>
          

        </div>
      </div>
    </>
  )
}

export default page
