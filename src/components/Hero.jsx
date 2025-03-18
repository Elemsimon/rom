import React from 'react'
import Stars from '/assets/stars.svg'
import Img1 from '/assets/img1.svg'
import Button from './Button'
import Afterpay from '/assets/afterpay.svg'
import zip from '/assets/zip.svg'

const Hero = () => {
  return (
    <div className='container'>
      <div className='hero'>
        <div className='d-flex flex-column'>
          <h1 className='header'>Trusted by Athletes</h1>
          <p>Integrated with A.I to ensure your massage pressure is never compromised</p>
          <div className='rate py-4'>
            <div className='d-flex flex-column'>
              <h2 className='header2 fw-bold fs-6'><span className='fs-2 letterSpace'>18</span> Months</h2>
              <p>Included Warranty</p>
            </div>
            <div className='d-flex flex-column'>
              <h2 className='header2 fw-bold fs-2 letterSpace'>10000+</h2>
              <p>Loyal customers</p>
            </div>
            <div className='d-flex flex-column'>
              <img src={Stars} alt="stars" />
              <p>Stars</p>
            </div>
          </div> 
          <div className='pb-4 '>
            <Button title='Buy Now' info='(Risk free 30 day trials)' />
          </div>
          <div>
            <p className='text-white' style={{height:'15px'}}>Buy now, pay later option available</p>
            <p style={{color:'#2BF6FA'}}>Free Worldwide Express Delivery</p>
          </div>
          <div className='d-flex flex-row gap-4'>
            <img src={Afterpay} alt="" />
            <img src={zip} alt="" />
          </div>
        </div>
        <div className='bg'>
          <img src={Img1} alt="Image" className='bg-image'/>
        </div>
      </div>
    </div>
  )
}

export default Hero