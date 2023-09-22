"use client"

import {useState} from "react";
import {Task, TaskSchema, TasksState} from "@zazora/types/task";
import Button from "@zazora/components/atoms/button";
import Label from "@zazora/components/atoms/label";
import Modal from "@zazora/components/molecules/modal";
import Input from "@zazora/components/atoms/input";
import Tasks from "@zazora/components/molecules/tasks";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {v4} from "uuid";
import {addTask} from "@zazora/types/mutators/task";

function Todo() {
    const { register, handleSubmit, formState: { errors } } = useForm<Task>({
        resolver: zodResolver(TaskSchema),
    })
    const [state, setState] = useState<TasksState>({tasks: []})
    const [modalState, setModalState] = useState(false)

    const onSubmit: SubmitHandler<Task> = (data) => {
        setState(addTask(data)(state))
        setModalState(false)
    }

    const onInvalid = (errors: any) => {
        console.log(errors)
    }

    return (
        <>
            <Modal title="Add task" modalOpen={modalState} closeModal={() => setModalState(false)}>
                <form className="flex flex-col gap-8 p-4" onSubmit={handleSubmit(onSubmit, onInvalid)}>
                    <Input name="id" register={register} type="hidden" value={v4()}/>
                    <span className="flex flex-col relative">
                        <Input name="title"  type="text" placeholder="Title" register={register}/>
                        <Label inputName="title">Title <span className="text-rose">*</span></Label>
                        {errors.title && <span className="text-rose text-sm">{errors.title.message}</span>}
                    </span>
                    <span className="flex flex-col relative">
                            <Input name="dueDate" type="date" placeholder="Due date" register={register} />
                            <Label inputName="dueDate">Due date <span className="text-rose">*</span></Label>
                            {errors.dueDate && <span className="text-rose text-sm">{errors.dueDate.message}</span>}
                    </span>
                    <span className="flex flex-col relative">
                            <Input type="text" name="description" placeholder="Description" register={register} />
                            <Label inputName="description">Description</Label>
                            {errors.description && <span className="text-rose text-sm">{errors.description.message}</span>}
                    </span>
                    <Button type="submit">Create</Button>
                </form>
            </Modal>
            <div className="mb-6">
                <Tasks tasks={state.tasks}/>
            </div>
            <Button type="button" onClick={() => setModalState(true)}>Add new task</Button>
        </>
    )
}

export default Todo
