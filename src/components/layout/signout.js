import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

const signout = ()=>{
    return(

        <ul className='right'>
            <li> <NavLink to='/signup'> Sign up </NavLink>  </li>
            <li> <NavLink to='/signin'> Log In </NavLink>  </li>
          
        </ul>
    )
}

export default signout;