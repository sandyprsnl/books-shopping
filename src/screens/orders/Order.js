import React from 'react'
import OrderSuccess from './components/OrderSuccess';
import OrderFails from './components/OrderFails';
import { useLocation } from 'react-router-dom';

const Order = () => {
  const {state} = useLocation();
  console.log(state);
  return (
    <main>
    {
      state.status? <OrderSuccess data={state.data} />:<OrderFails/>
    }
    </main>
  )
}

export default Order;
