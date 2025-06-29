import React from 'react'
import OurCollection from './OurCollection'
import "../../../css/home.css";
import TrabdingProduct from './TrabdingProduct';
import DiamondCollection from './DiamondCollection';

const HomePage = () => {
  return (
    <div className='homepage'>
      <OurCollection/>
      <TrabdingProduct/>
      <DiamondCollection/>
    </div>
  )
}

export default HomePage