import { useState,useEffect,useContext } from "react";
import { TransactionContext } from "./transactionContext";
import { UserContext } from "../userContext/userContext";

export const TransactionProvider = ({ children })=>{
    const { user } = useContext(UserContext);
    const [transaction,setTransaction] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const token = localStorage.getItem("token");
    const headers = {
        "Content-Type" : "application/json",
        Authorization : `Bearer ${token}`,
    };

    const refresh = async() => {
        setLoading(true);
        setError(null);
        try{
            const res = await fetch("",{ headers });
            if(!res.ok) throw new Error ("Chargement impossible");
            setTransaction(await res.json());
        }catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() =>{
        if(user) refresh();
        else setTransaction([]);
    }, [user]);

    const addTransaction = async(data) => {
        const res =  await fetch("",{
            method: "POST",
            headers,
            body: JSON.stringify(data),
        });
        if(!res.ok) throw new Error("Ajout impossible");
        const created  = await res.json();
        setTransaction((prev) => [created,...prev]);
    }

    const deleteTransaction = async(id)=>{
        const res = await fetch("",{
            method: "DELETE",
            headers,
        });
        if(!res.ok) throw new Error("Echec de la suppression");
        setTransaction((prev)=> prev.filter((t)=> t.id !== id));
    }
    const expenseBalance = transaction.reduce(
        (sum,t) => sum + (t.type ==="expense"? t.amount: 0),0
    );
    const incomeBalance = transaction.reduce(
        (sum,t) => sum + (t.type ==="income"? t.amount: 0),0
    );
    return(
        <TransactionContext value={{
        transaction,
        loading,
        error,
        refresh,
        addTransaction,
        deleteTransaction,
        expenseBalance,
        incomeBalance,
        }} >
            { children }
        </TransactionContext>
    )
}