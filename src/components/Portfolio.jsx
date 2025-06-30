import React from 'react'
import arrayDestruct from '../assets/portfolio/cg.jpeg'
import navbar from '../assets/portfolio/c.jpeg'
import reactParallax from '../assets/portfolio/port.jpeg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
            codeLink:'https://github.com/prasanna-neelisetty/captchagenerator'
           
        },
        {
            id: 2,
            src: navbar,
            codeLink:'https://github.com/prasanna-neelisetty/calculator'
        },
        {
            id: 3,
            src: reactParallax,
            codeLink:'https://github.com/polisettypranavi/react-portfolio'
        },
    ]
    return (
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, codeLink }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 w-72 h-48"
                />
                <div className="flex items-center justify-center">
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105"
                >
                  Code
                </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;