import AddBtn from "../layouts/addBtn";
import SmallHistoryElement from "../layouts/smallHistoryElement";
import { Link } from "react-router";
function DashStory({data}) {
    

    return (
        <div>
            <div>
                <section>Transactions</section>
                <section>
                    <AddBtn />
                </section>
            </div>
            <div>
                {
                    data.map((index,item)=>(
                        <SmallHistoryElement key={index} items={item}/>
                    ))
                }
            </div>
            <div>
                <Link to="/history">See all transactions</Link>
            </div>
        </div>
    );
}
export default DashStory;