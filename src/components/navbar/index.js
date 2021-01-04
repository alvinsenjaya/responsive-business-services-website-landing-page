import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import Sidebar from '../sidebar';
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLink, 
} from './NavbarElements';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen}></Sidebar>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/business-services-website" onClick={scrollToTop}>Business Services</NavLogo>
          <MobileIcon onClick={toggleIsOpen}>
            {isOpen ? <FaTimes></FaTimes> : <FaBars></FaBars>}
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about" smooth={true} duration={500} spy={true} exact="true" offset={-70}>About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="services" smooth={true} duration={500} spy={true} exact="true" offset={-70}>Our Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-70}>Contact Us</NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
