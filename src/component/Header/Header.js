import React, { useEffect, useState } from 'react';
import './Header.css'
import logo from '../../images/sportlogo.png'
// import { NavLink } from 'react-router-dom'
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import { NavLink, Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [windowDimension, setWindowDimension] = useState(null);
    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);
    const router = useLocation().hash;
    console.log(router);
    const pathName = useLocation().pathname;
    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const isMobile = windowDimension <= 480;

    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    {isMobile ?
                        <NavLink exact to="/" className="nav-logo">
                            <img src={logo} alt="logo" width={"35px"} className="mainlogo" />
                        </NavLink>

                        :
                        <div className='nav-mob islogo'>
                        </div>
                    }
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink exact to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}>
                                <h4>About</h4>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                <h4>ALLIANCE</h4>
                            </NavLink>
                        </li>
                        {!isMobile ?
                            <li className="nav-item">
                                <NavLink exact to="/" activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}>
                                    <img src={logo} alt="logo" width={"40px"} className="mainlogo" />
                                </NavLink>
                            </li>
                            :
                            <div className='nav-mob islogo'>
                            </div>
                        }
                        <li className="nav-item">
                            <NavLink exact to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}>
                                <h4>PRICING</h4>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}>
                                <h4>LEARN</h4>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </ div>
    );
}

export default Header