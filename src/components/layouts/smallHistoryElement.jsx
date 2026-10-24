import { useState } from "react";

function SmallHistoryElement({items}){

    const {id, name,describe,amount,type,date} = items;

    const [editMode,setEditMode] = useState(false);
    const [form,setForm] = useState({name,describe,amount,type})
    return(
        <div>
           {
            editMode && (
                <div>
                    <input type="text"  
                        value={form.name} />
                    <input type="text"
                         value={form.describe} />
                    <input type="" />
                    <input type="text" />
                    <input type="text" />
                </div>
            )
           }
        </div>
    )
}
export default SmallHistoryElement