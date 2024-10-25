import React, { useContext, useEffect, useState } from 'react';
import "./index.css"
import Login from './components/Auth/Login';
import EmployeeDashBoard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
// import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

function App() {

    const [user, setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null);
    const [userData, setUserData] = useContext(AuthContext);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            try {
                const userData = JSON.parse(loggedInUser);
                if (userData.role) {
                    setUser(userData.role);
                }
                if (userData.data) {
                    setLoggedInUserData(userData.data);
                }
            } catch (error) {
                console.error("Error parsing loggedInUser:", error);
            }
        }
    }, []);


    const handleLogin = (email, password) => {
        if (email == "admin@me.com" && password == "123") {
            setUser('admin')
            localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
            // console.log(user);
        } else if (userData) {
            const employee = userData.find((e) => e.email == email && e.password == password)
            if (employee) {
                setUser('employee');
                setLoggedInUserData(employee);
                localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
            }
            // console.log(user);
        }
        else {
            alert("Invalid Credentials");
        }
    }

    return (
        <>
            {!user ? <Login handleLogin={handleLogin} /> :
                user == 'admin' ? <AdminDashboard changeUser={setUser} /> :
                    user == 'employee' ? <EmployeeDashBoard changeUser={setUser} data={loggedInUserData} /> : null
            }
        </>
    );
}

export default App;