import Cold from "../Cold/Cold"
import Hot from "../Hot/Hot"

function Home () {
    // const [hotList, setHotList]=useState([]);
    // const [coldList, setColdList]=useState([]);

    // const makeHotListCall = () =>{
    //     fetch("https://api.sampleapis.com/coffee/hot")
    //     .then((res) => res.json())
    //     .then((data)=>{
    //         setHotList(data)
    //     })
    // }
    // useEffect(()=> {
    //     makeHotListCall()
    // },[])
   


    // const makeColdListCall = () =>{
    //     fetch("https://api.sampleapis.com/coffee/iced")
    //     .then((res) => res.json())
    //     .then((data)=>{
    //         setColdList(data)
    //     })
    // }
    // useEffect(()=> {
    //     makeColdListCall()
    // })
    





    return (
    <div>
        <Hot />
        <Cold/>
    </div>
)
}

export default Home