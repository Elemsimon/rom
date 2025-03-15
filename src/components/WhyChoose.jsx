import Gun from '/assets/gun.svg'
import { whyChoose, whyChoose2 } from '../data'
import GetData from './GetData'

const WhyChoose = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-between '>
        <div className='bg'>
          <img src={Gun} alt="Image" className=''/>
        </div>
        <div className='d-flex flex-column col-6'>
          <h1 className='header3 fs-1 w-100 mb-4'>What makes this gun different from the rest</h1>
          <div className='d-flex justify-content-end gap-3'>
            <div className='w-50'>
              {whyChoose.map((data) => (
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
              {whyChoose2.map((data) => (
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
      </div>
    </div>
  )
}

export default WhyChoose