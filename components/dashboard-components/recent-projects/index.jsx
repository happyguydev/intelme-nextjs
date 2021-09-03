import React, { useEffect } from 'react';
import { useState } from 'react';
import { RecentProjectsContainer } from '../styles/recent-projects';
import ProjectCard from './projectCard';

const RecentProjects = ({ recentProjects }) => {
  const [page, setPage] = useState([]);
  const [index, setIndex] = useState(0);
  return (
    <RecentProjectsContainer>
      {recentProjects?.length !== 0 ? (
        <>
          <h2>Recent Projects</h2>
          <div className="carousel">
            {recentProjects?.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </>
      ) : null}
    </RecentProjectsContainer>
  );
};

export default RecentProjects;
