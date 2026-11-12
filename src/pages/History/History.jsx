import { useState } from "react";
import HistoryE from "../../components/UI/historyE";
import { useTransactions } from "../../hooks/useTransaction";
import SearchCondition from "../../components/UI/searchCondition";
function History() {
    const { transactions } = useTransactions();
    const [list, setList] = useState(null);
    return (
      <>
        <SearchCondition setList={setList} />
        <HistoryE list={transactions}/>
      </>  
    );
}
export default History;