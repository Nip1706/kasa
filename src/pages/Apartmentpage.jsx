import React from 'react'
import DescriptionPanel from '../components/DescriptionPanel/DescriptionPanel.jsx'
import './Apartmentpage.css'
import ImageBanner from '../components/ImageBanner/ImageBanner.jsx'
import ApartmentHeader from '../components/ApartmentHeader/ApartmentHeader.jsx'





function Apartmentpage() {
  return (
    <div className='apartment-page'>
        <ImageBanner />
        <ApartmentHeader />
        <div className='apartment__description__area'>
        <DescriptionPanel />
        <DescriptionPanel />
        </div>
    </div>
  )
}

export default Apartmentpage