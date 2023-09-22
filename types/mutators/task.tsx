import {Task, Tasks, TasksState} from "@zazora/types/task";
import {tasksLens} from "@zazora/types/lens/task"
import {view, set} from "ramda"

type TaskStateManipulator = (state: TasksState) => TasksState
const changeTaskState = (mutator: TaskStateManipulator) => (state: TasksState): TasksState => {
    return mutator(state)
}

type TasksManipulator = (tasks: Tasks) => Tasks
const changeTasks = (mutator: TasksManipulator) => (tasks: Tasks): Tasks => {
    return mutator(tasks)
}

export function addTask(task: Task): TaskStateManipulator {
    return changeTaskState((state: TasksState): TasksState => {
        const lens = tasksLens()
        const tasks = view<TasksState, Tasks>(lens, state)

        const mutate = changeTasks((tasks: Tasks): Tasks => {
            return [
                ...tasks,
                task
            ]
        })

        return set<TasksState, Tasks>(lens, mutate(tasks), state)
    })
}