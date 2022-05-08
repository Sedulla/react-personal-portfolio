import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UTrackerImg from '../../assets/images/utracker.jpg';

const ProjectItemStyle = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }

  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }

  .projectItem__title {
    font-size: 2.2rem;
  }

  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'IBMPlexMono Regular';
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export const ProjectItem = ({
  img = '',
  title = 'Project Name Here',
  desc = 'Project Description here',
  path = '/',
}) => {
  return (
    <ProjectItemStyle>
      {/* <a href={path} className="projectItem__img">
        <img src={img} alt="project" />
      </a> */}
      <div className="projectItem__info">
        <a href={path} target="_blank" rel="noopener noreferrer">
          <h3 className="projectItem__title">{title}</h3>
        </a>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyle>
  );
};
