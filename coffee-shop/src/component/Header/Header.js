import {Link} from 'react-router-dom'
import Cart from '../Cart/Cart'
import Cold from '../Cold/Cold'
import Home from '../Home/Home'
import Hot from '../Hot/Hot'
import {Route} from 'react-router'


function Header () {
    return <div>
        <h1>Czhring</h1>
        <nav>
            <Link to ='/'>Home</Link>
            <Link to ='/hot'>Hot</Link >
            <Link to ='/iced'>Cold</Link >
            <Link to ='/cart'>My Cart</Link>
        </nav>

        <Route exact path ='/' component = {Home}/>
        <Route exact path = '/hot' component = {Hot}/>
        <Route exact path = '/iced' component ={Cold}/>
        <Route exact path = '/cart' component = {Cart} />




    </div>
}


export default Header