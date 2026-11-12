import { useState,useEffect,useContext } from "react";
import { TransactionContext } from "./transactionContext";
import { UserContext } from "../userContext/userContext";
import  {API} from "../userContext/userProvider"


export const TransactionProvider = ({ children })=>{
    const { user } = useContext(UserContext);
    const [transactions,setTransaction] = useState([{
            id: 1,
            name : "Transport",
            description: " Aller-Retour Ouaga",
            amount :  2500,
            type : "expense",
            date : "2026-10-17"
        },
    {
            id:2,
            name : "Transport",
            description: " Aller-Retour Ouaga",
            amount :  2500,
            type : "expense",
            date : "2026-10-17"
        },
        {
            id:3,
            name : "Salaire",
            description : "Paye du mois",
            amount : 150000,
            type : "income",
            date : "2026-10-25"
        }]);
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
            const res = await fetch(` ${API}/transactions `,{ headers });
            if(!res.ok) throw new Error ("Chargement impossible");
            setTransaction(await res.json());
        }catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user) refresh();
        else setTransaction([]);
    }, [user]);

    const addTransaction = async(data) => {
        const res =  await fetch(` ${API}/addTransaction`,{
            method: "POST",
            headers,
            body: JSON.stringify(data),
        });
        if(!res.ok) throw new Error("Ajout impossible");
        const created  = await res.json();
        setTransaction((prev) => [created,...prev]);
    }
    const updateTransaction = async (data,id) => {

        const res = await fetch(`${API}/updateTransaction`, {
            method: "PUT",
            headers,
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Modification impossible");

        const updated = await res.json();

        setTransaction((prev) =>
            prev.map((t) => (t.id === id ? updated : t))
        );
    };
    
    const deleteTransaction = async(id)=>{
        const res = await fetch(` ${API}/delete/${id}`,{
            method: "DELETE",
            headers,
        });
        if(!res.ok) throw new Error("Echec de la suppression");
        setTransaction((prev)=> prev.filter((t)=> t.id !== id));
    }
    const expenseBalance = transactions.reduce(
        (sum,t) => sum + (t.type ==="expense"? t.amount: 0),0
    );
    const incomeBalance = transactions.reduce(
        (sum,t) => sum + (t.type ==="income"? t.amount: 0),0
    );
    return(
        <TransactionContext.Provider value={{
        transactions,
        loading,
        error,
        refresh,
        addTransaction,
        updateTransaction,
        deleteTransaction,
        expenseBalance,
        incomeBalance,
        }} >
            { children }
        </TransactionContext.Provider>
    )
}