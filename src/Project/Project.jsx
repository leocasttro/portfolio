import React from 'react';

import {AreaProject} from './style'

const Project = ({project}) => {

  return (
    <AreaProject>
      <div className='item' key={project}>
        <img src={project.img} alt="" />
        <p>{project.name}</p>
      </div>
    </AreaProject>  
  )
}

export default Project;