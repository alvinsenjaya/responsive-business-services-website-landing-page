import styled from 'styled-components';
import Color from '../../const/Color';

export const InfoContainer = styled.div`
  background: ${({lightBg}) => (lightBg ? Color.white : Color.primaryColorLight45)};
`

export const InfoWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 100px 24px;
  justify-content: center;
  align-items: center;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`

export const TopLine = styled.p`
  color: ${Color.primaryColorDark10};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Headline = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText? Color.white : Color.primaryColorDark40)};

  @media screen and (max-width: 480px){
    font-size: 30px;
  }
`

export const Description = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({lightText}) => (lightText? Color.white : Color.primaryColorDark40)};

  @media screen and (max-width: 480px){
    font-size: 16px;
  }
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 540px;
  height: 100%;

  @media screen and (max-width: 768px){
    padding-top: 50px;
  }
`

export const Img = styled.img`
  width: 100%;
`