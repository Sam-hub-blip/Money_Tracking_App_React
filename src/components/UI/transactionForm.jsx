import { useState } from "react";

function TransactionForm() {
    const [name,setName] = useState("");
    const [amount,setAmount] = useState(0);
    const [date,setDate] = useState("");
    const [type,setType] = useState("");
    const [description,setDescription] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();
        //utile le context et ne renvoie rien au parent
        /*
         */
    }
    const cancel = ()=>{
        setName("");
        setAmount(0);
        setDate("");
        setDescription("");
        setType("");
    }
    return (
        <form action="#" onSubmit={handleSubmit}>
            <div>
                //every input should be hidden ; 
                <label htmlFor="name">Name</label>
                <input type="text" value={name} id="name" onChange={(e)=> setName(e.target.value)} hidden/>
            </div>
            <div>
                <label htmlFor="amount">Amount</label>
                <input type="text" value={amount} id="amount" onChange={(e)=> setAmount(e.target.value)} hidden/>
            </div>
            <div>
                <label htmlFor="date">Date</label>
                <input type="date" value={date} id="date" hidden onChange={(e)=> setDate(e.target.value)}/>
            </div>
            <div>
                <select name="type" id="type" onChange={(e)=> setType(e.target.value)}>
                    <option value="">Select a type</option>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" id="description" value={description} onChange={(e)=> setDescription(e.target.value)} hidden />
            </div>
            <div>
                <button type="submit" disabled={(name.trim()=="" || amount<0 || type.trim()=="" )} >Save</button>
            </div>
            <div >
                <button onClick={cancel}>Cancel</button>
            </div>
        </form>
    );
}
export default TransactionForm