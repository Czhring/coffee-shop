import { useEffect, useState } from "react"

function Hot () {
    const [hotList, setHotList]=useState([]);
    const makeHotListCall = () =>{
        fetch("https://api.sampleapis.com/coffee/hot")
        .then((res) => res.json())
        .then((data)=>{
            console.log(data)
            setHotList(data)
        })
    }
    useEffect(()=> {
        makeHotListCall()
    },[])

   const hotDrinkList = hotList.map(hot =>{
    return <p>{hot.title}</p>
})

    return <div>
        <h2>Hot Drink</h2>
        {hotDrinkList}
        </div>
}

export default Hot