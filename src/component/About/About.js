import React from 'react'
import AboutImg from '../images/about/slide2.jpg'

function About() {
  return (
    <>
      <div id="" className="site-content">
        <div id="primary" className="content-area">
          <div id="" className="site-content">
              <div id="primary" className="content-area">
                  <main id="main" className="site-main" role="main" >
                      <div className="home-hero-section-wrapper embed-container">
                      {/* <div> */}
                        <img src={AboutImg} alt="Not Found" className='AboutName' style={{width:"100%"}} />
                       </div> 
                      <div className="sectionTwo">
                      <div> 
                      <div className="why-felyx-section-wrapper">
                            <div className="main-why-felyx-content-inner">
                                <div className="container">
                                    <div className="read-more-why-felyx-items-wrapper row">
                                        <div className="why-flexy-main-content">
                                            <div className="why-flexy-main-content-inner align-center large-text-section">
                                                {/* <h2>Where do you plan your trip?</h2> */}
                                                <h2>About</h2>
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
                                                {/* <Link to='/About' className="nav-link">Read More</Link> */}
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
                        
                        
                        </div><br></br>
                      <div></div>
                      </div>
                  </main>
              </div>
          </div >
        </div>
       </div >
    </>
  )
}

export default About
