import React from 'react'

function TextSection() {
  return (
<section className="py-8 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto">
		<div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-4xl">
			<h2 className="text-2xl font-bold text-gray-800 leading-none sm:text-4xl">Learning focused on your goals</h2>
				</div>
		<div className="grid grid-cols-5 p-4 md:p-8">
			<div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
				<button className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Mucius</button>
				<button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-violet-400 dark:text-gray-50">Fabellas</button>
				<button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Aperiam</button>
				<button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Nonumy</button>
				<button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Propriae</button>
			</div>
			<div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
				<div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
					<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
					</svg>
					<h5 className="text-xl font-bold">Hands-on training</h5>
					<p>Upskill effectively with AI-powered coding exercises, practice tests, skills assessments, labs, and workspaces.</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
					<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
					</svg>
					<h5 className="text-xl font-bold">Certification prep</h5>
					<p>Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way..</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
					<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
					</svg>
          <h5 className="text-xl font-bold">Customizable content</h5>
					<p>Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
					<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
					</svg>
          <h5 className="text-xl font-bold">Insights and analytics

</h5>
					<p>Create tailored learning paths for team and organization goals and even host your own content and resources. </p>
				</div>
			</div>
		</div>
	</div>
  <h1 className='font-bold text-[2.3rem] text-gray-800 pl-[2rem] pt-[3rem]'>Accelerate growth — for you or your organizatione</h1>
    <p className='font-semibold text-[1.3rem] text-gray-500 pl-[2rem] '>Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.</p>
  
</section>
  )
}

export default TextSection