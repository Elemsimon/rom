import Gun from '/assets/gun.svg'
import { whyChoose, whyChoose2 } from '../data'
import GetData from './GetData'

const WhyChoose = () => {
  return (
    <div className='container' data-aos="fade" data-aos-delay="700">
      <div className='d-flex justify-content-between whychoose'>
        <div className='bg'>
          <img src={Gun} alt="Image" className='img'/>
        </div>
        <div className='d-flex flex-column col-lg-6'>
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