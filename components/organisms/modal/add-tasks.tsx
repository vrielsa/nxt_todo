import Input from "@zazora/components/atoms/input";
import {v4} from "uuid";
import Label from "@zazora/components/atoms/label";
import Button from "@zazora/components/atoms/button";
import Modal from "@zazora/components/molecules/modal";
import {useForm} from "react-hook-form";
import {Task, TaskSchema} from "@zazora/types/task";
import {zodResolver} from "@hookform/resolvers/zod";

interface IAddTasksModalProps {
    onSubmit: (data: Task) => void
    modalOpen: boolean
    closeModal: () => void
}

function AddTasks({onSubmit, modalOpen, closeModal}: IAddTasksModalProps) {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<Task>({
        resolver: zodResolver(TaskSchema),
    })

    const onInvalid = (errors: any) => {
        console.log(errors)
    }

    return (
        <Modal title="Add task" modalOpen={modalOpen} closeModal={() => closeModal()}>
            <form className="flex flex-col gap-8 p-4" onSubmit={handleSubmit((data: Task) => {
                onSubmit(data);
                reset();
            }, onInvalid)}>
                <Input name="id" register={register} type="hidden" value={v4()}/>
                <span className="flex flex-col relative">
                            <Input name="title" type="text" placeholder="Title" register={register}/>
                            <Label inputName="title">Title <span className="text-rose">*</span></Label>
                    {errors.title && <span className="text-rose text-sm">{errors.title.message}</span>}
                        </span>
                <span className="flex flex-col relative">
                                <Input name="dueDate" type="date" placeholder="Due date" register={register}/>
                                <Label inputName="dueDate">Due date <span className="text-rose">*</span></Label>
                    {errors.dueDate && <span className="text-rose text-sm">{errors.dueDate.message}</span>}
                        </span>
                <span className="flex flex-col relative">
                                <Input type="text" name="description" placeholder="Description" register={register}/>
                                <Label inputName="description">Description <span className="text-rose">*</span></Label>
                    {errors.description && <span className="text-rose text-sm">{errors.description.message}</span>}
                        </span>
                <Button type="submit">Create</Button>
            </form>
        </Modal>
    )
}

export default AddTasks