import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Santorini from './pages/Santorini';
import Dubai from './pages/Dubai';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/santorini" element={<Santorini />} />
          <Route path="/dubai" element={<Dubai />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
