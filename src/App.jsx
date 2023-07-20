import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import '../src/App.css'
import Banner from './components/Banner/Banner.jsx'
import ApartmentGrid from './components/ApartmentGrid/ApartmentGrid.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
  return (
    <div>
      <Navbar />
      <Main>
      <Banner />
      <ApartmentGrid />
      </Main>
      <Footer />
    </div>
  )
}

export default App