import { useEffect, useState } from "react"


function HotDescription (props) {
    const [hotCoffeeDetail,setHotCoffeeDetail]=useState([])
  

    const makeDetailCall = () =>{
        fetch(`https://api.sampleapis.com/coffee/hot/${props.match.params.id}`)
        .then((res) => res.json())
        .then((data)=>{
            setHotCoffeeDetail(data)
        })
    }
    useEffect(()=> {
        makeDetailCall()
    },[])

    let coffeeDetail = ''
    if(props.match.params.id)
            coffeeDetail = 
        <div>
            <h1>{hotCoffeeDetail.title}</h1>
            <p>{hotCoffeeDetail.description}</p>
            <p>{hotCoffeeDetail.ingredients}</p>
            <button onClick={()=>props.addDrinkToCart()}>Add to Cart</button>
        </div>
    
    

    return <div>
            {coffeeDetail}
        </div>
}

export default HotDescription