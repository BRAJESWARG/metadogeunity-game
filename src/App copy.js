import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Features from './Components/Features';
import Staking from './Components/Staking';
import Tokenomics from './Components/TokenomicsNav';
import Whitepaper from './Components/Whitepaper';
import Apply from './Components/Apply';
import Roadmap from './Components/RoadmapNav';
import FAQs from './Components/FAQs';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Staking" element={<Staking />} />
          <Route path="/Tokenomics" element={<Tokenomics />} />
          <Route path="/Whitepaper" element={<Whitepaper />} />
          <Route path="/Apply" element={<Apply />} />
          <Route path="/Roadmap" element={<Roadmap />} />
          <Route path="/FAQs" element={<FAQs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
