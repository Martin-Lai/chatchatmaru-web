import React from 'react';
import "./global.css";
import HomeSection from './component/HomeSection';
import ProductSection from './component/ProductSection';

function App() {

  return (
    <div style={{overflowX: "hidden"}}>
      <HomeSection />
      <ProductSection />
    </div>
  );
}

export default App;
