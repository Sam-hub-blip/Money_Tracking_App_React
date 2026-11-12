import Element from '../layouts/element'



const HistoryE = ( { list }) => {
  return (
    <>
        <div>
            <span>Date</span>
            <span>Name</span>
            <span>Description</span>
            <span>Amount</span>
            <span>Type</span>
        </div>
        <div>
            {
                list.map((item) =>( 
                    <Element key={item.id}  items={item}/>
                ))
            }
        </div>
    </>
  )
}

export default HistoryE