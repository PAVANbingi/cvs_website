import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Workflow from './components/Workflow';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

export default function Home() {
  return (
    <>
      <div className="bg-[#030712] text-white min-h-screen">
        <Hero />
      
        <div className="pt-8"> {/* Padding top to prevent content overlap */}
          <Services />
          <Workflow />
          <ContactUs/>
          <AboutUs />
         
        </div>
      </div>
    </>
  );
}
