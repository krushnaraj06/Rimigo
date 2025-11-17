import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Santorini from './pages/Santorini';
import Dubai from './pages/Dubai';
import Paris from './pages/Paris';
import Bali from './pages/Bali';
import Switzerland from './pages/Switzerland';
import Maldives from './pages/Maldives';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/santorini" element={<Santorini />} />
          <Route path="/dubai" element={<Dubai />} />
          <Route path="/paris" element={<Paris />} />
          <Route path="/bali" element={<Bali />} />
          <Route path="/switzerland" element={<Switzerland />} />
          <Route path="/maldives" element={<Maldives />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
