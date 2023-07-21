import React from 'react'
import '../pages/HomePage.css'
import Banner from '../Layout/Banner/Banner.jsx'
import ApartmentGrid from '../components/ApartmentGrid/ApartmentGrid.jsx'


function HomePage() {
  return (
    <div>
      <Banner />
      <ApartmentGrid />
    </div>
  )
}

export default HomePage