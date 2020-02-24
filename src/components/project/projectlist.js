import React, { Component } from 'react';
import '../../App.css';
import ProjectSummary from './projectsummary';


const projectlist = (props)=>{
   debugger;
   return(
<React.Fragment>

      <div className='project-list section' >
        {
          props.projects && props.projects.map( item =>{
            return <ProjectSummary project={item} />

          } )
        }
      </div>

        
      

</React.Fragment>
      
    )
}

export default projectlist;