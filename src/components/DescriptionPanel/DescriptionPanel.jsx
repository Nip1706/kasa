import React, { useState } from 'react'
import './DescriptionPanel.css'

function DescriptionPanel(props) {

const [isContentVisible, setContentVisible] = useState(false)

const showContent = () => {
    setContentVisible(!isContentVisible)
}
    return (    
    <div className='description__panel'>
    <p className='description__header'>
        <span>{props.title}</span>
        <i className="fa-solid fa-chevron-up" onClick={showContent}></i>
        </p>
    {isContentVisible && <p className='description__content'>{props.content}</p>}
</div>
)

}

export default DescriptionPanel;