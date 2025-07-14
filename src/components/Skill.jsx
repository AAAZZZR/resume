import React from 'react'

//import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
// import github from '../assets/github.png'

import react from '../assets/react.png'
import aws from '../assets/AWS.png'
import docker from '../assets/docker.png'
import Databrick from '../assets/Databricks.png'
import postgressql from '../assets/postgres.png'
import pytorch from "../assets/pytorch.png"
import sklearn from "../assets/sklearn.png"

const Skills = () => {
    const techs = [
        {
            id: 1,
            src: aws,
            title: "AWS",
            style: "shadow-blue-500"
        },
        {
            id: 2,
            src: docker,
            title: "docker",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: Databrick,
            title: "Databrick",
            style: "shadow-blue-500"
        },
        {
            id: 4,
            src: postgressql,
            title: "SQL",
            style: "shadow-blue-500"
        },
        {
            id: 7,
            src: javascript,
            title: "Javascript",
            style: "shadow-amber-400"
        },

        {
            id: 9,
            src: sklearn,
            title: "Sklearn",
            style: "shadow-blue-500"
        },
        {
            id: 8,
            src: pytorch,
            title: "Pytorch",
            style: "shadow-red-500"
        },

        {
            id: 5,
            src: react,
            title: "React",
            style: "shadow-cyan-400"
        },

    ]
    return (
        <div name="skills" className='bg-gradient-to-b from-cyan-300 to-fuchsia-500 w-full h-full'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
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

export default Skills