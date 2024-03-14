import React from 'react'

function Rounded() {
  return (
    <section>
      
    <div className="flex flex-col md:flex-row md:mx-1 mt-10">
       <a className="my-2 ml-0 text-xl leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200  dark:hover:text-blue-400  md:mx-4 md:my-0  hover:border-b-2 border-gray-800 " href="#">Web development</a>

       <a className="my-2 text-xl leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200  dark:hover:text-blue-400  md:mx-4 md:my-0 hover:border-b-2 border-gray-800" href="#">IT Certification</a>

       <a className="my-2 text-xl leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200  dark:hover:text-blue-400  md:mx-4 md:my-0  hover:border-b-2 border-gray-800" href="#">Leadership</a>

       <a className="my-2 text-xl leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200  dark:hover:text-blue-400  md:mx-4 md:my-0  hover:border-b-2 border-gray-800" href="#">Data Science </a>

       <a className="my-2 text-xl leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200  dark:hover:text-blue-400  md:mx-4 md:my-0  hover:border-b-2 border-gray-800" href="#">Communication</a>

       <a className="my-2 text-xl leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200  dark:hover:text-blue-400  md:mx-4 md:my-0 hover:border-b-2 border-gray-800" href="#">business Analysis </a>

    </div>
    {/* this is rounded btn section ========== */}
    <div className=" w-auto flex gap-4 ">
    <button type="button" className="px-8 py-4 font-semibold rounded-full border-2 dark:bg-gray-700 dark:text-gray-800 mt-5 bg-gray-700 hover:bg-gray-400">
           <a className=" text-[1rem] text-start text-gray-100 transition-colors duration-300 transform dark:text-gray-200  dark:hover:text-blue-400  md:mx-4 md:my-0  " href="#">Web Development </a>
     </button>

     <button type="button" className="px-8  font-semibold rounded-full border-2 dark:bg-gray-100 dark:text-gray-800 mt-5 bg-gray-100 hover:bg-gray-400">
           <a className="my-2 text-[1rem]  text-center leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200   md:mx-4 md:my-0" href="#">Javascript</a>
     </button>

     <button type="button" className="px-8  font-semibold rounded-full border-2 dark:bg-gray-100 dark:text-gray-800 mt-5 bg-gray-100 hover:bg-gray-400">
           <a className="my-2 text-[1rem] leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600   md:mx-4 md:my-0" href="#"> React js </a>
     </button>

     <button type="button" className="px-8 font-semibold rounded-full border-2 dark:bg-gray-100 dark:text-gray-800 mt-5 bg-gray-100 hover:bg-gray-400">
           <a className="my-2 text-[1rem] leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200   md:mx-4 md:my-0" href="#"> Angular  </a>
     </button>

     <button type="button" className="px-8  font-semibold rounded-full border-2 dark:bg-gray-100 dark:text-gray-800 mt-5 bg-gray-100 hover:bg-gray-400">
           <a className="my-2 text-[1rem] leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200    md:mx-4 md:my-0" href="#"> Java  </a>
     </button>

     <button type="button" className="px-8  font-semibold rounded-full border-2 dark:bg-gray-100 dark:text-gray-800 mt-5 bg-gray-100 hover:bg-gray-400">
           <a className="my-2 text-[1rem] leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200   md:mx-4 md:my-0" href="#"> Android Development</a>
     </button>

     <button type="button" className="px-8  font-semibold rounded-full border-2 dark:bg-gray-100 dark:text-gray-800 mt-5 hover:bg-gray-400">
           <a className="my-2 text-[1rem] leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200    md:mx-4 md:my-0" href="#"> Ios Development</a>
     </button>
    </div>
</section>
  )
}

export default Rounded