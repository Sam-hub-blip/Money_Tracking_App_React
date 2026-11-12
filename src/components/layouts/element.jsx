import React from 'react'

const Element = ({items}) => {
  return (
     <div className="">
            <span> {items.date} </span>
            <span> {items.name} </span>
            <span> {items.description} </span>
            <span> {items.amount} </span>
            <span> {items.type} </span>
        </div>
  )
}

export default Element