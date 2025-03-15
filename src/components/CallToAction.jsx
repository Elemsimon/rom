import React from 'react'
import Button from './Button'
import videoIcon from '/assets/21.svg'
import bgImg from '/assets/bgImg.png'

const CallToAction = () => {
  return (
    <div>
      <img src={bgImg} alt="Background Image" style={{backgroundSize:'cover', position:'absolute'}}/>
      <div style={{position:'relative', zIndex:'1'}}>       
        <img src={videoIcon} alt="Video Icon" />
        <Button title="BUY NOW"/>      
      </div>
      
    </div>
  )
}

export default CallToAction