import React from 'react';
import './Tokenomics.css';
import { Col, Container, Row } from 'react-bootstrap';

const Tokenomics = () => {
    return (
        <div className='Tokenomics'>
            <Container>

                <div className='Tokenomics-box'>

                    <div className='Tokenomics-head'>
                        Tokenomics
                    </div>
                    <div className='Tokenomics-text'>
                        <Row>
                            <Col xs={0} sm={0} md={0} lg={1} xl={1} ></Col>
                            <Col xs={12} sm={12} md={5} lg={5} xl={5} className='marketplace-outerbox' >
                                <div className='marketplace-box'>
                                    <div className='marketplace-head'>
                                        In-game marketplace
                                    </div>
                                    <div className='marketplace-text'>
                                        Players can use $MDU Tokens to purchase in-game diamonds
                                        which can be used to participate in Multiplayer Mode. The winner will be rewarded with
                                        $MDU tokens which can be traded in CEX and DEX.
                                    </div>
                                </div>
                            </Col>
                            <Col xs={0} sm={0} md={0} lg={1} xl={1} ></Col>
                            <Col xs={12} sm={12} md={6} lg={5} xl={5} className='staking-outerbox' >
                                <div className='staking-box' >
                                    <div className='staking-head' >
                                        Staking
                                    </div>
                                    <div className='staking-text' >
                                        Players can stake their $MDU tokens to receive weekly rewards , early access
                                        to upcoming chapters in MetaDogeUnity , access to the premium content , priority
                                        access to customer service,eligible for exclusive Non-Fungible Token (NFT) and
                                        airdrops.
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Tokenomics;