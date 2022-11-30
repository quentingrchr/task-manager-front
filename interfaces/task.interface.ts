import { ISubtask, IStatus } from './'

interface ITask {
  id: string
  title: string
  description: string
  subTasks: ISubtask[]
  status: IStatus
}

export default ITask
