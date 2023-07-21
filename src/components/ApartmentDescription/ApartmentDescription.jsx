import React from 'react'
import './ApartmentDescription.css'

function ApartmentDescription() {
    return (    
    <div className='apartment__description'>
    <p className='description__header'>
        <span>Description</span>
        <i className="fa-solid fa-chevron-up"></i>
        </p>
    <p className='description__content'>Profitez du charme de la vie parisienne dans un 
       magnifique appartement. A 3 minutes à pied du Canal 
       Saint Martin, vous serez proche des transports, 
       mais également de nombreux commerces. L'appartement 
       est tout équipé, et possède également un parking 
       pour ceux qui souhaitent se déplacer en voiture.
    </p>
</div>
)

}

export default ApartmentDescription;