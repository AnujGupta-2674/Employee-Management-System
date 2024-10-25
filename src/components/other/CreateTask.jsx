import React, { useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';

function CreateTask() {

    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [category, setCategory] = useState("");

    const [newtask, setNewTask] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false });

        const data = userData;

        data.forEach(elem => {
            if (assignTo == elem.firstName) {
                elem.tasks.push(newtask);
            }
        });
        setUserData(data);
        console.log(data);


        setTaskTitle("");
        setAssignTo("");
        setCategory("");
        setTaskDescription("");
        setTaskDate("");
    }

    return (
        <>
            <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
                <form className="flex flex-wrap w-full items-start justify-between" onSubmit={(e) => submitHandler(e)}>
                    <div className="w-1/2">

                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                            <input type="text" placeholder="Make a ui design" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" value={taskTitle} onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }} />
                        </div>

                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                            <input type="date" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" value={taskDate} onChange={(e) => {
                                setTaskDate(e.target.value)
                            }} />
                        </div>

                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
                            <input type="text" placeholder="Employee Name" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" value={assignTo} onChange={(e) => {
                                setAssignTo(e.target.value)
                            }} />
                        </div>

                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                            <input type="text" placeholder="design,dev,etc" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" value={category} onChange={(e) => {
                                setCategory(e.target.value)
                            }} />
                        </div>
                    </div>

                    <div className="w-2/5 flex flex-col items-start">
                        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                        <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" value={taskDescription} onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}></textarea>

                        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
                    </div>


                </form>
            </div>
        </>
    );
}

export default CreateTask;