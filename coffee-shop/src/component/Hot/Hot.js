import { useEffect, useState } from "react"
import HotDescription from "../Description/HotDescription";

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
    },[])

    const handleHotClick = (title) =>{
        setSelectHot(title)
    }


   const hotDrinkList = hotList.map(hot =>{
    return <p onClick= {()=> handleHotClick(hot.title)}>{hot.title}</p>
})

    return <div>
        <h2>Hot Drink</h2>
        {hotDrinkList}
        <HotDescription title={selectHot} hotDrinkList = {hotList} addDrinkToCart={props.addDrinkToCart}/>
        </div>
}

export default Hot