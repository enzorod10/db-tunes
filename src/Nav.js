import React from "react";
import { Link } from "react-router-dom";

function Nav(){

    return(
        <div className='navigation'>
            <Link to='/' className='navLinks'>
                <div className='home'>
                Home
                </div>
            </Link>
            <Link to='/shop' className='navLinks'>
                <div className='shop'>
                Shop
                </div>
            </Link>
            <Link to='/cart' className='navLinks'>
                <div className='cart'>
                Cart
                </div>
            </Link>
        </div>
    )
}

export default Nav;