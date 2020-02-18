import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

const signout = ()=>{
    return(

        <ul className='right'>
            <li> <NavLink to='/'> Sign up </NavLink>  </li>
            <li> <NavLink to='/'> Log In </NavLink>  </li>
          
        </ul>
    )
}

export default signout;