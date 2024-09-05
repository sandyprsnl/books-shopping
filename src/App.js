import React, { useState } from 'react'
import Footer from './components/layouts/Footer';
import { Outlet } from 'react-router-dom';
import Header from './components/layouts/Header';
import Search from './components/sections/Search';
import { ScrollToTop } from './components/others/ScrollToTop';

function App() {
  
  const [showSearch, setShowSearch] = useState(false);
  return (
    <main className="dark:bg-slate-800">
    <ScrollToTop/>
      <Header setShowSearch={setShowSearch} showSearch={showSearch}/>
      {showSearch && <Search/>}
      <section className='max-w-screen-xl flex flex-wrap mx-auto px-6'>      
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}

export default App;
