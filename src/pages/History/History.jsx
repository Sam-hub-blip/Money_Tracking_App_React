import { useState } from "react";
import HistoryE from "../../components/UI/historyE";
import { useTransactions } from "../../hooks/useTransaction";
import SearchCondition from "../../components/UI/searchCondition";
function History() {
    const { transactions } = useTransactions();
    const [list, setList] = useState([]);
    const handleChange = (data) =>{
      setList(data);
    }
    return (
      <>
        <SearchCondition handleChange={handleChange} />
        <HistoryE list={list}/>
      </>  
    );
}
export default History;