import React, { useEffect, useState } from 'react'
import DescriptionPanel from '../components/DescriptionPanel/DescriptionPanel.jsx'
import './Apartmentpage.css'
import ImageBanner from '../components/ImageBanner/ImageBanner.jsx'
import ApartmentHeader from '../components/ApartmentHeader/ApartmentHeader.jsx'
import {useLocation} from 'react-router-dom'



function Apartmentpage() {
  const location = useLocation()
  console.log('location:', location)
  const [flat, setFlat] = useState(null)
  useEffect(fetchApartmentData,);

function fetchApartmentData() {
  fetch('db.json')
    .then((res) => res.json())
    .then((flats) => {
      const flat = flats.find((flat) => flat.id === location.state.apartmentId)
    setFlat(flat)
    })
    .catch(console.error)
}

if (flat == null) return <div>...Loading</div>


  return (
    <div className='apartment-page'>
        <ImageBanner pictures={flat.pictures}/>
        <ApartmentHeader flat={flat} />
        <div className='apartment__description__area'>
        <DescriptionPanel title='Description' content={flat.description}/>
        <DescriptionPanel 
          title='Equipements' 
          content={flat.equipments.map((equipment, i) => (
          <li key={i}>{equipment}</li>
        ))}
        />
        </div>
    </div>
  )
}

export default Apartmentpage