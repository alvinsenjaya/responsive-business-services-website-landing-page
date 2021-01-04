import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import Color from '../../const/Color';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 900;
  width: 100%;
  background: ${Color.transparent};
  margin-top: 70px;
  display: grid;
  align-items: center;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen? '100%' : '0%' )};
  top: ${({ isOpen }) => (isOpen? '0' : '-100%')};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none; 
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const SidebarWrapper = styled.div`
  color: ${Color.white};
`

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: flex-start;
  font-size: 1.1rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${Color.primaryColorDark20};
  cursor: pointer;
  margin: 1px 5px;;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  border-radius: 10px;
  background-color: ${Color.white};

  &:hover {
    background-color: ${Color.primaryColorLight35};
    transition: 0.2s ease-in-out;
  }
`
