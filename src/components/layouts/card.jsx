const Card = (data) => {
    
    return (
        <div className=""> 
            <span> {data.text} </span>
            <span> {data.amount} </span>
        </div>
        
    );
}

export default Card