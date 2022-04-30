import styled from 'styled-components';
import {Button} from '../helpers/Button';
import {PText} from '../helpers/PText';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }

  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 760px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export const ContactBanner = () => {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Have a project in mind</PText>
          <h3 className="contactBanner__heading">Let me help you</h3>
          <Button btnText="Contact Now" btnLink="/contact"></Button>
        </div>
      </div>
    </ContactBannerStyles>
  );
};

