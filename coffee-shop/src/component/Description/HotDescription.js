function HotDescription (props) {
    // const selectedCoffee = props.hotDrinkList.find(coffee  => coffee.title === props.title);

    


    

    let coffeeDetail = ''
    let selectedCoffee = ''
    if(props.title && props.hotDrinkList[0]){
        selectedCoffee = props.hotDrinkList.find(coffee  => coffee.title === props.title)
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

export default HotDescription