import React from 'react'
import './ApartmentHeader.css'

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
            <div className='apartment__owner__star'>
            {[1, 2, 3, 4, 5].map((number) => (
            <i key={number} className={props.flat.rating >= number ? 'fa-solid fa-star on' : 'fa-solid fa-star'}></i>
            ))}
            </div>
        </div>
        </div>

    </div>
  )
}

export default ApartmentHeader