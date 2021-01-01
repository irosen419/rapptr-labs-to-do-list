import React, { useState, useEffect } from 'react'
import Search from '../Components/Search'
import NewTask from '../Components/NewTask'
import Task from '../Components/Task'

function List() {

    const [newForm, setNewForm] = useState(false)
    const [tasks, setTasks] = useState([])

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

    return (
        <div id="main-container">
            {console.log(tasks)}
            <Search renderNewForm={renderNewForm} />
            {newForm ? <NewTask submitTask={submitTask} /> : null}
            {tasks.length ? tasks.map(task => <Task key={task} taskId={tasks.indexOf(task)} task={task} deleteTask={deleteTask} submitTask={submitTask} />) : null}
        </div>
    )
}

export default List