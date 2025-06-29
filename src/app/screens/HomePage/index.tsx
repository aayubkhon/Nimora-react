import React from 'react'
import OurCollection from './OurCollection'
import "../../../css/home.css";
import TradingProduct from './TradingProduct';
import DiamondCollection from './DiamondCollection';
import RecentProducts from './RecentProducts';

const HomePage = () => {
  return (
    <div className='homepage'>
      <OurCollection/>
      <TradingProduct/>
      <DiamondCollection/>
      <RecentProducts/>
    </div>
  )
}

export default HomePage