import styled from 'styled-components';
import { FooterCol } from './FooterCol';
import { PText } from '../helpers/PText';

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

export const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Sedulla Jafarli</h1>
          <PText>This is my portfolio website.</PText>
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
                title: '+994 55 6163677',
                path: 'tel:+994556163677',
              },
              {
                title: 'sedullaa2001@gmail.com',
                path: 'mailto:sedullaa2001@gmail.com',
              },
              {
                title: 'Baku, Azerbaijan',
                path: '#!',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/sedulla-jafarli/',
              },
              {
                title: 'Twitter',
                path: '#!',
              },
              {
                title: 'Instagram',
                path: '#!',
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
