import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #101522;
`

export const FooterWrapper = styled.div`
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px){
    padding-top: 32px;
  }

  @media screen and (max-width: 400px){
    flex-direction: column;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: box;
  color: #fff;

  @media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`

export const FooterLinkTitle = styled(LinkRouter)`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  margin-bottom: 16px;
  z-index: 200;

  &:hover{
    color: #01bf71;
    transition: all 0.2s ease-in-out;
  }
`

export const FooterLink = styled(LinkRouter)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  z-index: 200;

  &:hover{
    color: #01bf71;
    transition: all 0.2s ease-in-out;
  }
`

export const FooterLogo = styled(LinkRouter)`
  color: #fff;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-weight: bold;
`

export const SocialMediaContainer = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
`

export const SocialMediaIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;

  @media screen and (max-width: 200px){
    flex-direction: column;
  }
`

export const SocialMediaIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  z-index: 200;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #01bf71;
  }
`

export const FooterCopyright = styled.p`
  color: #fff;
  text-decoration: none;
  margin-bottom: 12px;
  font-size: 12px;
  text-align: center;
`