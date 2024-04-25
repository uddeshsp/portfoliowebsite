import React from 'react'; 

const Home = () =>{
    return (
        <>
<main className="main-homepage">
    {/* <!-- Header --> */}
    {/* <header className="header-area">
        <div className="container">
            <div className="gx-row d-flex align-items-center justify-content-between">
                <a href="index-2.html" className="logo">
                    <img src="assests/images/logo.svg" alt="Logo"/>
                </a>

                <nav className="navbar">
                    <ul className="menu">
                        <li className="active"><NavLink activeClassName="active" to="/">Home</NavLink></li>
                        <li><NavLink activeClassName="active" to="About">About</NavLink></li>
                        <li><NavLink activeClassName="active" to="Works">Works</NavLink></li>
                        <li><NavLink activeClassName="active" to="Contact">Contact</NavLink></li>
                    </ul>
                    <a href="contact.html" className="theme-btn">Let's talk</a>
                </nav>

                <a href="contact.html" className="theme-btn">Let's talk</a>

                <div className="show-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header> */}
    {/* <!-- About --> */}
    <section className="about-area"> 
                <div className="container">
                    <div className="row">  
                       <div className="col-md-6" data-aos="zoom-in">
                         <div className="about-me-box shadow-box">
                          <a className="overlay-link" href="About"></a>
                          <img src="assests/images/bg1.png" alt="BG" className="bg-img"/>
                          <div className="img-box">
                            <img src="assests/images/me.png" alt="About Me"/>
                          </div>
                        <div className="infos">
                            <h4>A WEB DESIGNER</h4>
                            <h1>David Henderson.</h1>
                            <p>I am a Web Designer based in san francisco.</p>
                            <a href="#" className="about-btn">
                            <img src="assests/images/icon.svg" alt="Button"/>
                            </a>
                        </div> 
                     </div>
                </div>
      

                <div className="col-md-6">
                    <div className="about-credentials-wrap">
                        <div data-aos="zoom-in">
                            <div className="banner shadow-box">
                                <div className="marquee">
                                    <div>
                                      <span>LATEST WORK AND <b>FEATURED</b> 
                                      <img src="assests/images/star1.svg" alt="Star"/>
                                       LATEST WORK AND <b>FEATURED</b>
                                        <img src="assests/images/star1.svg" alt="Star"/>
                                        LATEST WORK AND <b>FEATURED</b>
                                        <img src="assests/images/star1.svg" alt="Star"/> 
                                        LATEST WORK AND <b>FEATURED</b> LATEST WORK AND
                                        <img src="assests/images/star1.svg" alt="Star"/>
                                        LATEST WORK AND <b>FEATURED</b> LATEST WORK AND <img src="assests/images/star1.svg" alt="Star"/>
                                        </span>
                                    </div>
                                  </div>
                            </div>
                        </div>

                        <div className="gx-row d-flex gap-24">
                            <div data-aos="zoom-in">
                                <div className="about-crenditials-box info-box shadow-box h-full">
                                    <a className="overlay-link" href="Details"></a>
                                    <img src="assests/images/bg1.png" alt="BG" className="bg-img"/>
                                    <img src="assests/images/sign.png" alt="Sign"/>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="infos">
                                            <h4>more about me</h4>
                                            <h1>Credentials</h1>
                                        </div>
                                        <a href="credentials.html" className="about-btn">
                                            <img src="assests/images/icon.svg" alt="Button"/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div data-aos="zoom-in">
                                <div className="about-project-box info-box shadow-box h-full">
                                    <a className="overlay-link" href="Works"></a>
                                    <img src="assests/images/bg1.png" alt="BG" className="bg-img"/>
                                    <img src="assests/images/my-works.png" alt="My Works"/>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="infos">
                                            <h4>SHOWCASE</h4>
                                            <h1>Projects</h1>
                                        </div>
                                        <a href="#" className="about-btn">
                                            <img src="assests/images/icon.svg" alt="Button"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-24">
                <div className="col-md-12">
                    <div className="blog-service-profile-wrap d-flex gap-24">
                        {/* <div data-aos="zoom-in">
                            <div className="about-blog-box info-box shadow-box h-full">
                                <a href="blog.html" className="overlay-link"></a>
                                <img src="assests/images/bg1.png" alt="BG" className="bg-img"/>
                                <img src="assests/images/gfonts.png" alt="GFonts"/>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="infos">
                                        <h4>Blog</h4>
                                        <h1>GFonts</h1>
                                    </div>
                                    <a href="blog.html" className="about-btn">
                                        <img src="assests/images/icon.svg" alt="Button"/>
                                    </a>
                                </div>
                            </div>
                        </div> */}

                        <div data-aos="zoom-in" className="flex-1">
                            <div className="about-services-box info-box shadow-box h-full">
                                <a href="Service" className="overlay-link"></a>
                                <img src="assests/images/bg1.png" alt="BG" className="bg-img"/>
                               
                                <div className="icon-boxes">
                                        <i className="iconoir-camera"></i>
                                        <i className="iconoir-design-pencil"></i>
                                        <i className="iconoir-color-filter"></i>
                                        <i className="iconoir-square3d-corner-to-corner"></i>
                                    </div>
                               
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="infos">
                                        <h4>specialization</h4>
                                        <h1>Services Offering</h1>
                                    </div>

                                    <a href="Service" className="about-btn">
                                        <img src="assests/images/icon.svg" alt="Button"/>
                                    </a>

                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in">
                            <div className="about-profile-box info-box shadow-box h-full">
                                <img src="assests/images/bg1.png" alt="BG" className="bg-img"/>
                                <div className="inner-profile-icons shadow-box">
                                <a href="#">
                                            <i className="iconoir-dribbble"></i>
                                        </a>
                                        <a href="#">
                                            <i className="iconoir-twitter"></i>
                                        </a>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="infos">
                                        <h4>Stay with me</h4>
                                        <h1>Profiles</h1>
                                    </div>

                                    <a href="Contact" className="about-btn">
                                        <img src="assests/images/icon.svg" alt="Button"/>
                                    </a>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>

            <div className="row mt-24">
                <div className="col-md-6" data-aos="zoom-in">
                        
                    <div className="about-client-box info-box shadow-box">
                        <img src="assests/images/bg1.png" alt="BG" className="bg-img"/>
                        <div className="clients d-flex align-items-start gap-24 justify-content-center">
                            <div className="client-item">
                                <h1>07</h1>
                                <p>Years <br/>Experience</p>
                            </div>

                            <div className="client-item">
                                <h1>+125</h1>
                                <p>CLIENTS <br/>WORLDWIDE</p>
                            </div>

                            <div className="client-item">
                                <h1>+210</h1>
                                <p>Total <br/>Projects</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-6" data-aos="zoom-in">
                        
                    <div className="about-contact-box info-box shadow-box">
                        <a className="overlay-link" href="Contact"></a>
                        <img src="assests/images/bg1.png" alt="BG" className="bg-img"/>
                        <img src="assests/images/icon2.png" alt="Icon" className="star-icon"/>
                        <h1>Let's <br/>work <span>together.</span></h1>
                        <a href="#" className="about-btn">
                            <img src="assests/images/icon.svg" alt="Button"/>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </section>

    {/* <!-- Footer --> */}
    {/* <footer className="footer-area">
        <div className="container">
            <div className="footer-content text-center">
                <a href="index-2.html" className="logo">
                    <img src="assests/images/logo.svg" alt="Logo"/>
                </a>
                <ul className="footer-menu">
                    <li><a href="index-2.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="works.html">Works</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <p className="copyright">
                    &copy; All rights reserved by <span>WordPress River</span>
                </p>
            </div>
        </div>
    </footer> */}

</main>





</>
    )
}
export default Home;