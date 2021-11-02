import Cold from "../Cold/Cold"
import Hot from "../Hot/Hot"
import Cart from "../Cart/Cart"
import { useState } from "react/cjs/react.development"

function Home () {
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
    <div>
        <Hot addDrinkToCart={addDrinkToCart}/>
        <Cold addDrinkToCart={addDrinkToCart}/>
        <Cart removeDrinkFromList={removeDrinkFromList} drink={drinkList}/>
    </div>
)
}

export default Home