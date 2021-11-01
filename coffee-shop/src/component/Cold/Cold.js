function Cold (props) {
    const coldDrinkList = props.coldDrinkList.map(cold =>{
        return <p>{cold.title}</p>
    })
    return <div>
        <h2>Cold Drink</h2>
        {coldDrinkList}
        </div>
}

export default Cold