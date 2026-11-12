const Card = (data) => {
    
    return (
        <div className=""> 
            <span> {data.data.text} </span>
            <span> {data.data.amount} </span>
        </div>
        
    );
}

export default Card ; 