import React from 'react'
import ImageBanner from '../components/ImageBanner/ImageBanner.jsx'
import DescriptionPanel from '../components/DescriptionPanel/DescriptionPanel.jsx'
import './About.css'

function About() {
  return (
    <>
    <ImageBanner />
        <div className='about__container'>
        <DescriptionPanel title='Fiabilité' content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan sit amet odio ac condimentum. Curabitur pulvinar neque risus, ac accumsan nisl ullamcorper ut. Integer condimentum, risus a molestie lobortis, erat leo euismod purus, at dictum nunc tortor eu quam. Pellentesque justo metus, porta vel blandit in, finibus id est."/>
        <DescriptionPanel title='Respect' content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan sit amet odio ac condimentum. Curabitur pulvinar neque risus, ac accumsan nisl ullamcorper ut. Integer condimentum, risus a molestie lobortis, erat leo euismod purus, at dictum nunc tortor eu quam. Pellentesque justo metus, porta vel blandit in, finibus id est."/>
        <DescriptionPanel title='Service' content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan sit amet odio ac condimentum. Curabitur pulvinar neque risus, ac accumsan nisl ullamcorper ut. Integer condimentum, risus a molestie lobortis, erat leo euismod purus, at dictum nunc tortor eu quam. Pellentesque justo metus, porta vel blandit in, finibus id est."/>
        <DescriptionPanel title='Sécurité' content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan sit amet odio ac condimentum. Curabitur pulvinar neque risus, ac accumsan nisl ullamcorper ut. Integer condimentum, risus a molestie lobortis, erat leo euismod purus, at dictum nunc tortor eu quam. Pellentesque justo metus, porta vel blandit in, finibus id est."/>
        </div>
    </>
  )
}

export default About