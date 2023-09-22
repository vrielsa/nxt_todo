import {Lens, lensPath} from "ramda"
import {Tasks, TasksState} from "@zazora/types/task"

export const tasksLens = (): Lens<TasksState, Tasks> => lensPath(["tasks"])
