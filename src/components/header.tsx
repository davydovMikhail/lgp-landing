import React, { useState, useContext } from 'react';
import Logo from "../img/logo.svg";
import Ext from "../img/ext.svg";
import { slide as Menu } from 'react-burger-menu';

const Header = () => {

    var styles = {
        bmBurgerButton: {
          position: 'relative',
          width: '36px',
          height: '30px',
        },
        bmBurgerBars: {
          background: '#fff',
          borderRadius: '1px'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '50px',
          width: '50px'
        },
        bmCross: {
          background: '#fff'
        },
        bmMenuWrap: {
          top: '0',
          position: 'fixed',
          height: '100vh',
          width: '70%'
          
        },
        bmMenu: {
            background: '#0D0A13',
          padding: '2.5em 1.5em 0',
          fontSize: '30pxpx',
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
            color: '#fff',
          padding: '0.8em',
          display: 'flex',
          flexDirection: 'column'
        },
        bmItem: {
          display: 'inline-block',
          color: '#fff',
          marginBottom: '70px',
          fontSize: '28px'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }

    const [isOpen, setOpen] = useState(false)
    const handleIsOpen = () => {
        setOpen(!isOpen)
    }
    const closeSideBar = () => {
        setOpen(false)
    }

    return (
        <>
            <div className="header-wrapper">
                <div className="header">
                  <div className="header__left">
                    <img src={Logo} className="header__logo" />
                    <div className="header__bar">
                        <a href="#intro" className="header__tab">Home</a>
                        <a href="#tokenomics" className="header__tab">Tokenomics</a>
                        <a href="#taxes" className="header__tab">Taxes & Fees</a>
                        <a href="https://test.lgp.casino/" target="_blank" className="header__tab">
                            <div style={{marginRight: "5px"}} >Testnet</div>
                            <img className="header__icon" src={Ext} alt="ext" />
                        </a>
                        <a href="https://gitbook.io/docs/" target="_blank" className="header__tab">
                            <div style={{marginRight: "5px"}} >Whitepaper</div>
                            <img className="header__icon" src={Ext} alt="ext" />
                        </a>
                    </div>
                  </div>
                  <div className="header__right">
                    <a style={{marginRight: "8px"}} href="https://test.lgp.casino/" target='_blank' className="button__size button__transparent">Try Testnet</a>
                    <a href="https://app.uniswap.org/#/swap" target='_blank' className="button__size button__style">Buy Tokens</a>
                  </div>
                <div className='mob-menu'>
                    <Menu
                        isOpen={isOpen}
                        onOpen={handleIsOpen}
                        onClose={handleIsOpen}
                        styles={styles} right>
                        <a onClick={closeSideBar} className="menu-item" href="#intro">Home</a>
                        <a onClick={closeSideBar} className="menu-item" href="#tokenomics">Tokenomics</a>
                        <a onClick={closeSideBar} className="menu-item" href="#taxes">Taxes & Fees</a>
                        <a onClick={closeSideBar} className="menu-item" target='_blank' href="https://test.lgp.casino/">Testnet</a>
                        <a onClick={closeSideBar} className="menu-item" target='_blank' href="https://gitbook.io/docs/">Whitepaper</a>
                        <a onClick={closeSideBar} className="menu-item" target='_blank' href="https://test.lgp.casino/">Try Testnet</a>
                        <a onClick={closeSideBar} className="menu-item" target='_blank' href="https://app.uniswap.org/#/swap">Buy Tokens</a> 
                    </Menu>
                </div>
                </div>
            </div>
        </>
    )
}

export default Header;