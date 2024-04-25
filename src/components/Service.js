const Service = () =>{
 return( 
  <>
    <main className="main-homepage">
 
      {/* <!-- Header -->
      <header className="header-area">
          <div className="container">
              <div className="gx-row d-flex align-items-center justify-content-between">
                  <a href="index-2.html" className="logo">
                     <img src="assests/images/logo.svg" alt="Logo"/>
                 </a>

                 <nav className="navbar">
                     <ul className="menu">
                         <li className="active"><a href="index-2.html">Home</a></li>
                         <li><a href="about.html">About</a></li>
                         <li><a href="works.html">Works</a></li>
                         <li><a href="contact.html">Contact</a></li>
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

     {/* <!-- Service --> */}
     <section className="service-area">
         <div className="container">
              <h1 className="section-heading" data-aos="fade-up">
                <img src="assests/images/star-2.png" alt="Star" />
                    My Offerings 
                    <img src="assests/images/star-2.png" alt="Star"/>
            </h1>
             <div className="row">

                 {/* <!-- Sidebar --> */}
                 <div className="col-md-4">
                     <div className="service-sidebar" data-aos="fade-right">
                         <div className="service-sidebar-inner shadow-box">
                             <ul>
                                 <li>
                                     <i className="iconoir-camera icon"></i>
                                     PHOTOGRAPHY
                                 </li>
                                 <li>
                                     <i className="iconoir-design-pencil icon"></i>
                                     WEB DESIGNING
                                 </li>
                                 <li>
                                     <i className="iconoir-color-filter icon"></i>
                                     BRANDING
                                 </li>
                                 <li>
                                     <i className="iconoir-dev-mode-phone icon"></i>
                                     DEVELOPMENT
                                 </li>
                             </ul>
                         </div>
                     </div>
                 </div>

                 {/* <!-- Content --> */}
                 <div className="col-md-8">
                     <h1 className="section-heading" data-aos="fade-up">
                     <img src="assests/images/star-2.png" alt="Star" /> 
                     My Offerings <img src="assests/images/star-2.png" alt="Star"/></h1>

                     <div className="service-content-wrap" data-aos="zoom-in">
                         <div className="service-content-inner shadow-box">
                             <div className="service-items">
                                 <div className="service-item">
                                     <h3>Photography</h3>
                                     <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                 </div>
                                 <div className="service-item">
                                     <h3>Web Designing</h3>
                                     <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                 </div>
                                 <div className="service-item">
                                     <h3>Branding</h3>
                                     <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                 </div>
                                 <div className="service-item">
                                     <h3>Development</h3>
                                     <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
 
             </div>


             <div className="row mt-24">
                 <div className="col-md-12">
                     <div className="d-flex profile-contact-credentials-wrap gap-24">

                         <div data-aos="zoom-in">
                             <div className="about-profile-box info-box shadow-box h-full">
                                 <img src="assests/images/bg1.png" alt="BG" className="bg-img" />
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
                                         <img src="assests/images/icon.svg" alt="Button" />
                                     </a>
 
                                 </div>
                             </div>
                         </div>

                         <div data-aos="zoom-in" className="flex-1">
                             <div className="about-contact-box info-box shadow-box">
                                 <a className="overlay-link" href="Contact"></a>
                                 <img src="assests/images/bg1.png" alt="BG" className="bg-img" />
                                 <img src="assests/images/icon2.png" alt="Icon" className="star-icon" />
                                 <h1>Let's <br/>work <span>together.</span></h1>
                                 <a href="Contact" className="about-btn">
                                     <img src="assests/images/icon.svg" alt="Button" />
                                 </a>
                             </div>
                         </div>
 
                         <div data-aos="zoom-in" className="h-full">
                             <div className="about-crenditials-box info-box shadow-box">
                                 <a className="overlay-link" href="Details"></a>
                                 <img src="assests/images/bg1.png" alt="BG" className="bg-img"/>
                                 <img src="assests/images/sign.png" alt="Sign"/>
                                 <div className="d-flex align-items-center justify-content-between">
                                     <div className="infos">
                                         <h4>more about me</h4>
                                         <h1>Credentials</h1>
                                     </div>
 
                                     <a href="Details" className="about-btn">
                                         <img src="assests/images/icon.svg" alt="Button"/>
                                     </a>
 
                                 </div>
                             </div>
                         </div>

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
    

export default Service;