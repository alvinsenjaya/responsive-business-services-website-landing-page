import React from 'react'
import {
  SidebarContainer, 
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
} from './SidebarElements';

const Sidebar = ({isOpen, toggleIsOpen}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggleIsOpen}>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggleIsOpen} smooth={true} duration={500} spy={true} exact="true" offset={-70}>About Us</SidebarLink>
            <SidebarLink to="services" onClick={toggleIsOpen} smooth={true} duration={500} spy={true} exact="true" offset={-70}>Our Services</SidebarLink>
            <SidebarLink to="contact" onClick={toggleIsOpen} smooth={true} duration={500} spy={true} exact="true" offset={-70}>Contact Us</SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar;
