import styled from 'styled-components';
import Color from '../../const/Color';

export const ContactUsContainer = styled.div`
  background: ${({lightBg}) => (lightBg ? Color.white : Color.primaryColorLight40)};
`

export const ContactUsWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 100px 24px;
  justify-content: center;
`

export const ContactUsRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';

  @media screen and (max-width: 768px){
    grid-template-areas: 'col2' 'col1';
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
  font-size: 28px;
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
  max-width: 550px;
  height: 100%;
  margin: 50px;
`

export const Img = styled.img`
  width: 100%;
`

export const FormWrap = styled.div`
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 200;
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Form = styled.form`
  background: ${Color.primaryColorDark40};
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 32px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  
  ::-webkit-inner-spin-button{
    -webkit-appearance: none;
    -moz-appearance:textfield;
  }
`

export const FormTextArea = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  resize: none;
`

export const SuccessMessageWrapper = styled.div`
  background-color: ${Color.success};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-bottom: 24px;
`

export const SuccessMessage = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${({lightText}) => (lightText? Color.white : Color.primaryColorDark40)};
`