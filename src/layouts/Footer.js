import { Link, NavLink } from 'react-router-dom';

import LogoImg from '../assets/logo-white.svg';
import GithubImg from '../assets/icons/github.svg';
import TwitterImg from '../assets/icons/twitter.svg';
import LinkedinImg from '../assets/icons/linkedin.svg';

const Footer = () => {

  const activeStyle = { fontSize: '1.4rem' };
  
  return ( 
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-content-img">
            <Link to="/">
              <img src={LogoImg} alt="" />
            </Link>
          </div>
          <ul className="footer-content-links">
            <li className="nav-link">
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined } to="/">HOME</NavLink>
            </li>
            <li className="nav-link">
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined } to="/portfolio">PORTFOLIO</NavLink>
            </li>
            <li className="nav-link">
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined } to="/contact">CONTACT ME</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://github.com" target="_blank" rel="noreferrer"><img src={GithubImg} alt="Github Link" /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src={TwitterImg} alt="Twitter Link" /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><img src={LinkedinImg} alt="Linkedin Link" /></a>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;