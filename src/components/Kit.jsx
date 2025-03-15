import kit from '/assets/18.png'
import { kitData } from '../data'

const Kit = () => {
  return (
    <div className='container' style={{marginTop:'100px'}}>
      <div className='d-flex justify-content-between '>
        <div style={{marginTop:'-90px', objectFit:'cover'}}>
          <img src={kit} alt="Image" />
        </div>
        <div className='d-flex flex-column col-5'>
          <h1 className='header3 fs-1 w-100 mb-4'>What's included in your order</h1>
          <div className='d-flex flex-column gap-0'>
           {kitData.map((list) => (
            <ul key={list.id}>
              <li className='p'>{list.title}</li>
            </ul>
           ))} 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kit