import React from 'react';
import "./global.css";
import HomeSection from './component/HomeSection';
import ProductSection from './component/ProductSection';
import Footer from './component/Footer';

function App() {

  return (
    <div id={'mainContainer'}>
      <HomeSection />
      <ProductSection />
      <Footer/>
    </div>
  );
}

export default App;
