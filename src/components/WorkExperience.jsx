import React from 'react'

const WorkExperience = () => {
    const Works = [
        {
            id:1,
            title: "Moderator @ BNBPay",
            description:`
        Connecting to KOLs 
        Managing telegram community 
        Writing white paper`

        },
        {
            id:2,
            title: "Analyst @ Tokeninsight",
            description:`
        Writing articles about  market hot spot
        Maintaining crypto database
        Discovering new projects and doing research`
        },
        {
            id:3,
            title: "Operator & BD @ Quoll Finance",
            description:`
        Writing white paper
        Organizing the community events like AMAs
        Networking potencial patners & investors`
        },

        ]

    return (
        <div name="about" className='w-full h-full bg-gradient-to-b from-yellow-500 to-lime-400 text-white'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-10">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Work experience</p>
                </div>
                <ul>
                    {Works.map(({id,title,description}) => (
                        <li key={id} className='text-xl mt-20'>
                            {title}
                            <pre>
                                {description}
                            </pre>
                            
                        </li>
                    ))}
                </ul>



                <br />
                <p>

                </p>
            </div>
        </div>
    )
}

export default WorkExperience
