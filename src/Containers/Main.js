import React, { useState, useEffect } from 'react'
import Search from '../Components/Search'
import NewTask from '../Components/NewTask'
import Task from '../Components/Task'

function List() {

    const [newForm, setNewForm] = useState(false)
    const [tasks, setTasks] = useState([])
    const [filter, setFilter] = useState("")

    useEffect(() => {
        let taskArray = localStorage.getItem('taskArray')
        setTasks(taskArray || [])
    }, [])

    const renderNewForm = () => {
        setNewForm(true)
    }

    const submitTask = (taskInput, taskId = null) => {
        let newTaskArray = tasks

        if (typeof taskId === 'number') {
            newTaskArray[taskId] = taskInput
            setTasks([...newTaskArray])
        } else {
            setTasks([...newTaskArray, taskInput])
            setNewForm(false)
        }
    }

    const deleteTask = (taskToDelete) => {
        let newTaskArray = tasks.filter(task => task !== taskToDelete)
        setTasks(newTaskArray)
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