import React from 'react'
import './ApartmentCard.css'
import { Link } from 'react-router-dom'

function Apartment() {
  return (
    <Link to= "/flat">
    <div className='apartment'>
        <div className='apartment__subtitle'>Magnifique appartement proche Canal Saint Martin</div>
    </div>
    </Link>
  )
}

export default Apartment