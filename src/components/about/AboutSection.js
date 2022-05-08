import styled from 'styled-components';
import { Button } from '../helpers/Button';
import { PText } from '../helpers/PText';
import { SectionTitle } from '../helpers/SectionTitle';
// import AboutImg from '../assets/images/about-sec-img.png'

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }

  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }

  .section-title {
    text-align: left;
  }

  .para {
    margin-top: 2rem;
    margin-left: 0;
  }

  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        text-align: center;
      }

      .aboutSection__left,
      .aboutSection__right {
        widht: 100%;
      }

      .aboutSection_right {
        margin-top: 3rem;
      }

      .section-title {
        text-align: center;
      }

      .para {
        margin: 0 auto;
        margin-top: 2rem;
      }

      .aboutSection__buttons {
        flex-direction: column;
        gap: 0rem;
        .button-wrapper,
        a {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
`;

export const AboutSection = () => {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce"
            heading="About Me"
          />
          <PText>Frontend (React) Developer.</PText>
          <div className="aboutSection__buttons">
            <Button btnText="Works" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          {/* <img className="aboutImg" src="" alt="about-img" /> */}
        </div>
      </div>
    </AboutSectionStyles>
  );
};
