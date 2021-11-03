import React from 'react';
import {Link ,Route, Switch}  from 'react-router-dom';
import Cart from '../Cart/Cart';
import Cold from '../Cold/Cold';
import Home from '../Home/Home';
import Hot from '../Hot/Hot';
import HotDescription from "../Description/HotDescription";
import ColdDescription from "../Description/ColdDescription";


function Header () {
    return (<div>
        
        <nav className = 'nav'>
            
            <Link to ='/'><h1>Czhring</h1></Link>
            <Link to ='/hot'>Hot</Link >
            <Link to ='/iced'>Cold</Link >
            <Link to ='/cart'>My Cart</Link>
        </nav>

    </div>)
}


export default Header