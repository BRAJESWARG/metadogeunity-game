import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MDULogo from './Image/mdu-logo.jpg';

const Navbar = () => {

  const [showMediaIcons, setShowMediaIcons] = useState(false);

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
              src={MDULogo}
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
        show={showTokenModal}
        onHide={handleCloseTokenModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <h2 className="login-head" >Buy MDU</h2>

        <Button
          variant="secondary"
          onClick={handleCloseTokenModal}
          className="connect-wallet"
        >
          CONNECT WALLET
        </Button>
      </Modal>
    </div>
  );
};

export default Navbar;
