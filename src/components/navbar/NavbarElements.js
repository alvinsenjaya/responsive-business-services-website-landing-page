import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import Color from '../../const/Color';

export const Nav = styled.nav`
  background: ${Color.primaryColorDark40};
  height: 70px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none; 
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
  color: ${Color.white};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: ${Color.primaryColorLight20};
    transition: 0.2s ease-in-out;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${Color.white};
    transition: 0.2s ease-in-out;

    &:hover {
      color: ${Color.primaryColorLight20};
      transition: 0.2s ease-in-out;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 70px;
`;

export const NavLink = styled(LinkScroll)`
  color: ${Color.white};
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${Color.primaryColorLight20};
    transition: 0.2s ease-in-out;
  }

  &.active {
    border-bottom: 4px solid ${Color.primaryColorLight20};
  }
`;
