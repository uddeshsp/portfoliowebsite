const About_emt= () => {
    return(
     <>
        <section className="about-area">
                   <div className="container">
                       <div className="d-flex about-me-wrap align-items-start gap-24">
                           <div data-aos="zoom-in">
                               <div className="about-image-box shadow-box">
                                   <img src="assests/images/bg1.png" alt="BG" className="bg-img"/>
                                   <div className="image-inner">
                                       <img src="assests/images/me2.png" alt="About Me"/>          
                                       
                                   </div>
                               </div>
                           </div>
       
                           <div className="about-details" data-aos="zoom-in">
                               <h1 className="section-heading" data-aos="fade-up"><img src="assests/images/star-2.png" alt="Star"/> Self-summary <img src="assests/images/star-2.png" alt="Star"/></h1>
                               <div className="about-details-inner shadow-box">
                                   <img src="assests/images/icon2.png" alt="Star"/>
                                   <h1>David Henderson</h1>
                                   <p>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.</p>
                               </div>
       
                           </div>
                       </div>
       
                       <div className="row mt-24">
                           <div className="col-md-6" data-aos="zoom-in">
                               <div className="about-edc-exp about-experience shadow-box">
                                   <img src="assests/images/bg1.png" alt="BG" className="bg-img"/>
                                   <h3>EXPERIENCE</h3>
       
                                   <ul>
                                       <li>
                                           <p className="date">2007 - 2017</p>
                                           <h2>Framer Designer & Developer</h2>
                                           <p className="type">Bluebase Designs</p>
                                       </li>
                                       <li>
                                           <p className="date">2017 - 2023</p>
                                           <h2>Front-End Developer</h2>
                                           <p className="type">Larsen & Toubro</p>
                                       </li>
                                   </ul>
                               </div>
                           </div>
                           <div className="col-md-6" data-aos="zoom-in">
                               <div className="about-edc-exp about-education shadow-box">
                                   <img src="assests/images/bg1.png" alt="BG" className="bg-img"/>
                                   <h3>EDUCATION</h3>
       
                                   <ul>
                                       <li>
                                           <p className="date">2004 - 2007</p>
                                           <h2>Bachelor Degree in Psychology</h2>
                                           <p className="type">University of California</p>
                                       </li>
                                       <li>
                                           <p className="date">2007 - 2009</p>
                                           <h2>Master Degree in Designing</h2>
                                           <p className="type">University of Texas</p>
                                       </li>
                                   </ul>
                               </div>
                           </div>
                       </div>
       
                       <div className="row mt-24">
                           <div className="col-md-12">
                               <div className="d-flex profile-contact-credentials-wrap gap-24">
       
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
       
                                   <div data-aos="zoom-in" className="flex-1">
                                       <div className="about-contact-box info-box shadow-box">
                                           <a className="overlay-link" href="Contact"></a>
                                           <img src="assests/images/bg1.png" alt="BG" className="bg-img"/>
                                           <img src="assests/images/icon2.png" alt="Icon" className="star-icon"/>
                                           <h1>Let's <br/>work <span>together.</span></h1>
                                           <a href="Contact" className="about-btn">
                                               <img src="assests/images/icon.svg" alt="Button"/>
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
     </>
    )
}       
export default About_emt;