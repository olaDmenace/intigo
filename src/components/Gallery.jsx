import React from 'react'
import NFT from '../images/NFT.png'
import NFT1 from '../images/NFT1.png'
import NFT2 from '../images/NFT2.png'
import NFT3 from '../images/NFT3.png'

function Gallery() {
  return (
    <div className='grid justify-center md:grid-flow-col gap-10 py-10'>
        <img src={NFT} alt="" />
        <img src={NFT1} alt="" />
        <img src={NFT2} alt="" />
        <img src={NFT3} alt="" />
    </div>
  )
}

export default Gallery