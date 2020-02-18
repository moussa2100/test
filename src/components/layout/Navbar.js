import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SigninLinks from './signin';
import SignoutLinks from './signout';

const navbar = ()=>{
    return(

        <nav className="nav-wrapper grey darken-3" >
            <div className='container'>
                <Link to='/' className='brand-logo'> Mohamed Moussa </Link>
                <SigninLinks />
                <SignoutLinks />
            </div>
        </nav>

    )
}

export default navbar;