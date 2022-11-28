import { SubTask, Status, Task } from './data.type'

const STATUS_OPEN: Status = {
  id: '1',
  name: 'Open',
}

const STATUS_IN_PROGRESS: Status = {
  id: '2',
  name: 'In Progress',
}

const STATUS_DONE: Status = {
  id: '3',
  name: 'Done',
}

export const STATUSES: Status[] = [STATUS_OPEN, STATUS_IN_PROGRESS, STATUS_DONE]

export const data: Task[] = [
  {
    id: '1',
    title: 'Create a new component',
    description: 'Create a new component for the board',
    subTasks: [
      {
        id: '1',
        name: 'Create a new component',
        completed: false,
      },
      {
        id: '2',
        name: 'Commit to github',
        completed: false,
      },
    ],
    status: STATUS_OPEN,
  },
  {
    id: '2',
    title: 'Fix bug on mobile',
    description: 'Fix bug on mobile',
    subTasks: [
      {
        id: '1',
        name: 'Fix bug on mobile',
        completed: false,
      },
      {
        id: '2',
        name: 'Commit to github',
        completed: false,
      },
    ],
    status: STATUS_OPEN,
  },
  {
    id: '3',
    title: 'Learn React',
    description: 'Learn React',
    subTasks: [
      {
        id: '1',
        name: 'Learn JavaScript',
        completed: true,
      },
      {
        id: '2',
        name: 'Learn HTML',
        completed: true,
      },
      {
        id: '3',
        name: 'Learn CSS',
        completed: true,
      },
      {
        id: '4',
        name: 'Learn React',
        completed: false,
      },
    ],
    status: STATUS_IN_PROGRESS,
  },
  {
    id: '4',
    title: 'Learn Vue',
    description: 'Learn Vue',
    subTasks: [
      {
        id: '1',
        name: 'Learn JavaScript',
        completed: true,
      },
      {
        id: '2',
        name: 'Learn Vue',
        completed: false,
      },
    ],
    status: STATUS_DONE,
  },
]
