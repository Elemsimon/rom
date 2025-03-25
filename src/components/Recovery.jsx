import recoveryImage from '/assets/recovery.png'

const Recovery = () => {
  return (
    <div className='recoveryContainer' data-aos="fade" data-aos-delay="700">
      <div className='recovery'>
        <div className='recoveryRectangle'>
          <h4 className='recoveryText'>Recovery</h4>
          <h4 className='recoveryText' style={{WebkitTextFillColor:'#ffffff'}}>Recovery</h4>
          <h4 className='recoveryText' style={{paddingBottom:'20px'}}>Recovery</h4>
        </div>
        <div>
          <img src={recoveryImage} alt="recovery-image" className="recovery-image"/>
        </div>
      </div>
    </div>
  )
}

export default Recovery