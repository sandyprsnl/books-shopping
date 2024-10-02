import React, { useState } from 'react'
import Footer from './components/layouts/Footer';
import { Outlet } from 'react-router-dom';
import Header from './components/layouts/Header';
import Search from './components/sections/Search';
import { ScrollToTop } from './components/others/ScrollToTop';
import { useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
function App() {
  const location = useLocation();
  let ignoreflex= ['/login','/register'];
  let classes = 'max-w-screen-xl flex flex-wrap mx-auto px-6';
if(ignoreflex.includes(location.pathname)){
  classes='max-w-screen-xl  mx-auto px-6';
}
  const [showSearch, setShowSearch] = useState(false);
  return (
    <main className="dark:bg-slate-800">
    <ScrollToTop/>
    <ToastContainer />
      <Header setShowSearch={setShowSearch} showSearch={showSearch}/>
      {showSearch && <Search/>}
      <section className={classes}>      
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}

export default App;
