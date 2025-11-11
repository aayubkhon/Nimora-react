import React from 'react'
import OurCollection from './OurCollection'
import "../../../css/home.css";
import TradingProduct from './TradingProduct';
import DiamondCollection from './DiamondCollection';
import RecentProducts from './RecentProducts';
import Advertisements from './Advertisements';
import Services from './Services';

const HomePage = () => {
  return (
    <div className='homepage'>
      <OurCollection/>
      <TradingProduct/>
      <DiamondCollection/>
      <RecentProducts/>
      <Advertisements/>
      <Services/>
    </div>
  )
}

export default HomePage