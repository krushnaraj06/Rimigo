import HeroSection from '../components/HeroSection';
import TopDestinations from '../components/TopDestinations';
import ParallaxShowcase from '../components/ParallaxShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import TravelPackages from '../components/TravelPackages';

const Home = () => {
  return (
    <>
      <HeroSection />
      <TopDestinations />
      <div id="about">
        <ParallaxShowcase />
      </div>
      <WhyChooseUs />
      <div id="packages">
        <TravelPackages />
      </div>
    </>
  );
};

export default Home;
