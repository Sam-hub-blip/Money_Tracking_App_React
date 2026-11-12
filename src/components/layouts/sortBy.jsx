import { useState } from "react"

function SortBy({ setSortBy}) {
    const categoryList = ["date", "amount"];
    const handleSelection = (e)=>{
      setSortBy(e.target.value)
    }
   
  return (
    <div>
        <select name="sort" id="sort" onChange={handleSelection}>
          <option value="">Sort by </option>
          {categoryList.map((item)=>( 
            <option  key={item} value={item}>{item}</option>
          ))}
        </select>
    </div>
  )
}

export default SortBy;