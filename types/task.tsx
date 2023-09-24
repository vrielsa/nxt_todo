import {string, z, ZodInvalidTypeIssue, ZodIssue} from "zod";
import {DateTime} from "luxon";

export const TaskSchema = z.object({
    id: z.string().nonempty(),
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    dueDate: z.string().transform((value: string): DateTime => {
        const date = DateTime.fromISO(value)

        if (!date.isValid) {
            throw new z.ZodError([
                {
                    code: z.ZodIssueCode.invalid_type,
                    expected: "date",
                    message: "Invalid date format",
                    path: ["dueDate"],
                    received: typeof value,
                } as ZodIssue
            ])
        }

        return date
    }),
});

export const TasksSchema = z.array(TaskSchema);

export const TasksStateSchema = z.object({
    tasks: TasksSchema,
} as const);

export type Task = z.infer<typeof TaskSchema>;
export type Tasks = z.infer<typeof TasksSchema>;
export type TasksState = z.infer<typeof TasksStateSchema>;