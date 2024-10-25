import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function AllTask() {

    const [userData, setUserData] = useContext(AuthContext);

    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>

            <div className='bg-red-400 py-2 px-4  flex justify-around rounded'>
                <h2 className='w-1/5'>Employee</h2>
                <h3 className='w-1/5'>New Task</h3>
                <h5 className='w-1/5'>Active Task</h5>
                <h5 className='w-1/5'>Completed</h5>
                <h5 className='w-1/5'>Failed</h5>
            </div>

            <div className='overflow-auto'>
                {userData.map((elem, idx) => {

                    return <div key={idx} className='border-2 border-emerald-500 py-2 px-4  flex justify-around rounded'>
                        <h2 className='w-1/5 text-lg font-medium'>{elem.firstName}</h2>
                        <h3 className='w-1/5 text-lg font-medium text-blue-400'>{elem.taskCount.newTask}</h3>
                        <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{elem.taskCount.active}</h5>
                        <h5 className='w-1/5 text-lg font-medium text-white'>{elem.taskCount.completed}</h5>
                        <h5 className='w-1/5 text-lg font-medium text-red-400'>{elem.taskCount.failed}</h5>
                    </div>
                })}
            </div>
        </div>
    );
}

export default AllTask;