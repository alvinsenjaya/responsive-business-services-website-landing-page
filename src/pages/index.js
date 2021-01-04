import React from 'react';
import InfoSection from '../components/info_section';
import Navbar from '../components/navbar';
import ParticleBackground from '../components/ParticleBackground';
import {AboutData, DiscoverData, WelcomeData} from '../components/info_section/Data';
import ContactUsSection from '../components/contact_us_section';
import FooterSection from '../components/footer';
import ServicesSection from '../components/services_section';

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <InfoSection data={WelcomeData}></InfoSection>
      <InfoSection data={AboutData}></InfoSection>
      <ServicesSection></ServicesSection>
      <InfoSection data={DiscoverData}></InfoSection>
      <ContactUsSection></ContactUsSection>
      <FooterSection></FooterSection>
      <ParticleBackground></ParticleBackground>
    </>
  );
}

export default Home;
