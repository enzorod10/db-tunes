import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import uniqid from 'uniqid'

function Shop(props){
    return (
        <div>
            <div className='shopSection'>
                <h1>
                    Speakers
                </h1>
                <div className='items'>
                    {props.items[0].map(item => {
                        return(
                        <Link className='itemLinks' state={{item: item}} key={uniqid()} to={{pathname:'/item'}}> 
                            <div className='item'> 
                                <img alt={`${item.name}`} src={item.image} />
                                {item.name}
                            </div>
                        </Link>
                        )
                    })}
                </div>
                <h1>
                    Headphones
                </h1>
                <div className='items'>
                    {props.items[1].map(item => {
                        return( 
                            <Link className='itemLinks' state={{item: item}} key={uniqid()} to={{pathname:'/item'}}> 
                                <div className='item'> 
                                    <img alt={`${item.name}`} src={item.image} />
                                    <div className='itemName'>
                                        {item.name}
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
        
    )
}

export default Shop;