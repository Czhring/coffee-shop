import { useEffect, useState } from "react"
import { useParams } from "react-router"
import './Description.css'

function HotDescription (props) {
    const [hotCoffeeDetail,setHotCoffeeDetail]=useState([])

    let {id} =useParams();
    console.log(id)
    const makeHotDetailCall = () =>{
        fetch(`https://api.sampleapis.com/coffee/hot/${id}`)
        .then((res) => res.json())
        .then((data)=>{
            setHotCoffeeDetail(data)
        })
    }
    useEffect(()=> {
        makeHotDetailCall()
    },[])

    let coffeeDetail = ''
    if(id)
            coffeeDetail = 
        <div className ="Description">
            <h1>{hotCoffeeDetail.title}</h1>
            <p>{hotCoffeeDetail.description}</p>
            <h5>Ingredient:</h5>
            <p>{hotCoffeeDetail.ingredients}</p>
            <button onClick={()=>props.addDrinkToCart(hotCoffeeDetail)}>Add to Cart</button>
        </div>
    
    

    return <div className="hotcoffee">
            {coffeeDetail}
        </div>
}

export default HotDescription