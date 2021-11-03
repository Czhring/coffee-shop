function ColdDescription (props) {

    // const selectedCoffee = props.coldDrinkList.find(coffee  => coffee.title === props.title);

    let coffeeDetail = ''
    
    if(props.title && props.coldDrinkList[0]){
        let selectedCoffee = props.coldDrinkList.find(coffee  => coffee.title === props.title);
        coffeeDetail = 
        <div>
            <h3>{props.title}</h3>
            <p>{selectedCoffee.description}</p>
            <p>{selectedCoffee.ingredients}</p>
            <button onClick={()=>props.addDrinkToCart(selectedCoffee)}>Add to Cart</button>
        </div>
    }
    return <div>
        {coffeeDetail}
        </div>
}

export default ColdDescription