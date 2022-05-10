import React from "react";
import { useLocation } from "react-router-dom";

function ItemDetail(props){
    const location = useLocation();
    
    return(
        <div className='itemPage'>
            <div className='itemContainer'>
                <div className='selectedItemImage'>
                    <img alt='clicked item' src={location.state.item.image} />
                </div>
                <div className='selected-item-name'>
                    {location.state.item.name} {''} - {''} ${location.state.item.price.toFixed(2)}
                </div> 
                <div onClick={() => props.increaseQuantity(location.state.item)} className='add-to-cart'>
                    Add to cart
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail;