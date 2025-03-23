import moneyBack from '/assets/moneyBack.svg'
import expressDelivery from '/assets/expressDelivery.svg'
import athletes from '/assets/athletes.svg'

const Info = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className='d-flex flex-column gap-5'>
        <div className='d-flex flex-row justify-content-center align-items-center gap-5'>
          <img src={moneyBack} alt="moneyBack" className='info1' />
          <img src={expressDelivery} alt="expressDelivery" className='info1' />
          <img src={athletes} alt="athletes" className='info1' />
        </div>
        <div>
          <h1 className='waterMask'>Massage Gun</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Info