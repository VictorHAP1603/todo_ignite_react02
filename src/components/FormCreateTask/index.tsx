import { FormEvent, HTMLAttributes } from "react";
import { BsPlusCircle } from "react-icons/bs";

type FormCreateTaskProps = HTMLAttributes<HTMLFormElement> & {
    onSubmit: (event: FormEvent) => void;
    handleValueOfNewTask: (value: string) => void;
    newTask: string;

}

export const FormCreateTask = ({ newTask, handleValueOfNewTask, ...props }: FormCreateTaskProps) => {
    return (
        <form {...props}>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={newTask}
                onChange={(e) => handleValueOfNewTask(e.target.value)}
            />

            <button type="submit" disabled={newTask.length === 0}>
                Criar
                <BsPlusCircle size={16} />
            </button>
        </form>
    )
}