import { useEffect, useState } from "react"
import HotDescription from "../Description/HotDescription";
import {Link} from 'react-router-dom'

function Hot (props) {
    const [hotList, setHotList]=useState([]);
    const [selectHot,setSelectHot] = useState('');

    

    const makeHotListCall = () =>{
        fetch("https://api.sampleapis.com/coffee/hot")
        .then((res) => res.json())
        .then((data)=>{
            setHotList(data)
        })
    }
    useEffect(()=> {
        makeHotListCall()
        console.log()
    },[])

    const handleHotClick = (title) =>{
        setSelectHot(title)
    }


   const hotDrinkList = hotList.map(hot =>{
    return <p onClick= {()=> handleHotClick(hot.title)}><Link to = {"/hot/"+ hot.title}>{hot.title} </Link></p>
})

    return <div>
        <h2>Hot Drink</h2>
        {hotDrinkList}
        <HotDescription title={selectHot} hotDrinkList = {hotList} addDrinkToCart={props.addDrinkToCart}/>
        </div>
}

export default Hot