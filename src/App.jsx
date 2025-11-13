import React from 'react'
import Header from "./Components/Header/Header.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Hero from "./Components/Explore/Hero.jsx"
import Join from "./Components/Explore/Join.jsx"
import Blogs from "./Components/Explore/Blogs.jsx"
import Contact from "./Components/Explore/Contact.jsx"

const App = () => {
  return (
    <div>
      <Header />
      <Hero /> 
      <Contact />
      <Blogs /> 
      <Join />
      <Footer />
    </div>
  )
}

export default App
