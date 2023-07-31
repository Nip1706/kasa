import React from 'react'
import './ApartmentHeader.css'
import ApartmentRating from '../../ApartmentStars/ApartmentStars'

function ApartmentHeader(props) {

  const flat = props.flat 
  const name = flat.host.name 
  const [firstName, lastName] = name.split(" ")
  return (
    <div>
        <div className='apartment__header'>
            <div className='apartment__title'>
            <h1>{flat.title}</h1>
            <h2>{flat.location}</h2>
                <div className='apartment__tags'>
                {flat.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}  
            </div>
        </div>
        <div className="apartment__owner">
            <div className='apartment__owner__details'>
            <h3>
                <span>{firstName}</span> 
                <span>{lastName}</span>
            </h3>
            <div className="apartment__owner__badge">
                <img src={flat.host.picture} alt="" />
            </div>
            </div>
            <div>
            <ApartmentRating rating={props.flat.rating} />            
            </div>
        </div>
        </div>

    </div>
  )
}

export default ApartmentHeader