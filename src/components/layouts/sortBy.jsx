import { useState } from "react"

function SortBy({categoryList, setSortBy}) {
    const [inverted,setinverted] = useState(false);
    const handleSelection = (e)=>{
      const selection = e.target.value;
      setSortBy({
        selection : selection,
        invertion : inverted
      })
    }
  return (
    <div>
        <select name="sort" id="sort" onChange={handleSelection}>
          {categoryList.map((item)=>( 
            <option  key={item} value={item}>{item}</option>
          ))}
        </select>
        <button onClick={()=> setinverted(!inverted)}>invert</button>
    </div>
  )
}

export default SortBy