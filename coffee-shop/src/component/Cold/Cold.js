import { useEffect, useState } from "react"
import ColdDescription from "../Description/ColdDescription";


function Cold () {
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
        return <p onClick = {() => handleColdClick(cold.title)}>{cold.title}</p>
    })
    return <div>
        <h2>Cold Drink</h2>
        {coldDrinkList}
        <ColdDescription title={selectCold} coldDrinkList = {coldList}/>
        </div>
}

export default Cold