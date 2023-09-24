import {Task} from "@zazora/types/task";
import {DateTime} from "luxon";

interface ITaskProps {
    task: Task
}

function Task({task}: ITaskProps) {
    const expired = task.dueDate < DateTime.now()
    const dueDateClass = expired ? "bg-rose" : "bg-orange"
    const borderClass = expired ? "border-rose" : "border-orange"
    const titleClass = expired ? "text-rose" : "text-orange"

    return (
        <li className={`w-full border rounded-md ${borderClass}`}>
            <div className={`flex justify-between p-2 text-white ${dueDateClass}`}>
                <span>{task.title}</span>
            </div>
            <div className="p-2 text-sm text-black h-full">
                <p className={titleClass}>Description</p>
                <p className="mb-4">{task.description}</p>
                <p className={titleClass}>Due at</p>
                <p>{task.dueDate.toLocaleString(DateTime.DATE_MED)}</p>
            </div>
        </li>
    )
}

export default Task
