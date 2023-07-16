import Navbar from "./Components/Navbar";
import About from "./Components/About";
// import Services from "./components/Services/Services";
import "./App.css";
// import Experience from "./components/Experience/Experience";
// import Works from "./components/Works/Works";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Testimonial from "./components/Testimonials/Testimonial";
// import Contact from "./components/Contact/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import GamePlay from "./Components/GamePlay";
import PolygonBlockchainGaming from "./Components/PolygonBlockchainGaming";
import Tokenomics from "./Components/Tokenomics";
import HowDoesItWork from "./Components/HowDoesItWork";
import Roadmap from "./Components/Roadmap";
import PowerdBy from "./Components/PowerdBy";
import FAQSection from "./Components/FAQSection";
// import { useContext } from "react";
// import { themeContext } from "./Context";
function App() {

  return (
    <div
      className="App"
    >
      <Navbar />
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
  );
}

export default App;
