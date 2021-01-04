import React, {useState, useEffect} from 'react'
import ContactUsSvg from '../../images/contact_us.svg';
import { Button } from '../ButtonElements'
import {
  ContactUsContainer,
  ContactUsWrapper,
  ContactUsRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Headline,
  Description,
  BtnWrap,
  ImgWrap,
  Img,
  Form, 
  FormContent, 
  FormInput,
  FormTextArea, 
  FormLabel, 
  FormWrap,
  SuccessMessage,
  SuccessMessageWrapper
} from './ContactUsElements';


const ContactUsSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setTimeout(() => setIsSuccess(true), 1);
  }

  useEffect(() => {
    setIsSuccess(false);
  }, [name, email, phone, message])

  return (
    <>
      <ContactUsContainer id="contact" lightBg={true}>
        <ContactUsWrapper>
          <ContactUsRow imgStart={true}>
            <Column1>
              <FormWrap>
                <FormContent>
                  <Form onSubmit={(e) => onSubmit(e)}>
                    <FormLabel>Name*</FormLabel>
                    <FormInput type='text' required value={name} onChange={(e) => setName(e.target.value)}></FormInput>
                    <FormLabel>Email*</FormLabel>
                    <FormInput type='email' required value={email} onChange={(e) => setEmail(e.target.value)}></FormInput>
                    <FormLabel>Phone Number</FormLabel>
                    <FormInput type='number' value={phone} onChange={(e) => setPhone(e.target.value)}></FormInput>
                    <FormLabel>Message*</FormLabel>
                    <FormTextArea type='text' rows="5" required value={message} onChange={(e) => setMessage(e.target.value)}></FormTextArea>
                    {isSuccess ? 
                      <SuccessMessageWrapper>
                        <SuccessMessage lightText={false}>Thank you for connecting. We will contact you soon!</SuccessMessage> 
                      </SuccessMessageWrapper>
                      : null
                    }
                    <BtnWrap>
                      <Button type="submit" primary="false" dark="false">
                        Send Message
                      </Button>
                    </BtnWrap>
                  </Form>
                </FormContent>
              </FormWrap>
            </Column1>
            <Column2>
              <TextWrapper>
                <TopLine>Sed semper euismod nulla a pulvinar</TopLine>
                <Headline lightText={false}>Quisque nec ipsum eget nibh hendrerit rutrum.</Headline>
                <Description lightText={false}>Proin neque felis, tempor ut iaculis tincidunt, rutrum quis erat.</Description>
              </TextWrapper>
              <ImgWrap>
                <Img src={ContactUsSvg} alt="Contact Us"></Img>
              </ImgWrap>
            </Column2>
          </ContactUsRow>
        </ContactUsWrapper>
      </ContactUsContainer>
    </>
  )
}

export default ContactUsSection;
