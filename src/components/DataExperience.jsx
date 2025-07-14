import React from 'react'

const DataExperience = () => {
    const Works = [
        {
            id:1,
            title: "GNN on Video Classification",
            description:`
        This is a school project we use public video dataset 
        extract human skeleton data via YoLO and 
        use GNN to classify the video.`

        },
        {
            id:2,
            title: "Time series forecasting related projects",
            description:`
        First my capstone project is to predict the electricity price in Queensland.
        Second, I also attend kaggle competition held by a solar company and Jane street.
        Most of the time I use gradient boosting tree and lag feature to predict the price.
        Sometimes I also use LSTM or transformer.
        `
        },
        {
            id:3,
            title: "LLM related projects",
            description:`
        I build a simple local RAG by using lanchain, chromadb as vector database, ollama and oppensource model as LLM.
        Also I use LLM to do some web crawling.`
        },

        ]

    return (
        <div name="about" className='w-full h-full bg-gradient-to-b from-yellow-500 to-lime-400 text-white'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-10">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Data Science experience</p>
                    <p className="text-gray-700 mt-4 text-lg">
                        Here are some projects and experiences that demonstrate my ability in data analysis, 
                        machine learning, and building data-driven applications.
                    </p>
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
            </div>
        </div>
    )
}

export default DataExperience
