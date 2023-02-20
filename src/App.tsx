import React from 'react';
import "./global.css";
import HomeSection from './component/HomeSection';
import ProductSection from './component/ProductSection';
import SpecialSection from './component/SpecialSection';

function App() {

  return (
    <div id={'mainContainer'}>
      <HomeSection />
      <ProductSection />
      <SpecialSection />
    </div>
  );
}

export default App;
