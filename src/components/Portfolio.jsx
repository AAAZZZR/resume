import React from 'react'

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: "Stock dashboard List",
             description: [
                "I use Streamlit and some free stock API to build a stock dashboard.",
                "1. You can see the latest news of the stock.",
                "2. You can see the different financial reports chart.",
                "3. Other basic information and insider activities."
                ],
            link: "https://traderjoe.streamlit.app/" // Replace with your actual URL
        },
        {
            id: 2,
            title: "Human anatomy interactive dashboard",
            description: ["A course project cooperate with physio coach to build an interactive dashboard for coach recording and tracking the progress of their clients.",
                "1. Created a human anatomy visualization through SVG-based rendering.",
                "2. Integrate with Fhirbase to store the patient's data.",
                "3. Integrate with openAI if further analysis is needed."
            ],
            link: "https://github.com/comp3820/2024-smart-health" // Replace with your actual URL
        },
                {
            id: 3,
            title: "Capstone project - electricity price prediction in Queensland",
            description: ["1.  Collected electricity price data from AEMO using requests and BeautifulSoup.",
                "2. Applied Gradient Boosting Trees to model and predict electricity prices."
            ],
            link: "https://github.com/AAAZZZR/Capstone_UQ" // Replace with your actual URL
        },
        {
            id: 4,
            title: "Cloud Computing project - Dating app",
            description: ["1.Packaging the entire project by Docker allowing for rapid deployment of multiple instances in a distributed manner.",
                "2. The backend is primarily built with Flask, with PostgreSQL for customer and activity management data, and MongoDB for chatroom data"
            ],
            link: "https://github.com/AAAZZZR/Dating_app_project" // Replace with your actual URL
        },
                {
            id: 5,
            title: "Local RAG assistance",
            description: ["1.Building local RAG by using lanchain to extract PDF dat and chorma as vector database.",
                "2. Integrate with ollama and opensource LLM.",
            ],
            link: "https://github.com/AAAZZZR/RAG_assistance_v1/tree/main" // Replace with your actual URL
        },
    ]

  return (
    <div name="project" className='bg-gradient-to-b from-lime-400 to-cyan-300 w-full min-h-screen text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Some projects completed </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {projects.map(({ id, title, description, link }) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-2xl font-bold text-center mt-4 text-gray-700'>{title}</h3>
                            <div className='text-gray-600 text-center mt-2 px-4 space-y-1'>
                                {description.map((line, index) => (
                                <p key={index}>{line}</p>
                                ))}
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <a 
                                href={link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md text-center'
                            >
                                Link
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