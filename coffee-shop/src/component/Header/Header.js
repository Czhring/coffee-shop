import React from 'react';
import {Link ,Route}  from 'react-router-dom';
import Cart from '../Cart/Cart';
import Cold from '../Cold/Cold';
import Home from '../Home/Home';
import Hot from '../Hot/Hot';
import HotDescription from "../Description/HotDescription";
import ColdDescription from "../Description/ColdDescription";


function Header () {
    return (<div>
        
        <nav className = 'nav'>
            <h1>Czhring</h1>
            <Link to ='/'>Home</Link>
            <Link to ='/hot'>Hot</Link >
            <Link to ='/iced'>Cold</Link >
            <Link to ='/cart'>My Cart</Link>
        </nav>

        <main>
        <Route exact path ='/' component = {Home}/>
        <Route exact path = '/hot' component = {Hot}/>
        <Route exact path = '/hot/:name' component = {HotDescription}/>
        <Route exact path = '/iced' component ={Cold}/>
        <Route exact path = '/iced/:name' component ={ColdDescription}/>
        <Route exact path = '/cart' component = {Cart} />
        </main>
    </div>)
}


export default Header