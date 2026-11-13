import  { useState, useMemo,useEffect } from 'react'
import Button from '../layouts/button';
import SortBy from '../layouts/sortBy';
import SearchBar from '../layouts/searchBar';
import { useTransactions } from '../../hooks/useTransaction';


const SearchCondition = ({ handleChange }) => {
    const [search,setSearch] = useState("");
    const [sortBy, setSortBy] = useState("date");
    const [inverted,setInverted] = useState(false);
    const [typeFilter, setTypeFilter] = useState("all");
    const { transactions } = useTransactions();

    const filtered =  useMemo(() => {
        let list  = transactions;

        if(typeFilter!== "all") list = list.filter((t)=> t.type === typeFilter);

        if(search.trim())
            list  = list.filter((t) =>t.name.toLowerCase().includes(search.toLowerCase()));
        
        const sorted = [...list].sort((a,b)=>
            sortBy === "date" ? new Date(b.date) - new Date(a.date) : b.amount - a.amount );
        
        return inverted ? sorted.reverse() : sorted;
    }, [transactions, search, typeFilter, sortBy, inverted]);

    useEffect(() => {
        handleChange(filtered);
    },[filtered,handleChange])

  return (
    <div className='flex '>
        <section>
            <SearchBar setSearch={setSearch}/>
        </section>
        <section>
            {/* ALL Expense Income */}
            <button type="button" onClick={()=> setTypeFilter("all")}>All</button>
            <button type="button" onClick={()=> setTypeFilter("expense")}>Expense</button>
            <button type="button" onClick={()=> setTypeFilter("income")}>Income</button>
        </section>
        <section>
            <SortBy setSortBy={setSortBy}/>
            <Button setInvert={setInverted} invert={inverted}/>
        </section>
    </div>
  )
}

export default SearchCondition