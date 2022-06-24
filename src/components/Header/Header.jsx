import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import * as $ from 'jquery'
import './header.css'


function Header() {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const [navbarCollapse, setNavbarCollapse] = useState(false);

    const navbarToggle = () => {
        $('.mobile-dropdown').slideToggle('fast');
        setNavbarCollapse(!navbarCollapse);
    }

    return (
        <header id="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-10">
                        <div className="left-wrapper">
                            <div className="menu-icon" onClick={navbarToggle}>
                                {navbarCollapse ? <FontAwesomeIcon className="icon" icon={faXmark} />
                                 : <FontAwesomeIcon className='icon' icon={faBars} />}
                                <div className="mobile-dropdown">
                                    <nav>
                                        <ul className='mobile-nav'>
                                            <li className='nav-item'>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/social-impact">Social Impact</Link>
                                            </li>
                                            <li className='divider'>
                                                <Link to="/faq">FAQ</Link>
                                            </li>
                                            <li>
                                                <Link to="/gift-cards">Gift Cards</Link>
                                            </li>
                                        </ul>
                                        <div className='login'>
                                            <Link to="/login">Sign In</Link>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="brand">
                                <h3>STITCH FIX</h3>
                            </div>
                            <div className="navigation">
                                <nav>
                                    <ul>
                                        <li className={splitLocation[1] === "" ? "active" : ""}>
                                            <Link to="/">Women</Link>
                                        </li>
                                        <li className={splitLocation[1] === "men" ? "active" : ""}>
                                            <Link to="/men">Men</Link>
                                        </li>
                                        <li className={splitLocation[1] === "kids" ? "active" : ""}>
                                            <Link to="/kids">Kids</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-2">
                        <div className="right-wrapper">
                            <div className="links">
                                <ul>
                                    <li>
                                        <Link to="/social-impact">Social Impact</Link>
                                    </li>
                                    <li>
                                        <Link to="/faq">FAQ</Link>
                                    </li>
                                    <li>
                                        <Link to="/gift-cards">Gift Cards</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="cart">
                                <FontAwesomeIcon className='icon' icon={faBagShopping} />
                                <span>Bag</span>
                            </div>
                            <div className="login">
                                <Link to="/login">Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;