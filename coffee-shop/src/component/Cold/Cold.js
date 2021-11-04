import { useEffect, useState } from "react"
import ColdDescription from "../Description/ColdDescription";
import {Link,Route} from 'react-router-dom'
import './Cold.css'

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
    let photo = "https://www.tasteofhome.com/wp-content/uploads/2020/02/Types-of-iced-Coffee-2_1200X1200.jpg"


    const coldDrinkList = coldList.map(cold =>{
        return <p onClick = {() => handleColdClick(cold.id)}><Link to = {"/iced/"+ cold.id}>{cold.title}</Link></p>
    })
    return <div>
        <h2>Cold Drink</h2>
        <img src={photo} alt="iced coffee image"/>
        {coldDrinkList}
        {/* <ColdDescription addDrinkToCart={props.addDrinkToCart}/> */}
        </div>
}

export default Cold