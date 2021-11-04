import Button from 'react-bootstrap/Button'
import './Cart.css'

function Cart (props){
    console.log(props)



    let myDrink = ''
    if(props.drink){
        myDrink = props.drink.map((coffee , index) => {
        return(
            <div>
            <h3>{coffee.title}</h3>
            <button onClick={()=>props.removeDrinkFromList(index)}> Delect</button>
        </div>)
        })
    }

    return(
    
    <div>
       <h1> My Cart</h1>
       <p>{myDrink}</p>
        <Button variant="dark">Pay</Button>{' '}
    </div>
    
)
}

export default Cart