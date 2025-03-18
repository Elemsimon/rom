import React from 'react'

const Button = ({title, info}) => {
  return (
    <div className='button col-md-4 col-sm-12'>
      <div className='title'>{title}</div> 
      <div className='info'>{info}</div>
    </div>
  )
}

export default Button