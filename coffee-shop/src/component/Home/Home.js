import { useEffect, useState } from "react"
import Cart from "../Cart/Cart"
import Cold from "../Cold/Cold"
import Hot from "../Hot/Hot"

function Home () {
    const [hotList, setHotList]=useState('');
    const [coldList, setColdList]=useState('');

    const makeHotListCall = () =>{
        fetch("https://api.sampleapis.com/coffee/hot")
        .then((res) => res.json())
        .then((data)=>{
            console.log(data)
        })
    }
    useEffect(()=> {
        makeHotListCall()
    })

    const makeColdListCall = () =>{
        fetch("https://api.sampleapis.com/coffee/iced")
        .then((res) => res.json())
        .then((data)=>{
            console.log(data)
        })
    }
    useEffect(()=> {
        makeColdListCall()
    })





    return (
    <div>
        <Hot />
        <Cold />
        <Cart />
    </div>
)
}

export default Home