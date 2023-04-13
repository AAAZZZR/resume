import React from 'react'

import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import github from '../assets/github.png'
import hardhat from '../assets/hardhat.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import solidity from '../assets/solidity.png'
import etherjs from '../assets/etherjs.png'

const Experience = () => {
  return (
    <div name="experience" className='bg-gradient-to-b from-cyan-300 to-fuchsia-500 w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2'>
                <div>
                    <img src={css} alt=''/>
                    <p>CSS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience