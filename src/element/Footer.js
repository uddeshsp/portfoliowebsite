import { NavLink } from 'react-router-dom';
const Footer = () =>{
    return(
    <footer className="footer-area">
    <div className="container">
        <div className="footer-content text-center">
            <a href="index-2.html" className="logo">
                <img src="assests/images/logo.svg" alt="Logo"/>
            </a>
            {/* <ul className="footer-menu">
                <li><a href="index-2.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="works.html">Works</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul> */}
            <ul className="footer-menu">
                        {/* <li ><NavLink activeClassName="active" to="/">Home</NavLink></li>
                        <li><NavLink activeClassName="active" to="About">About</NavLink></li>
                        <li><NavLink activeClassName="active" to="Works">Works</NavLink></li>
                        <li><NavLink activeClassName="active" to="Contact">Contact</NavLink></li> */}
                    </ul>
            <p className="copyright">
                &copy; All rights reserved by <span>WordPress River</span>
            </p>
        </div>
    </div>
</footer>

    )

}
export default Footer;