import React from 'react';
import AddTask from '../AddTask/AddTask';
import Tasks from '../task/Tasks';

const Home = () => {
    return (
        <div>
            <AddTask></AddTask>
            <Tasks></Tasks>
        </div>
    );
};

export default Home;