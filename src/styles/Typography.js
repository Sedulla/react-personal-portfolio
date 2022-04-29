import IBMPlexMonoRegular from '../assets/fonts/IBMPlexMono-Regular.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import { createGlobalStyle } from 'styled-components';

export const Typography = createGlobalStyle`
  @font-face {
    font-family: 'IBMPlexMono Regular';
    src: url(${IBMPlexMonoRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold});
    font-style: normal;
  }
  html{
    font-family: 'IBMPlexMono Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'IBMPlexMono Regular';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat SemiBold'
  }
`;
