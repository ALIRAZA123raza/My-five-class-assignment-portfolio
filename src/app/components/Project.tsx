import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id='projects'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      
    </div>
    <div className="flex flex-wrap  -m-5 -mt-[5rem]">
        {/* projects */}
        <div className="lg:w-1/3 sm:w-1/2 p-3 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/projects/project-02.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              TODO LIST PROJRCT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              TODO LIST
            </h1>
            <p className="leading-relaxed">
              This is a cli based project
            </p>
            <Link href={"https://www.npmjs.com/package/a2ra4-todo-list"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              Veiw Projects..
            </p>
            </Link>
          </div>
        </div>
      </div>
      {/* projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-3 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/projects/project-01.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              NUMBER GUESSING GAME PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              NUMBER GUESSING GAME
            </h1>
            <p className="leading-relaxed">
              This is a cli based project
            </p>
            <Link href={"https://www.npmjs.com/package/a2ra3-cli-number-guessing-game"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              Veiw Projects..
            </p>
            </Link>
          </div>
        </div>
      </div>
      {/* projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-3 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/projects/project-03.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              CURRENCY CONVERTOR PROJECTS
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              CURRENCY CONVERTOR APP
            </h1>
            <p className="leading-relaxed">
              This is a cli based project
            </p>
            <Link href={"https://www.npmjs.com/package/a2ra5_currency-converter"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              Veiw Projects..
            </p>
            </Link>
          </div>
        </div>
      </div>
      {/* projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/projects/project-04.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              SIMPLE CALCULATOR PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              SIMPLE CALCULATOR APP
            </h1>
            <p className="leading-relaxed">
              This is a cli based project
            </p>
            <Link href={"https://www.npmjs.com/package/a2ra4-simple-calculater"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              Veiw Projects..
            </p>
            </Link>
          </div>
        </div>
      </div>
       {/* projects */}
       <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/projects/project-05.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              ATM MACHINE PROJECT 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ATM MACHINE  APP
            </h1>
            <p className="leading-relaxed">
              This is a cli based project
            </p>
            <Link href={"https://www.npmjs.com/package/a3ra5_atm-machine"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              Veiw Projects..
            </p>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
