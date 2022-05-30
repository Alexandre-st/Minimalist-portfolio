import { Link, NavLink } from 'react-router-dom';

import Menu from './Menu/Menu';
import LogoImg from '../../assets/logo.svg';

const Header = () => {

  const activeStyle = { color: '#5FB4A2'};

  return ( 
    <header className="container">
      <div className="header">
        <Link to='/' id="logo">
          <img src={LogoImg} alt="Design logo" />
        </Link>

        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="nav-link nav-link-black">
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined } to="/">HOME</NavLink>
            </li>
            <li className="nav-link nav-link-black">
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined } to="/portfolio">PORTFOLIO</NavLink>
            </li>
            <li className="nav-link nav-link-black">
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined } to="/contact">CONTACT ME</NavLink>
            </li>
          </ul>
        </nav>
        
        <Menu />
      </div>
    </header>
  );
}
 
export default Header;