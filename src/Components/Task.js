import { MdModeEdit, MdDelete } from 'react-icons/md'
import React, { useState } from 'react'
import NewTask from '../Components/NewTask'

function Task({ taskId, task, deleteTask, submitTask }) {

    const [edit, setEdit] = useState(false)

    return (
        <div className="task">
            {
                edit ?
                    <NewTask taskId={taskId}
                        submitTask={submitTask}
                        task={task}
                        edit={edit} />
                    :
                    <>
                        <p>{task}</p>
                        <div className="icons">
                            <MdModeEdit onClick={() => setEdit(true)} />
                            <MdDelete onClick={() => deleteTask(task)} />
                        </div>
                    </>
            }

        </div>
    )
}

export default Task