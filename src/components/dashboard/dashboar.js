import React, { Component } from 'react';
import Notifications from './notifications';
import ProjectList from '../project/projectlist';
import {connect} from 'react-redux'


class Dashboard extends Component {
    state = {  }

    
    render() { 
        console.log(this.props);
        return ( 
            <div className='dashboard container' >
                <div className='row' >
                    <div className='col s12 m6 ' >
                        <ProjectList projects={ this.props.projects }/>
                    </div>


                        <div className='col s12 m5 offset-m1' >
                            <Notifications />
                        </div>

                </div>

            </div>
         );
    }
}
 
const mapStateToProps = state =>({
    projects : state.project.projects,
})
 export default connect(mapStateToProps)( Dashboard);
    