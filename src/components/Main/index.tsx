import { FormEvent, useState } from "react"
import { v4 as uuidV4 } from 'uuid'

import { BsPlusCircle } from "react-icons/bs"
import { HiOutlineTrash } from "react-icons/hi"

import { Container } from "./style"

import ClipboardImg from '../../assets/images/Clipboard.png'
import { FormCreateTask } from "../FormCreateTask"

type TaskProps = {
    id: string
    title: string,
    finished: boolean
}

export const Main = () => {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState<TaskProps[]>([]);

    const handleCreateNewTask = (event: FormEvent) => {
        event.preventDefault();

        if (newTask.length === 0) return;

        setTasks(oldTasks => [...oldTasks, { id: uuidV4(), title: newTask, finished: false }]);
        setNewTask("");
    }

    const handleDeleteTask = (id: string) => {
        setTasks(oldTasks => oldTasks.filter(task => task.id !== id));
    }

    const handleFinishTask = (id: string) => {
        setTasks(oldTasks => {
            return oldTasks.map(task => task.id === id ? { ...task, finished: !task.finished } : task)
        });
    }

    const handleValueOfNewTask = (value: string) => {
        setNewTask(value);
    }

    const totalTasks = tasks.length;
    const totalFinishedTasks = tasks.filter(task => task.finished).length;

    return (
        <Container>
            <div className="container">
                <FormCreateTask
                    className="todo__search"
                    handleValueOfNewTask={handleValueOfNewTask}
                    newTask={newTask}
                    onSubmit={handleCreateNewTask}
                />

                <div className="todo__list">

                    <div className="todo__list__header">
                        <div className="todo__total__count">
                            <p>Tarefas criadas <span>{totalTasks}</span> </p>
                        </div>

                        <div className="todo__total__completed">
                            <p>Concluídas <span>{totalFinishedTasks} de {totalTasks}</span> </p>
                        </div>
                    </div>

                    <ul className="todo__list__body">
                        {tasks.length > 0 ? (
                            tasks.map(task => (
                                <li key={task.id} className={`todo__item ${task.finished ? 'active' : ''}`}>
                                    <div className="todo__item__left">
                                        <button
                                            type="button"
                                            onClick={() => handleFinishTask(task.id)}
                                        >
                                            <span>&#10003;</span>
                                        </button>

                                        <p>{task.title}</p>
                                    </div>

                                    <div className="todo__item__right">
                                        <button
                                            onClick={() => handleDeleteTask(task.id)}
                                        >
                                            <HiOutlineTrash size={20} />
                                        </button>
                                    </div>

                                </li>
                            ))
                        ) : (
                            <li className="todo__list__body__item__none">
                                <img src={ClipboardImg} alt="Clipboard" />

                                <p>Você ainda não tem tarefas cadastradas</p>
                                <p>Crie tarefas e organize seus itens a fazer</p>
                            </li>
                        )}
                    </ul>

                </div>
            </div>
        </Container>
    )
}