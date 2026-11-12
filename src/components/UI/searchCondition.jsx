import React, { useState } from 'react'
import Button from '../layouts/button';
import SortBy from '../layouts/sortBy';
import SearchBar from '../layouts/searchBar';



const SearchCondition = () => {
    const [search,setSearch] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [inverted,setInverted] = useState(false);
  return (
    <div>
        <secttion>
            <SearchBar setSearch={setSearch}/>
        </secttion>
        <secttion>
            {/* ALL Expense Income */}
        </secttion>
        <secttion>
            <SortBy setSortBy={setSortBy}/>
            <Button setInvert={setInverted} invert={inverted}/>
        </secttion>
    </div>
  )
}

export default SearchCondition