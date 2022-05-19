import React, { useRef } from 'react';
import './AddTask.css'

const AddTask = () => {
    const nameRef = useRef("");
    const descriptionRef = useRef("");

    const handleAdd = e => {
        //stop page reload when form submitted.
        e.preventDefault();

        //get input data from input field
        // const email = user.email;
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;

        // wrap input data to task object.
        const task = { name, description }

        //post input data to database
        const url = `https://still-island-50226.herokuapp.com/task`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        e.target.reset()

    }
    return (
        <div className='add-main-container'>
            <h2 className='text-center mt-1'>Add New Task</h2>
            <div className='Add-container'>
                <form onSubmit={handleAdd}>
                    <div className="row">
                        <div className="coll-25">
                            <label htmlFor="fname">Task Name</label>
                        </div>
                        <div className="coll-75">
                            <input ref={nameRef} type="text" id="fname" name="taskName" placeholder="Task Name..." required />
                        </div>
                    </div>


                    <div className="row">
                        <div className="coll-25">
                            <label htmlFor="subject">Description</label>
                        </div>
                        <div className="coll-75">
                            <textarea ref={descriptionRef} id="subject" name="subject" placeholder="Write something about this task..." required />
                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <input type="submit" value="Add Task" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;