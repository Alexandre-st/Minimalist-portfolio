import { useState } from 'react';
import { Link } from 'react-router-dom';

import HamburgerMenu from '../../../assets/icons/hamburger.svg';
import CloseMenu from '../../../assets/icons/close.svg';

const Menu = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  }
  return ( 
    <div className="header-menu" onClick={openMenu}>
      { !menu && <img className="header-hamburger" src={HamburgerMenu} alt="Open the menu" /> }
      { menu && 
        <>
          <img className="header-close" src={CloseMenu} alt="Close the Menu" />
          <div className="nav">
            <nav>
              <ul className="nav-list">
                <li className="nav-link">
                  <Link to="/">HOME</Link>
                </li>
                <li className="nav-link">
                  <Link to="/portfolio">PORTFOLIO</Link>
                </li>
                <li className="nav-link">
                  <Link to="/contact">CONTACT ME</Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      }
    </div>
  );
}
 
export default Menu;