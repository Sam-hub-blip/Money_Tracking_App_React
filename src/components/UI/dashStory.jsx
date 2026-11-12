import AddBtn from "../layouts/addBtn";
import SmallHistoryElement from "../layouts/smallHistoryElement";
import { Link } from "react-router";
import { useState } from "react";
function DashStory({data}) {
    
    const [showModal, setShowModal] = useState(false);
    if(showModal) console.log("show");
    return (
        <div>
            <div>
                <section>Transactions</section>
                <section>
                    <AddBtn setShowModal={setShowModal} />
                </section>
            </div>
            <div className="bg-red-300">
                {
                    data.map((item)=>(
                        <SmallHistoryElement key={item.id} items={item}/>
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