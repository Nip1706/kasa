import React from 'react'
import ApartmentDescription from '../components/ApartmentDescription/ApartmentDescription.jsx'
import './Apartmentpage.css'
import ApartmentBanner from '../components/ApartmentBanner.jsx'
import ApartmentHeader from '../components/ApartmentHeader.jsx'





function Apartmentpage() {
  return (
    <div className='apartment-page'>
        <ApartmentBanner />
        <ApartmentHeader />
        <div className='apartment__description__area'>
        <ApartmentDescription />
        <ApartmentDescription />
        </div>
    </div>
  )
}

export default Apartmentpage