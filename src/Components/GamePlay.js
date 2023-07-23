import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './GamePlay.css';
import LaptopMockup from './Image/future_doge.png';

const GamePlay = () => {
    return (
        <div className='GamePlay'>
            <Container>
                <Row>
                    <div className='GamePlay-head'>GamePlay Mechanics</div>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} >
                        <Row className='GamePlay-row2 row-devider'>
                            <Col xs={0} sm={0} md={1} lg={1} xl={1} >
                            </Col>
                            <Col >
                                <div className='GamePlay-subhead'>
                                    Daily Tournament:
                                </div>
                                <div className='GamePlay-content'>
                                    Players can participate in a multiplayer mode where they
                                    compete against each other. To enter the tournament, players must deposit
                                    $MUD tokens.
                                </div>
                            </Col>
                        </Row>
                        <Row className='row-devider'>
                            <Col >
                                <div className='GamePlay-subhead'>
                                    Character Customization:
                                </div>
                                <div className='GamePlay-content'>
                                    Players can customize their MetaDoge Guardian
                                    with various skins, outfits, and accessories, allowing for personalization and
                                    unique visual styles using NFT’s.
                                </div>
                            </Col>
                        </Row>
                        <Row className='row-devider'>
                            <Col xs={0} sm={0} md={1} lg={1} xl={1} >
                            </Col>
                            <Col >
                                <div className='GamePlay-subhead'>
                                    Progression and Rewards:
                                </div>
                                <div className='GamePlay-content'>
                                    As players complete missions and defeat enemies,
                                    they will earn experience points, currency, and valuable loot. These rewards can
                                    be used to unlock new weapons, upgrade abilities, and acquire cosmetic items.
                                </div>
                            </Col>
                        </Row>
                        <Row className='row-devider'>
                            <Col >
                                <div className='GamePlay-subhead'>
                                    Team-based Gameplay:
                                </div>
                                <div className='GamePlay-content'>
                                    MetaDogeUnity can feature cooperative multiplayer
                                    modes where players can team up with friends or other online players.
                                </div>
                            </Col>
                        </Row>
                        <Row className='row-devider'>
                            <Col xs={0} sm={0} md={1} lg={1} xl={1} >
                            </Col>
                            <Col >
                                <div className='GamePlay-subhead'>
                                    Interoperability and NFTs:
                                </div>
                                <div className='GamePlay-content'>
                                    The items obtained for customization, such as
                                    jackets and skins, will be NFTs (Non-Fungible Tokens). These NFTs will have
                                    interoperability across various games under the Polygon Blockchain Gaming
                                    Studio, including upcoming chapters of MetaDogeUnity.
                                </div>
                            </Col>
                        </Row>
                        <Row className='row-devider'>
                            <div className='GamePlay-subhead'>
                                Enchanting Environment:
                            </div>
                            <div className='GamePlay-content'>
                                Immerse yourself in the captivating world of
                                MetaDogeUnity, where the gameplay takes place in the Techno-City.: A bustling
                                futuristic cityscape with towering skyscrapers, neon lights, and advanced
                                technology.
                            </div>
                        </Row>
                    </Col>
                    <Col xs={0} sm={0} md={1} lg={1} xl={1} >
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5} xl={5} >
                        <img
                            src={LaptopMockup}
                            alt='LaptopMockup'
                            className='GamePlay-img'
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GamePlay