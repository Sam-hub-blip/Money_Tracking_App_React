import React, { useState } from 'react'
import Details from '../UI/details';
const Element = ({items}) => {
  const [show,setShow] = useState(true);
  const handle =()=>{
    setShow(!show);
  }
  return (
    <section>
     <div type='button' className="" >
            <span> {items.date} </span>
            <span> {items.name} </span>
            <span> {items.description} </span>
            <span> {items.amount} </span>
            <span> {items.type} </span>
            <button type="button" onClick={handle}>...</button>
      </div>
      <div>
        <Details props={items} hide={show} setHide={setShow} />
      </div>
    </section>
  )
}

export default Element