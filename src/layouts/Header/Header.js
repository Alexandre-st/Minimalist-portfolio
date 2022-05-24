import { Link } from 'react-router-dom';

import LogoImg from '../../assets/logo.svg';
import Menu from './Menu/Menu';

const Header = () => {
  return ( 
    <header className="container">
      <div className="header">
        <Link to='/'>
          <img src={LogoImg} alt="Design logo" />
        </Link>

        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="nav-link nav-link-black">
              <Link to="/">HOME</Link>
            </li>
            <li className="nav-link nav-link-black">
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li className="nav-link nav-link-black">
              <Link to="/contact">CONTACT ME</Link>
            </li>
          </ul>
        </nav>
        
        <Menu />
      </div>
    </header>
  );
}
 
export default Header;