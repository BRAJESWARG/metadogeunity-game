import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Tokenomics from './Components/Tokenomics';
import Roadmap from './Components/Roadmap';
import Header from './Components/Header';
import GamePlay from './Components/GamePlay';
import PolygonBlockchainGaming from './Components/PolygonBlockchainGaming';
import HowDoesItWork from './Components/HowDoesItWork';
import PowerdBy from './Components/PowerdBy';
import FAQSection from './Components/FAQSection';
import Footer from './Components/Footer';
import GoogleTranslate from './Components/GoogleTranslate';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='App-section'>
        <Header />
        <About />
        <GamePlay />
        <PolygonBlockchainGaming />
        <Tokenomics />
        <HowDoesItWork />
        <Roadmap />
        <PowerdBy />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
