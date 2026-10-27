function SmallHistoryElement({items}){

    return(
        <div>
            <span> {items.name} </span>
            <span> {items.describe} </span>
            <span> {items.amount} </span>
            <span> {items.type} </span>
            <span> {items.date} </span>
        </div>
    )
}
export default SmallHistoryElement