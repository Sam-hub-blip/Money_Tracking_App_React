function Card(props) {
    

    return (
        <div>
            <span> {props.text} </span>
            <span> {props.amount} </span>
        </div>
        
    );
}

export default Card