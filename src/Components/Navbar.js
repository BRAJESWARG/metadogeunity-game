import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Navbar = () => {

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowLoginModal = () => setShowLoginModal(true);


  const [showTokenModal, setShowTokenModal] = useState(false);

  const handleCloseTokenModal = () => setShowTokenModal(false);
  const handleShowTokenModal = () => setShowTokenModal(true);

  return (
    <div className="navbar">
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <img
              src='https://static.wixstatic.com/shapes/ddd9af05961a402680f77cc4c129ba2f.svg'
              alt='Logo' height='50px'
            />
            <span>M</span>eta
            <span>D</span>oge
            <span>U</span>nity
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            {
              // <li>
              //   <NavLink to="/">Home</NavLink>
              // </li>
            }
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/features">Features</NavLink>
            </li>
            <li>
              <NavLink to="/staking">Staking</NavLink>
            </li>
            <li>
              <NavLink to="/tokenomics">Tokenomics</NavLink>
            </li>
            <li>
              <NavLink to="/whitepaper">Whitepaper</NavLink>
            </li>
            <li>
              <NavLink to="/apply">Apply</NavLink>
            </li>
            <li>
              <NavLink to="/roadmap">Roadmap</NavLink>
            </li>
            <li>
              <NavLink to="/FAQs">FAQs</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd Login button */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "login-tokens-box"
          }
        >
          <ul className="login-tokens-box-desktop">
            <li>
              <button
                className="login-button"
                onClick={handleShowLoginModal}
              >
                LOGIN
              </button>
            </li>
            <li>
              <button
                className="tokens-button"
                onClick={handleShowTokenModal}
              >
                BUY TOKENS
              </button>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a
              // eslint-disable-next-line
              href="/#"
              onClick={() => setShowMediaIcons(!showMediaIcons)}
            >
              <GiHamburgerMenu />
            </a>
          </div>
        </div>

      </nav >


      <Modal
        show={showLoginModal}
        onHide={handleCloseLoginModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <h2 className="login-head" >Login</h2>

        <h6 className="login-text" >
          To log in please use the method you used during intial account opening process.
        </h6>

        <Button
          variant="secondary"
          onClick={handleCloseLoginModal}
          className="connect-wallet"
        >
          CONNECT WALLET
        </Button>
        <div className="or-box">
          <hr className="hr-left" />
          <span className="or">OR</span>
          <hr className="hr-right" />
        </div>
        <a href="https://buy.inqubeta.ai/login">
          <Button
            variant="primary"
            className="login-with-email"
          >
            LOGIN WITH EMAIL
          </Button>
        </a>

      </Modal>


      <Modal
        show={showTokenModal}
        onHide={handleCloseTokenModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <h2 className="login-head" >Buy Qube</h2>

        <Button
          variant="secondary"
          onClick={handleCloseLoginModal}
          className="connect-wallet"
        >
          CONNECT WALLET
        </Button>
        <div className="or-box">
          <hr className="hr-left" />
          <span className="or">OR</span>
          <hr className="hr-right" />
        </div>
        <a href="https://buy.inqubeta.ai/register">
          <Button
            variant="primary"
            className="login-with-email"
          >
            REGISTER WITH EMAIL
          </Button>
        </a>

        <h6 className="already-register">
          Already registered?

          <a href="https://buy.inqubeta.ai/login" className="already-register-login" >
            Login
          </a>
        </h6>

      </Modal>
    </div>
  );
};

export default Navbar;
