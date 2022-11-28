import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import Item from '../item'
import { Task } from '../data.type'
import { Droppable } from 'react-beautiful-dnd'
import List from '../list'

export type IProps = {
  id: string
  name: string
  items: Task[]
}

export default function Column(props: IProps) {
  const { id, name, items } = props
  return (
    <div className={s.container}>
      <h3 className={s.title}>{name}</h3>
      <Droppable droppableId={id}>
        {(provided: any) => (
          <div
            className={s.listContainer}
            innerRef={provided.innerRef}
            {...provided.droppable}
          >
            <List items={items} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}
