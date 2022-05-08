import { SectionTitle } from '../helpers/SectionTitle';
import { ServicesSectionItem } from './ServicesSectionItem';
import { MdDesktopMac, MdCode, MdSearch } from 'react-icons/md';
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
          heading="Sections"
          subheading="What I know"
        ></SectionTitle>
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="Some text about web design"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="Some text about web development"
          />
          <ServicesSectionItem
            icon={<MdSearch />}
            title="SEO"
            desc="Some text about the SEO"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
};
