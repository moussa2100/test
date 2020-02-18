import React, { Component } from 'react';
import '../../App.css';
import ProjectSummary from './projectsummary';

const projectlist = ()=>{
    return(
<React.Fragment>

      <div className='project-list section' >
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
      </div>

        
      

</React.Fragment>
      
    )
}

export default projectlist;