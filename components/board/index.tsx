import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import Column from './column'
import { DragDropContext } from 'react-beautiful-dnd'
import { data, STATUSES } from './data'

const itemsSortedByStatus = data.reduce((acc: any, item) => {
  const { status } = item
  const id: string = status.name
  if (!acc[id]) {
    acc[id] = []
  }
  acc[id].push(item)
  return acc
}, {})

export type IProps = {}

export default function Board(props: IProps) {
  const onDragEnd = (result: any) => {}
  return (
    <DragDropContext onDragStart={() => {}} onDragEnd={onDragEnd}>
      <div className={s.container}>
        <div className={s.wrapper}>
          {STATUSES.map((status) => {
            const items = itemsSortedByStatus[status.name]
            return (
              <Column
                key={status.id}
                id={status.id}
                name={status.name}
                items={items}
              />
            )
          })}
        </div>
      </div>
    </DragDropContext>
  )
}
