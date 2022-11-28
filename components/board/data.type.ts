interface SubTask {
  id: string
  name: string
  completed: boolean
}

interface Status {
  id: string
  name: string
}

interface Task {
  id: string
  title: string
  description: string
  subTasks: SubTask[]
  status: Status
}

export type { SubTask, Status, Task }
