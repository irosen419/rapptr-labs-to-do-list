import React, { useState, useEffect } from 'react'

function NewTask({ taskId, submitTask, task }) {

    const [taskInput, setTaskInput] = useState("")

    useEffect(() => {
        setTaskInput(task || "")
    }, [task])

    const changeHandler = ({ target: { value } }) => {
        setTaskInput(value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (taskInput.length > 0) {
            if (typeof taskId === 'number') {
                submitTask(taskInput, taskId)
            } else {
                submitTask(taskInput)
            }
        }
    }

    return (
        <div className="new-task">
            <form onSubmit={submitHandler}>
                <input className="form-input"
                    type="text" maxLength="25"
                    value={taskInput}
                    onChange={changeHandler} />
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}

export default NewTask