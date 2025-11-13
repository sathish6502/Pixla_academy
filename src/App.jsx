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


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Global />
      <College />
      <Location />
      <Journey />
      <Blogs />
      <Join />
      <Footer />
    
    </div>
  )
}

export default App
