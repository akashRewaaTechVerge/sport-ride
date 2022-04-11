import React from 'react'
import AboutImg from '../images/about/slide2.jpg'

function About() {
  return (
    <>
      <div id="" class="site-content">
        <div id="primary" class="content-area">
          <div id="" class="site-content">
              <div id="primary" class="content-area">
                  <main id="main" class="site-main" role="main" >
                      <div class="home-hero-section-wrapper embed-container">
                      {/* <div> */}
                        <img src={AboutImg} alt="Not Found" className='AboutName' style={{width:"100%"}} />
                       </div> 
                      <div className="sectionTwo">
                      <div> 
                      <div class="why-felyx-section-wrapper">
                            <div class="main-why-felyx-content-inner">
                                <div class="container">
                                    <div class="read-more-why-felyx-items-wrapper row">
                                        <div class="why-flexy-main-content">
                                            <div class="why-flexy-main-content-inner align-center large-text-section">
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
                                                {/* <Link to='/About' className="nav-link">Read More</Link> */}
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
