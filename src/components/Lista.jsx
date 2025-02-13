import React from 'react'
import Item from './Item'

const Lista = ({items}) => {
  return (
    <>
      {items.map((i) => (<Item item={i}/>))}
    </>
  )
}

export default Lista
