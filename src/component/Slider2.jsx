import React from 'react'

function Slider2() {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-[3rem] font-bold text-gray-800 leading-none sm:text-[3rem">Top trends for the <br />
				<span className="dark:text-violet-400">future of work</span>
			</h1>
			<p className="mt-6 mb-8 text-lg text-gray-700 font-semibold sm:mb-12">GenAI and leadership are at the core of today's skills-based economy. Get the 2024 Global Learning & Skills Trends Report to learn more.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border-2 border-gray-800 rounded dark:bg-violet-400 dark:text-gray-900 hover:bg-gray-400">Get the report</a>
	</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://udemy-prod-static-assets.s3.us-east-1.amazonaws.com/lohp/ub-reports/v1/2024-ub-reports.png" alt="" className="object-contain h-[34rem] sm:h-80 lg:h-[34rem] xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
  )
}

export default Slider2