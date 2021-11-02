function HotDescription (props) {
    console.log(props)
    const selectedCoffee = props.hotDrinkList.find(coffee  => coffee.title === props.title);

    let coffeeDetail = ''
    if(props.title){
        coffeeDetail = 
        <div>
            <h3>{props.title}</h3>
            <p>{selectedCoffee.description}</p>
            <p>{selectedCoffee.ingredients}</p>
            <button onClick={()=>props.addDrinkToCart()}>Add to Cart</button>
        </div>
    }


    return <div>
            {coffeeDetail}
        </div>
}

export default HotDescription