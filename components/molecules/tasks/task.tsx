import {Task} from "@zazora/types/task";
import {DateTime} from "luxon";

interface ITaskProps {
    task: Task
}

function Task({task}: ITaskProps) {
    return (
        <li className="w-full border border-rose rounded-md">
            <div className="flex justify-between bg-rose p-2 text-white">
                <span>{task.title}</span>
                <span className="font-bold">{task.dueDate.toLocaleString(DateTime.DATE_FULL)}</span>
            </div>
            <div className="px-2 text-black h-full">
                {task.description}
            </div>
        </li>
    )
}

export default Task
