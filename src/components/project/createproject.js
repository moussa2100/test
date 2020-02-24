 import React, { Component } from 'react';
 import {createProjectAction} from '../../store/actions/projectAction';
 import { connect } from 'react-redux'
 
 class CreateProject extends Component {

    state = {
      projecttitle: '',
      projectcontent: '',
    }

    handlesubmit = (e)=>{
      e.preventDefault();
      this.props.createproject(this.state);
    }

    render() {
        return (
          <React.Fragment>
              <div className="container center signin-form">
                <form className=" ">
                    <h5 className='grey-text text-darken-3'> Create Project </h5>
       
      
                  <div className='input-field'>
                    <label htmlFor='project-title'> Project Title </label>
                    <input type="text" name='project-title' onChange={ (e)=> this.setState({projecttitle:e.target.value})} />
                    </div>
                     
      
                  <div className='input-field'>
                    <label htmlFor='project-content'> Project Content </label>
                    <input type="text" name='project-content' onChange={ (e)=> this.setState({projectcontent:e.target.value})} />
                    </div>
                     <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-3' onClick={this.handlesubmit}> Create </button>
                    </div>
                </form>
                 </div>

                 </React.Fragment>
                )
             } }

             const mapDispatchToProps = (dispatch)=>{

              return {
                createproject : project => dispatch( createProjectAction(project) )
              }

             }
             export default connect( null,mapDispatchToProps )(CreateProject);