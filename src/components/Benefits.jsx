import Massage from '/assets/massage.png'
import { benefits, benefits2 } from '../data'
import GetData from './GetData'

const Benefits = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-between'>
        <div className='d-flex flex-column col-6'>
          <h1 className='header3 fs-1 w-100 mb-4'>What makes this gun different from the rest</h1>
          <div className='d-flex justify-content-end gap-3'>
            <div className='w-50'>
              {benefits.map((data) => (
                <div key={data.id}>
                  <GetData 
                  title={data.title}
                  icon={data.img}
                />
                </div>
                )
              )}
            </div>

            <div className='w-50'>
              {benefits2.map((data) => (
                <div key={data.id}>
                  <GetData 
                  title={data.title}
                  icon={data.img}
                />
                </div>
              )
              )}
            </div>
            
          </div>
          
        </div>
        <div className='bg'>
          <img src={Massage} alt="Image" className='img'/>
        </div>
      </div>
    </div>
  )
}

export default Benefits