import React, { useEffect, useState } from 'react';
import './Content.css'
import CityImage from "../images/city-image.jpg"
import { NavLink  , Link} from 'react-router-dom';


function Content() {
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div>
            <div id="" class="site-content">
                <div id="primary" class="content-area">
                    <main id="main" class="site-main" role="main" >
                        <div class="home-hero-section-wrapper embed-container">
                            <img style={{ paddingTop: '10rem' }} src={CityImage} />

                        </div>
                        <div class="stores-buttons-wrapper hero-buttons-side-fixed" style={{ opacity: '0', visibility: 'hidden' }}>
                            <div class="stores-buttons-inner">
                                <div class="container">
                                    <div class="row">
                                        <div class="store-buttons-wrap col-lg-6">
                                            <div class="store-buttons-wrap-inner">
                                                <div class="row">
                                                    <div class="image-store-item col-6">
                                                        <div class="image-inner">
                                                            <a href="https://app.adjust.com/ctz2bar?engagement_type=fallback_click&amp;redirect=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid1250107307%3Fmt%3D8"><img src="https://cdn.felyx.com/uploads/2021/09/B-APPLE.svg" alt="" class="lazyloaded" data-ll-status="loaded" /><noscript><img src="https://cdn.felyx.com/uploads/2021/09/B-APPLE.svg" alt="" /></noscript></a>
                                                        </div>
                                                    </div>
                                                    <div class="image-store-item col-6">
                                                        <div class="image-inner">
                                                            <a href="https://app.adjust.com/i3zyuwb"><img src="https://cdn.felyx.com/uploads/2021/09/B-GOOGLE.svg" alt="" class="lazyloaded" data-ll-status="loaded" /><noscript><img src="https://cdn.felyx.com/uploads/2021/09/B-GOOGLE.svg" alt="" /></noscript></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="simple-text-box-section-wrapper   content-main-wrapper" style={{ backgroundColor: '#ffffff' }}>
                            <div class="container simple-text-box-container">
                                <div class="row simple-text-box-row">

                                    <div class="main-simple-text-box-content col-lg-12">
                                        <div class="main-simple-text-box-content-inner main-content-inner-parent slide-for-more-parent add-tree">
                                            <div class="content simple-text-box-content">
                                                <div class="simple-text-box-position large-text-section">
                                                    <h2 style={{ textAlign: 'center' }}>Receive free riding minutes</h2>
                                                    <p style={{ textAlign: 'center' }}>Create an account and receive 30 free riding minutes</p>
                                                    <span class="green-button"><a href="https://felyx.frontend.fleetbird.eu/site/session?targetURL=https%3A%2F%2Ffelyx.com%2Fbe%2Fen%2Fregister" class="fliphover"><span data-hover="Register">Register</span></a> </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="image-content-wrappper col-sm-6">
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="why-felyx-section-wrapper">
                            <div class="main-why-felyx-content-inner">
                                <div class="container">
                                    <div class="read-more-why-felyx-items-wrapper row">
                                        <div class="why-flexy-main-content">
                                            <div class="why-flexy-main-content-inner align-center large-text-section">
                                                <h2>Where do you plan your trip?</h2>
                                                <p></p><p>felyx is available in several cities in Europe. Choose the city you are planning your trip to see specific information about pricing, service area and local regulations.</p>
                                                <p></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="simple-text-box-section-wrapper content-main-wrapper" id='about'>
                            <div class="container simple-text-box-container">
                                <div class="row simple-text-box-row">

                                    <div class="main-simple-text-box-content col-lg-12">
                                        <div class="main-simple-text-box-content-inner main-content-inner-parent slide-for-more-parent ">
                                            <div class="content simple-text-box-content">
                                                <div class="simple-text-box-position large-text-section">
                                                    <h2 style={{ textAlign: "center" }}>Who is felyx?</h2>
                                                    <p style={{ textAlign: "center" }}>felyx offers shared electric scooters. You can start your ride in 3 simple steps. Use the felyx app to locate, reserve, and activate the nearest e-scooter.</p>
                                                    <div class="read-more-hidden-section content read-more-section">
                                                        <p>In Brussels, there are more than 600 fully electric scooters.</p>
                                                    </div>
                                                    <div class="read-more-button">
                                                        <p><span data-hover="Read more">Read more</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="image-content-wrappper col-sm-6">
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="howitworks-section-wrapper" id="how-it-works">
                            <div class="container howitworks-container">
                                <div class="row">
                                    <div class="mobile-visible-number-title-section">
                                        <div class="number-of-the-field-mobile">
                                            <div class="number-of-the-field-mob-inner">
                                                <p>01</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main-howitworks-image-content col-md-6">
                                        <div class="main-howitworks-image-content-inner">
                                            <div class="image-store-item">
                                                <div class="image-inner">
                                                    <div id="lottie3461" class="lottie-anim" data-anim="https://cdn.felyx.com/uploads/animation/howitworks1.json"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main-howitworks-content col-md-6">
                                        <div class="main-howitworks-content-inner main-content-inner-parent slide-for-more-parent">
                                            <div class="number-of-the-field">
                                                <p>01</p>
                                            </div>
                                            <div class="content howitworks-content">
                                                <div class="howitworks-top-content">
                                                    <h2>Find &amp; Reserve</h2>
                                                    <p>Use the app to locate nearby felyx e-scooters.</p>
                                                </div>
                                            </div>

                                            <div class="content howitworks-read-more read-more-section">
                                                <p>You can make a free 15-minute reservation, and can easily walk to your reserved e-scooter by using the map function. Activate the felyx scooter when you are next to it and start your ride.</p>
                                            </div>
                                            <div class="read-more-button">
                                                <Link to='/About' className="nav-link">Read More</Link>
                                                 {/* <Link to={'/About'} activeClassName="active" 
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
                        <div class="howitworks-section-wrapper">
                            <div class="container howitworks-container">
                                <div class="row">
                                    <div class="mobile-visible-number-title-section">
                                        <div class="number-of-the-field-mobile">
                                            <div class="number-of-the-field-mob-inner">
                                                <p>02</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main-howitworks-image-content col-md-6">
                                        <div class="main-howitworks-image-content-inner">
                                            <div class="image-store-item">
                                                <div class="image-inner">
                                                    <div id="lottie7264" class="lottie-anim" data-anim="https://cdn.felyx.com/uploads/animation/howitworks2.json"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main-howitworks-content col-md-6">
                                        <div class="main-howitworks-content-inner main-content-inner-parent slide-for-more-parent">
                                            <div class="number-of-the-field">
                                                <p>02</p>
                                            </div>
                                            <div class="content howitworks-content">
                                                <div class="howitworks-top-content">
                                                    <h2>Ride &amp; Enjoy</h2>
                                                    <p class="p1">Within the felyx service area, you can drive everywhere fast and carefree.</p>
                                                </div>
                                            </div>

                                            <div class="content howitworks-read-more read-more-section">
                                                <p>We make sure the batteries are charged. Each felyx is equipped with a smartphone-holder and two USB-ports. Therefore, you can always use handsfree navigation and arrive at your destination with a charged smartphone.</p>
                                            </div>
                                            <div class="read-more-button">
                                                <p><span data-hover="Read more">Read more</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="howitworks-section-wrapper">
                            <div class="container howitworks-container">
                                <div class="row">
                                    <div class="mobile-visible-number-title-section">
                                        <div class="number-of-the-field-mobile">
                                            <div class="number-of-the-field-mob-inner">
                                                <p>03</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main-howitworks-image-content col-md-6">
                                        <div class="main-howitworks-image-content-inner">
                                            <div class="image-store-item">
                                                <div class="image-inner">
                                                    <div id="lottie4652" class="lottie-anim" data-anim="https://cdn.felyx.com/uploads/animation/howitworks3.json"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main-howitworks-content col-md-6">
                                        <div class="main-howitworks-content-inner main-content-inner-parent slide-for-more-parent">
                                            <div class="number-of-the-field">
                                                <p>03</p>
                                            </div>
                                            <div class="content howitworks-content">
                                                <div class="howitworks-top-content">
                                                    <h2>Park &amp; Deactivate</h2>
                                                    <p class="p1">Park the felyx scooter for free and deactivate with the app.</p>
                                                </div>
                                            </div>

                                            <div class="content howitworks-read-more read-more-section">
                                                <p>Once you have arrived at your destination, you can easily park the felyx scooter at a suitable location. You can end your reservation with the app when you are parked correctly within the service area. After your ride you can use the app to get trip information and see invoices.</p>
                                            </div>
                                            <div class="read-more-button">
                                                <p><span data-hover="Read more">Read more</span></p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="video-box-section-wrapper ">
                            <div class="container video-box-container">
                                <div class="row">
                                    <div class="main-video-box-content col-lg-12">
                                        <div class="main-video-box-content-inner">
                                            <div class="content video-box-content">
                                                <div class="video-box-position large-text-section">
                                                    <h2 style={{ textAlign: "center" }}>felyx app</h2>
                                                    <p style={{ textAlign: "center" }}>Download the felyx app to use our e-scooters. With the app you are able to find and reserve vehicles close to you. You can activate a reserved e-scooter with the app, so you will not need keys or access cards.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="embed-container">
                                <video loop="" muted="" playsinline="">
                                    <source src="https://cdn.felyx.com/uploads/videos/final_render_v4_optimized.mp4" type="video/mp4" />
                                </video>

                            </div>
                        </div> <div class="text-box-with-image      ">
                            <div class="simple-text-box-section-wrapper   content-main-wrapper">
                                <div class="container simple-text-box-container">
                                    <div class="row simple-text-box-row">

                                        <div class="main-simple-text-box-content col-lg-12">
                                            <div class="main-simple-text-box-content-inner main-content-inner-parent slide-for-more-parent ">
                                                <div class="content simple-text-box-content">
                                                    <div class="simple-text-box-position large-text-section">
                                                        <h2>About us</h2>
                                                        <p>felyx is an innovative scale-up with ambitious plans for sustainable transport to move through the city.</p>
                                                        <span class="green-button"><a href="en/about-us/index.html" class="fliphover"><span data-hover="More info">More info</span></a></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="image-content-wrappper col-sm-6">
                                            <div class="image-content-inner">
                                                <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201920%201680'%3E%3C/svg%3E" alt="moped_felyx" width="1920" height="1680" data-lazy-src="../../cdn.felyx.com/uploads/2021/03/scooter_cut_optimized.png" /><noscript><img src="../../cdn.felyx.com/uploads/2021/03/scooter_cut_optimized.png" alt="moped_felyx" width="1920" height="1680" /></noscript>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="simple-text-box-section-wrapper   content-main-wrapper">
                            <div class="container simple-text-box-container">
                                <div class="row simple-text-box-row">

                                    <div class="main-simple-text-box-content col-lg-12">
                                        <div class="main-simple-text-box-content-inner main-content-inner-parent slide-for-more-parent ">
                                            <div class="content simple-text-box-content">
                                                <div class="simple-text-box-position large-text-section">
                                                    <h2 style={{ textAlign: "center" }}>Questions?</h2>
                                                    <p style={{ textAlign: "center" }}>It might be that you have some questions about felyx. Visit our frequently asked questions (FAQ) to get your answers.</p>
                                                    <span class="green-button"><a href="en/faq/index.html" class="fliphover"><span data-hover="More info">More info</span></a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="image-content-wrappper col-sm-6">
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
