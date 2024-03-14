import React from 'react'

function Blog2Section() {
  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
			<span className="block mb-2 font-bold text-start text-gray-900 text-[2rem] dark:text-violet-400">Booz Allen Hamilton</span>
			<h1 className="text-[2rem] text-start font-bold text-gray-700 dark:text-gray-50">Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling</h1><br /><br />
			<form novalidate="" action="" className="self-stretch space-y-3">
				<div>
					<label for="name" className="text-sm sr-only">Your name</label><br />
					<input id="name" type="text" placeholder="Your name" className="w-full border-2 border-gray-800 rounded-md focus:ring focus:dark:ring-violet-400 dark:border-gray-700" fdprocessedid="z8augf" />
				</div>
				<div>
					<label for="lastname" className="text-sm sr-only">Email address</label><br />
					<input id="lastname" type="text" placeholder="Email address" className="w-full border-2 border-gray-800 rounded-md focus:ring focus:dark:ring-violet-400 dark:border-gray-700" fdprocessedid="rxyhf" />
				</div><br />
				<button type="button" className="w-[14rem] py-2 font-semibold text-gray-100 bg-gray-900  border-2 border-gray-800 rounded dark:bg-violet-400 dark:text-gray-100" fdprocessedid="cdk79n">Read for story</button>
			</form>
		</div>
		<img src="https://s.udemycdn.com/lohp/ub-case-studies/v1/boozallenhamilton-1x.png" alt="" className="object-cover w-[44rem] rounded-md xl:col-span-3 dark:bg-gray-500" />
	</div>
</section>
  )
}

export default Blog2Section