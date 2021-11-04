import { useEffect, useState } from "react"
import { useParams } from "react-router"
import './Description.css'
function ColdDescription (props) {
        const [icedCoffeeDetail,setIcedCoffeeDetail]=useState([])
  
        let {id} =useParams();

        const makeIcedDetailCall = () =>{
            fetch(`https://api.sampleapis.com/coffee/iced/${id}`)
            .then((res) => res.json())
            .then((data)=>{
                setIcedCoffeeDetail(data)
            })
        }
        useEffect(()=> {
            makeIcedDetailCall()
        },[])
        

        let coffeeDetail = ''
        if(id)
                coffeeDetail = 
            <div>
                <h1>{icedCoffeeDetail.title}</h1>
                <p>{icedCoffeeDetail.description}</p>
                <p>{icedCoffeeDetail.ingredients}</p>
                <button onClick={()=>props.addDrinkToCart(icedCoffeeDetail)}>Add to Cart</button>
            </div>
        
        
    
        return <div>
                {coffeeDetail}
            </div>
    }

export default ColdDescription