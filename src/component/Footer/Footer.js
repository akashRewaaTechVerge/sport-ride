import React from 'react'
import logo from "../images/spot-ride-logo-mains.png"

function Footer() {
    return (
        <div>
            <div className="newsletter-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 newsletter-cta-title">
                            <p>Want to know when felyx will be available in your area?</p>
                        </div>
                        <div className="col-md-4 newsletter-cta">
                            <p><a className="newsletter-button fliphover" href="#"><span data-hover="Stay updated">Stay updated</span></a></p>
                        </div>
                    </div>
                </div>
            </div>

            <footer id="colophon" className="site-footer" role="contentinfo">
                <div className="widget-wrapper">

                    <div className="container">
                        <div className="row footer-widgets-wrapper">


                            <div className="col-md-4 footer-column-2">
                                <aside id="text-2" className="widget widget_text">
                                    <div className="footer-logo-wrap">
                                        <a href="en/index.html" rel="home">
                                            <img src={logo} style={{width:"16%"}} />
                                        </a>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-md-4 footer-column-3">
                                <aside className="widget widget_librafire_social_widget">
                                    <h4 className="widget-title">Social media</h4>
                                    <ul className="social-wrap">
                                        <li>
                                            <a href="https://www.facebook.com/ridefelyx" target="_blank"><i className="fab fa-facebook-square"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/ridefelyx" target="_blank"><i className="fab fa-twitter-square"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/felyx" target="_blank"><i className="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://youtu.be/gdaUfdeyHEU" target="_blank"><i className="fab fa-youtube-square"></i></a>
                                        </li>
                                    </ul>
                                </aside>
                            </div>
                            <div className="col-md-4 footer-column-4">
                                <aside className="widget widget_librafire_social_widget">
                                    <h4 className="widget-title">Choose your country</h4>
                                    <div className="textwidget">
                                        <form className="" method="post" >
                                            <div className="country-select-form">
                                                <label for="select-country"><svg width="27" height="35" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.45.657c7.453 0 13.45 5.91 13.45 13.252 0 7.573-5.066 15.433-11.645 19.85-.466.459-1.106.688-1.805.688a2.8 2.8 0 01-1.805-.688C5.065 29.342 0 21.482 0 13.909 0 6.566 5.997.657 13.45.657zm.065 17.782a5.668 5.668 0 100-11.335 5.668 5.668 0 000 11.335z" fill="#fff" /></svg>
                                                    <select id="select-country" className="select-country" name="select-country" placeholder="Choose your country">
                                                        <option value="" data-url="">Select country</option>
                                                        <option value="nl" data-url="../nl/en/index.html">Netherlands</option>
                                                        <option value="be" data-url="../be/en/index.html">Belgium</option>
                                                        <option value="de" data-url="en/index.html">Germany</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </aside>
                                <aside id="text-5" className="widget widget_text">
                                    <div className="textwidget">
                                        <p><a href="https://itunes.apple.com/us/app/felyx/id1250107307?ls=1&amp;mt=8"><img className="alignnone size-medium wp-image-53 lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E" alt="" width="1" height="1" data-lazy-src="../nl/en/test/wp-content/uploads/2019/03/felyx_btn_appstore_white.html" /><noscript><img className="alignnone size-medium wp-image-53" src="../nl/en/test/wp-content/uploads/2019/03/felyx_btn_appstore_white.html" alt="" width="1" height="1" /></noscript></a></p>
                                        <p><a href="https://play.google.com/store/apps/details?id=com.felyx.android"><img className="alignnone size-medium wp-image-51 lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E" alt="" width="1" height="1" data-lazy-src="../nl/en/test/wp-content/uploads/2019/03/felyx_btn_appandroid_white.html" /><noscript><img className="alignnone size-medium wp-image-51" src="../nl/en/test/wp-content/uploads/2019/03/felyx_btn_appandroid_white.html" alt="" width="1" height="1" /></noscript></a></p>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-md-4 footer-column-2">
                                <aside id="text-3" className="widget widget_text">
                                    <h4 className="widget-title">Contact</h4>
                                    <div className="textwidget">
                                        <p className="footer-email-section"><i className="inquiry-icon"></i>Customer service: <a href="../cdn-cgi/l/email-protection.html#1d3b3e2c2c28263b3e2c2c2a263b3e2c2c2f263b3e2c2c2f263b3e2c2c2c263b3e2c2c29263b3e2c2c2b263b3e2c2d2e263b3e2c2d2c263b3e2c2c29263b3e2c2d24263b3e242a263b3e2c2c2d263b3e2c2f2c263b3e2b29263b3e2c2d2f263b3e2c2d2c263b3e2c2d25263b3e2c2f2c263b3e2c2f2d263b3e292b263b3e2424263b3e2c2c2c263b3e2c2d2426" className="regular-email"><span className="__cf_email__" data-cfemail="f0838580809f82849795829d919e89b096959c8988de939f9d">[email&#160;protected]</span></a></p>
                                        <p className="footer-email-section"><i className="fas fa-envelope"></i>Press: <a href="../cdn-cgi/l/email-protection.html#123431232320293431232326293431232223293431232327293431232327293431232223293431242629343123222029343123222329343123222a29343123202329343123202229343126242934312b2b29343123232329343123222b29"><span className="__cf_email__" data-cfemail="18686a7d6b6b7d587e7d746160367b7775">[email&#160;protected]</span></a></p>                  <p className="footer-email-section"><i className="partnerships-icon"></i>Partnerships: <a href="../cdn-cgi/l/email-protection.html#c8eeebf9f8faf3eeebf9f8f9f3eeebf9f8f0f3eeebf9faf9f3eeebf9faf8f3eeebf9f8faf3eeebf9f9f9f3eeebf9f9fcf3eeebf1f0f3eeebf9f9fff3eeebf9f9fdf3eeebf9f8fdf3eeebf9f9f8f3eeebf9f8f9f3eeebf9f9fdf3eeebf9f9fdf3eeebfefcf3eeebf9f8faf3eeebf9f8f9f3eeebf9f8f0f3eeebf9faf9f3eeebf9faf8f3eeebfcfef3eeebf1f1f3eeebf9f9f9f3eeebf9f8f1f3"><span className="__cf_email__" data-cfemail="8fe9eae3f6f7e9e0fdedfafce6e1eafcfccfe9eae3f6f7a1ece0e2">[email&#160;protected]</span></a></p>                                      <p><i className="fas fa-phone"></i><a href="tel:+493056795107">+493056795107</a>
                                            <br /><br />Available workdays from 7.00-00.00 for general questions and 24/7 for immediate assistance</p>
                                        <p><i className="fas fa-map-marker-alt"></i>Stresemannstraße 121, <br />
                                            10963 Berlin,<br />
                                            Germany</p>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-md-4 footer-column-3">
                                <aside id="nav_menu-7" className="widget widget_nav_menu">
                                    <h4 className="widget-title">About us</h4>
                                    <div>
                                        <ul className="menu">
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="en/about-us/index.html" >About us</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://careers.felyx.nl/" >Careers</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="en/imprint/index.html" >Imprint</a></li>
                                        </ul>
                                    </div>
                                </aside>
                                <aside id="text-4" className="widget widget_text">
                                    <div className="textwidget">
                                        <p><a href="https://app.adjust.com/ctz2bar?engagement_type=fallback_click&amp;redirect=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid1250107307%3Fmt%3D8" target="_blank"><img className="alignnone size-medium wp-image-53" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E" alt="" width="1" height="1" data-lazy-src="https://cdn.felyx.com/uploads/2021/09/W-APPLE.svg" /><noscript><img className="alignnone size-medium wp-image-53" src="https://cdn.felyx.com/uploads/2021/09/W-APPLE.svg" alt="" width="1" height="1" /></noscript></a></p>
                                        <p><a href="https://app.adjust.com/i3zyuwb" target="_blank"><img className="alignnone size-medium wp-image-51" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E" alt="" width="1" height="1" data-lazy-src="https://cdn.felyx.com/uploads/2021/09/W-GOOGLE.svg" /><noscript><img className="alignnone size-medium wp-image-51" src="https://cdn.felyx.com/uploads/2021/09/W-GOOGLE.svg" alt="" width="1" height="1" /></noscript></a></p>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-md-4 footer-column-4">
                                <aside id="nav_menu-6" className="widget widget_nav_menu">
                                    <h4 className="widget-title">Product</h4>
                                    <div>
                                        <ul className="menu">
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="en/index.html#how-it-works" >How it works</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="en/pricing/index.html" >Pricing</a></li>
                                        </ul>
                                    </div>
                                </aside>
                                <aside id="nav_menu-9" className="widget widget_nav_menu">
                                    <h4 className="widget-title">Support</h4>
                                    <div>
                                        <ul className="menu">
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="en/faq/index.html" >FAQ</a></li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-info">
                    <div className="container">
                        <div className="footer-copyright col-md-12 align-left">
                            <span>© Copyright 2022 felyx sharing B.V. | felyx® is a registered trademark</span>
                            <span> | </span><a href="../docs/de/en/privacyverklaring-felyx-en.html" target="_blank">Privacy statement</a>              <span> | </span><a href="../docs/de/en/general-terms-en.html" target="_blank">Terms and conditions</a>              <span> | </span><a href="en/cookie-statement.html" target="_blank">Cookie policy</a>            </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer
