import React from "react";
import { ITodo } from "../App";


interface ITodosSelected {
    todos: Array<ITodo>
    setArr: any
}

const TodosSelect = ({todos, setArr}: ITodosSelected ) => {

    const completedTodos = (id: number) => {
        setArr((prev: ITodo[]) => prev.map(p => p.id === id ? {...p, isCompleted: !p.isCompleted} : p))
    }
    return (
        <div>
            {todos.map(a =>
                <div className='todos__task' key={a.id}>
                    {a.isCompleted ? 
                                <div onClick={() => completedTodos(a.id)} className='todos__task__icon'>&#10004;</div> 
                                : 
                                <div onClick={() => completedTodos(a.id)} className='todos__task__icon'></div>
                    }
                    <div className={`todos__task__title ${a.isCompleted && 'isCompleted'}`}>{a.title}</div>
                </div>
            )}
        </div>
    );
}

export default TodosSelect;