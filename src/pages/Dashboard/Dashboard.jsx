import BigCard  from "../../components/layouts/bigCard";
import  Card  from "../../components/layouts/card";
import DashStory from "../../components/UI/dashStory";
import { useTransactions } from "../../hooks/useTransaction";
import { useState } from "react";

function Dashboard() {
    const {transactions, expenseBalance, incomeBalance} = useTransactions();
    let bigData = {
        text: "Current balance",
        amount : incomeBalance-expenseBalance
    }
    let data = [
        {id:1,text:"Expense",amount:expenseBalance},
        {id:2,text:"Income", amount:incomeBalance}
    ]
    const [sortBy,setSortBy] = useState({
        selection : "",
        inverted : false
    })
    return (
        <div>
            <section>
                
                <BigCard data={bigData} />
            </section>
            <section>
                {data.map((item)=>(
                    <Card key={item.id} data={item}/>
                ))}
            </section>
            <section>
                <DashStory data={transactions}/>
            </section>
        </div> 
    );
}
export default Dashboard;