import React from 'react'
import OurCollection from './OurCollection'
import "../../../css/home.css";
import TrabdingProduct from './TrabdingProduct';

const HomePage = () => {
  return (
    <div className='homepage'>
      <OurCollection/>
      <TrabdingProduct/>
    </div>
  )
}

export default HomePage