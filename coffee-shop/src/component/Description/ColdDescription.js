import { useEffect, useState } from "react"
function ColdDescription (props) {
        const [icedCoffeeDetail,setIcedCoffeeDetail]=useState([])
        console.log(props)
    
        const makeIcedDetailCall = () =>{
            fetch(`https://api.sampleapis.com/coffee/iced/${props.match.params.id}`)
            .then((res) => res.json())
            .then((data)=>{
                setIcedCoffeeDetail(data)
            })
        }
        useEffect(()=> {
            makeIcedDetailCall()
        },[])
    
        let coffeeDetail = ''
        if(props.match.params.id)
                coffeeDetail = 
            <div>
                <h1>{icedCoffeeDetail.title}</h1>
                <p>{icedCoffeeDetail.description}</p>
                <p>{icedCoffeeDetail.ingredients}</p>
                <button onClick={()=>props.addDrinkToCart()}>Add to Cart</button>
            </div>
        
        
    
        return <div>
                {coffeeDetail}
            </div>
    }

export default ColdDescription