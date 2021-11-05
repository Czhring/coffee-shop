import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import './Hot.css'

function Hot (props) {
    const [hotList, setHotList]=useState([]);
    const [selectHot,setSelectHot] = useState(null);
    let photo = "https://www.tasteofhome.com/wp-content/uploads/2020/02/Types-of-Coffee-Drinks_1200X1200.jpg?resize=700,700"
    

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
    return <div className ="Hot">
        <h2>Hot Drink</h2>
        <img src={photo} alt="hot coffee image"/>
        {hotDrinkList}
        </div>
}

export default Hot