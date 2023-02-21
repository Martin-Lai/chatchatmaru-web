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
  const contactRef = useRef<HTMLDivElement>(null);

  const goToSection = (sectionAnchor: HTMLDivElement | null)=>{
    sectionAnchor?.scrollIntoView({behavior: "smooth"})
  };
  return (
    <div id={'mainContainer'}>
      <HomeSection ref={homeRef}  goToContactUs={()=>{goToSection(contactRef.current)}}/>
      <ProductSection ref={productRef} goToContactUs={()=>{goToSection(contactRef.current)}}/>
      <SpecialSection ref={specialRef}/>
      <Contact ref={contactRef}/>
      <Footer 
        goToHome={()=>{goToSection(homeRef.current)}}
        goToProduct={()=>{goToSection(productRef.current)}}
        goToSpecial={()=>{goToSection(specialRef.current)}}
        goToContactUs={()=>{goToSection(contactRef.current)}}
        />
    </div>
  );
}

export default App;
