import React from 'react'

function PersonSection() {
  return (
    <section className="flex items-center bg-gray-100 lg:h-full dark:bg-gray-800">
  <div className=" mx-auto max-w-7xl">
    <div className="flex ">
      <div className="grid grid-cols-1 gap-4  lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a className="relative mb-20 text-center bg-white rounded shadow dark:bg-gray-700" href="#">
          <div className="z-20 p-8 -mt-24">
            <div className="inline-block w-32 h-32 mb-3 overflow-hidden text-xs text-white bg-blue-500 rounded-full">
              <img className="object-cover w-full h-full transition-all hover:scale-110" src="https://s.udemycdn.com/home/ub-case-studies/Alvin_Lim.jpeg" alt />
            </div>
            <p className="mb-4 text-base leading-7 text-gray-400">
            Udemy was rated the most popular online course or certification program for learning how to code according to </p>
            <h2 className="text-lg font-bold leading-9 text-[#5d50c6] dark:text-white">
           Web Developer
            </h2>
            <span className="block text-[1rem] font-semibold text-[#fda638] uppercase dark:">
              Class time:<span className="text-gray-900"> 9:00am - 10am</span> 
            </span>
          </div>
        </a>
        <a className="relative mb-20 text-center bg-white rounded shadow dark:bg-gray-700" href="#">
          <div className="z-20 p-8 -mt-24">
            <div className="inline-block w-32 h-32 mb-3 overflow-hidden text-xs text-white bg-blue-500 rounded-full">
              <img className="object-cover w-full h-full transition-all hover:scale-110" src="https://s.udemycdn.com/home/ub-case-studies/William_A_Wachlin.jpeg" alt />
            </div>
            <p className="mb-4 text-base leading-7 text-gray-400">
            Udemy was truly a game-changer and a great guide for me as we brought Dimensional changer and a great guide  to life.   </p>
            <h2 className="text-lg font-bold leading-9 text-[#5d50c6] dark:text-white">
             IOS Developer
            </h2>
            <span className="block text-[1rem] font-semibold text-[#fda638] uppercase dark:">
              Class time:<span className="text-gray-900"> 11:00am - 12am</span> 
            </span>
          </div>
        </a>
        <a className="relative mb-20 text-center bg-white rounded shadow dark:bg-gray-700" href="#">
          <div className="z-20 p-8 -mt-24">
            <div className="inline-block w-32 h-32 mb-3 overflow-hidden text-xs text-white bg-blue-500 rounded-full">
              <img className="object-cover w-full h-full transition-all hover:scale-110" src="	https://s.udemycdn.com/home/ub-case-studies/Ian_Stevens.png" alt />
            </div>
            <p className="mb-4 text-base leading-7 text-gray-400">
            Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.  </p>
            <h2 className="text-lg font-bold leading-9 text-[#5d50c6] dark:text-white">
              AWS Cource
            </h2>
            <span className="block text-[1rem] font-semibold text-[#fda638] uppercase dark:">
              Class time:<span className="text-gray-900"> 12:00am - 2pm</span> 
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default PersonSection