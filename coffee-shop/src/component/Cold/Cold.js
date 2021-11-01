import { useEffect, useState } from "react"


function Cold () {
    const [coldList, setColdList]=useState([]);

    const makeColdListCall = () =>{
        fetch("https://api.sampleapis.com/coffee/iced")
        .then((res) => res.json())
        .then((data)=>{
            setColdList(data)
        })
    }
    useEffect(()=> {
        makeColdListCall()
    })
    

    const coldDrinkList = coldList.map(cold =>{
        return <p>{cold.title}</p>
    })
    return <div>
        <h2>Cold Drink</h2>
        {coldDrinkList}
        </div>
}

export default Cold