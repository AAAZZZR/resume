import React from 'react'

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: "Shopping List",
            description: "JS practice - A dynamic shopping list application",
            link: "https://main--rudyshoplist.netlify.app/" // Replace with your actual URL
        }
    ]

  return (
    <div name="project" className='bg-gradient-to-b from-lime-400 to-cyan-300 w-full min-h-screen text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {projects.map(({ id, title, description, link }) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-2xl font-bold text-center mt-4 text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-center mt-2 px-4'>{description}</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <a 
                                href={link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md text-center'
                            >
                                Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio