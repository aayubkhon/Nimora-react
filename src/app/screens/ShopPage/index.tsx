import React from 'react'
import { Outlet, } from 'react-router-dom'


const ShopPage = () => {
  return (
    <div>
     <h1>shop</h1>
     <Outlet/>
    </div>
  )
}

export default ShopPage