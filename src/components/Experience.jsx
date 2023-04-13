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
    const techs = [
        {
            id: 1,
            src: solidity,
            title: "Solidity",
            style: "shadow-zinc-500"
        },
        {
            id: 2,
            src: etherjs,
            title: "Etherjs",
            style: "shadow-blue-800"
        },
        {
            id: 3,
            src: hardhat,
            title: "Hardhat",
            style: "shadow-yellow-300"
        },
        {
            id: 4,
            src: github,
            title: "Github",
            style: "shadow-slate-400"
        },
        {
            id: 5,
            src: react,
            title: "React",
            style: "shadow-cyan-400"
        },
        {
            id: 6,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-green-400"
        },
        {
            id: 7,
            src: javascript,
            title: "Javascript",
            style: "shadow-amber-400"
        },
    ]
    return (
        <div name="experience" className='bg-gradient-to-b from-cyan-300 to-fuchsia-500 w-full h-full'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8 px-12 sm:px-0 justify-items-center items-center '>

                    {
                        techs.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-lg hover:scale-110 duration-500 p-2 rounded-lg w-30 h-30 ${style}`}>
                                <img src={src} alt='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience