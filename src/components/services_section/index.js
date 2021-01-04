import React from 'react'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements'

import Icon1 from '../../images/web_shopping.svg';
import Icon2 from '../../images/chat.svg';
import Icon3 from '../../images/develop_app.svg';

const ServicesSection = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}></ServicesIcon>
            <ServicesH2>Vivamus est nisl</ServicesH2>
            <ServicesP>Interdum et malesuada fames ac ante ipsum primis in faucibus.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}></ServicesIcon>
            <ServicesH2>Aliquam commodo nulla</ServicesH2>
            <ServicesP>Praesent ac enim ultrices odio fringilla vestibulum non et lectus.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}></ServicesIcon>
            <ServicesH2>Aenean placerat urna</ServicesH2>
            <ServicesP>Aliquam tristique eget dui sit amet mattis. Nulla eget leo id purus hendrerit mollis.</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default ServicesSection;
