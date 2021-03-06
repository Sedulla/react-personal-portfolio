import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../components/helpers/SectionTitle';
import { MdSearch } from 'react-icons/md';
import { ProjectItem } from '../components/project/ProjectItem';
import { projects } from '../utils/projects';

const ProjectsStyle = styled.div`
  padding: 10rem 0;

  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }

  .projects__searchBox {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }

  .projects__searchBox input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }

  .projects__searchBox .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }

  .projects__searchBox .searchIcon path {
    color: var(--deep-dark);
  }

  @media (max-width: 768px) {
    .projects__searchBox,
    .projects__searchBox form,
    .projects__searchBox input {
      width: 90vw;
    }
  }
`;

export const Projects = () => {
  const [searchText, setSearchText] = useState('');
  const [projectsData, setProjectsData] = useState(projects);

  useEffect(() => {
    if (searchText === '') return;
    setProjectsData(() =>
      projects.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const handleChange = (e) => {
    e.preventDefault();

    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(projects);
    }
  };

  return (
    <>
      <ProjectsStyle>
        <div className="container">
          <SectionTitle
            heading="Projects"
            subheading="some of works"
          ></SectionTitle>
          <div className="projects__searchBox">
            <form action="">
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Project Name"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
                path={item.path}
              />
            ))}
          </div>
        </div>
      </ProjectsStyle>
    </>
  );
};
