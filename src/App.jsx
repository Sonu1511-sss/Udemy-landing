import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Slider from './component/Slider'
import Rounded from './component/Rounded'
import BlogSection from './component/BlogSection'
import SliderBlog from './component/SliderBlog'
import NewsSection from './component/NewsSection'
import TextSection from './component/TextSection'
import PricingSection from './component/PricingSection'
import PersonSection from './component/PersonSection'
import Slider2 from './component/Slider2'
import Blog2Section from './component/Blog2Section'
import Learner from './component/Learner'
import Footer from './component/Footer'
function App() {

  return (
    <>
	<Navbar/>
	<Slider/>
	<Rounded/>
	<SliderBlog/>
	<BlogSection/>
	<NewsSection/>
	<TextSection/>
	<PricingSection/>
	<PersonSection/>
	<Slider2/>
	<Learner/>
    <Blog2Section/>
	<Footer/>
	</>
  )
}

export default App
