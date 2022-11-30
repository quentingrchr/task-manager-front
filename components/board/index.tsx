import React, { useState, useEffect } from 'react'
import s from './styles.module.scss'
import Column from './column'
import { DragDropContext } from 'react-beautiful-dnd'
import { DropResult } from 'react-beautiful-dnd'

import { data, STATUSES } from './data'
import { ITask } from '@interfaces'

const itemsSortedByStatus = (arr: ITask[]): ITaskByStatus => {
  return arr.reduce((acc: any, item: ITask) => {
    const { status } = item
    const id: string = status.id
    if (!acc[id]) {
      acc[id] = []
    }
    acc[id].push(item)
    return acc
  }, {})
}

export type IProps = {
  tasks: ITask[]
}

interface ITaskByStatus {
  [key: string]: ITask[]
}

export default function Board(props: IProps) {
  const [tasksByStatus, setTasksByStatus] = useState<ITaskByStatus>(
    itemsSortedByStatus(data)
  )

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    const isCancelled = !destination
    const isSamePosition =
      !isCancelled &&
      destination.droppableId === source.droppableId &&
      destination.index === source.index

    if (isCancelled || isSamePosition) return

    const sourceColumn: ITask[] = tasksByStatus[source.droppableId]
    const destinationColumn: ITask[] = tasksByStatus[destination.droppableId]
    const removedTask: ITask = sourceColumn.splice(source.index, 1)[0]
    destinationColumn.splice(destination.index, 0, removedTask)

    setTasksByStatus((state: ITaskByStatus): ITaskByStatus => {
      state[source.droppableId] = sourceColumn
      state[destination.droppableId] = destinationColumn
      return { ...state }
    })
  }

  return (
    <DragDropContext onDragStart={() => {}} onDragEnd={onDragEnd}>
      <div className={s.container}>
        <div className={s.wrapper}>
          {STATUSES.map((status) => {
            const items = tasksByStatus[status.id]
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
