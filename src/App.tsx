import React from 'react';
import "./global.css";
import HomeSection from './component/HomeSection';
import ProductSection from './component/ProductSection';
import SpecialSection from './component/SpecialSection';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {

  return (
    <div id={'mainContainer'}>
      <HomeSection />
      <ProductSection />
      <SpecialSection />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
