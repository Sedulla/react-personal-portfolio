import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transparent' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gray-1)' : 'black')};
  }
  @media (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export const Button = ({
  btnLink = 'test',
  btnText = 'test',
  outline = false,
}) => {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <a className="button" href={btnLink} target="_blank" rel="noreferrer">
        {btnText}
      </a>
    </ButtonStyle>
  );
};
