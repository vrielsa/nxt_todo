"use client"

import {useState} from "react";
import {Task, TasksState} from "@zazora/types/task";
import Button from "@zazora/components/atoms/button";
import Tasks from "@zazora/components/molecules/tasks";
import AddTasks from "@zazora/components/organisms/modal/add-tasks";
import {SubmitHandler} from "react-hook-form";
import {addTask} from "@zazora/types/mutators/task";

function Todo() {
    const [state, setState] = useState<TasksState>({tasks: []})
    const [modalState, setModalState] = useState(false)

    const onSubmit: SubmitHandler<Task> = (data) => {
        setState(addTask(data)(state))
        setModalState(false)
    }

    return (
        <>
            <AddTasks onSubmit={onSubmit} modalOpen={modalState} closeModal={() => setModalState(false)}/>
            <div className="mb-6">
                <Tasks tasks={state.tasks}/>
            </div>
            <Button type="button" onClick={() => setModalState(true)}>Add new task</Button>
        </>
    )
}

export default Todo
