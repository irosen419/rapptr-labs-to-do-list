import React, { useState, useEffect } from 'react'

function NewTask({ submitTask, task }) {

    const [taskInput, setTaskInput] = useState("")

    useEffect(() => {
        setTaskInput(task || "")
    }, [task])

    const changeHandler = ({ target: { value } }) => {
        setTaskInput(value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        submitTask(taskInput)
    }

    return (
        <div className="new-task">
            <form onSubmit={submitHandler}>
                <input type="text" value={taskInput} onChange={changeHandler} />
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}

export default NewTask