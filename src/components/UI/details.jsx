import { useEffect, useState } from "react";
import { useTransactions } from "../../hooks/useTransaction";
function Details({props,hide, setHide}) {

    const { updateTransaction } = useTransactions();
    const [name,setName] = useState(props.name);
    const [amount,setAmount] = useState(props.amount);
    const [date,setDate] = useState(props.date);
    const [type,setType] = useState(props.type);
    const [description,setDescription] = useState(props.description);
    const [error,setError] = useState(null);
    let today = new Date().toLocaleDateString()
    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = {
            name : name,
            amount : amount,
            date : date,
            type : type,
            description : description
        };
        /*try {
            await updateTransaction(data,props.id);
            cancel();
        } catch (error) {
            setError(error);            
        }*/
       console.log("Update");
       cancel();

    }
    const cancel = () => {
       
            setHide(true);
      
        setName("");
        setAmount(0);
        setDate(new Date().toLocaleDateString());
        setDescription("");
        setType("");
        
    }
    //Ce composant doit flotter au dessus des autres 
    return (
        
        <form action="#" onSubmit={handleSubmit} hidden={hide} className="">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} id="name" onChange={(e)=> setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="amount">Amount</label>
                <input type="text" value={amount} id="amount" onChange={(e)=> setAmount(e.target.value)} />
            </div>
            <div>
                <label htmlFor="date">Date</label>
                <input type="date" value={date} id="date"  onChange={(e)=> setDate(e.target.value)}/>
            </div>
            <div>
                <select name="type" id="type" onChange={(e)=> setType(e.target.value)}>
                    <option value="">Select a type</option>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>
            </div>
            <div>
                <textarea placeholder="Description " type="text" id="description" value={description} onChange={(e)=> setDescription(e.target.value)}  />
            </div>
            { error && (
                <p> {error} </p>
            )}

            <div>
                <div>
                <button type="submit" disabled={(name.trim()=="" || Number(amount)<=0 || type.trim()=="" )} >Save modification</button>
                </div>
                <div >
                    <button type="button" onClick={cancel}>Cancel</button>
                </div>
            </div>
        </form>
    );
}
export default Details