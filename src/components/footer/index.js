import React from 'react';

import {
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  FooterCopyright
} from './FooterElements';

const FooterSection = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>            
          <FooterLogo to="#">Business Services</FooterLogo>
          <FooterCopyright>Business Services © 2020. All rights reserved.</FooterCopyright>
        </FooterWrapper>
      </FooterContainer>
    </>
  )
}

export default FooterSection;
