import React, { useEffect, useState } from 'react'
import DashboardCard from './components/DashboardCard';
import DashboardEmpty from './components/DashboardEmpty';

const Dashboard = () => {
  const [orders,setOrders] = useState({});
  const token = JSON.parse(sessionStorage.getItem('token'));
  const cbid = sessionStorage.getItem('cbid');
  useEffect(()=>{
    async function fetchCurrentUserOrders(){
      const response = await fetch(`${process.env.REACT_APP_API_URL}660/orders?user.id=${cbid}`,
        {
          method:'GET',
          headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`,
          }
        }
      );
      const data = await response.json();
      setOrders(data);
    }
    fetchCurrentUserOrders();
  },[]);
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
        {

          orders.length>0?<section>
          {
            orders.map((order)=>{
              return <DashboardCard key={order.id} order={order} />
            })
          }
          </section>:<DashboardEmpty/>
        }
      </section>
    </main>
  )
}

export default Dashboard
