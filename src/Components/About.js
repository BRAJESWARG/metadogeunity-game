import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MetaDogeUnity.css';

const MetaDogeUnity = () => {
    return (
        <div className='MetaDogeUnity'>
            <Row>
                <Col xs={0} sm={0} md={1} lg={1} xl={1} >
                </Col>
                <Col xs={12} sm={12} md={5} lg={5} xl={5} >
                    <div className='What-is-MetaDogeUnity-box'>
                        <div className='What-is-MetaDogeUnity'>
                            What is <span className='What-is-MetaDogeUnity-head'>MetaDogeUnity ?</span>
                        </div>
                        <p>
                            MetaDogeUnity offered an unparalleled combat experience, combining thrilling action,
                            strategic gameplay, and a captivating narrative. Immerse yourself in a world where
                            deadly adversaries and advanced AI collide, as you join the MetaDoge Guardians in
                            their fight for survival against Cyber Pack. Brace yourself for an adrenaline rush like
                            never before, as you embark on a journey to become the ultimate champion of
                            MetaDogeUnity.
                        </p>
                    </div>
                    <div className='MetaDogeUnity-button-box'>
                        <button className='MetaDogeUnity-button MetaDogeUnity-button-buy'>BUY $MDU</button>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={1} lg={1} xl={1} >
                </Col>
                <Col xs={12} sm={12} md={5} lg={5} xl={5} >

                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} className='iframe-box' >
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/-pHsz019XF0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </Col>
            </Row>

        </div>
    )
}

export default MetaDogeUnity;