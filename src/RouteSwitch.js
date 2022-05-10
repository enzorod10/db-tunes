import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Shop from "./components/Shop"
import Cart from "./components/Cart"
import Home from "./components/Home"
import ItemDetail from "./components/ItemDetail";
import speakers1 from './assets/images/speakers/black-skye-speakers.png'
import speakers2 from './assets/images/speakers/logitech-speakers.png'
import speakers3 from './assets/images/speakers/mc-black-speakers.png'
import speakers4 from './assets/images/speakers/s3000-speakers.png'
import speakers5 from './assets/images/speakers/silver-genius-dual-speakers.png'
import headphones1 from './assets/images/headphones/akg-headphones.png'
import headphones2 from './assets/images/headphones/pioneer-headphones.png'
import headphones3 from './assets/images/headphones/ronaldinho-logic-headphones.png'
import headphones4 from './assets/images/headphones/zelot-headphones.png'

const RouteSwitch = () => {
    const [items, setItems] = useState([ 
        [ // Speakers
            {
                name: 'Black Skye Speakers',
                image: speakers1,
                price: 167.50,
                quantity: 0,
                id: 's0',
            },
            {
                name: 'Logitech X1 Speakers',
                image: speakers2,
                price: 135.00,
                quantity: 0,
                id: 's1'
            },
            {
                name: 'MC Black Speakers',
                image: speakers3,
                price: 220.50,
                quantity: 0,
                id: 's2'
            },
            {
                name: 'S3000 Deluxe Speakers',
                image: speakers4,
                price: 250.50,
                quantity: 0,
                id: 's3'
            },
            {
                name: 'Silver Dual Genius Speakers',
                image: speakers5,
                price: 142.00,
                quantity: 0,
                id: 's4'
            }
        ],
        [ // Headphones
            {
                name: 'AKG Headphones',
                image: headphones1,
                price: 125.00,
                quantity: 0,
                id: 'h0'
            },
            {
                name: 'Prioneer Headphones',
                image: headphones2,
                price: 175.00,
                quantity: 0,
                id: 'h1'
            },
            {
                name: 'Ronaldinho Logic Headphones',
                image: headphones3,
                price: 250.00,
                quantity: 0,
                id: 'h2'
            },
            {
                name: 'Zelot Headphones',
                image: headphones4,
                price: 115.00,
                quantity: 0,
                id: 'h3'
            },
        ]
    ])
    
    const increaseQuantity = (item) => {
        let tempArray = items
        tempArray.forEach(list => {
            list.forEach(selectedItem => {
                if (selectedItem.id === item.id){
                    selectedItem.quantity++
                }
            })
        })
        setItems(tempArray)
    }

    const decreaseQuantity = (item) => {
        let tempArray = items
        tempArray.forEach(list => {
            list.forEach(selectedItem => {
                if (selectedItem.id === item.id && selectedItem.quantity !== 1){
                    selectedItem.quantity--
                }
            })
        })
        setItems(tempArray)    
    }

    const removeItem = (item) => {
        let tempArray = items
        tempArray.forEach(list => {
            list.forEach(selectedItem => {
                if (selectedItem.id === item.id){
                    selectedItem.quantity = 0
                }
            })
        })
        setItems(tempArray)    
    }

    return (
        <BrowserRouter basename="/">
        <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop items={items}/>} />
                <Route path='/item' element={<ItemDetail increaseQuantity={increaseQuantity} items={items} />} />
                <Route path='/cart' element={<Cart removeItem={removeItem} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} items={items}/>} />
            </Routes>
        </BrowserRouter>
        
    )
}

export default RouteSwitch;