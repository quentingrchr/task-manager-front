import React from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import { Task } from '../data.type'
import { Draggable } from 'react-beautiful-dnd'

export type IProps = {
  item: Task
  index: number
}

export default function Item(props: IProps) {
  const { item, index } = props
  const { title, description, subTasks } = item

  const completedSubTasks = subTasks.filter(
    (subTask) => subTask.completed
  ).length
  const totalSubTasks = subTasks.length

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided: any) => (
        <div
          className={s.container}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
        >
          <Card sx={{ minWidth: 200 }}>
            <CardActionArea>
              <CardContent>
                <h4 className={s.title}>{title}</h4>
                <Typography
                  sx={{
                    mb: 1.5,
                    mt: 1,
                    fontSize: 10,
                    opacity: 0.8,
                    fontWeight: 300,
                  }}
                  color="text.secondary"
                >
                  {description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  {completedSubTasks} of {totalSubTasks} subtasks completed
                </Typography>
              </CardContent>
              {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
            </CardActionArea>
          </Card>
        </div>
      )}
    </Draggable>
  )
}
