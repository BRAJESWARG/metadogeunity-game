import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "./Header.css";

function Header() {
  return (
    <div className='Header'>
      <div className='Header-bg'></div>
      <Container className='Header-Container'>
        <div className='header-content'>
          <Row>
            <Col xs={0} sm={0} md={0} lg={1} xl={1} >
            </Col>
            <Col xs={12} sm={12} md={6} lg={5} xl={5} className='Header-text-col' >
              <div className='quote-box' >
                <div className='presale' >
                  Presale Now <span className='presale-live' >LIVE</span>
                </div>
                <div className='worlds-first' >
                  <div>
                    A thrilling tale of betrayal, vengeance,
                  </div>
                  <div>
                    and endurance. This is the World's
                  </div>
                  <div>
                    first<span className='Inspired-with-MetaDogeUnity'> #Play2Earn PVP </span> Combat game
                  </div>
                </div>
                <div className='Inspired' >
                  Inspired by AI-Powered #Doge.
                </div>
                <div className='Invest-text' >
                  Invest and Back AI Tech Start-Ups with $QUBE Tokens on the MetaDogeUnity platform
                </div>
                <div className='Invest-Engage' >
                  Invest. Engage. Reward. Innovate.
                </div>
              </div>
            </Col>
            <Col xs={0} sm={0} md={0} lg={1} xl={1} >
            </Col>
            <Col xs={12} sm={12} md={6} lg={5} xl={5} className='Header-card-col' >
              <Card>
                <Card.Body>
                  <div>
                    <div className='timer-box'>
                      <div className='day'>04d</div>
                      <div className='hour'>12h</div>
                      <div className='min'>24m</div>
                      <div className='sec'>23s</div>
                    </div>
                    <div className='line'>
                      <div className='line-color'>
                      </div>
                    </div>
                    <div className='USDT-raised'>
                      USDT Raised: $393,895.88 / $1,075,000
                    </div>
                    <div className='purchased-dr'>
                      Your Purchased DR = Wallet not connected
                    </div>
                    <div className='USDT-dr'>
                      <p className='USDT-dr-text'>
                        1 $DR = 0.0055 USDT
                      </p>
                    </div>
                    <div className='ETH-USDT-box'>
                      <div className='item'>
                        <div className='item-img'>
                          <img
                            src='data:image/png;base64,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'
                            height='30px'
                            alt='item-1'
                          />
                        </div>
                        <span className='item-head'>
                          ETH
                        </span>
                      </div>
                      <div className='item'>
                        <div className='item-img'>
                          <img
                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA/FBMVEUAAAAmoXoloHoloXsloXsmoXoloXoloHompX4lonsloXoloXolo3wmoXomoXwloHgloXsmonsloHklonsmoXwmnnkmo3wnpH0mpX0mpH0monsknHkloHomo30mo30knXkmoXv///8pon37/f0Zm3Mno3wjoHkoqIAprYR3xKwgn3g3qIUdnXYVmnHY7ujv+fba7+knpn4oq4IproXg8u2U0b6NzrpnvqNauJtOspTs9/SIzLYvpYG039Jywqn2+/p7xq9Crow9rIkzp4SCybNuwajK6N+64dbR6+PB5Nmd1cRJsJDU7OWu3M6p2stXt5lHsJBgup4AkGQAjmAWkk1DAAAAIHRSTlMA/vz7j/jXKPXu6tDDumxhXUAWqXcahuvn060th6d4FQdkj2QAAAOWSURBVFjDtVfpeqIwFAXELtZOa/e9YQnQCLUiirivtctM25l5/3eZiMgNRSnWb84vyec5ublLci+3DJv74u5GLotQNrexK+5vciuhIO5kdV0vY4wQxmX6M7sjFtKyj4/OdUPHvMDzyAdPf2K6dH5znIZ+cmqU+UzABdClsnF6cvAV/8eZgQVgRzUEbJz9SKRf5m2gL5HIXy7n723ZQF8mYW/tLeOLdHv0JQRsi4v5h5Xk7cGdletF/Asjg1IiY1ws3B+lhlA5jJ2/kkErIFMRP/kf7E+pYEdisbmFQ//JiQg9ibfY+srr4AA1CSa4Qc8z+WsAX3PvElAnoGCEWX27XYYEII6UgGcVDlHenlfWic1EkDwpCWhTATDhasY/2MY8I/BTUpbtr0isAI8DE44ghOkEICGPfIGNwAPxI4TEEFGB8oZ//+ksH5EHKQETVgDxemGaxEakCLT2/RwPSmAArLyYcqSopgm9AxZEQYql2cEfyLLC1ndoFmcxWgwtFNDQEuDsJre/0AA8TftQwK+PxSbsc6IuxLhII6aqWnJjJnBvTauAaDimIugit+sLABtRqtYaeHW30+xKPhq9jlv3Bi1CZZAcFdiNZoFMLNnrNGvV2qg3/u0GR3Dq7rg3XWy6H5qlMRI8zYQc60O1X32pjb2hZqrsEaYfKkFFr1N9aw5VRgDnODYIpOb0WtROzfeaFnUiRlPHFGtOx5SZMHCM/aorVf9qLfrfIIwNxce9Nr+rWrL5ZyK9stnECpheSRnJlhVYgAZS4ET/k8bGtNRhVXKKBAHYI8jmx0TqTnoe9bdFQe6o56jrxv6XSobvo2dFeSuSyBFymGcU1H7zsaR0ncdf1VHH9fr9wWDQ99zO6KX96ChK47lXVBk+wrlPYaRxVOXXcbX95JS6UM7dBpWsuX1kUTqOhDFMJMhDGkNqsIlar/MoDFuzNYLmDoZEglQGBA8AGQYC96YWLsZSGYopoRphLV5Ma5czXCirCcCFwolG5rsCgn+lFdaxoDC71jMrCkAWwMOykgA8LPC0rS4ATxt3ZQjfERDsK27+upb5FQTgeb9lGoxVBaDBgBYnLtCgbPqyLhQQ7HysyYoJBNe6ExWAJovBnr0glPJ73YeX0OYlN5omtGbxRjNNqysHSGp112+2AdeVTLp2H/Zfe+BYf+SJD13GGkPXWmMf4CB58Ew1u96Eoy8fHX2Pjv//8B0f//kvxv9/fnulibtqWcAAAAAASUVORK5CYII='
                            height='30px'
                            alt='item-1'
                          />
                        </div>
                        <span className='item-head'>
                          USDT
                        </span>
                      </div>
                    </div>
                    <div className='ETH-USDT-balance'>
                      ETH Balance Wallet not connected
                    </div>
                    <div className='ETH-DR-payment'>
                      <div className='payment-info'>
                        <div className='payment-info-top'>
                          <p className='payment-info-top-text'>
                            Amount in ETH you pay
                          </p>
                          <div className='payment-info-button'>
                            <button>MAX</button>
                            <button>HALF</button>
                          </div>
                        </div>
                        <div className='payment-info-bottom'>
                          <div className='payment-info-logo'>
                            <div className='card-logo'>
                              <img
                                className='logo-img'
                                src='data:image/png;base64,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'
                                alt='logo'
                              />
                            </div>
                          </div>
                          <div className='payment-info-input'>
                            <input
                              className='input-form form-control'
                              name="destination-currency-input"
                              placeholder="DR amount"
                              aria-label="DR amount"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>


                      <div className='payment-info'>
                        <div className='payment-info-top'>
                          <p className='payment-info-top-text'>
                            Amount in $DR you receive
                          </p>
                          {
                            // <div className='payment-info-button' style={{ visibility: "hidden" }}>
                            //   <button>MAX</button>
                            //   <button>HALF</button>
                            // </div>
                          }
                        </div>
                        <div className='payment-info-bottom'>
                          <div className='payment-info-logo'>
                            <div className='card-logo'>
                              <img
                                className='logo-img'
                                src='https://dogerush.io/static/media/icon.93dd1f6fbb1911133f60.png'
                                alt='logo'
                              />
                            </div>
                          </div>
                          <div className='payment-info-input'>
                            <input
                              className='input-form form-control'
                              name="destination-currency-input"
                              placeholder="DR amount"
                              aria-label="DR amount"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='buynow-button-box'>
                      <button className='buynow-button'>BUY NOW</button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Header;