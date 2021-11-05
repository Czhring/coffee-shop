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
import { useState } from "react/cjs/react.development"


function App() {
  const [drinkList, setDrinkList] =useState([]);

  const addDrinkToCart = (drink) =>{
      setDrinkList([...drinkList,drink])
  }

  const removeDrinkFromList =(indexToRemove) =>{
      let newList = [...drinkList]
      newList.splice(indexToRemove,1);

      setDrinkList(newList)
  }
  return (
    <div className="App">
        <Header />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path= '/hot' component={Hot}/>
            <Route path='/hot/:id' render={() => <HotDescription addDrinkToCart={addDrinkToCart}/>}/>
            <Route exact path= '/iced' component={Cold}/>
            <Route path='/iced/:id' render={() => <ColdDescription addDrinkToCart={addDrinkToCart}/>}/>
            <Route exact path='/cart' render={() => <Cart removeDrinkFromList={removeDrinkFromList} drink={drinkList}/>}/>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
