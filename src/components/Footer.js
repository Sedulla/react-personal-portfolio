import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }

  .footer__col1 {
    flex: 2;
  }

  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }

  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .copyright {
    background-color: var(--deep-dark);
    text-align: center;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }

    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Sedulla Jafarli</h1>
          <PText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            laboriosam earum, amet nostrum voluptas vitae nemo suscipit aliquid
            quae blanditiis dolor, repellat distinctio quibusdam harum sapiente
            eligendi nisi necessitatibus atque.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+7777777',
                path: 'tel/:+8877777',
              },
              {
                title: 'web@gmail.com',
                path: 'mailto:web@gmail.com',
              },
              {
                title: 'Azerbaijan',
                path: 'https:google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'htpps://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'htpps://facebook.com',
              },
              {
                title: 'Instagram',
                path: 'htpps://facebook.com',
              },
            ]}
          />
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Sedulla Jafarli</PText>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
