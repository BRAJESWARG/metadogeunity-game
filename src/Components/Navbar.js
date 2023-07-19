import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MDULogo from './Image/mdu-logo.png';
import { Link } from "react-scroll";

const Navbar = () => {

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const [showTokenModal, setShowTokenModal] = useState(false);

  const handleCloseTokenModal = () => setShowTokenModal(false);
  const handleShowTokenModal = () => setShowTokenModal(true);

  return (
    <div className="navbar">
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo nav-logo">
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
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
              </Link>
            </li>
            <li>
              <Link to="MetaDogeUnity" spy={true} smooth={true}>About</Link>
            </li>
            <li>
              <Link to="GamePlay" spy={true} smooth={true}>Features</Link>
            </li>
            <li>
              <Link to="What" spy={true} smooth={true}>Staking</Link>
            </li>
            <li>
              <Link to="Tokenomics" spy={true} smooth={true}>Tokenomics</Link>
            </li>
            <li>
              <Link to="How does it work ?" spy={true} smooth={true}>Whitepaper</Link>
            </li>
            <li>
              <Link to="/apply" spy={true} smooth={true}>Apply</Link>
            </li>
            <li>
              <Link to="Roadmap" spy={true} smooth={true}>Roadmap</Link>
            </li>
            <li>
              <Link to="FAQs" spy={true} smooth={true}>FAQs</Link>
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
