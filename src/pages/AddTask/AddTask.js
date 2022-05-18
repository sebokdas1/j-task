import React, { useRef } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
import './AddTask.css'

const AddTask = () => {
    // const [user] = useAuthState(auth);
    const nameRef = useRef("");
    const descriptionRef = useRef("");
    const imgRef = useRef("");
    const supplierRef = useRef("");
    const stockRef = useRef(1);
    const priceRef = useRef(1);
    // if (user) {
    //     console.log(user.email)
    // }
    const handleAdd = e => {
        //stop page reload when form submitted.
        e.preventDefault();
        //get input data from input field

        // const email = user.email;
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;

        //wrap input data to item object.
        // const item = { email, img, name, description, price, supplier, quantity }

        // //post input data to database
        // const url = `https://nutrio-warehouse.herokuapp.com/item`;
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(item)
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        // // toast('Product added successfully')
        // e.target.reset()
    }
    return (
        <div className='add-main-container'>
            <h2 className='text-center mt-1'>Add New Product</h2>
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