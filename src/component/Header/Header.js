import React, { useState } from 'react'
import "./Header.css"
import logo from "../images/logo.svg"
import { NavHashLink as NavLink } from 'react-router-hash-link';


function Header() {

    // For Header Change Color after Scroll
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 450) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <div id="page"  >
            <header id="masthead" className={colorChange ? 'colorChange' : 'site-header'} role="banner">
                <div className='container'>
                    <div className="justify-content-between row">
                        <div className="site-branding-main-logo site-branding">
                            <div className="site-title">
                                <a href="en/index.html" rel="home">
                                    <img src={logo} alt="" data-no-lazy="1" />
                                </a>
                            </div>
                        </div>

                        <nav id="site-navigation" className="main-navigation clearfix header-navigations anim-left" role="navigation">
                            <button className="hamburger menu-toggle hamburger--collapse" type="button" aria-controls="primary-menu" aria-expanded="false">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                            <div className="menu-menu-container">
                                <ul id="primary-menu" className="main-header-menu nav-menu" aria-expanded="false">
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home ">
                                    <NavLink smooth={true} to="/#about" sp>
                                        About
                                    </NavLink>;    
                                        {/* <a href="#About"><span data-hover="About">About</span></a> */}

                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home ">
                                        <a href="en/pricing.html"><span data-hover="ALLIANCE">ALLIANCE</span></a>

                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home ">
                                        <a href="en/faq/index.html"><span data-hover="PRICING">PRICING</span></a>

                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home ">
                                        <a href="en/felyx-for-business.html"><span data-hover="LEARN">LEARN</span></a>

                                    </li>

                                </ul>
                                <div className="store-markets-header-wrapper">
                                    <div className="store-buttons-wrap-inner">
                                        <div className="row">
                                            <div className="image-store-item col-6">
                                                <div className="image-inner">
                                                    <a href="https://app.adjust.com/ctz2bar?engagement_type=fallback_click&amp;redirect=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid1250107307%3Fmt%3D8" target="_blank"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cdn.felyx.com/uploads/2021/09/B-APPLE.svg" /><noscript><img src="https://cdn.felyx.com/uploads/2021/09/B-APPLE.svg" alt="" /></noscript></a>
                                                </div>
                                            </div>
                                            <div className="image-store-item col-6">
                                                <div className="image-inner">
                                                    <a href="https://app.adjust.com/i3zyuwb" target="_blank"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cdn.felyx.com/uploads/2021/09/B-GOOGLE.svg" /><noscript><img src="https://cdn.felyx.com/uploads/2021/09/B-GOOGLE.svg" alt="" /></noscript></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </nav>
                    </div>
                </div>
            </header>

        </div>

    )
}

export default Header


