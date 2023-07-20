import React from 'react'
import './ApartmentGrid.css'
import Apartment from '../Apartment/Apartment.jsx'

function ApartmentGrid() {
  return (
    <div className='grid'>
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
        </div>
  )
}

export default ApartmentGrid