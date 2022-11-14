import React from 'react';
import Project from '../Project/Project';

const Projects = ({projects}) => {
  return (
    <>
      {projects.map((project) => (
        <Project project={project} />
      ))} 
    </>

  )
};

export default Projects;