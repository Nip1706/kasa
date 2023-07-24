import React, { useState } from 'react'
import './ImageBanner.css'

function ImageBanner(props) {
  //const imageUrl = props.imageUrl ? props.imageUrl : "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
  const pictures = props.pictures

  const [currentPicture, setCurrentPicture] = useState(0)

  const getClassName = (i) => {
    if (i === currentPicture) return 'show'
    return ''
  }

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length)
  }

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1)
      return
    }
    setCurrentPicture((currentPicture - 1) % pictures.length)
  }

  const arePicturesAvailable = () => {
      return pictures && pictures.length > 0
    }
  

  const getCarrouselOrDefaultImage = () => {
    if (!arePicturesAvailable()) {
      return <img src='https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg' className='show' alt='carrousel'/>
    }
    return pictures.map((pictures, i) => (
      <img key={pictures} src={pictures} alt='carrousel' className={getClassName(i)}></img>
    ))  
  }


  return (
        <div className='image__banner'>
          <div className='image__container'>{getCarrouselOrDefaultImage()}</div>
          {arePicturesAvailable() && (
            <>
              <button className='btn btn-next' onClick={ moveToNext }>
                <i className='fas fa-chevron-right'></i>
              </button>
              <span className='slide__counter'>{currentPicture + 1} / {pictures.length}</span>
              <button className='btn btn-previous' onClick={ moveToPrevious }>
                <i className='fas fa-chevron-left'></i>
              </button>
            </>
          )}
        </div>
  )
}

export default ImageBanner