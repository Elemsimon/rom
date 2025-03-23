import React from 'react'

const GetData = ({title, icon}) => {
  return (
    <div className='d-flex flex-row gap-3'>
      <div className='mb-3'>
        <img src={icon} alt="icon" className='icon'  />
      </div>
      <div className='d-flex align-items-center'>
        <p className='d-flex fs-6 text-wrap w-100'>{title}</p>
      </div>
    </div>
  )
}

export default GetData