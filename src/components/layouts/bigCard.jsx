function BigCard(data) {
    
    
    return (
        <div>
            <span>{data.data.text}</span>
            <span>{data.data.amount}</span>
        </div>
    );
}

export default BigCard