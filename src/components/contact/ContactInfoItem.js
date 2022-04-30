import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import { PText } from '../helpers/PText';

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
`;

export const ContactInfoItem = ({ icon = <MdPlace />, text = 'Text' }) => {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
};
