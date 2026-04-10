import React from 'react'
import HeroMen from './HeroMen'
import HeroWomen from './HeroWomen'
import Offers from './Offiers'

const Hero = () => {
  return (
    <>
    <div className='hero'>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Img26/Sports/April/KSS/GW/Legacy_PC/New/GW_april_3000._CB782314143_.jpg" alt="" />
    </div>

    <div>

    <HeroMen/>
    <HeroWomen/>
    <Offers/>
    </div>
    </>

  )
}

export default Hero
