import SecuritySvg from '../../images/security.svg';
import PositiveAttitudeSvg from '../../images/positive_attitude.svg';
import TeachingSvg from '../../images/teaching.svg';

export const WelcomeData = {
  id: 'welcome',
  lightBg: true,
  lightText: false,
  imgStart: false,
  topLine: 'Phasellus aliquam',
  headline: 'Fusce id viverra nulla, a accumsan ligula',
  description: 'Donec ultricies facilisis mauris. Etiam vel maximus nibh. Sed fermentum, diam quis tincidunt dictum, turpis libero vehicula ex, in tempor turpis augue nec odio.',
  buttonLabel: 'About Us',
  buttonDark: "true",
  buttonPrimary: "true",
  buttonScrollTo: "about",
  imgSource: TeachingSvg,
  imgAlt: 'Phasellus aliquam',
}

export const AboutData = {
  id: 'about',
  lightBg: false,
  lightText: false,
  imgStart: true,
  topLine: 'Proin sit amet viverra lectus',
  headline: 'Integer mi ligula',
  description: 'Curabitur dapibus libero vitae sem maximus, quis elementum lacus laoreet. Nam porttitor sapien quis nibh gravida, sed sodales lorem tempus.',
  description2: 'Vivamus est nisl, finibus ac varius eu, placerat pretium mi. Cras pharetra, nulla at laoreet finibus, diam sem malesuada leo, ut tempor ligula dolor non dui.',
  buttonLabel: 'Our Services',
  buttonDark: "true",
  buttonPrimary: "true",
  buttonScrollTo: "services",
  imgSource: PositiveAttitudeSvg,
  imgAlt: 'Proin sit amet viverra lectus',
}

export const DiscoverData = {
  id: 'discover',
  lightBg: false,
  lightText: false,
  imgStart: false,
  topLine: 'Pellentesque in bibendum mauris',
  headline: 'Ut aliquet odio eros',
  description: 'In ac metus faucibus, ullamcorper velit sit amet, porttitor eros. Donec congue viverra bibendum. Suspendisse non justo eget lectus suscipit gravida id vel tortor.',
  buttonLabel: 'Contact Us',
  buttonDark: "false",
  buttonPrimary: "false",
  buttonScrollTo: "contact",
  imgSource: SecuritySvg,
  imgAlt: 'Pellentesque in bibendum mauris',
}