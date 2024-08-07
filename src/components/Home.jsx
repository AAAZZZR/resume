import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import Rudy from "../assets/Rudy.png"
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b 
    from-red-200 to bg-yellow-500'>

      <div className='max-w-screen-lg mx-auto flex
      flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 
            className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Data Analysist/Scientist
          </h2>

          <p className='text-black py-5 max-w-md'>
            Currently, I'm studying in UQ for master of Data Science. 
            Previously I had 2 years experience in crypto industry including Analysist and operator
            Clicking the button below to download my resume
          </p>
          <Link to="project" smooth duration={500} className=' group text-white w-fit px-6 my-2 flex items-center cursor-pointer rounded-r-md bg-gradient-to-r from-cyan-800 to-purple-400 '>
            Portfolio
            <span className='group-hover:rotate-90 duration-300'>
              <AiOutlineArrowRight size={25} 
              className="ml-1"/>
            </span>
          </Link>
        </div>

          <div>
            <img
              src={Rudy}
              alt="my pic"
              className='rounded-2xl mx-auto w-2/3 md:w-full'
            />
          </div>
        
      </div>
    </div>
  )
}

export default Home