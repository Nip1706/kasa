import React from 'react'
import '../components/ApartmentHeader.css'

function ApartmentHeader() {
  return (
    <div>
                <div className='apartment__header'>
        <div className='apartment__title'>
            <h1>Magnifique appartement proche Canal Saint Martin</h1>
            <h2>Ile de France - Paris 10e</h2>
            <div className='apartment__tags'>
            <span>Cosy</span>
            <span>Canal</span>
            <span>Paris 10</span>  
            </div>
        </div>
        <div className="apartment__owner">
            <div className='apartment__owner__details'>
            <h3>
                <span>Alexandre</span> 
                <span>Dumas</span>
            </h3>
            <div className="apartment__owner__badge">
                <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg" alt="" />
            </div>
            </div>
            <div className='apartment__owner__star'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star grey"></i>
            </div>
        </div>
        </div>

    </div>
  )
}

export default ApartmentHeader