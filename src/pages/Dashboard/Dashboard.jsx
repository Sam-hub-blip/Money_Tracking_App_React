import BigCard  from "../../components/layouts/bigCard";
import  Card  from "../../components/layouts/card";
import DashStory from "../../components/UI/dashStory";


function Dashboard() {
    
    let bigData = {
        text: "Current balance",
        amount : 147000
    }
    let data = [
        {text:"Expense",amount:1500},
        {text:"Income", amount:155220}
    ]
    return (
        <div>
            <section>
                <BigCard data={bigData} />
            </section>
            <section>
                {data.map((index,item)=>(
                    <Card key={index} data={item}/>
                ))}
            </section>
            <section>
                <DashStory />
            </section>
        </div> 
    );
}
export default Dashboard;