import { useEffect, useState } from "react"
import ColdDescription from "../Description/ColdDescription";
import {Link,Route} from 'react-router-dom'

function Cold (props) {
    const [coldList, setColdList]=useState([]);
    const [selectCold,setSelectCold] = useState('');

    const makeColdListCall = () =>{
        fetch("https://api.sampleapis.com/coffee/iced")
        .then((res) => res.json())
        .then((data)=>{
            setColdList(data)
        })
    }
    useEffect(()=> {
        makeColdListCall()
    },[])
    const handleColdClick = (title) =>{
        setSelectCold(title)
    }

    const coldDrinkList = coldList.map(cold =>{
        return <p onClick = {() => handleColdClick(cold.id)}><Link to = {"/iced/"+ cold.id}>{cold.title}</Link></p>
    })
    return <div>
        <h2>Cold Drink</h2>
        {coldDrinkList}
        {/* <Route path = '/iced/:name' render={() => <ColdDescription title={selectCold} coldDrinkList = {coldList} addDrinkToCart={props.addDrinkToCart}/>}/> */}
        {/* <ColdDescription title={selectCold} coldDrinkList = {coldList} addDrinkToCart={props.addDrinkToCart}/> */}
        </div>
}

export default Cold