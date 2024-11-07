import React from 'react'
import OrderSuccess from './components/OrderSuccess';
import OrderFails from './components/OrderFails';
import { useLocation } from 'react-router-dom';

const Order = () => {
  const location = useLocation()
  const state = location.state||{};
  return (
    <main>
    {
      state.status? <OrderSuccess data={state.data} />:<OrderFails/>
    }
    </main>
  )
}

export default Order;
