import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TopDestinations from './components/TopDestinations';
import ParallaxShowcase from './components/ParallaxShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import TravelPackages from './components/TravelPackages';
import ImageCollage from './components/ImageCollage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TopDestinations />
      <ParallaxShowcase />
      <WhyChooseUs />
      <TravelPackages />
      <ImageCollage/>
      <Footer />
    </div>
  );
}

export default App;
