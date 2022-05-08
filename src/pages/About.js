import styled from 'styled-components';
import { AboutInfoItem } from '../components/about/AboutInfoItem';
import { Button } from '../components/helpers/Button';
import { PText } from '../components/helpers/PText';
// import AboutImg from '../assets/images/about-page-img.png'
import { ContactBanner } from '../components/contact/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .left {
    flex: 3;
  }

  .right {
    flex: 2;
  }

  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }

  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }

  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }

  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }

  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }

    .about__heading {
      font-size: 2.8rem;
    }

    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export const About = () => {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Sedulla Jafarli</span>
            </p>
            <h2 className="about__heading">A freelance web developer</h2>
            <div className="about__info">
              <PText>
                I am a frontend developer building clean and responsive
                websites.
                <br />
                <br />
                Some text here.
                <br />
                <br />
                Again some text goes here.
              </PText>
            </div>
            <Button
              btnText="Download CV"
              btnLink="https://drive.google.com/file/d/1PJ_MsF16J3SPWCa7cXIemC089Wf62xX-/view?usp=sharing"
            />
          </div>
          <div className="right">{/* <img src="" alt="me-img" /> */}</div>
        </div>

        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="ATL Academy"
              items={['Frontend programing']}
            />
            <AboutInfoItem
              title="UNEC"
              items={['Accounting and Auditing B.Acc']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>

            <AboutInfoItem
              title="Frontend"
              items={['HTML', 'CSS', 'Javascript', 'React', 'Redux']}
            />
            <AboutInfoItem title="Design" items={['Figma']} />
            <AboutInfoItem
              title="Tools"
              items={['Vscode', 'Postman', 'Jira']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>
            <AboutInfoItem title="Not yet" items={['']} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
};
