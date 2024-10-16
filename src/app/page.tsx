import Hero from './components/Hero';
import Services from './components/Services';
import Workflow from './components/Workflow';
import AboutUs from './components/AboutUs';
import ContactInfo from './components/ContactInfo';

export default function Home() {
  return (
    <>
      <div className="bg-[#030712] text-white min-h-screen">
        <Hero />
      
        <div className="pt-8"> {/* Padding top to prevent content overlap */}
          <Services />
          <Workflow />
          <ContactInfo/>
          <AboutUs />
         
        </div>
      </div>
    </>
  );
}
