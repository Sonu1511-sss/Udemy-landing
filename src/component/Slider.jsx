import React from 'react'

function Slider() {
  return (
    <div className="carousel w-full mt-[1rem]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img-b.udemycdn.com/notices/web_carousel_slide/image/a916ff92-af3c-4f26-95dd-2e36cf938903.jpg" className="w-full" />

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <div className='h-[8rem] w-[29rem] border-2 ml-[5rem] mb-[4rem] shadow-lg shadow-gray-500/50 '>
        <h1 className='font-bold text-[2rem] text-gray-700 text-center '>Learning comes to you</h1>
        <p className='font-semibold text-gray-800 text-center'>Attain a world of knowledge breadcrumb br — at breadcrumb  home or on the go. Courses as low as ₹549 through March 14.</p>
      </div>
    </div>
    <h1 className='font-bold text-[2.3rem] text-gray-800 pl-[2rem] pt-[3rem]'>All the skills you need in one place</h1>
    <p className='font-semibold text-[1.3rem] text-gray-500 pl-[2rem] '>From critical workplace skills to technical topics, our catalog supports well-rounded professional development.</p>
  </div> 
     </div>
     
  )
}

export default Slider