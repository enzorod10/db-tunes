import React, { useEffect, useState } from "react";
import uniqid from 'uniqid'
import emptyCart from '../assets/images/emptyCart.png'


function Cart(props){
    const [chosenItems, setChosenItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })

    useEffect(() => {
        let tempArray = []
        props.items.forEach(list => {
            list.forEach(item => {
                if (item.quantity > 0){
                    tempArray = [...tempArray, item]
                }
            })
        })
        setChosenItems(tempArray)
        getInitialPrice(tempArray)
    }, [])


    function getInitialPrice(temp){
        let currPrice = 0;
        for (let i=0; i<temp.length; i++){
            currPrice += (temp[i].quantity * temp[i].price)
        }
        setTotalPrice(currPrice.toFixed(2))
    }


    const handleClick = (item, operation) => {
        switch(operation){
            case 'increase':
            props.increaseQuantity(item)
            break
            case 'decrease':
            props.decreaseQuantity(item)
            break
            case 'remove':
            props.removeItem(item)
            break
            default:
            break
        }

        let tempArray = []
        props.items.forEach(list => {
            list.forEach(item => {
                if (item.quantity > 0){
                    tempArray = [...tempArray, item]
                }
            })
        })
        setChosenItems(tempArray)
        adjustPrice()
    }

    const adjustPrice = () => {
        let currPrice = 0;
        chosenItems.forEach(item => {
            currPrice += (item.quantity * item.price)
        })
        setTotalPrice(currPrice.toFixed(2))
    }

    if (chosenItems.length !== 0){
        return (
            <div className='shopping-cart-section'>
                <div className='shopping-cart'>
                    <h1>Shopping Cart</h1>
                    <div className='shopping-cart-item-container'>
                        {chosenItems.map(item => {
                            return( 
                            <div className='shopping-cart-item' key={uniqid()}> 
                                <div className='shopping-cart-image'>
                                    <img alt={`${item.name}`} src={item.image} />
                                </div>
                                <div className='shopping-cart-item-info'>
                                    <div className="shopping-cart-item-name">
                                        {item.name}    
                                    </div>
                                    <div className='shopping-cart-item-quantity-container'>
                                        <div onClick={() => handleClick(item, 'decrease')} className='shopping-cart-item-decrease'>
                                            -
                                        </div>
                                        <div className='shopping-cart-item-quantity'>
                                            {item.quantity}
                                        </div>
                                        <div onClick={() => handleClick(item, 'increase')} className='shopping-cart-item-increase'>
                                            +
                                        </div>
                                    </div>
                                    <div className='shopping-cart-item-price'>
                                        {formatter.format(item.price)}
                                    </div>
                                </div>
                                <div onClick={() => handleClick(item, 'remove')}className='shopping-cart-delete-item'>
                                    X
                                </div>
                            </div>)
                        })}
                    </div>
                    <div className='shopping-cart-checkout-section'>
                        <div className='shopping-cart-total-price'>
                            SUBTOTAL {formatter.format(totalPrice)}
                        </div>
                        <div className='shopping-cart-checkout'>
                            CHECKOUT
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='empty-shopping-cart-section'>
                <div className='emptyCart'>
                    <img src={emptyCart}/>
                </div>
                <div>
                    Your cart is empty
                </div>
            </div>
        )
    }
}

export default Cart;