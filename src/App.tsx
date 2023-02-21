import React, { useRef } from 'react';
import "./global.css";
import HomeSection from './component/HomeSection';
import ProductSection from './component/ProductSection';
import SpecialSection from './component/SpecialSection';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {

  const homeRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const specialRef = useRef<HTMLDivElement>(null);

  const goToSection = (sectionAnchor: HTMLDivElement | null)=>{
    sectionAnchor?.scrollIntoView({behavior: "smooth"})
  };
  return (
    <div id={'mainContainer'}>
      <HomeSection ref={homeRef}  goToContactUs={()=>{goToSection(specialRef.current)}}/>
      <ProductSection ref={productRef} goToContactUs={()=>{goToSection(specialRef.current)}}/>
      <SpecialSection ref={specialRef}/>
    </div>
  );
}

export default App;
