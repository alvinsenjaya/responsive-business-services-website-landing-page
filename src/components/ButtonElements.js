import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import Color from '../const/Color';

export const ButtonLinkScroll = styled(LinkScroll)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? Color.primaryColorLight10 : Color.primaryColorDark40)};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? Color.primaryColorDark40 : Color.white)};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  z-index: 500;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? Color.primaryColorDark10 : Color.primaryColor)};
  }
`

export const ButtonLinkRoute = styled(LinkScroll)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? Color.primaryColorLight10 : Color.primaryColorDark40)};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? Color.primaryColorDark40 : Color.white)};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  z-index: 500;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? Color.primaryColorDark10 : Color.primaryColor)};
  }
`

export const Button = styled.button`
  border-radius: 50px;
  background: ${({primary}) => (primary ? Color.primaryColorLight10 : Color.primaryColorDark40)};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? Color.primaryColorDark40 : Color.white)};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  z-index: 500;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? Color.primaryColorDark10 : Color.primaryColor)};
  }
`