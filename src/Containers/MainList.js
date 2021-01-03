import React, { useState, useEffect } from 'react'
import Search from '../Components/Search'
import NewTask from '../Components/NewTask'
import Task from '../Components/Task'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function List() {

    const [newForm, setNewForm] = useState(false)
    const [tasks, setTasks] = useState([])
    const [filter, setFilter] = useState("")

    useEffect(() => {
        let taskArray = cookies.get('taskArray');
        setTasks(taskArray || [])
    }, [])

    useEffect(() => {
        if (newForm) {
            console.log('form')
            let formInput = document.querySelector('.form-input')
            formInput.focus()
        }
    }, [newForm])

    const renderNewForm = () => {
        setNewForm(true)
    }

    const submitTask = (taskInput, taskId = null) => {
        let newTaskArray = tasks

        if (typeof taskId === 'number') {
            newTaskArray[taskId] = taskInput
            setTasks([...newTaskArray])
            cookies.set('taskArray', [...newTaskArray], { path: '/' });
        } else {
            setTasks([...newTaskArray, taskInput])
            cookies.set('taskArray', [...newTaskArray, taskInput], { path: '/' });
            setNewForm(false)
        }
    }

    const deleteTask = (taskToDelete) => {
        let newTaskArray = tasks.filter(task => task !== taskToDelete)
        setTasks(newTaskArray)
        cookies.set('taskArray', [...newTaskArray], { path: '/' });
    }

    const filterTasks = (searchInput) => {
        setFilter(searchInput)
    }

    return (
        <div id="main-container">
            <Search renderNewForm={renderNewForm} filterTasks={filterTasks} />
            {newForm ? <NewTask submitTask={submitTask} /> : null}
            {tasks.length ? tasks.filter(task => task.includes(filter)).map(task => <Task key={task} taskId={tasks.indexOf(task)} task={task} deleteTask={deleteTask} submitTask={submitTask} />) : null}
        </div>
    )
}

export default List