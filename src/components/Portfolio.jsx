import React from 'react'

const Portfolio = () => {
  return (
    <div name="portfolio" className='bg-gradient-to-b from-lime-400 to-cyan-300 w-full md:h-screen text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-red-400'>Portfolio</p>
                <p className='py-6'>Check out my work right here</p>
            </div>
            <div>
                <img/>
                <div>
                    <button>Demo</button>
                    <button>Code</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio