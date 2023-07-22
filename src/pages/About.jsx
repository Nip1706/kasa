import React from 'react'
import ImageBanner from '../components/ImageBanner/ImageBanner.jsx'
import DescriptionPanel from '../components/DescriptionPanel/DescriptionPanel.jsx'
import './About.css'

function About() {
  return (
    <>
    <ImageBanner />
        <div className='about__container'>
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
        </div>
    </>
  )
}

export default About