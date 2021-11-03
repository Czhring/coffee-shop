import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import {Route, Switch}  from 'react-router-dom';
import Hot from './component/Hot/Hot';
import Cold from './component/Cold/Cold';
import Cart from './component/Cart/Cart';
import HotDescription from './component/Description/HotDescription';
import ColdDescription from './component/Description/ColdDescription';


function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path= '/hot' component={Hot}/>
            <Route path='/hot/:id' component = {HotDescription}/>
            <Route exact path= '/iced' component={Cold}/>
            <Route path='/iced/:id' component ={ColdDescription}/>
            <Route exact path='/cart' component= {Cart} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
