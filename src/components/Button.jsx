import React from 'react'

const Button = ({title, info}) => {
  return (
    <div className='button col-4 '>
      <div className='title'>{title}</div> 
      <div className='info'>{info}</div>
    </div>
  )
}

export default Button