import { IStatus, ITask } from '@interfaces'

const STATUS_OPEN: IStatus = {
  id: '3459bfaf-fe62-4944-9ee1-748924f6d1a2',
  name: 'Open',
}

const STATUS_IN_PROGRESS: IStatus = {
  id: '6c0bd5e9-9f8e-4d84-98cf-36c545adb89b',
  name: 'In Progress',
}

const STATUS_DONE: IStatus = {
  id: 'a45f2f69-d819-48b7-8d34-6b6f71ea9b9a',
  name: 'Done',
}

export const STATUSES: IStatus[] = [
  STATUS_OPEN,
  STATUS_IN_PROGRESS,
  STATUS_DONE,
]

export const data: ITask[] = [
  {
    id: 'd34add7f-a788-40e6-b569-517ac744335a',
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
    id: '277901d0-19da-4b38-b47a-d445376d1761',
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
    id: '05340a33-dc78-4677-a1f3-7f8e48380c57',
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
    status: STATUS_OPEN,
  },
  {
    id: '4d933e15-44c5-4a18-b3b0-9ebacfba09ac',
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
    status: STATUS_OPEN,
  },
  {
    id: '4d933e15-44c5-4a18-b3b0-9eba09ac',
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
  {
    id: '4d933e159ebacfba09ac',
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
    status: STATUS_IN_PROGRESS,
  },
]
