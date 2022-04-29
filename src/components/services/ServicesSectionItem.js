import { MdCode } from 'react-icons/md';
import styled from 'styled-components';
import { PText } from '../helpers/PText';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }

  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }

  .para {
    margin-top: 2rem;
  }
`;

export const ServicesSectionItem = ({
  icon = <MdCode />,
  title = 'web dev',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, id',
}) => {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
};
