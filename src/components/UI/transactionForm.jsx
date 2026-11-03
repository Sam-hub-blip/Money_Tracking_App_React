import { useState } from "react";
import { useTransactions } from "../../hooks/useTransaction";

function TransactionForm() {
    const { addTransaction } = useTransactions();
    const today = () => new Date().toISOString().split("T")[0]; // "2026-10-27"
    const [name,setName] = useState("");
    const [amount,setAmount] = useState(0);
    const [date,setDate] = useState(today());
    const [type,setType] = useState("");
    const [description,setDescription] = useState("");
    const [error,setError] = useState(null);

    const handleSubmit = async (event)=>{
        event.preventDefault();
        try{
            const data = {
                name: name,
                amount: Number(amount),
                date : date,
                type : type,
                description : description,
            }
             await addTransaction(data);
             cancel();
        }catch(err){
            setError(err.message);
        }
    }

    const cancel = () => {
        setName("");
        setAmount(0);
        setDate(today());
        setDescription("");
        setType("");
    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <div>
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
                <textarea placeholder="Description " type="text" id="description" value={description} onChange={(e)=> setDescription(e.target.value)} hidden />
            </div>
            { error && (
                <p> {error} </p>
            )}
            <div>
                <button type="submit" disabled={(name.trim()=="" || Number(amount)<=0 || type.trim()=="" )} >Save</button>
            </div>
            <div >
                <button onClick={cancel}>Cancel</button>
            </div>
        </form>
    );
}
export default TransactionForm