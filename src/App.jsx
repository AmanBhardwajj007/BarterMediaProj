import React, { useEffect } from 'react'
import './index.css'
import Nav from './components/Nav'
import Homepage from './pages/Homepage'
import Services from './pages/Services'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BarterMedia from './pages/BarterMedia'
import Gallery from './pages/Gallery'
import BarterProducts from './pages/BarterProducts'
import Slider from './pages/Slider'
import Media from './pages/Media'
import SectionSlider from './pages/SectionSlider'
import ScrollToTop from './utils/ScrollToTop'
import Footer from './pages/Footer'
import CursorFollower from './utils/CursorFollower'

function App() {

  // useEffect(() => {
  //   Shery.mouseFollower();
  // }, [])

  return (
    <>
      <CursorFollower/>
      <ScrollToTop/>
      <Nav />

        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/slider" element={<Slider />} /> */}
          <Route path="/sectionslider" element={<SectionSlider />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/barterMedia" element={<BarterMedia />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/barterProducts" element={<BarterProducts />} />
          <Route path="/media" element={<Media />} />
        </Routes>

      <Footer/>
    </>
  )
}

export default App
