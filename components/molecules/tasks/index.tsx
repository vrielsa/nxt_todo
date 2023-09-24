import {Task as TaskType, Tasks} from "@zazora/types/task";
import Task from "@zazora/components/molecules/tasks/task";

interface ITasksProps {
    tasks: Tasks
}

function Tasks({tasks}: ITasksProps) {
    return (
        <ul className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {tasks.length === 0 && (
                <li>
                    <div className="w-full p-2 text-black">
                        No tasks. Let&apos;s get started!
                    </div>
                </li>
            )}
            {tasks.map((task: TaskType) => (
                <Task task={task} key={task.id} />
            ))}
        </ul>
    )
}

export default Tasks
