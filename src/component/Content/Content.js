import React, { useEffect, useState,Component} from 'react';
 
import './Content.css'
import CityImage from "../images/city-image.jpg"
import { NavLink, Link } from 'react-router-dom';
import scooter from '../images/scooter.jpg'
import scooter2 from '../images/scooter2.png'
import cycle from '../images/cycleimg.png'
import ectricscooter from '../images/electsc.png'
import HorizontalScroll from 'react-scroll-horizontal'

 
function Content() {
  

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [position, setPosition] = useState('70')

    function moveCircle() {  
        const speed = 60
        const scrolltop = window.pageYOffset
        const scrollAndSpeed = scrolltop / speed
    
        console.log(scrollAndSpeed.toString())
        setPosition(scrollAndSpeed.toString())
      }
     
 

    return (
        <div>
            <div id="" className="site-content">
                <div id="primary" className="content-area">
                    <main id="main" className="site-main" role="main" >
                        <div className="home-hero-section-wrapper embed-container">
                            <img style={{ paddingTop: '10rem' }} src={CityImage} />
                        </div>
                        {/* <div className="sectionOne">
                            <div className="circle styles"
                                style={{ position: 'absolute', left: `${position}rem` , marginTop:"-15%"}}>
                                <img className='bannerImg scooter' src={scooter2} style={{width:"13%" ,     MARGINLEFT: "10%"}} />
                            </div>
                        </div> */}
                        <div className="sectionTwo"></div>
                        <div className="stores-buttons-wrapper hero-buttons-side-fixed" style={{ opacity: '0', visibility: 'hidden' }}>
                            <div className="stores-buttons-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="store-buttons-wrap col-lg-6">
                                            <div className="store-buttons-wrap-inner">
                                                <div className="row">

                                                    <div className="image-store-item col-6">
                                                        <div className="image-inner">
                                                            <a href="https://app.adjust.com/ctz2bar?engagement_type=fallback_click&amp;redirect=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid1250107307%3Fmt%3D8"><img src="https://cdn.felyx.com/uploads/2021/09/B-APPLE.svg" alt="" className="lazyloaded" data-ll-status="loaded" /><noscript><img src="https://cdn.felyx.com/uploads/2021/09/B-APPLE.svg" alt="" /></noscript></a>
                                                        </div>
                                                    </div>
                                                    <div className="image-store-item col-6">
                                                        <div className="image-inner">
                                                            <a href="https://app.adjust.com/i3zyuwb"><img src="https://cdn.felyx.com/uploads/2021/09/B-GOOGLE.svg" alt="" className="lazyloaded" data-ll-status="loaded" /><noscript><img src="https://cdn.felyx.com/uploads/2021/09/B-GOOGLE.svg" alt="" /></noscript></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <HorizontalScroll>  */}
                        {/* <img style={{ paddingTop: '10rem' }} src={scooter} /> */}
                        {/* <div style={child} /> */}
                        {/* </HorizontalScroll> */}
                        <div className="simple-text-box-section-wrapper   content-main-wrapper" style={{ backgroundColor: '#ffffff' }}>
                            <div className="container simple-text-box-container">
                                <div className="row simple-text-box-row">

                                    <div className="main-simple-text-box-content col-lg-12">
                                        <div className="main-simple-text-box-content-inner main-content-inner-parent slide-for-more-parent add-tree">
                                            <div className="content simple-text-box-content">
                                                <div className="simple-text-box-position large-text-section">
                                                    <h2 style={{ textAlign: 'center' }}>Receive free riding minutes</h2>
                                                    <p style={{ textAlign: 'center' }}>Create an account and receive 30 free riding minutes</p>
                                                    <span className="green-button"><a href="https://felyx.frontend.fleetbird.eu/site/session?targetURL=https%3A%2F%2Ffelyx.com%2Fbe%2Fen%2Fregister" className="fliphover"><span data-hover="Register">Register</span></a> </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-content-wrappper col-sm-6">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="why-felyx-section-wrapper">
                            <div className="main-why-felyx-content-inner">
                                <div className="container">
                                    <div className="read-more-why-felyx-items-wrapper row">
                                        <div className="why-flexy-main-content">
                                            <div className="why-flexy-main-content-inner align-center large-text-section">
                                                <h2>Where do you plan your trip?</h2>
                                                <p></p><p>felyx is available in several cities in Europe. Choose the city you are planning your trip to see specific information about pricing, service area and local regulations.</p>
                                                <p></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="simple-text-box-section-wrapper content-main-wrapper" id='about'>
                            <div className="container simple-text-box-container">
                                <div className="row simple-text-box-row">

                                    <div className="main-simple-text-box-content col-lg-12">
                                        <div className="main-simple-text-box-content-inner main-content-inner-parent slide-for-more-parent ">
                                            <div className="content simple-text-box-content">
                                                <div className="simple-text-box-position large-text-section">
                                                    <h2 style={{ textAlign: "center" }}>Who is felyx?</h2>
                                                    <p style={{ textAlign: "center" }}>felyx offers shared electric scooters. You can start your ride in 3 simple steps. Use the felyx app to locate, reserve, and activate the nearest e-scooter.</p>
                                                    <div className="read-more-hidden-section content read-more-section">
                                                        <p>In Brussels, there are more than 600 fully electric scooters.</p>
                                                    </div>
                                                    <div className="read-more-button">
                                                        <p><span data-hover="Read more">Read more</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-content-wrappper col-sm-6">
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="howitworks-section-wrapper" id="how-it-works">
                            <div className="container howitworks-container">
                                <div className="row">
                                    <div className="mobile-visible-number-title-section">
                                        <div className="number-of-the-field-mobile">
                                            <div className="number-of-the-field-mob-inner">
                                                <p>01</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-howitworks-image-content col-md-6">
                                        <div className="main-howitworks-image-content-inner">
                                            <div className="image-store-item">
                                                <div className="image-inner">
                                                    <div id="lottie3461" className="lottie-anim" data-anim="https://cdn.felyx.com/uploads/animation/howitworks1.json"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-howitworks-content col-md-6">
                                        <div className="main-howitworks-content-inner main-content-inner-parent slide-for-more-parent">
                                            <div className="number-of-the-field">
                                                <p>01</p>
                                            </div>
                                            <div className="content howitworks-content">
                                                <div className="howitworks-top-content">
                                                    <h2>Find &amp; Reserve</h2>
                                                    <p>Use the app to locate nearby felyx e-scooters.</p>
                                                </div>
                                            </div>

                                            <div className="content howitworks-read-more read-more-section">
                                                <p>You can make a free 15-minute reservation, and can easily walk to your reserved e-scooter by using the map function. Activate the felyx scooter when you are next to it and start your ride.</p>
                                            </div>
                                            <div className="read-more-button">
                                                <Link to='/About' className="nav-link">Read More</Link>
                                                {/* <Link to={'/About'} activeclassName="active" 
                                                className="nav-links" >
                                                Read More
                                            </Link> */}

                                                {/* <p><span data-hover="Read more">Read more</span></p> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="howitworks-section-wrapper">
                            <div className="container howitworks-container">
                                <div className="row">
                                    <div className="mobile-visible-number-title-section">
                                        <div className="number-of-the-field-mobile">
                                            <div className="number-of-the-field-mob-inner">
                                                <p>02</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-howitworks-image-content col-md-6">
                                        <div className="main-howitworks-image-content-inner">
                                            <div className="image-store-item">
                                                <div className="image-inner">
                                                    <div id="lottie7264" className="lottie-anim" data-anim="https://cdn.felyx.com/uploads/animation/howitworks2.json"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-howitworks-content col-md-6">
                                        <div className="main-howitworks-content-inner main-content-inner-parent slide-for-more-parent">
                                            <div className="number-of-the-field">
                                                <p>02</p>
                                            </div>
                                            <div className="content howitworks-content">
                                                <div className="howitworks-top-content">
                                                    <h2>Ride &amp; Enjoy</h2>
                                                    <p className="p1">Within the felyx service area, you can drive everywhere fast and carefree.</p>
                                                </div>
                                            </div>

                                            <div className="content howitworks-read-more read-more-section">
                                                <p>We make sure the batteries are charged. Each felyx is equipped with a smartphone-holder and two USB-ports. Therefore, you can always use handsfree navigation and arrive at your destination with a charged smartphone.</p>
                                            </div>
                                            <div className="read-more-button">
                                                <p><span data-hover="Read more">Read more</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="howitworks-section-wrapper">
                            <div className="container howitworks-container">
                                <div className="row">
                                    <div className="mobile-visible-number-title-section">
                                        <div className="number-of-the-field-mobile">
                                            <div className="number-of-the-field-mob-inner">
                                                <p>03</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-howitworks-image-content col-md-6">
                                        <div className="main-howitworks-image-content-inner">
                                            <div className="image-store-item">
                                                <div className="image-inner">
                                                    <div id="lottie4652" className="lottie-anim" data-anim="https://cdn.felyx.com/uploads/animation/howitworks3.json"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-howitworks-content col-md-6">
                                        <div className="main-howitworks-content-inner main-content-inner-parent slide-for-more-parent">
                                            <div className="number-of-the-field">
                                                <p>03</p>
                                            </div>
                                            <div className="content howitworks-content">
                                                <div className="howitworks-top-content">
                                                    <h2>Park &amp; Deactivate</h2>
                                                    <p className="p1">Park the felyx scooter for free and deactivate with the app.</p>
                                                </div>
                                            </div>

                                            <div className="content howitworks-read-more read-more-section">
                                                <p>Once you have arrived at your destination, you can easily park the felyx scooter at a suitable location. You can end your reservation with the app when you are parked correctly within the service area. After your ride you can use the app to get trip information and see invoices.</p>
                                            </div>
                                            <div className="read-more-button">
                                                <p><span data-hover="Read more">Read more</span></p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="video-box-section-wrapper ">
                            <div className="container video-box-container">
                                <div className="row">
                                    <div className="main-video-box-content col-lg-12">
                                        <div className="main-video-box-content-inner">
                                            <div className="content video-box-content">
                                                <div className="video-box-position large-text-section">
                                                    <h2 style={{ textAlign: "center" }}>felyx app</h2>
                                                    <p style={{ textAlign: "center" }}>Download the felyx app to use our e-scooters. With the app you are able to find and reserve vehicles close to you. You can activate a reserved e-scooter with the app, so you will not need keys or access cards.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="embed-container">
                                <video loop="" muted="" playsinline="">
                                    <source src="https://cdn.felyx.com/uploads/videos/final_render_v4_optimized.mp4" type="video/mp4" />
                                </video>

                            </div>
                        </div> <div className="text-box-with-image      ">
                            <div className="simple-text-box-section-wrapper   content-main-wrapper">
                                <div className="container simple-text-box-container">
                                    <div className="row simple-text-box-row">

                                        <div className="main-simple-text-box-content col-lg-12">
                                            <div className="main-simple-text-box-content-inner main-content-inner-parent slide-for-more-parent ">
                                                <div className="content simple-text-box-content">
                                                    <div className="simple-text-box-position large-text-section">
                                                        <h2>About us</h2>
                                                        <p>felyx is an innovative scale-up with ambitious plans for sustainable transport to move through the city.</p>
                                                        <span className="green-button"><a href="en/about-us/index.html" className="fliphover"><span data-hover="More info">More info</span></a></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="image-content-wrappper col-sm-6">
                                            <div className="image-content-inner">
                                                <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201920%201680'%3E%3C/svg%3E" alt="moped_felyx" width="1920" height="1680" data-lazy-src="../../cdn.felyx.com/uploads/2021/03/scooter_cut_optimized.png" /><noscript><img src="../../cdn.felyx.com/uploads/2021/03/scooter_cut_optimized.png" alt="moped_felyx" width="1920" height="1680" /></noscript>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="simple-text-box-section-wrapper   content-main-wrapper">
                            <div className="container simple-text-box-container">
                                <div className="row simple-text-box-row">
                                    <i className="fa-solid fa-face-mask"></i>
                                    <div className="main-simple-text-box-content col-lg-12">
                                        <div className="main-simple-text-box-content-inner main-content-inner-parent slide-for-more-parent ">
                                            <div className="content simple-text-box-content">
                                                <div className="simple-text-box-position large-text-section">
                                                    <h2 style={{ textAlign: "center" }}>Questions?</h2>
                                                    <p style={{ textAlign: "center" }}>It might be that you have some questions about felyx. Visit our frequently asked questions (FAQ) to get your answers.</p>
                                                    <span className="green-button"><a href="en/faq/index.html" className="fliphover"><span data-hover="More info">More info</span></a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-content-wrappper col-sm-6">
                                    </div>

                                </div>
                            </div>
                        </div>

                    </main>
                </div>

            </div >
        </div>
    )
}

export default Content
