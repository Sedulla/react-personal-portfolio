import React from 'react';
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';
import Button from '../components/Button';
import PText from '../components/PText';
// import AboutImg from '../assets/images/about-page-img.png'
import ContactBanner from '../components/ContactBanner';

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

export default function About() {
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus, dolores. Itaque magnam nemo illum veniam esse
                consectetur voluptate culpa! Laboriosam ab nulla accusantium
                ipsam eos qui recusandae necessitatibus esse nemo.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                perferendis, unde, non ipsa officiis inventore molestias dicta
                magnam nam omnis quos a excepturi placeat necessitatibus.
                Laboriosam assumenda dolores vero veniam.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque consectetur ullam eaque, quae nam cumque esse
                recusandae perspiciatis, ipsam earum laboriosam quo animi nihil
                nobis corrupti dolore maiores at pariatur.
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src="" alt="me" />
          </div>
        </div>

        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem title="School" items={['Lorem, ipsum dolor.']} />
            <AboutInfoItem title="Collage" items={['Lorem, ipsum dolor.']} />
            <AboutInfoItem title="Varsity" items={['Lorem, ipsum dolor.']} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>

            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'Javascript']}
            />
            <AboutInfoItem
              title="BackEnd"
              items={['HTML', 'CSS', 'Javascript']}
            />
            <AboutInfoItem
              title="Design"
              items={['HTML', 'CSS', 'Javascript']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>
            <AboutInfoItem
              title="2020-2021"
              items={['junior developer at zzz']}
            />
            <AboutInfoItem
              title="2020-2021"
              items={['junior developer at zzz']}
            />
            <AboutInfoItem
              title="2020-2021"
              items={['junior developer at zzz']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
