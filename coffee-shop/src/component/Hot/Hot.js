function Hot (props) {

   const hotDrinkList = props.hotDrinkList.map(hot =>{
    return <p>{hot.title}</p>
})

    return <div>
        <h2>Hot Drink</h2>
        {hotDrinkList}
        </div>
}

export default Hot