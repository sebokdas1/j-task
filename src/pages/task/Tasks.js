import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './Tasks.css'

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [style, setStyle] = useState(false)

    useEffect(() => {
        fetch('https://still-island-50226.herokuapp.com/task')
            .then(res => res.json())
            .then(data => {
                setTasks(data)
            })
    }, [])

    const deleteTask = id => {
        const Confirm = window.confirm('Are you sure, you want to delete?');
        if (Confirm) {
            const url = `https://still-island-50226.herokuapp.com/task/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    const remaining = tasks.filter(task => task._id !== id);
                    setTasks(remaining)
                });
        }
    }
    const completebtn = () => {
        alert('Tasks Completed!')
        setStyle(true)
    }
    return (
        <div className='w-75 mx-auto mt-5 mb-2'>
            <h2 className='text-center'>Tasks</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope='col'>Description</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>

                {
                    tasks.map(task => <tbody key={task._id}>
                        <tr>
                            <td className={style && 'line-through'}>{task.name.slice(0, 15)}</td>
                            <td className={style && 'line-through'}>{task.description.slice(0, 25)}</td>
                            <td><FontAwesomeIcon onClick={() => deleteTask(task._id)} className='dlt-icon' icon={faTrashCan} /></td>
                        </tr>
                    </tbody>)

                }

            </table>
            <button className='complete-btn' onClick={completebtn}>complete</button>
        </div>
    );
};

export default Tasks;