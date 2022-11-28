import React from 'react'

import Item from '../item'
import { Task } from '../data.type'

export type IProps = {
  items: Task[]
}

export default function List(props: IProps) {
  const { items } = props
  return (
    <>
      {items.map((item, index) => (
        <Item key={item.id} item={item} index={index} />
      ))}
    </>
  )
}
