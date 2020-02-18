import React, { Component } from 'react'

export default class SignIn extends Component {

    state = {
        email:'',
        password: '',
        firstname:'',
        lastname: '',
    }

    render() {
        return (
          <React.Fragment>
              <div className="container center signin-form">
                <form className=" ">
                    <h5 className='grey-text text-darken-3'> Sign Up </h5>

                    <div className='input-field'>
                    <label htmlFor='first'> First Name </label>
                    <input type="text" name='first' onChange={ (e)=> this.setState({firstname:e.target.value})} />
                    </div>

                    <div className='input-field'>
                    <label htmlFor='last'> Last Name </label>
                    <input type="text" name='last' onChange={ (e)=> this.setState({lastname:e.target.value})} />
                    </div>

                    <div className='input-field'>
                    <label htmlFor='email'> Email </label>
                    <input type="text" name='email' onChange={ (e)=> this.setState({email:e.target.value})} />
                    </div>

                    <div className='input-field'>
                    <label htmlFor='password'> Password </label>
                    <input type="password" name='password' onChange={ (e)=> this.setState({password:e.target.value})} />
                    </div>



                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-3'> Sign Up </button>
                    </div>
                </form>
              </div>

          </React.Fragment>
        )
    }
}
