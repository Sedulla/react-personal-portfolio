import { SectionTitle } from './SectionTitle';
import { ServicesSectionItem } from './ServicesSectionItem';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }

  @media (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  } ;
`;

export const ServicesSection = () => {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle
          heading="Services"
          subheading="What I will do for you"
        ></SectionTitle>
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="I do ui/ux design for the website that helps to get nice look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="I also develop websites. High performance website with blazing fast speed."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="app Dev"
            desc="I develop mobile application. Mobile app with eye catching ui."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
};
