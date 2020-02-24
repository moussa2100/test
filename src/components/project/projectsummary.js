import React, { Component } from 'react';

const projectsummary = ({project})=>{
  debugger;  
  return(

      <React.Fragment>
           <div className='card-panel project-summary hoverable'>
            <div className='card-content grey-text text-darken-4 ' >
    <span className='card-title blue-text '> <h3>{ project.title}</h3> </span>
    <p>{ project.content}</p>
                <p className='grey-text'> 3 Septembet </p>
            </div>
          </div>
          <div className="divider"></div>
          </React.Fragment>
 
    )
}

export default projectsummary;