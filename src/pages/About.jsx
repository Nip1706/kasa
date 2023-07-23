import React from 'react'
import ImageBanner from '../components/ImageBanner/ImageBanner.jsx'
import DescriptionPanel from '../components/DescriptionPanel/DescriptionPanel.jsx'
import './About.css'

function About() {
  return (
    <>
    <ImageBanner />
        <div className='about__container'>
        <DescriptionPanel title='Fiabilité' content="C'est très important"/>
        <DescriptionPanel title='Respect' content="C'est très important"/>
        <DescriptionPanel title='Service' content="C'est très important"/>
        <DescriptionPanel title='Sécurité' content="C'est très important"/>
        </div>
    </>
  )
}

export default About