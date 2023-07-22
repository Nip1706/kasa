import React from 'react'
import './DescriptionPanel.css'

function DescriptionPanel() {
    return (    
    <div className='description__panel'>
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

export default DescriptionPanel;