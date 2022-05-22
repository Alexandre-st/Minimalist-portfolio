import { Link } from 'react-router-dom';

import LogoImg from '../assets/logo-white.svg';
import GithubImg from '../assets/icons/github.svg';
import TwitterImg from '../assets/icons/twitter.svg';
import LinkedinImg from '../assets/icons/linkedin.svg';

const Footer = () => {
  return ( 
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-content-img">
            <img src={LogoImg} alt="" />
          </div>
          <ul className="footer-content-links">
            <li className="nav-link"><Link to="/">HOME</Link></li>
            <li className="nav-link"><Link to="/">PORTFOLIO</Link></li>
            <li className="nav-link"><Link to="/">CONTACT ME</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <img src={GithubImg} alt="Github Link" />
          <img src={TwitterImg} alt="Twitter Link" />
          <img src={LinkedinImg} alt="Linkedin Link" />
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;