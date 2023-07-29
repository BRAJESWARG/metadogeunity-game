import React from 'react';
import './FAQSection.css';
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

const FAQSection = () => {
    return (
        <div className='FAQSection'>
            <div className='FAQ-head-box'>
                <h2 className='FAQ-head-box'>
                    FAQs
                </h2>
            </div>
            <div className='ques-box'>
                <MDBContainer className="mt-5" style={{ maxWidth: '1000px' }}>
                    <MDBAccordion alwaysOpen initialActive={0}>
                        <MDBAccordionItem collapseId={1} headerTitle="How can I participate in MetaDogeUnity?">
                            To participate in MetaDogeUnity, simply visit our website and follow the instructions to join the community, create an account, and start your journey in the game.
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={2} headerTitle="Is MetaDogeUnity a blockchain-based game?">
                            Yes, MetaDogeUnity is built on blockchain technology, offering players the benefits of decentralized ownership, secure transactions, and interoperability with NFTs.
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={3} headerTitle="What is the role of AI in MetaDogeUnity?">
                            AI plays a significant role in MetaDogeUnity, enhancing the gameplay experience and providing advanced intelligence to the in-game characters. The AI-powered Doge dogs bring an extra level of challenge, strategy, and excitement to the races.
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={4} headerTitle="How can I earn rewards in MetaDogeUnity?">
                            In MetaDogeUnity, you can earn rewards through various in-game activities, such as winning races, completing challenges, and achieving milestones. Additionally, our Play2Earn model allows you to earn valuable tokens by participating actively in the game and contributing to the ecosystem.
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={5} headerTitle="Are there any opportunities to trade or sell in-game assets?">
                            Yes, MetaDogeUnity embraces the concept of NFTs (Non-Fungible Tokens), allowing players to own and trade unique in-game assets. You can buy, sell, or trade NFTs within the game's marketplace, providing opportunities for collectors and enthusiasts to engage in the virtual economy.
                        </MDBAccordionItem>
                    </MDBAccordion>
                </MDBContainer>
            </div>
        </div>
    )
}

export default FAQSection;