import React from 'react'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Hero from "./Components/Explore/Hero.jsx"
import Blogs from "./Components/Explore/Blogs.jsx"
import Join from "./Components/Explore/Join.jsx"
import Global from "./Components/Explore/Global.jsx"
import College from "./Components/Explore/College.jsx"
import Location from "./Components/Explore/Location.jsx"
import Journey from "./Components/Explore/Journey.jsx"
import Journeypix from "./Components/Explore/Journeypix.jsx"
import Contact from "./Components/Explore/Contact.jsx"
import Testimonial from "./Components/Explore/Testimonial.jsx"
import Pro from "./Components/Explore/Pro.jsx"


const App = () => {
  return (
    <div>
      <Header />
      <Hero /> 
      <Global />
      <College />
      <Location />
      <Journeypix />
      <Pro />
      <Journey />
      <Testimonial />
      <Contact />
      <Blogs /> 
      <Join />
      <Footer />
    
    </div>
  )
}

export default App
