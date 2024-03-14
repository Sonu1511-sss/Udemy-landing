import React from 'react'

function Navbar() {
  return (
    <nav x-data="{ isOpen: false }" className="relative bg-white shadow-lg shadow-gray-500/50  dark:bg-gray-800">
  <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
    <div className="flex items-center justify-between">
      <a href="#">
        <img className="w-auto h-[3rem] sm:h-7" src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg" alt />
      </a>
      <a className="my-2 text-gray-800 pl-[1.4rem] transition-colors duration-300 transform font-bold dark:text-gray-800 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Categeries</a>
  
       
      {/* Mobile menu button */}
      <div className="flex lg:hidden">
        <button  type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
          <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
          </svg>
          <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    <div>
    <input type="text" className="w-full py-2 pl-10 pr-[18rem] text-gray-900 bg-white border border-gray-800 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
    </div>
    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
    <div  className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
      <div className="flex flex-col md:flex-row md:mx-6">
      <a className="my-2 text-gray-800  text-[1rem] transition-colors duration-300 transform font-bold dark:text-gray-800  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">    Plans & pricing</a>
      <a className="my-2 text-gray-800 transition-colors duration-300 transform font-bold dark:text-gray-800 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Udemy & Business</a>
      <a className="my-2 text-gray-800 transition-colors duration-300 transform font-bold dark:text-gray-800 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">  Teach on Udemy</a>
      
      <a className="my-2 text-gray-800 border-2 border-gray-800  w-[3.9rem] h-[2.4rem] text-center transition-colors duration-300 transform font-bold dark:text-gray-800 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-100 border-1 md:mx-4 md:my-0" href="#"> Log in</a>
      <a className="my-2 text-gray-200 border-2 border-gray-800  w-[3.9rem] h-[2.4rem] text-center transition-colors bg-black  duration-300 transform font-bold dark:text-gray-800 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-100 border-1 md:mx-4 md:my-0" href="#"> Sign in</a>
  
      </div>
      <div className="flex justify-center md:block">
        <a className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full" />
        </a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar