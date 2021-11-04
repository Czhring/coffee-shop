import { useEffect, useState } from "react"
import HotDescription from "../Description/HotDescription";
import {Link,Route} from 'react-router-dom'

function Hot (props) {
    const [hotList, setHotList]=useState([]);
    const [selectHot,setSelectHot] = useState(null);

    

    const makeHotListCall = () =>{
        fetch("https://api.sampleapis.com/coffee/hot")
        .then((res) => res.json())
        .then((data)=>{
            setHotList(data)
        })
    }
    useEffect(()=> {
        makeHotListCall()
    },[])

    const handleHotClick = (title) =>{
        setSelectHot(title)
    }


   const hotDrinkList = hotList.map(hot =>{
    return <p onClick= {()=> handleHotClick(hot.id)}><Link to = {"/hot/"+ hot.id}>{hot.title}</Link></p>
})
    return <div>
        <h2>Hot Drink</h2>
        {hotDrinkList}
        {/* <HotDescription addDrinkToCart={props.addDrinkToCart}/> */}
        </div>
}

export default Hot