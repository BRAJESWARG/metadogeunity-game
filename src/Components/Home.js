import React from 'react';
import Header from './Header';
import About from './About';
import GamePlay from './GamePlay';
import HowDoesItWork from './HowDoesItWork';
import Roadmap from './Roadmap';
import PolygonBlockchainGaming from './PolygonBlockchainGaming';
import Tokenomics from './Tokenomics';
import FAQSection from './FAQSection';
import Footer from './Footer';
import PowerdBy from './PowerdBy';

const Home = () => {
    return (
        <div>
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
    )
}

export default Home