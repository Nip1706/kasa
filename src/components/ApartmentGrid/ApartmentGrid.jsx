import React, { useEffect, useState } from 'react'
import './ApartmentGrid.css'
import ApartmentCard from '../ApartmentCard/ApartmentCard.jsx'



function ApartmentGrid() {

  const [apartments, setApartments] = useState([]);


  useEffect(fetchApartments ,[])

  function fetchApartments() {
    fetch('db.json')
    .then((res) => res.json())
    .then((res) => setApartments(res))
    .catch(console.error)
  }

  return (
    <div className='grid'>
      {apartments.map((apartment) => (
        <ApartmentCard title={apartment.title} imageUrl={apartment.cover} id={apartment.id}  />
      ))}
    </div>
  )
}

export default ApartmentGrid